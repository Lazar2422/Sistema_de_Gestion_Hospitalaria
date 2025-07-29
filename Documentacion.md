<h1 align="center">Sistema Hospitalario</h1>



<h3 align="center">

Juan  Fernando Umaña 

<br>
<br>


S1

<br>
<br>
<br>



PEDRO FELIPE GÓMEZ BONILLA

<br>
<br>
<br>




CAMPUSLANDS
<br>
<br>
<br>

Cajasan
<br>
<br>
<br>

RUTA Nodejs
<br>
<br>
<br>

Bucaramanga
<br>
<br>
<br>

2025

</h3>


---

<br>
<br>
<br>
<br>


## 📑 Tabla de Contenidos
| Índice | Sección                                |
|--------|----------------------------------------|
| 1      | **Introducción**                       |
| 2      | **Caso de Estudio**                    |
| 3      | **Requerimientos entregados en el caso de estudio** |
| 4      | **Objetivos**                          |
| 5      | **Elementos del documento**            |
| 6      | **Instalación General**                |
| 7      | **Planificación**                      |
| 8      | **Construcción del Modelo Conceptual** |
| 9      | **Descripción**                        |
| 10     | **Cardinalidades**                     |
| 11     | **Gráfica**                            |
| 12     | **Descripción Técnica**                |
| 13     | **Construcción del Modelo Lógico**     |
| 14     | **Descripción**                        |
| 15     | **Cardinalidades**                     |
| 16     | **Gráfica**                            |
| 17     | **Descripción Técnica**                |
| 18     | **Normalización del Modelo Lógico**    |
| 19     | **Primera Forma Normal (1FN)**         |
| 20     | **Descripción**                        |
| 21     | **Gráfica**                            |
| 22     | **Descripción Técnica**                |
| 23     | **Segunda Forma Normal (2FN)**         |
| 24     | **Descripción**                        |
| 25     | **Gráfica**                            |
| 26     | **Descripción Técnica**                |
| 27     | **Tercera Forma Normal (3FN)**         |
| 28     | **Descripción**                        |
| 29     | **Gráfica**                            |
| 30     | **Descripción Técnica**                |
| 31     | **Construcción del Modelo Físico**     |
| 32     | **Descripción**                        |
| 33     | **Cardinalidades**                     |
| 34     | **Código Documentado**                 |
| 35     | **Descripción Técnica**                |
| 36     | **Diagrama E-R**                       |
| 37     | **Descripción Técnica**                |
| 38     | **Referencias**                        |

---

<br>
<br>
<br>


# Introducción

El presente documento tiene como objetivo exponer de forma estructurada y detallada la solución a una problemática específica relacionada con el diseño e implementación de una base de datos organizada y eficiente, usando Mongodb como herramienta. Esta solución se desarrolla siguiendo una metodología que abarca todas las fases esenciales del proceso de organización y estructuración de datos, desde el análisis inicial hasta la construcción final del modelo físico.

La estructura del documento se organiza en distintas secciones que permiten abordar cada aspecto siguiendo el modelo entidad relación (e-r), el desarrollo del caso de estudio, objetivos, de manera clara y progresiva. En primer lugar, se presenta una introducción general al proyecto, estableciendo el contexto y el propósito de este. Posteriormente, se describe la situación que da origen al estudio, permitiendo comprender los requerimientos fundamentales del sistema a desarrollar.
A continuación, se lleva a cabo el diseño del modelo conceptual, que representa de forma abstracta las entidades involucradas, sus atributos y las relaciones entre ellas de manera inicial. Esta etapa es acompañada por representaciones gráficas y explicaciones técnicas que fundamentan las decisiones de modelado (modelo conceptual, modelo lógico y modelo físico).
Seguidamente, se construye el modelo lógico, el cual traduce el diseño conceptual en una estructura más concreta y alineada con los principios de los sistemas  bases de datos, en ese caso (NOSQL) . Este modelo se somete a un proceso de normalización, pasando por las tres formas normales (1FN, 2FN y 3FN), con el objetivo de optimizar la organización de los datos, eliminar redundancias y garantizar la integridad de los datos.
Finalmente, se desarrolla el modelo físico, que materializa el diseño lógico en instrucciones que se van a implementar en la base de datos de Mongodb. Este modelo incluye la  estructura de modelado de datos para bases de datos no relacionales . Todo esto es complementado con gráficas, fragmentos de código y descripciones técnicas que ilustran la funcionalidad del sistema.
En conjunto, este documento busca ofrecer una visión integral, lógica y comprensible del proceso de diseño y construcción de una base de datos, sirviendo como guía para la implementación de soluciones similares en este caso, para el caso de estudio del “Sistema Hospitalario”.


