# Diagrama de Relaciones

### Los siguiente  diagramas de flujo describen la organizacion del sistema de salud:

<br>
<br>



# 1 Modelo conceptual

```mermaid
erDiagram

  HOSPITALES ||--o{ MEDICOS : tiene
  HOSPITALES ||--o{ PACIENTES : tiene
  HOSPITALES ||--o{ ENFERMERAS : tiene
  HOSPITALES ||--o{ PERSONAL_ADMINISTRATIVO : tiene
  HOSPITALES ||--o{ PERSONAL_MANTENIMIENTO : tiene
  HOSPITALES ||--o{ AREAS : gestiona

  PACIENTES ||--o{ HISTORIAL_CLINICO : tiene
  PACIENTES ||--o{ VISITAS_MEDICAS : tiene
  PACIENTES ||--o{ TRATAMIENTOS : recibe

  TRATAMIENTOS }o--|| MEDICAMENTOS : usa

  MEDICAMENTOS ||--o{ INVENTARIO : se_almacena_en
  PROVEEDORES ||--o{ MEDICAMENTOS : suministra

  MEDICOS ||--o{ VISITAS_MEDICAS : atiende
  MEDICOS ||--o{ HISTORIAL_CLINICO : crea
  MEDICOS ||--o{ TRATAMIENTOS : administra

  ENFERMERAS }o--|| AREAS : asignada_a
  PERSONAL_MANTENIMIENTO }o--|| AREAS : trabaja_en
  PERSONAL_ADMINISTRATIVO ||--o{ GASTOS : registra

  VISITAS_MEDICAS }o--|| MEDICOS : medico_asignado
  VISITAS_MEDICAS }o--|| PACIENTES : paciente_citado

  HISTORIAL_CLINICO ||--o{ FECHAS : contiene



```



# 2 Modelo Logico Sin normalizar

```mermaid
erDiagram


PACIENTES {
  string DNI
  string Nombre
  string Telefono
  string Direccion
  string CorreoElectronico
  string Seguro
  string Hospital
  string NumeroHistoria
  string GrupoEdad
}

HISTORIA_CLINICA {
  string id_historia_clinica
  string Controles
  date Fechas
  string Condicion
  string Procedimientos_realizados
}

MEDICOS {
  string NumColegiatura
  string Nombre
  string Telefono
  string Especialidad
  string CorreoElectronico
  float Salario
}

MEDICOS_ESPECIALISTAS {
  string id_especialista
  string Nombre
  string Campo
  float Salario
}

VISITAS_MEDICAS {
  string id_visita
  date Fecha
  string Hora
  string Direccion
  string Medico_asignado
  string Paciente_atendido
}

HOSPITALES {
  string Nombre
  string Direccion
  string DirectorGeneral
  string Especialidad
  string Sede
}

MEDICAMENTOS {
  string id_medicamentos
  string Nombre
  string Tipo
  string Fabricante
  string Lote
  boolean DisponibilidadInventario
}

INVENTARIO {
  string id_inventario
  string Productos
  int Cantidad
}

TRATAMIENTOS {
  string id_tratamientos
  string Tipo
  string Duracion
  float Valor
}

PROVEEDORES {
  string id_proveedores
  string Nombre
  string Productos
  string Lote
}

AREAS {
  string Nombre
  string Tipo
}

ENFERMERAS {
  string id_enfermeras
  string Area
  float Salario
}

PERSONAL_MANTENIMIENTO {
  string id_personalMantenimiento
  string Gestion
  float Salario
}

PERSONAL_ADMINISTRATIVO {
  string id_personalAdministrativo
  string Nombre
  float Salario
}

CUENTAS {
  string id_cuenta
  string Nombre_persona
  date Fecha
  float Valor
  string Facturacion
}


PACIENTES ||--o{ HISTORIA_CLINICA : tiene
PACIENTES ||--o{ VISITAS_MEDICAS : realiza
MEDICOS ||--o{ VISITAS_MEDICAS : atiende
VISITAS_MEDICAS ||--|| HOSPITALES : se_realiza_en

MEDICOS_ESPECIALISTAS ||--|| HOSPITALES : trabaja_en
MEDICOS ||--|| HOSPITALES : trabaja_en

HISTORIA_CLINICA ||--|| PACIENTES : pertenece_a
TRATAMIENTOS ||--o{ PACIENTES : aplicado_a
TRATAMIENTOS ||--o{ MEDICOS : indicado_por

MEDICAMENTOS ||--o{ INVENTARIO : forma_parte
PROVEEDORES ||--o{ MEDICAMENTOS : suministra
PROVEEDORES ||--o{ INVENTARIO : abastece

PERSONAL_ADMINISTRATIVO ||--|| HOSPITALES : trabaja_en
PERSONAL_MANTENIMIENTO ||--|| HOSPITALES : trabaja_en
ENFERMERAS ||--|| HOSPITALES : trabaja_en

ENFERMERAS ||--|| AREAS : asignada_a
MEDICOS ||--|| AREAS : asignado_a

PACIENTES ||--o{ CUENTAS : genera

```

