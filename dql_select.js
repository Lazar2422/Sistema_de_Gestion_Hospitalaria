
  // 1. Buscar paciente por DNI
  buscarPorCampo("PACIENTES", "DNI", "12345678A");

  // 2. Pacientes con correo Gmail
  db.PACIENTES.find({ CorreoElectronico: { $regex: /@gmail\.com$/i } });

  // 3. Pacientes sin seguro médico
  buscarCamposVacios("PACIENTES", "id_seguro");

  
  // 4. Pacientes por grupo de edad
  pacientesPorGrupoEdad();

  // 5. Pacientes de un hospital específico
  buscarPorCampo("PACIENTES", "id_hospital", "HOSP001");

  // 6. Últimos 10 pacientes registrados
  ultimosNDocumentos("PACIENTES", "FechaCreacion", 10);

  // 7. Pacientes que viven en "Calle Principal"
  buscarPorTexto("PACIENTES", "Direccion", "Calle Principal");

  // 8. Pacientes con teléfono que empieza con "555"
  db.PACIENTES.find({ Telefono: { $regex: /^555/ } });

  // 9. Cantidad de pacientes por hospital
  contarPorCampo("PACIENTES", "id_hospital");


  // 10. Pacientes con seguro específico
  buscarPorCampo("PACIENTES", "id_seguro", "SEG001");

  // 11. Pacientes con historial clínico
  pacientesConHistoriaClinica();

  // 12. Pacientes registrados en 2023
  buscarPorRangoFecha("PACIENTES", "FechaCreacion", "2023-01-01", "2023-12-31");

  // 13. Pacientes con nombre "María"
  buscarPorTexto("PACIENTES", "Nombre", "María");

  // 14. Pacientes ordenados por nombre (A-Z)
  db.PACIENTES.find().sort({ Nombre: 1 });

  // 15. Pacientes con DNI en lista específica
  buscarPorLista("PACIENTES", "DNI", ["12345678A", "87654321B"]);

  // 16. Médicos por especialidad
  buscarPorCampo("MEDICOS", "id_especialidad", "ESP001");

  // 17. Médicos con salario > $3000
  medicosConSalarioMayorA(3000);

  // 18. Médicos ordenados por salario (descendente)
  db.MEDICOS.find().sort({ Salario: -1 });

  // 19. Médicos de un hospital específico
  buscarPorCampo("MEDICOS", "id_hospital", "HOSP001");

  // 20. Médicos con nombre que empieza con "Dr."
  buscarPorTexto("MEDICOS", "Nombre", "^Dr.");

  // 21. Médicos con correo corporativo
  db.MEDICOS.find({ CorreoElectronico: { $regex: /@hospital\.com$/i } });

  // 22. Médicos y sus especialidades
  unirColecciones("MEDICOS", "ESPECIALIDADES", "id_especialidad", "id_especialidad", "especialidad");

  // 23. Top 5 médicos mejor pagados
  topNPorValor("MEDICOS", "Salario", 5);

  // 24. Médicos sin correo electrónico
  buscarCamposVacios("MEDICOS", "CorreoElectronico");

  // 25. Médicos con colegiatura específica
  buscarPorCampo("MEDICOS", "NumColegiatura", "COL12345");

  // 26. Médicos y sus hospitales
  unirColecciones("MEDICOS", "HOSPITALES", "id_hospital", "id_hospital", "hospital");

  // 27. Cantidad de médicos por especialidad
  contarPorCampo("MEDICOS", "id_especialidad");


  // 28. Hospitales por especialidad
  hospitalesPorEspecialidad();

  // 29. Hospitales con nombre "General"
  buscarPorTexto("HOSPITALES", "Nombre", "General");

  // 30. Hospitales en sede "Norte"
  buscarPorCampo("HOSPITALES", "Sede", "Norte");

  // 31. Hospitales y sus directores
  unirColecciones("HOSPITALES", "DIRECTORES", "id_director", "id_director", "director");

  // 32. Hospitales en "Avenida"
  buscarPorTexto("HOSPITALES", "Direccion", "Avenida");

  // 33. Hospitales ordenados por nombre
  db.HOSPITALES.find().sort({ Nombre: 1 });

  // 34. Hospitales y sus especialidades
  unirColecciones("HOSPITALES", "ESPECIALIDADES", "id_especialidad", "id_especialidad", "especialidad");

  // 35. Hospitales sin sede
  buscarCamposVacios("HOSPITALES", "Sede");

  // 36. Hospitales con director médico
  db.HOSPITALES.aggregate([
    {
      $lookup: {
        from: "DIRECTORES",
        localField: "id_director",
        foreignField: "id_director",
        as: "director"
      }
    },
    {
      $match: {
        "director.Profesion": "Medico"
      }
    }
  ]);

  // 37. Cantidad de hospitales por sede
  contarPorCampo("HOSPITALES", "Sede");


  // 38. Visitas de un paciente
  buscarPorCampo("VISITAS_MEDICAS", "id_paciente", "PAC001");

  // 39. Visitas en julio 2023
  buscarPorRangoFecha("VISITAS_MEDICAS", "Fecha", "2023-07-01", "2023-07-31");

  // 40. Visitas por médico
  visitasPorMedico("MED001");

  // 41. Visitas en horario matutino (08:00-12:00)
  db.VISITAS_MEDICAS.find({ Hora: { $gte: "08:00", $lte: "12:00" } });

  // 42. Visitas con detalles (join HISTORIA_CLINICA)
  db.VISITAS_MEDICAS.aggregate([
    {
      $lookup: {
        from: "DETALLE_HISTORIA",
        localField: "id_visita",
        foreignField: "id_visita",
        as: "detalles"
      }
    }
  ]);

  // 43. Visitas por hospital
  contarPorCampo("VISITAS_MEDICAS", "id_hospital");

  // 44. Últimas 5 visitas registradas
  ultimosNDocumentos("VISITAS_MEDICAS", "Fecha", 5);

  // 45. Visitas con condición "Urgencia"
  buscarPorTexto("DETALLE_HISTORIA", "Condicion", "Urgencia");

  // 46. Visitas sin detalles registrados
  buscarCamposVacios("DETALLE_HISTORIA", "Procedimiento");

  // 47. Cantidad de visitas por mes
  db.VISITAS_MEDICAS.aggregate([
    {
      $group: {
        _id: { $month: "$Fecha" },
        total: { $sum: 1 }
      }
    }
  ]);

  // 48. Historia clínica completa de paciente
  obtenerHistoriaCompleta("PAC001");

  // 49. Historias con procedimiento "Cirugía"
  buscarPorTexto("DETALLE_HISTORIA", "Procedimiento", "Cirugía");

  // 50. Historias con fecha > 2023-01-01
  buscarPorRangoFecha("DETALLE_HISTORIA", "Fecha", "2023-01-01", ISODate());

  // 51. Detalles de historia con condición "Crónica"
  db.DETALLE_HISTORIA.find({ Condicion: "Crónica" });

  // 52. Historias agrupadas por control
  contarPorCampo("DETALLE_HISTORIA", "Control");

  // 53. Historias sin procedimiento registrado
  buscarCamposVacios("DETALLE_HISTORIA", "Procedimiento");

  // 54. Top 3 controles más frecuentes
  db.DETALLE_HISTORIA.aggregate([
    { $group: { _id: "$Control", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 3 }
  ]);

  // 55. Historias con join a VISITAS
  unirColecciones("DETALLE_HISTORIA", "VISITAS_MEDICAS", "id_visita", "id_visita", "visita");

  // 56. Cantidad de historias por paciente
  contarPorCampo("HISTORIA_CLINICA", "id_paciente");


  // 57. Historias con fecha y hora de visita
  db.DETALLE_HISTORIA.aggregate([
    {
      $lookup: {
        from: "VISITAS_MEDICAS",
        localField: "id_visita",
        foreignField: "id_visita",
        as: "visita"
      }
    },
    {
      $project: {
        FechaHistoria: "$Fecha",
        FechaVisita: "$visita.Fecha",
        HoraVisita: "$visita.Hora"
      }
    }
  ]);

  // 58. Tratamientos de un paciente
  buscarPorCampo("TRATAMIENTOS", "id_paciente", "PAC001");

  // 59. Tratamientos con valor > $1000
  db.TRATAMIENTOS.find({ Valor: { $gt: 1000 } });

  // 60. Tratamientos por tipo
  contarPorCampo("TRATAMIENTOS", "Tipo");

  // 61. Tratamientos ordenados por duración
  db.TRATAMIENTOS.find().sort({ Duracion: 1 });

  // 62. Tratamientos con join a MÉDICOS
  unirColecciones("TRATAMIENTOS", "MEDICOS", "id_medico", "NumColegiatura", "medico");

  // 63. Suma de valores por tipo de tratamiento
  sumarCampoPorGrupo("TRATAMIENTOS", "Tipo", "Valor");

  // 64. Tratamientos sin duración registrada
  buscarCamposVacios("TRATAMIENTOS", "Duracion");

  // 65. Top 5 tratamientos más caros
  topNPorValor("TRATAMIENTOS", "Valor", 5);

  // 66. Tratamientos con nombre que contiene "Terapia"
  buscarPorTexto("TRATAMIENTOS", "Tipo", "Terapia");

  // 67. Tratamientos asignados en 2023
  buscarPorRangoFecha("TRATAMIENTOS", "FechaAsignacion", "2023-01-01", "2023-12-31");


  // 68. Medicamentos disponibles
  medicamentosDisponibles();

  // 69. Medicamentos por tipo
  medicamentosConTipo();

  // 70. Medicamentos de fabricante "Pfizer"
  buscarPorTexto("MEDICAMENTOS", "Fabricante", "Pfizer");

  // 71. Medicamentos con menos de 50 unidades
  db.INVENTARIO.find({ Cantidad: { $lt: 50 } });

  // 72. Medicamentos ordenados por nombre
  db.MEDICAMENTOS.find().sort({ Nombre: 1 });

  // 73. Medicamentos con lote específico
  buscarPorCampo("MEDICAMENTOS", "Lote", "LOT123");

  // 74. Cantidad de medicamentos por tipo
  contarPorCampo("MEDICAMENTOS", "id_tipo_medicamento");

  // 75. Medicamentos no disponibles
  db.MEDICAMENTOS.find({ Disponible: false });

  // 76. Medicamentos y su inventario
  unirColecciones("MEDICAMENTOS", "INVENTARIO", "id_medicamento", "id_medicamento", "inventario");

  // 77. Top 3 medicamentos más escasos
  db.INVENTARIO.find().sort({ Cantidad: 1 }).limit(3);


  // 78. Inventario completo
  db.INVENTARIO.find();

  // 79. Medicamentos con stock crítico (<20)
  db.INVENTARIO.find({ Cantidad: { $lt: 20 } });

  // 80. Inventario ordenado por cantidad
  db.INVENTARIO.find().sort({ Cantidad: -1 });

  // 81. Suma total de unidades en inventario
  db.INVENTARIO.aggregate([
    { $group: { _id: null, total: { $sum: "$Cantidad" } } }
  ]);

  // 82. Inventario con join a MEDICAMENTOS
  unirColecciones("INVENTARIO", "MEDICAMENTOS", "id_medicamento", "id_medicamento", "medicamento");

  // 83. Medicamentos sin registro en inventario
  db.MEDICAMENTOS.aggregate([
    {
      $lookup: {
        from: "INVENTARIO",
        localField: "id_medicamento",
        foreignField: "id_medicamento",
        as: "inventario"
      }
    },
    {
      $match: {
        inventario: { $size: 0 }
      }
    }
  ]);

  // 84. Cantidad de medicamentos por proveedor
  db.PROVEEDOR_PRODUCTO.aggregate([
    { $group: { _id: "$id_proveedor", total: { $sum: 1 } } }
  ]);

  // 85. Inventario con datos de proveedor
  db.INVENTARIO.aggregate([
    {
      $lookup: {
        from: "PROVEEDOR_PRODUCTO",
        localField: "id_medicamento",
        foreignField: "id_medicamento",
        as: "proveedor"
      }
    }
  ]);

  // 86. Enfermeras de un área
  buscarPorCampo("ENFERMERAS", "id_area", "AREA001");

  // 87. Personal con salario < $2000
  db.PERSONAL_ADMINISTRATIVO.find({ Salario: { $lt: 2000 } });

  // 88. Enfermeras por hospital
  contarPorCampo("ENFERMERAS", "id_hospital");

  // 89. Personal administrativo ordenado por nombre
  db.PERSONAL_ADMINISTRATIVO.find().sort({ Nombre: 1 });

  // 90. Personal de mantenimiento por hospital
  contarPorCampo("PERSONAL_MANTENIMIENTO", "id_hospital");

  // 91. Top 5 salarios de enfermeras
  db.ENFERMERAS.find().sort({ Salario: -1 }).limit(5);

  // 92. Personal con join a HOSPITALES
  unirColecciones("PERSONAL_ADMINISTRATIVO", "HOSPITALES", "id_hospital", "id_hospital", "hospital");

  // 93. Personal sin área asignada
  buscarCamposVacios("ENFERMERAS", "id_area");

  // 94. Suma de salarios por hospital
  db.PERSONAL_ADMINISTRATIVO.aggregate([
    { $group: { _id: "$id_hospital", total: { $sum: "$Salario" } } }
  ]);

  // 95. Personal con nombre que contiene "López"
  buscarPorTexto("PERSONAL_ADMINISTRATIVO", "Nombre", "López");


  // 96. Seguros y sus coberturas
  unirColecciones("SEGUROS", "COBERTURAS", "id_cobertura", "id_cobertura", "cobertura");

  // 97. Directoras mujeres (nombre termina en "a")
  db.DIRECTORES.find({ Nombre: { $regex: /a$/i } });

  // 98. Áreas con más enfermeras
  db.ENFERMERAS.aggregate([
    { $group: { _id: "$id_area", total: { $sum: 1 } } },
    { $sort: { total: -1 } }
  ]);

  // 99. Proveedores con más medicamentos
  db.PROVEEDOR_PRODUCTO.aggregate([
    { $group: { _id: "$id_proveedor", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 3 }
  ]);

  // 100. Todas las colecciones disponibles
  db.getCollectionNames();