<br>
<br>
<br>
<br>







# Caso de Estudio

En el caso de estudio se tiene la implementación de Mongodb (Bases de datos NOSQL), para darle una correcta gestión a las operaciones que tengan que ver con la administración de un sistema hospitalario, y todos sus elementos como: hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo.

##### Estructura del Sistema

- Un hospital puede tener múltiples áreas especializadas (Cardiología, Neurología, etc.).
- Cada hospital tiene un director general, pero un director puede supervisar varios hospitales.
- Cada hospital tiene un conjunto de médicos, enfermeras y personal administrativo.
- Los hospitales deben contar con un historial detallado de pacientes y tratamientos realizados.

##### Pacientes

- Los pacientes se identifican por su número de historia clínica, nombre, dirección, teléfono, correo electrónico y seguros médicos.
- Los historiales médicos incluyen diagnósticos, tratamientos realizados y resultados obtenidos.

##### Médicos y Personal

- Los médicos se identifican por su número de colegiatura, nombre, especialidad, teléfono, correo electrónico y salario.
- Se definen los siguientes tipos de personal:
- **001: Director General:** Gestión general del hospital.
- **002: Médico Especialista:** Atiende pacientes y realiza diagnósticos.
- **003: Enfermero/a:** Asiste a médicos y cuida a los pacientes.
- **004: Personal Administrativo:** Gestión de recursos y logística.
- **005: Personal de Mantenimiento:** Mantenimiento y limpieza de las instalaciones.

##### Tratamientos y Medicamentos

- Los tratamientos se identifican por su nombre, descripción, área médica relacionada y costo.
- Los medicamentos se almacenan por nombre, fabricante, tipo, y disponibilidad en inventario.

##### Visitas Médicas

- Las visitas médicas se registran con fecha, hora, médico asignado, paciente atendido y diagnóstico.
- Los pacientes pueden tener múltiples visitas médicas a lo largo del tiempo.

###  

 2. Consultas MongoDB

Implementar **100 consultas MongoDB** enfocadas en:

- Estado actual de hospitales: cantidad de médicos, enfermeras y áreas especializadas por hospital.
- Inventarios de medicamentos por tipo y disponibilidad.
- Historiales clínicos de pacientes por diagnóstico y tratamientos realizados.
- Actividades del personal según área médica y rol.
- Gestión de visitas médicas y estadísticas de enfermedades comunes.
- Al menos **20 consultas deben incluir agregaciones avanzadas** (`$lookup`, `$unwind`, `$group`, `$project`, `$regex`).

###  

 3. Funciones JavaScript (UDF - Simuladas)

Crear **20 funciones simuladas** que se implementen como consultas reutilizables en MongoDB Compass o mediante funciones almacenadas en la base de datos (`db.system.js.save()`).

Ejemplos:

- Cálculo de inventarios de medicamentos por hospital.
- Generación de reportes de visitas médicas por diagnóstico.
- Obtención de estadísticas de tratamientos realizados por hospital.

###  

 4. Control de Acceso y Roles de Usuario

Definir **5 tipos de usuarios con permisos específicos utilizando mecanismos de autenticación y roles de MongoDB:**

- **Director General:** Acceso total.
- **Médico Especialista:** Acceso a pacientes y diagnósticos.
- **Enfermero/a:** Acceso limitado a pacientes asignados.
- **Personal Administrativo:** Gestión de recursos y logística.
- **Personal de Mantenimiento:** Acceso a tareas de infraestructura.







<br>
<br>
<br>
<br>




# Objetivos 


Según los problemas y requerimientos planteados en el caso de estudio, se plantean los siguientes objetivos:


#### 1. Crear un sistema que cumpla con la optimización necesaria que se solicita para el sistema hospitalario 


#### 2. Tener un sistema con una estructura y organización de datos eficiente .

#### 3. Tener una documentación y archivo.

#### 4. Se requiere un control del inventario, de proveedores, de los productos, principalmente de los repuestos de bicicletas y accesorios.


<br>
<br>
<br>




# Elementos del documento
#### ❖Introducción : Aquí se encuentra el primer vistazo de lo que se  se busca desarrollar a lo largo del documento.

