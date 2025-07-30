

db.createUser({
    user: "director_general",
    pwd: "directorsecret",
    roles: [
      { role: "readWriteAnyDatabase", db: "admin" },
      { role: "dbAdminAnyDatabase", db: "admin" },
      { role: "userAdminAnyDatabase", db: "admin" }
    ]
  })
  //👨‍⚕️ 2. Médico (Acceso a PACIENTES, HISTORIA_CLINICA, DETALLE_HISTORIA)

  db.createUser({
    user: "medico",
    pwd: "medicopass",
    roles: [
      {
        role: "readWrite",
        db: "hospital",
        collection: "PACIENTES"
      },
      {
        role: "readWrite",
        db: "hospital",
        collection: "HISTORIA_CLINICA"
      },
      {
        role: "readWrite",
        db: "hospital",
        collection: "DETALLE_HISTORIA"
      }
    ]
  })
  //👩‍⚕️ 3. Enfermero/a (Acceso limitado a PACIENTES asignados)
  //MongoDB no tiene control de acceso a nivel de documentos directamente, pero puedes crear un rol con solo lectura sobre PACIENTES, y gestionar la asignación en tu lógica de aplicación:

  db.createUser({
    user: "enfermeria",
    pwd: "enfermeriapass",
    roles: [
      {
        role: "read",
        db: "hospital",
        collection: "PACIENTES"
      },
      {
        role: "read",
        db: "hospital",
        collection: "HISTORIA_CLINICA"
      }
    ]
  })
 
  //👨‍💼 4. Personal Administrativo (Gestión de recursos, logística y cuentas)
  //Colecciones: PERSONAL_ADMINISTRATIVO, CUENTAS, HOSPITALES, INVENTARIO, PROVEEDORES, PROVEEDOR_PRODUCTO, AREAS

  db.createUser({
    user: "administrativo",
    pwd: "admin123",
    roles: [
      { role: "readWrite", db: "hospital", collection: "PERSONAL_ADMINISTRATIVO" },
      { role: "readWrite", db: "hospital", collection: "CUENTAS" },
      { role: "readWrite", db: "hospital", collection: "HOSPITALES" },
      { role: "readWrite", db: "hospital", collection: "INVENTARIO" },
      { role: "readWrite", db: "hospital", collection: "PROVEEDORES" },
      { role: "readWrite", db: "hospital", collection: "PROVEEDOR_PRODUCTO" },
      { role: "readWrite", db: "hospital", collection: "AREAS" }
    ]
  })
  //🛠️ 5. Personal de Mantenimiento (Acceso a infraestructura)
  //Colecciones: PERSONAL_MANTENIMIENTO, HOSPITALES, AREAS
  

  db.createUser({
    user: "mantenimiento",
    pwd: "infra123",
    roles: [
      { role: "readWrite", db: "hospital", collection: "PERSONAL_MANTENIMIENTO" },
      { role: "read", db: "hospital", collection: "HOSPITALES" },
      { role: "readWrite", db: "hospital", collection: "AREAS" }
    ]
  })