<br>
<br>
<br>
<br>

## modelo primera forma normal
Eliminar repeticiones de datos (campos multivaluados o anidados) → que todo sea atómico.

🛠️ Cambios hechos:
Campos como seguros: [ { nombre, cobertura } ] se transforman en una tabla/colección aparte (SEGUROS).

En lugar de tener productos: [...] dentro de inventario, se crea una relación explícita entre INVENTARIO y MEDICAMENTOS.

Las visitas médicas dejan de estar como array dentro de HISTORIA_CLINICA y se relacionan mediante una tabla puente (DETALLE_HISTORIA o similar).
``` mermaid
erDiagram

PACIENTES {
  string DNI
  string Nombre
  string Telefono
  string Direccion
  string CorreoElectronico
  string id_seguro
  string id_hospital
  string NumeroHistoria
  string GrupoEdad
}

HISTORIA_CLINICA {
  string id_historia_clinica
  string id_paciente
}

DETALLE_HISTORIA {
  string id_detalle
  string id_historia_clinica
  string id_visita
  string Control
  date Fecha
  string Condicion
  string Procedimiento
}

MEDICOS {
  string NumColegiatura
  string Nombre
  string Telefono
  string Especialidad
  string CorreoElectronico
  float Salario
}

VISITAS_MEDICAS {
  string id_visita
  date Fecha
  string Hora
  string Direccion
  string id_medico
  string id_paciente
  string id_hospital
}

HOSPITALES {
  string id_hospital
  string Nombre
  string Direccion
  string DirectorGeneral
  string Especialidad
  string Sede
}

SEGUROS {
  string id_seguro
  string Nombre
  string Cobertura
}

TRATAMIENTOS {
  string id_tratamiento
  string Tipo
  string Duracion
  float Valor
  string id_medico
  string id_paciente
}

MEDICAMENTOS {
  string id_medicamento
  string Nombre
  string Tipo
  string Fabricante
  string Lote
  boolean Disponible
}

INVENTARIO {
  string id_inventario
  string id_medicamento
  int Cantidad
}

PROVEEDORES {
  string id_proveedor
  string Nombre
}

PROVEEDOR_PRODUCTO {
  string id_proveedor
  string id_medicamento
  string Lote
}

AREAS {
  string id_area
  string Nombre
  string Tipo
}

ENFERMERAS {
  string id_enfermera
  string id_area
  float Salario
}

PERSONAL_MANTENIMIENTO {
  string id_personal
  string id_hospital
  string Gestion
  float Salario
}

PERSONAL_ADMINISTRATIVO {
  string id_personal
  string id_hospital
  string Nombre
  float Salario
}

CUENTAS {
  string id_cuenta
  string id_paciente
  date Fecha
  float Valor
  string Facturacion
  string id_administrativo
}

%% RELACIONES

PACIENTES ||--|| HISTORIA_CLINICA : tiene
HOSPITALES ||--o{ MEDICAMENTOS: tiene
PERSONAL_ADMINISTRATIVO ||--o{ CUENTAS : Administra
HISTORIA_CLINICA ||--o{ DETALLE_HISTORIA : contiene
DETALLE_HISTORIA ||--|| VISITAS_MEDICAS : se_registra_en
PACIENTES ||--o{ VISITAS_MEDICAS : realiza
VISITAS_MEDICAS ||--|| HOSPITALES : se_realiza_en
MEDICOS ||--o{ VISITAS_MEDICAS : atiende
TRATAMIENTOS ||--|| PACIENTES : aplicado_a
TRATAMIENTOS ||--|| MEDICOS : indicado_por
MEDICAMENTOS ||--o{ INVENTARIO : stock_de
PROVEEDORES ||--o{ PROVEEDOR_PRODUCTO : suministra
PROVEEDOR_PRODUCTO ||--|| MEDICAMENTOS : contiene
ENFERMERAS ||--|| AREAS : asignada_a
MEDICOS ||--|| AREAS : asignado_a
PERSONAL_ADMINISTRATIVO ||--|| HOSPITALES : trabaja_en
PERSONAL_MANTENIMIENTO ||--|| HOSPITALES : trabaja_en
ENFERMERAS ||--|| HOSPITALES : trabaja_en
PACIENTES ||--o{ CUENTAS : genera
PACIENTES ||--|| HOSPITALES : remitido_a
PACIENTES ||--|| SEGUROS : cubierto_por

```

<br>
<br>
<br>