#### ❖ Caso de estudio : Aquí se encuentra la información general que se tiene del caso de estudio que se entrega, los problemas principales que se encuentran en este, en base a esto, surgieron los requerimientos funcionales para darle una solución y se plantearon objetivos para poder darle una solucion. 


#### ❖ Planificación : Aquí se encuentra el desarrollo del diagrama entidad relación, y todos sus modelos, conceptual, lógico y físico departamentos, parques e investigaciones realizadas en los parques naturales.

#### ❖ Construcción del modelo conceptual : Aquí se encuentra toda la información relacionada al modelo conceptual y cómo se desarrolló .


#### ❖ Construcción del modelo lógico : Aquí se encuentra toda la información relacionada al modelo lógico y cómo se desarrolló.


#### ❖ Construcción del modelo Físico: Aquí se encuentra toda la información relacionada al modelo físico y cómo se desarrolló.



#### ❖ Diagrama E-R: Aquí se encuentra toda la información relacionada al diagrama del modelo físico, el cuál tiene la estructura final , que se piensa implementar.


<br>
<br>
<br>

# Instalación General


Los archivos relacionados con la BBDD del Sistema Hospitalario,   se encuentran en formato  json y md,  y se dividen en 6 partes:
#### ❖ ddl.json : Este archivo contiene la Creación de base de datos con las distintas colecciones, datos y relaciones.

#### ❖ dml.json : Este archivo contiene las inserciones de datos.

#### ❖ Documentacion.md: En este archivo se encuentran la documentación del proyecto (el presente documento) la cual con.

#### ❖ dql_funciones.json: En este archivo se encuentran las funciones que se solicitan en los requerimientos del proyecto.

#### ❖ Modelos_ER.md : Contiene los graficos correspondientes al modelo conceptual y lógico que se plantearon para la estructura de datos.

#### ❖ README.md :En este archivo se encuentra la documentación e información general sobre cómo está estructurado el proyecto , como se instala , etc.


<br>
<br>

# Planificación

## Construcción del Modelo Conceptual

#### Descripción


Un modelo conceptual en bases de datos es una representación, que describe las entidades, atributos y relaciones entre ellas en un negocio determinado, sin entrar en detalles de implementación tecnológica más específica. Su objetivo es comunicar la estructura de datos de manera clara y comprensible para los stakeholders, incluso aquellos sin conocimientos técnicos, y servir como base para el diseño lógico y físico de la base de datos.  

Además, el modelo conceptual actúa como un puente entre los requerimientos del negocio y el diseño lógico y físico de la base de datos, sirviendo como punto de partida para construir modelos más detallados que ya consideren el tipo de base de datos a utilizar, la normalización y otros aspectos tecnológicos.



Finalmente , hay que tener en cuenta que para la creación de un modelo conceptual, se necesita la siguiente estructura:

## Imagen


## Cardinalidades 

En el modelo conceptual se pueden encontrar el siguiente tipo de cardinalidades que se pueden relacionar con flechas, o de la siguiente manera:


## Imagen





## Gráfica



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
### Descripción Técnica

El modelo conceptual, se construyó en base a la estructura inicial y general de lo que buscaba el sistema hospitalario, por lo tanto, se crearon distintas entidades como, hospitales, Inventario, para que pueda gestionar los medicamentos, tratamientos, Proveedores de los productos del Hospital, las visitas médicas del mismo, historias clínicas, Pacientes, Personal administrativo, Médicos especialistas, Médicos y Enfermeras  . Finalmente, las distintas entidades contienen atributos como: id, fechas, direcciones, nombres, correos, teléfonos, salario, entre otros, dándonos una estructura 
inicial y general del proyecto.


# Entidades y Atributos del Sistema Hospitalario




## 🏥 Hospitales
- ID_sede  
- Nombre  
- Dirección  
- Correo Electrónico  
- Director General  

---

## 👤 Pacientes
- ID_paciente  
- Nombre  
- DNI  
- Teléfono  
- Seguro  

---

## 🥼 Médicos
- ID_medico  
- Nombre  
- Especialidad  
- Número Colegiatura  
- Correo Electrónico  
- Teléfono  
- Salario  

---

## 🧑‍⚕️ Enfermeras
- ID_enfermera  
- Nombre  
- Área  
- Salario  

---

## 💼 Personal Administrativo
- ID_personalAdministrativo  
- Nombre  
- Campo  
- Salario  

---

## 🧹 Personal de Mantenimiento
- ID_personalMantenimiento  
- Nombre  
- Gestión  
- Salario  

