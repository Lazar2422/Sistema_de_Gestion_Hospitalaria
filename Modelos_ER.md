# Diagrama de Relaciones

### El siguiente  diagrama de flujo describe las relaciones entre los diferentes elementos del sistema de salud :



```mermaid
flowchart TD
    Hospitales["**hospitales**
    _id
    id_hospital
    nombre
    especialidad
    direccion
    id_director_general"]

    Medicos["**medicos**
    _id
    idmedico
    NumColegiatura
    telefono
    nombre
    especialidad
    correo
    salario"]
    Pacientes["**Pacientes**
    _id
    idpaciente
    numHistoria
    correo
    direccion
    nombre
    telefono
    seguro
    "]
    Visitas_medicas["**Visitas medicas** 
    _id
    hora
    medico
    Paciente
    procedimiento
    [nombre
    resultado]
    id_visita"]
    Medicamentos["**Medicamentos** 
    _id
    nombre
    fabricante
    id_medicamentos
    disponibilidad"]
```