## modelo segunda forma normal
Eliminar dependencias parciales: que ningún campo dependa solo de parte de una clave compuesta.


🛠️ Cambios hechos:
En tablas como DETALLE_HISTORIA, si la clave primaria era compuesta (id_historia_clinica + id_visita), y un campo como procedimiento dependía solo de id_visita, se separa esa dependencia.

Se creó la tabla VISITAS_MEDICAS con todos los detalles propios de la visita (fecha, hora, médico, hospital, etc).

Se normalizó el inventario y proveedores: PROVEEDOR_PRODUCTO nace para evitar que la cantidad o lote dependa parcialmente del medicamento o proveedor.
``` mermaid
erDiagram

PACIENTES {
  string DNI
  string Nombre
  string Telefono
  string Direccion
  string CorreoElectronico
  string id_seguro
  string id_hospital
  string NumeroHistoria
  string GrupoEdad
}

HISTORIA_CLINICA {
  string id_historia_clinica
  string id_paciente
}

DETALLE_HISTORIA {
  string id_detalle
  string id_historia_clinica
  string id_visita
  string Control
  date Fecha
  string Condicion
  string Procedimiento
}

MEDICOS {
  string NumColegiatura
  string Nombre
  string Telefono
  string Especialidad
  string CorreoElectronico
  float Salario
}

VISITAS_MEDICAS {
  string id_visita
  date Fecha
  string Hora
  string Direccion
  string id_medico
  string id_paciente
  string id_hospital
}

HOSPITALES {
  string id_hospital
  string Nombre
  string Direccion
  string DirectorGeneral
  string Especialidad
  string Sede
}

SEGUROS {
  string id_seguro
  string Nombre
  string Cobertura
}

TRATAMIENTOS {
  string id_tratamiento
  string Tipo
  string Duracion
  float Valor
  string id_medico
  string id_paciente
}

MEDICAMENTOS {
  string id_medicamento
  string Nombre
  string Tipo
  string Fabricante
  string Lote
  boolean Disponible
}

INVENTARIO {
  string id_inventario
  string id_medicamento
  int Cantidad
}

PROVEEDORES {
  string id_proveedor
  string Nombre
}

PROVEEDOR_PRODUCTO {
  string id_proveedor
  string id_medicamento
  string Lote
}

AREAS {
  string id_area
  string Nombre
  string Tipo
}

ENFERMERAS {
  string id_enfermera
  string id_area
  float Salario
}

PERSONAL_MANTENIMIENTO {
  string id_personal
  string id_hospital
  string Gestion
  float Salario
}

PERSONAL_ADMINISTRATIVO {
  string id_personal
  string id_hospital
  string Nombre
  float Salario
}

CUENTAS {
  string id_cuenta
  string id_paciente
  date Fecha
  float Valor
  string Facturacion
  string id_administrativo
}


PACIENTES ||--|| HISTORIA_CLINICA : tiene
HOSPITALES ||--o{ MEDICAMENTOS: tiene
PERSONAL_ADMINISTRATIVO ||--o{ CUENTAS : Administra
HISTORIA_CLINICA ||--o{ DETALLE_HISTORIA : contiene
DETALLE_HISTORIA ||--|| VISITAS_MEDICAS : se_registra_en
PACIENTES ||--o{ VISITAS_MEDICAS : realiza
VISITAS_MEDICAS ||--|| HOSPITALES : se_realiza_en
MEDICOS ||--o{ VISITAS_MEDICAS : atiende
TRATAMIENTOS ||--|| PACIENTES : aplicado_a
TRATAMIENTOS ||--|| MEDICOS : indicado_por
MEDICAMENTOS ||--o{ INVENTARIO : stock_de
PROVEEDORES ||--o{ PROVEEDOR_PRODUCTO : suministra
PROVEEDOR_PRODUCTO ||--|| MEDICAMENTOS : contiene
ENFERMERAS ||--|| AREAS : asignada_a
MEDICOS ||--|| AREAS : asignado_a
PERSONAL_ADMINISTRATIVO ||--|| HOSPITALES : trabaja_en
PERSONAL_MANTENIMIENTO ||--|| HOSPITALES : trabaja_en
ENFERMERAS ||--|| HOSPITALES : trabaja_en
PACIENTES ||--o{ CUENTAS : genera
PACIENTES ||--|| HOSPITALES : remitido_a
PACIENTES ||--|| SEGUROS : cubierto_por

```
<br>
<br>
<br>


#  Modelo tercera forma normal
Eliminar dependencias transitivas: que ningún campo no clave dependa de otro campo no clave.

🛠️ Cambios hechos:
En HOSPITALES, el campo DirectorGeneral (nombre y profesión) se trasladó a la tabla DIRECTORES.

