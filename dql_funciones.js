// cargar las funciones al cluster
// load("ruta+funciones.js");
// === Funciones Generales Reutilizables ===

//  Busca documentos donde un campo tenga un valor exacto.
function buscarPorCampo(coleccion, campo, valor) {
  return db[coleccion].find({ [campo]: valor }).toArray();
}

//  Busca documentos donde un campo contenga un texto (búsqueda insensible a mayúsculas).
function buscarPorTexto(coleccion, campo, texto) {
  return db[coleccion].find({ [campo]: new RegExp(texto, 'i') }).toArray();
}

// Filtra documentos donde la fecha este entre dos valores dados
function filtrarPorFechaString({ coleccion, campo, desde, hasta }) {
  return db.getCollection(coleccion).find({
    [campo]: {
      $gte: desde,
      $lte: hasta
    }
  }).toArray();
}

//  Agrupa y cuenta documentos según el valor de un campo.
function contarPorCampo(coleccion, campo) {
  return db[coleccion].aggregate([
    { $group: { _id: `$${campo}`, total: { $sum: 1 } } }
  ]).toArray();
}

//  Agrupa documentos y suma los valores de un campo numérico.
function sumarCampoPorGrupo(coleccion, campoAgrupacion, campoSuma) {
  return db[coleccion].aggregate([
    { $group: { _id: `$${campoAgrupacion}`, total: { $sum: `$${campoSuma}` } } }
  ]).toArray();
}

//  Busca documentos donde un campo esté vacío o no exista.
function buscarCamposVacios(coleccion, campo) {
  return db[coleccion].find({
    $or: [
      { [campo]: { $exists: false } },
      { [campo]: null }
    ]
  }).toArray();
}

// Obtiene los últimos N documentos ordenados por fecha descendente
function ultimosNDocumentosPorFechaString(coleccion, campoFecha, n) {
  return db[coleccion].find().sort({ [campoFecha]: -1 }).limit(n).toArray();
}

//  Devuelve los N documentos con mayor valor en un campo específico.
function topNPorValor(coleccion, campo, n) {
  return db[coleccion].find().sort({ [campo]: -1 }).limit(n).toArray();
}

//  Busca documentos donde el valor de un campo esté dentro de una lista de valores.
function buscarPorLista(coleccion, campo, valores) {
  return db[coleccion].find({ [campo]: { $in: valores } }).toArray();
}

//  Une dos colecciones mediante `$lookup`.
function unirColecciones(local, foranea, campoLocal, campoForaneo, alias) {
  return db[local].aggregate([
    {
      $lookup: {
        from: foranea,
        localField: campoLocal,
        foreignField: campoForaneo,
        as: alias
      }
    }
  ]).toArray();
}

// === Funciones Especializadas ===

//  Obtiene toda la historia clínica de un paciente con sus detalles.
function obtenerHistoriaCompleta(idPaciente) {
  return db.HISTORIA_CLINICA.aggregate([
    { $match: { id_paciente: idPaciente } },
    {
      $lookup: {
        from: "DETALLE_HISTORIA",
        localField: "id_historia_clinica",
        foreignField: "id_historia_clinica",
        as: "detalles"
      }
    }
  ]).toArray();
}

//  Busca todas las visitas médicas realizadas por un médico.
function visitasPorMedico(idMedico) {
  return db.VISITAS_MEDICAS.find({ id_medico: idMedico }).toArray();
}

//  Cuenta cuántos pacientes hay por grupo de edad.
function pacientesPorGrupoEdad() {
  return contarPorCampo("PACIENTES", "GrupoEdad");
}

//  Cuenta cuántos tratamientos tiene cada paciente.
function totalTratamientosPorPaciente() {
  return contarPorCampo("TRATAMIENTOS", "id_paciente");
}

//  Suma el valor total facturado por cada paciente.
function totalFacturadoPorPaciente() {
  return sumarCampoPorGrupo("CUENTAS", "id_paciente", "Valor");
}

//  Devuelve todos los medicamentos disponibles (en stock).
function medicamentosDisponibles() {
  return db.MEDICAMENTOS.find({ Disponible: true }).toArray();
}

//  Devuelve los médicos con salario mayor a cierto valor.
function medicosConSalarioMayorA(valor) {
  return db.MEDICOS.find({ Salario: { $gt: valor } }).toArray();
}

//  Une medicamentos con su tipo correspondiente desde otra colección.
function medicamentosConTipo() {
  return unirColecciones("MEDICAMENTOS", "TIPO_MEDICAMENTO", "id_tipo_medicamento", "id_tipo_medicamento", "tipo");
}

//  Devuelve todos los pacientes que tienen historia clínica registrada.
function pacientesConHistoriaClinica() {
  return db.HISTORIA_CLINICA.distinct("id_paciente");
}

//  Cuenta cuántos hospitales hay por especialidad médica.
function hospitalesPorEspecialidad() {
  return contarPorCampo("HOSPITALES", "id_especialidad");
}