---

## 💊 Tratamientos
- ID_tratamiento  
- Tipo  
- Duración  
- Valor  

---

## 💉 Medicamentos
- ID_medicamento  
- Nombre  
- Tipo  
- Referencia  
- Lote  
- Disponibilidad_inventario  

---

## 🚚 Proveedores
- ID_proveedor  
- Nombre  
- Lote  

---

## 🗃️ Inventario
- ID_inventario  
- Cantidad  

---

## 📅 Visitas Médicas
- ID_visita  
- Fecha  
- Hora  
- Paciente_atendido  
- Médico_asignado  

---

## 📁 Historial Clínico
- ID_historia_clinica  
- Condición  
- Procedimientos_realizados  
- Fecha  
- Controles  

---

## 🏬 Áreas
- Nombre  
- Tipo  

---

## 💰 Gastos
- ID_gasto  
- Nombre_persona  
- ID_cuenta  
- Fecha  
- Valor  
- Razón 

## Construcción del Modelo Logico

### Descripción
Un modelo lógico de base de datos es una representación más detallada y estructurada del modelo conceptual, en la que se definen de manera precisa las entidades, sus atributos, y las relaciones entre ellas, así como aspectos técnicos como los identificadores únicos , para este modelo con MongoDB no se usaron llaves primareas o foraneas, se hizo referencia a esto mediante ids repetidos de referencia a llaves entre colecciones. A diferencia del modelo conceptual, el modelo lógico ya toma en cuenta cómo los datos serán organizados y estructurados dentro de un sistema de gestión de bases de datos.


Finalmente, hay que tener en cuenta que para realizar el modelo lógico, se necesita la siguiente estructura, En la cuál desaparecen los verbos, las entidades se vuelven tablas y los atributos, columnas:


## Imagen 

### Cardinalidades
### Img cardinalidades


## Gráfica

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

# Descripción Técnica

El modelo lógico, se construyó, tomando como base, el modelo conceptual, aquí se crearon nuevas columnas, se mejoró notablemente la estructura, se realizaron algunos cambios y se añadieron algunos atributos, se crearon relaciones teniendo en cuenta cómo interactúan las entidades entre sí (uno a uno, uno a muchos o muchos a muchos), también, se crearon  tablas intermedias entre distintas entidades para una mejor relación y manejo entre las mismas, se eliminaron los valores redundantes, , los atributos tomaron el lugar de columnas y ahora la información está mejor estructurada y se acerca al resultado deseado para la implementación en la base de datos del caso de estudio.

## Entidades Antes de la normalización

## 🧑‍⚕️ PACIENTES
- DNI  
- Nombre  
- Telefono  
- Direccion  
- CorreoElectronico  
- Seguro  
- Hospital  
- NumeroHistoria  
- GrupoEdad  

---

## 📁 HISTORIA_CLINICA
- id_historia_clinica  
- Controles  
- Fechas  
- Condicion  
- Procedimientos_realizados  

---

## 🩺 MEDICOS
- NumColegiatura  
- Nombre  
- Telefono  
- Especialidad  
- CorreoElectronico  
- Salario  

---

## 🧑‍⚕️ MEDICOS_ESPECIALISTAS
- id_especialista  
- Nombre  
- Campo  
- Salario  

---

## 📋 VISITAS_MEDICAS
- id_visita  
- Fecha  
- Hora  
- Direccion  
- Medico_asignado  
- Paciente_atendido  

---

## 🏥 HOSPITALES
- Nombre  
- Direccion  
- DirectorGeneral  
- Especialidad  
- Sede  

---

## 💊 MEDICAMENTOS
- id_medicamentos  
- Nombre  
- Tipo  
- Fabricante  
- Lote  
- DisponibilidadInventario  

---

## 📦 INVENTARIO
- id_inventario  
- Productos  
- Cantidad  

---

## 💉 TRATAMIENTOS
- id_tratamientos  
- Tipo  
- Duracion  
- Valor  

---

## 🚚 PROVEEDORES
- id_proveedores  
- Nombre  
- Productos  
- Lote  

---

## 🏬 AREAS
- Nombre  
- Tipo  

---

## 👩‍⚕️ ENFERMERAS
- id_enfermeras  
- Area  
- Salario  

---

## 🧹 PERSONAL_MANTENIMIENTO
- id_personalMantenimiento  
- Gestion  
- Salario  

---