En MEDICOS, la especialidad ahora no está como texto, sino como id_especialidad relacionado con la tabla ESPECIALIDADES.

En SEGUROS, cobertura se convirtió en una tabla aparte: COBERTURAS.

En MEDICAMENTOS, el tipo se separa como tabla TIPO_MEDICAMENTO.
```mermaid
erDiagram

PACIENTES {
  string DNI
  string Nombre
  string Telefono
  string Direccion
  string CorreoElectronico
  string id_seguro
  string id_hospital
  string NumeroHistoria
  string GrupoEdad
}

HISTORIA_CLINICA {
  string id_historia_clinica
  string id_paciente
}

DETALLE_HISTORIA {
  string id_detalle
  string id_historia_clinica
  string id_visita
  string Control
  date Fecha
  string Condicion
  string Procedimiento
}

MEDICOS {
  string NumColegiatura
  string Nombre
  string Telefono
  string id_especialidad
  string CorreoElectronico
  float Salario
}

ESPECIALIDADES {
  string id_especialidad
  string Nombre
}

VISITAS_MEDICAS {
  string id_visita
  date Fecha
  string Hora
  string Direccion
  string id_medico
  string id_paciente
  string id_hospital
}

HOSPITALES {
  string id_hospital
  string Nombre
  string Direccion
  string id_director
  string id_especialidad
  string Sede
}

DIRECTORES {
  string id_director
  string Nombre
  string Profesion
}

SEGUROS {
  string id_seguro
  string Nombre
  string id_cobertura
}

COBERTURAS {
  string id_cobertura
  string Tipo
  string Descripcion
}

TRATAMIENTOS {
  string id_tratamiento
  string Tipo
  string Duracion
  float Valor
  string id_medico
  string id_paciente
}

MEDICAMENTOS {
  string id_medicamento
  string Nombre
  string id_tipo_medicamento
  string Fabricante
  string Lote
  boolean Disponible
}

TIPO_MEDICAMENTO {
  string id_tipo_medicamento
  string Nombre
}

INVENTARIO {
  string id_inventario
  string id_medicamento
  int Cantidad
}

PROVEEDORES {
  string id_proveedor
  string Nombre
}

PROVEEDOR_PRODUCTO {
  string id_proveedor
  string id_medicamento
  string Lote
}

AREAS {
  string id_area
  string Nombre
  string Tipo
}

ENFERMERAS {
  string id_enfermera
  string id_area
  float Salario
}

PERSONAL_MANTENIMIENTO {
  string id_personal
  string id_hospital
  string Gestion
  float Salario
}

PERSONAL_ADMINISTRATIVO {
  string id_personal
  string id_hospital
  string Nombre
  float Salario
}

CUENTAS {
  string id_cuenta
  string id_paciente
  date Fecha
  float Valor
  string Facturacion
}

%% RELACIONES

HOSPITALES ||--o{ MEDICAMENTOS: tiene
PERSONAL_ADMINISTRATIVO ||--o{ CUENTAS : Administra
PACIENTES ||--|| HISTORIA_CLINICA : tiene
HISTORIA_CLINICA ||--o{ DETALLE_HISTORIA : contiene
DETALLE_HISTORIA ||--|| VISITAS_MEDICAS : se_registra_en
PACIENTES ||--o{ VISITAS_MEDICAS : realiza
VISITAS_MEDICAS ||--|| HOSPITALES : se_realiza_en
MEDICOS ||--o{ VISITAS_MEDICAS : atiende
MEDICOS ||--|| ESPECIALIDADES : tiene
TRATAMIENTOS ||--|| PACIENTES : aplicado_a
TRATAMIENTOS ||--|| MEDICOS : indicado_por
MEDICAMENTOS ||--|| TIPO_MEDICAMENTO : clasificado_como
MEDICAMENTOS ||--o{ INVENTARIO : stock_de
PROVEEDORES ||--o{ PROVEEDOR_PRODUCTO : suministra
PROVEEDOR_PRODUCTO ||--|| MEDICAMENTOS : contiene
ENFERMERAS ||--|| AREAS : asignada_a
MEDICOS ||--|| AREAS : asignado_a
PERSONAL_ADMINISTRATIVO ||--|| HOSPITALES : trabaja_en
PERSONAL_MANTENIMIENTO ||--|| HOSPITALES : trabaja_en
ENFERMERAS ||--|| HOSPITALES : trabaja_en
PACIENTES ||--o{ CUENTAS : genera
PACIENTES ||--|| HOSPITALES : remitido_a
PACIENTES ||--|| SEGUROS : cubierto_por
SEGUROS ||--|| COBERTURAS : tiene
HOSPITALES ||--|| DIRECTORES : dirigido_por
HOSPITALES ||--|| ESPECIALIDADES : especializado_en

```