## 👨‍💼 PERSONAL_ADMINISTRATIVO
- id_personalAdministrativo  
- Nombre  
- Salario  

---

## 💳 CUENTAS
- id_cuenta  
- Nombre_persona  
- Fecha  
- Valor  
- Facturacion  


# Normalización del Modelo Lógico

<br>
<br>

La normalización en un modelo lógico consiste en la organización de los datos de una manera, más simple, sencilla y fácil de gestionar que en otros modelos, que evita la redundancia de los datos y evita fuertes dependencias funcionales para que el código puede ser fácilmente interpretado y sea funcional para su uso en conjunto con sistemas que administren bases de datos. Esta está dividida en 3 tipos de normalización para los cuales, si queremos avanzar, hay que pasar el anterior, estos son

- 1FN primera forma normal
- 2FN segunda forma normal
- 3FN tercera forma normal


En el proyecto a manejar, se debían cambiar y normalizar distintos datos cómo , ciertas tablas, características, atributos multivaluados, dependencia, atributos o entidades redundantes,eliminar datos innesesarios, entre otros y darles un mayor orden.

# Primera Forma Normal (1FN)
### Descripción

La Primera Forma Normal (1FN) es el proceso de normalización de bases de datos, el cual, establece que todos los atributos de una tabla deben ser atómicos, es decir, deben contener valores únicos que no se pueden repetir, evitando que existan atributos multivaluados dentro de una sola entidad.
Cuando se detecta que un atributo contiene múltiples valores, se debe reorganizar la estructura de la base de datos para cumplir con la 1FN. En estos casos, la solución consiste en separar el atributo multivaluado y colocarlo en una nueva tabla, estableciendo una relación adecuada entre distintas tablas.

# Gráfica

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


### Descripción Técnica
Para cumplir con la primera forma de normalización se eliminaron repeticiones de datos (campos multivaluados o anidados) para que todo sea atómico.

#### Cambios hechos:

- Campos como seguros: [ { nombre, cobertura } ] se transforman en una tabla/colección aparte (SEGUROS).

- En lugar de tener productos: [...] dentro de inventario, se crea una relación explícita entre INVENTARIO y MEDICAMENTOS.

- Las visitas médicas dejan de estar como array dentro de HISTORIA_CLINICA y se relacionan mediante una tabla puente (DETALLE_HISTORIA o similar).
<br>
<br>
<br>



# Segundo Forma Normal (2FN)
### Descripción
En bases de datos relacionales es un paso en el proceso de normalización que busca eliminar las dependencias parciales. Esto significa que, además de cumplir con los requisitos de la primera forma normal (1NF), las columnas no clave deben depender de la clave primaria completa y no solo de parte de ella.



# Gráfica

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


### Descripción Técnica
Para cumplir con la segunda forma de normalización se eliminaron dependencias parciales: que ningún campo dependa solo de parte de una clave compuesta.


#### Cambios hechos:
- En tablas como DETALLE_HISTORIA, si la clave primaria era compuesta (id_historia_clinica + id_visita), y un campo como procedimiento dependía solo de id_visita, se separa esa dependencia.

- Se creó la tabla VISITAS_MEDICAS con todos los detalles propios de la visita (fecha, hora, médico, hospital, etc).

- Se normalizó el inventario y proveedores: PROVEEDOR_PRODUCTO nace para evitar que la cantidad o lote dependa parcialmente del medicamento o proveedor.

# Tercera Forma Normal (3FN)
### Descripción
La Tercera Forma Normal (3FN) es una forma normal en la normalización de bases de datos. Su objetivo principal es eliminar las dependencias transitivas, quiere decir que crea dependencia entre tablas lejanas y las tablas principales. 

Cuando se evidencia que múltiples tablas tienen una gran dependencia, una de la otra, se busca eliminarla, integrando nuevas tablas que vuelvan a los datos aún más independientes.




# Gráfica

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



### Descripción Técnica
Con esta forma de normalización se buscó, Eliminar dependencias transitivas: que ningún campo no clave dependa de otro campo no clave.





#### Cambios hechos:

- En HOSPITALES, el campo DirectorGeneral (nombre y profesión) se trasladó a la tabla DIRECTORES.

- En MEDICOS, la especialidad ahora no está como texto, sino como id_especialidad relacionado con la tabla ESPECIALIDADES.

- En SEGUROS, cobertura se convirtió en una tabla aparte: COBERTURAS.

- En MEDICAMENTOS, el tipo se separa como tabla TIPO_MEDICAMENTO.


