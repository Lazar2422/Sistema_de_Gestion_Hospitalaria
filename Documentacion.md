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


#### ❖ insert_code.js :En este archivo se encuentran los datos a insertar .



#### usuarios.js ❖  :En este archivo se encuentra el codigo para la creacion de usuarios en mongo.

<br>
<br>

# Planificación

## Diagrama E-R

### Descripción
Un diagrama ER (Entidad-Relación) es una herramienta visual que se utiliza en el diseño de bases de datos para representar de forma clara y estructurada los elementos clave del sistema de información. Este tipo de diagrama permite modelar los datos que serán almacenados, así como la forma en que se relacionan entre sí, antes de crear la base de datos. Ayuda a los analistas, diseñadores y desarrolladores a entender cómo se organiza la información, qué entidades intervienen, qué atributos poseen y cómo se conectan unas con otras.

## Construcción del Modelo Conceptual

#### Descripción


Un modelo conceptual en bases de datos es una representación, que describe las entidades, atributos y relaciones entre ellas en un negocio determinado, sin entrar en detalles de implementación tecnológica más específica. Su objetivo es comunicar la estructura de datos de manera clara y comprensible para los stakeholders, incluso aquellos sin conocimientos técnicos, y servir como base para el diseño lógico y físico de la base de datos.  

Además, el modelo conceptual actúa como un puente entre los requerimientos del negocio y el diseño lógico y físico de la base de datos, sirviendo como punto de partida para construir modelos más detallados que ya consideren el tipo de base de datos a utilizar, la normalización y otros aspectos tecnológicos.






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


Finalmente, hay que tener en cuenta que para realizar el modelo lógico, se necesita la siguiente estructura, En la cuál desaparecen los verbos, las entidades se vuelven tablas y los atributos, columnas




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


# Construcción del Modelo Físico


### Descripción
El modelo físico en una base de datos es una representación detallada de cómo se implementará la estructura de la base de datos en el hardware y software, incluyendo las colecciones, inserciones, funciones, usuarios y consultas.

Finalmente, hay que tener en cuenta que para desarrollar el modelo físico, se deben realizar funciones, usuarios json schema, inserciones de datos y consultas dentro de MongoDB ( En este caso con Atlas) y en base a esto ejecutar comandos con los datos que se vana a incluir , de la siguiente manera:



## Codigo para las inserciones


Aqui hay un ejemplo de como se realizan las inserciones de los datos 


``` js
{
  "HOSPITALES": [
    {
      "id_hospital": "H001",
      "Nombre": "Clínica Santa Fe",
      "Direccion": "Pasadizo de Enrique Barco 73\nMálaga, 42373",
      "id_director": "D001",
      "id_especialidad": "ESP001",
      "Sede": "Bogotá"
    },
    {
      "id_hospital": "H002",
      "Nombre": "Hospital San José",
      "Direccion": "Cuesta de Rufina Villa 6 Piso 1 \nValladolid, 57834",
      "id_director": "D002",
      "id_especialidad": "ESP002",
      "Sede": "Medellín"
    },
    {
      "id_hospital": "H003",
      "Nombre": "Fundación Valle",
      "Direccion": "C. Cipriano Quesada 828 Piso 0 \nTarragona, 91628",
      "id_director": "D003",
      "id_especialidad": "ESP003",
      "Sede": "Cali"
    },
    {
      "id_hospital": "H004",
      "Nombre": "Clínica del Norte",
      "Direccion": "Vial de Susana Pedrosa 74 Apt. 27 \nGuipúzcoa, 78867",
      "id_director": "D004",
      "id_especialidad": "ESP004",
      "Sede": "Barranquilla"
    },
    {
      "id_hospital": "H005",
      "Nombre": "Hospital Universitario",
      "Direccion": "Urbanización de Norberto Zamorano 97\nPalencia, 04293",
      "id_director": "D005",
      "id_especialidad": "ESP005",
      "Sede": "Bucaramanga"
    }
  ],
  "DIRECTORES": [
    {
      "id_director": "D001",
      "Nombre": "Joan de Peñalver",
      "Profesion": "Medicina General"
    },
    {
      "id_director": "D002",
      "Nombre": "Melchor Chaves Valero",
      "Profesion": "Cirugía"
    },
    {
      "id_director": "D003",
      "Nombre": "Liliana María Dolores Escribano Hidalgo",
      "Profesion": "Administración"
    },
    {
      "id_director": "D004",
      "Nombre": "Eliseo Becerra Maldonado",
      "Profesion": "Administración"
    },
    {
      "id_director": "D005",
      "Nombre": "Begoña Ochoa-Iglesias",
      "Profesion": "Ginecología"
    }
  ],
  "PERSONAL_ADMINISTRATIVO": [
    {
      "id_personal": "ADM001",
      "id_hospital": "H001",
      "Nombre": "Leandra Ribera Barrios",
      "Salario": 2709.01
    },
    {
      "id_personal": "ADM002",
      "id_hospital": "H001",
      "Nombre": "Nazaret Exposito Somoza",
      "Salario": 2760.17
    },
    {
      "id_personal": "ADM003",
      "id_hospital": "H001",
      "Nombre": "Fortunata Jordá Albero",
      "Salario": 2825.1
    },
    {
      "id_personal": "ADM004",
      "id_hospital": "H001",
      "Nombre": "Valeria Abascal Cazorla",
      "Salario": 2925.81
    },
    {
      "id_personal": "ADM005",
      "id_hospital": "H001",
      "Nombre": "Luisa Diez Nieto",
      "Salario": 2638.6
    },
    {
      "id_personal": "ADM006",
      "id_hospital": "H001",
      "Nombre": "Sandra Rocha Navas",
      "Salario": 2932.58
    },
    {
      "id_personal": "ADM007",
      "id_hospital": "H001",
      "Nombre": "Cristian Asensio",
      "Salario": 2262.18
    },
    {
      "id_personal": "ADM008",
      "id_hospital": "H001",
      "Nombre": "Emelina Viviana Contreras Bonilla",
      "Salario": 2457.06
    },
    {
      "id_personal": "ADM009",
      "id_hospital": "H001",
      "Nombre": "Lorenza Rueda Company",
      "Salario": 1752.9
    },
    {
      "id_personal": "ADM010",
      "id_hospital": "H001",
      "Nombre": "Jose Angel Guijarro Ferrán",
      "Salario": 2043.75
    },
    {
      "id_personal": "ADM011",
      "id_hospital": "H001",
      "Nombre": "Aarón Becerra Codina",
      "Salario": 1624.67
    },
    {
      "id_personal": "ADM012",
      "id_hospital": "H001",
      "Nombre": "María Ángeles Romero Castell",
      "Salario": 2938.93
    },
    {
      "id_personal": "ADM013",
      "id_hospital": "H001",
      "Nombre": "Belén Febe Flores Ayala",
      "Salario": 1542.31
    },
    {
      "id_personal": "ADM014",
      "id_hospital": "H001",
      "Nombre": "Bernabé Amador Soler",
      "Salario": 2730.4
    },
    {
      "id_personal": "ADM015",
      "id_hospital": "H001",
      "Nombre": "Delfina Lozano Torrents",
      "Salario": 1766.05
    },
    {
      "id_personal": "ADM016",
      "id_hospital": "H001",
      "Nombre": "Ramiro Mendez Vara",
      "Salario": 2607.7
    },
    {
      "id_personal": "ADM017",
      "id_hospital": "H001",
      "Nombre": "Ricardo Valera-Miralles",
      "Salario": 2948.99
    },
    {
      "id_personal": "ADM018",
      "id_hospital": "H001",
      "Nombre": "Chus Bello Suárez",
      "Salario": 2525.5
    },
    {
      "id_personal": "ADM019",
      "id_hospital": "H001",
      "Nombre": "Micaela Guijarro Samper",
      "Salario": 1844.38
    },
    {
      "id_personal": "ADM020",
      "id_hospital": "H001",
      "Nombre": "Heraclio Echeverría",
      "Salario": 2949.57
    },
    {
      "id_personal": "ADM021",
      "id_hospital": "H001",
      "Nombre": "Emilia Borrell Vilar",
      "Salario": 2361.99
    },
    {
      "id_personal": "ADM022",
      "id_hospital": "H001",
      "Nombre": "Ligia Carranza Machado",
      "Salario": 2739.1
    },
    {
      "id_personal": "ADM023",
      "id_hospital": "H001",
      "Nombre": "Filomena Coca Vera",
      "Salario": 1710.09
    },
    {
      "id_personal": "ADM024",
      "id_hospital": "H001",
      "Nombre": "Margarita Tejedor Cortes",
      "Salario": 2756.18
    },
    {
      "id_personal": "ADM025",
      "id_hospital": "H001",
      "Nombre": "Teodoro Antón Guardiola",
      "Salario": 1895.71
    },
    {
      "id_personal": "ADM026",
      "id_hospital": "H001",
      "Nombre": "Graciana Cuadrado Valderrama",
      "Salario": 1627.84
    },
    {
      "id_personal": "ADM027",
      "id_hospital": "H001",
      "Nombre": "Abel Pinilla Arana",
      "Salario": 2796.62
    },
    {
      "id_personal": "ADM028",
      "id_hospital": "H001",
      "Nombre": "Adelaida Araujo-Velasco",
      "Salario": 1876.08
    },
    {
      "id_personal": "ADM029",
      "id_hospital": "H001",
      "Nombre": "Valeria del Riba",
      "Salario": 2579.28
    },
    {
      "id_personal": "ADM030",
      "id_hospital": "H001",
      "Nombre": "Calisto de Llorente",
      "Salario": 1893.67
    },
    {
      "id_personal": "ADM031",
      "id_hospital": "H001",
      "Nombre": "Aroa Cristina Olivares Cañete",
      "Salario": 2508.69
    },
    {
      "id_personal": "ADM032",
      "id_hospital": "H001",
      "Nombre": "Jennifer Boada Carrasco",
      "Salario": 2909.87
    },
    {
      "id_personal": "ADM033",
      "id_hospital": "H001",
      "Nombre": "Damián Lopez Portero",
      "Salario": 1969.36
    },
    {
      "id_personal": "ADM034",
      "id_hospital": "H001",
      "Nombre": "Dafne Ugarte Conde",
      "Salario": 2678.93
    },
    {
      "id_personal": "ADM035",
      "id_hospital": "H001",
      "Nombre": "Elías Sevillano Borrego",
      "Salario": 1679.84
    },
    {
      "id_personal": "ADM036",
      "id_hospital": "H001",
      "Nombre": "Pedro Macario Casal Frutos",
      "Salario": 1897.16
    },
    {
      "id_personal": "ADM037",
      "id_hospital": "H001",
      "Nombre": "Felipe Carrera-Gracia",
      "Salario": 2659.21
    },
    {
      "id_personal": "ADM038",
      "id_hospital": "H001",
      "Nombre": "Heraclio Peñas Rocamora",
      "Salario": 2628.36
    },
    {
      "id_personal": "ADM039",
      "id_hospital": "H001",
      "Nombre": "Alexandra Borrás Borrego",
      "Salario": 2130.01
    },
    {
      "id_personal": "ADM040",
      "id_hospital": "H001",
      "Nombre": "Blas de Checa",
      "Salario": 1895.04
    },
    {
      "id_personal": "ADM041",
      "id_hospital": "H001",
      "Nombre": "Carmelita Ripoll Vaquero",
      "Salario": 2797.38
    },
    {
      "id_personal": "ADM042",
      "id_hospital": "H001",
      "Nombre": "Fidel de Peñalver",
      "Salario": 1554.87
    },
    {
      "id_personal": "ADM043",
      "id_hospital": "H001",
      "Nombre": "Nayara Benítez Castañeda",
      "Salario": 1875.8
    },
    {
      "id_personal": "ADM044",
      "id_hospital": "H001",
      "Nombre": "Amancio Gilabert Redondo",
      "Salario": 1644.27
    },
    {
      "id_personal": "ADM045",
      "id_hospital": "H001",
      "Nombre": "Imelda Jaén Valero",
      "Salario": 2838.22
    },
    {
      "id_personal": "ADM046",
      "id_hospital": "H001",
      "Nombre": "Tristán Arribas Montenegro",
      "Salario": 2444.99
    },
    {
      "id_personal": "ADM047",
      "id_hospital": "H001",
      "Nombre": "Vanesa Rebeca Fabra Vallejo",
      "Salario": 1959.73
    },
    {
      "id_personal": "ADM048",
      "id_hospital": "H001",
      "Nombre": "Juan Bautista Giménez Camino",
      "Salario": 2783.41
    },
    {
      "id_personal": "ADM049",
      "id_hospital": "H001",
      "Nombre": "Palmira de Camino",
      "Salario": 1640.43
    },
    {
      "id_personal": "ADM050",
      "id_hospital": "H001",
      "Nombre": "Calixto Heras Hernández",
      "Salario": 2937.5
    },
    {
      "id_personal": "ADM051",
      "id_hospital": "H002",
      "Nombre": "María Del Carmen de Mendoza",
      "Salario": 2602.24
    },
    {
      "id_personal": "ADM052",
      "id_hospital": "H002",
      "Nombre": "Montserrat Cáceres Roura",
      "Salario": 1778.45
    },
    {
      "id_personal": "ADM053",
      "id_hospital": "H002",
      "Nombre": "Edelmira del Acero",
      "Salario": 2691.69
    },
    {
      "id_personal": "ADM054",
      "id_hospital": "H002",
      "Nombre": "Che Gárate Aller",
      "Salario": 2008.1
    },
    {
      "id_personal": "ADM055",
      "id_hospital": "H002",
      "Nombre": "Agustín del Olmo",
      "Salario": 2497.11
    },
    {
      "id_personal": "ADM056",
      "id_hospital": "H002",
      "Nombre": "Javiera Escalona-Cabeza",
      "Salario": 1753.15
    },
    {
      "id_personal": "ADM057",
      "id_hospital": "H002",
      "Nombre": "Eli Salgado Arévalo",
      "Salario": 2709.7
    },
    {
      "id_personal": "ADM058",
      "id_hospital": "H002",
      "Nombre": "Nacio Segarra",
      "Salario": 1700.99
    },
    {
      "id_personal": "ADM059",
      "id_hospital": "H002",
      "Nombre": "Jafet Sedano",
      "Salario": 2870.41
    },
    {
      "id_personal": "ADM060",
      "id_hospital": "H002",
      "Nombre": "Valero Gabaldón Vendrell",
      "Salario": 1534.8
    },
    {
      "id_personal": "ADM061",
      "id_hospital": "H002",
      "Nombre": "Julieta Garriga Mateu",
      "Salario": 2351.98
    },
    {
      "id_personal": "ADM062",
      "id_hospital": "H002",
      "Nombre": "Máximo Lobo Iriarte",
      "Salario": 1714.02
    },
    {
      "id_personal": "ADM063",
      "id_hospital": "H002",
      "Nombre": "Severiano Dueñas Solís",
      "Salario": 2339.77
    },
    {
      "id_personal": "ADM064",
      "id_hospital": "H002",
      "Nombre": "Odalys Alsina Lucas",
      "Salario": 2145.5
    },
    {
      "id_personal": "ADM065",
      "id_hospital": "H002",
      "Nombre": "Alfredo Guerra Guardiola",
      "Salario": 1572.45
    },
    {
      "id_personal": "ADM066",
      "id_hospital": "H002",
      "Nombre": "Juan Manuel Cerdán Villalonga",
      "Salario": 2982.5
    },
    {
      "id_personal": "ADM067",
      "id_hospital": "H002",
      "Nombre": "Felicidad Gallardo Higueras",
      "Salario": 1635.51
    },
    {
      "id_personal": "ADM068",
      "id_hospital": "H002",
      "Nombre": "Paola Martin Casas",
      "Salario": 1745.45
    },
    {
      "id_personal": "ADM069",
      "id_hospital": "H002",
      "Nombre": "Amelia Barberá Guerrero",
      "Salario": 2135.35
    },
    {
      "id_personal": "ADM070",
      "id_hospital": "H002",
      "Nombre": "Édgar Saldaña Palomar",
      "Salario": 2527.94
    },
    {
      "id_personal": "ADM071",
      "id_hospital": "H002",
      "Nombre": "Angelita Landa-Pujol",
      "Salario": 2139.69
    },
    {
      "id_personal": "ADM072",
      "id_hospital": "H002",
      "Nombre": "Encarnación Corominas Alberdi",
      "Salario": 2971.05
    },
    {
      "id_personal": "ADM073",
      "id_hospital": "H002",
      "Nombre": "Ruperta Gallart Egea",
      "Salario": 1858.11
    },
    {
      "id_personal": "ADM074",
      "id_hospital": "H002",
      "Nombre": "Brígida Isa Castilla Mancebo",
      "Salario": 2421.55
    },
    {
      "id_personal": "ADM075",
      "id_hospital": "H002",
      "Nombre": "Seve Barreda Robledo",
      "Salario": 1897.86
    },
    {
      "id_personal": "ADM076",
      "id_hospital": "H002",
      "Nombre": "Adela Río Lucas",
      "Salario": 2628.97
    },
    {
      "id_personal": "ADM077",
      "id_hospital": "H002",
      "Nombre": "Paola Febe Noguera Rivero",
      "Salario": 2016.9
    },
    {
      "id_personal": "ADM078",
      "id_hospital": "H002",
      "Nombre": "Aristides Valls Bravo",
      "Salario": 2958.27
    },
    {
      "id_personal": "ADM079",
      "id_hospital": "H002",
      "Nombre": "Natividad Núñez Téllez",
      "Salario": 2235.19
    },
    {
      "id_personal": "ADM080",
      "id_hospital": "H002",
      "Nombre": "Buenaventura Baró Zabala",
      "Salario": 2729.86
    },
    {
      "id_personal": "ADM081",
      "id_hospital": "H002",
      "Nombre": "Ernesto Mariño Aragonés",
      "Salario": 2738.59
    },
    {
      "id_personal": "ADM082",
      "id_hospital": "H002",
      "Nombre": "Chema del Rubio",
      "Salario": 1525.54
    },
    {
      "id_personal": "ADM083",
      "id_hospital": "H002",
      "Nombre": "Rita Pont Talavera",
      "Salario": 2301.34
    },
    {
      "id_personal": "ADM084",
      "id_hospital": "H002",
      "Nombre": "Dan Valera",
      "Salario": 1623.24
    },
    {
      "id_personal": "ADM085",
      "id_hospital": "H002",
      "Nombre": "Marcos Calleja-Soria",
      "Salario": 2936.73
    },
    {
      "id_personal": "ADM086",
      "id_hospital": "H002",
      "Nombre": "Marina Cuenca Doménech",
      "Salario": 2161.23
    },
    {
      "id_personal": "ADM087",
      "id_hospital": "H002",
      "Nombre": "Gonzalo de Marín",
      "Salario": 2867.22
    },
    {
      "id_personal": "ADM088",
      "id_hospital": "H002",
      "Nombre": "Pepita Castrillo Alemany",
      "Salario": 2748.39
    },
    {
      "id_personal": "ADM089",
      "id_hospital": "H002",
      "Nombre": "Hortensia Priscila Baños Carpio",
      "Salario": 1973.55
    },
    {
      "id_personal": "ADM090",
      "id_hospital": "H002",
      "Nombre": "Pánfilo Tadeo Morell Cobo",
      "Salario": 2879.6
    },
    {
      "id_personal": "ADM091",
      "id_hospital": "H002",
      "Nombre": "Azahar Diéguez-Coloma",
      "Salario": 2716.34
    },
    {
      "id_personal": "ADM092",
      "id_hospital": "H002",
      "Nombre": "Herminia Menendez Amat",
      "Salario": 2376.54
    },
    {
      "id_personal": "ADM093",
      "id_hospital": "H002",
      "Nombre": "Samuel Escolano Barriga",
      "Salario": 2463.86
    },
    {
      "id_personal": "ADM094",
      "id_hospital": "H002",
      "Nombre": "Piedad Reina",
      "Salario": 2674.46
    },
    {
      "id_personal": "ADM095",
      "id_hospital": "H002",
      "Nombre": "Eduardo Sans Baquero",
      "Salario": 1955.33
    },
    {
      "id_personal": "ADM096",
      "id_hospital": "H002",
      "Nombre": "Mariano Matas-Villar",
      "Salario": 1880.29
    },
    {
      "id_personal": "ADM097",
      "id_hospital": "H002",
      "Nombre": "Vasco Mateo Almagro",
      "Salario": 1904.86
    },
    {
      "id_personal": "ADM098",
      "id_hospital": "H002",
      "Nombre": "Manola Acero Arévalo",
      "Salario": 1580.76
    },
    {
      "id_personal": "ADM099",
      "id_hospital": "H002",
      "Nombre": "Lupita Mata Rivero",
      "Salario": 2148.12
    },
    {
      "id_personal": "ADM100",
      "id_hospital": "H002",
      "Nombre": "Geraldo Casals Olivera",
      "Salario": 1624.66
    },
    {
      "id_personal": "ADM101",
      "id_hospital": "H003",
      "Nombre": "Diana Nazaret Carmona Vallejo",
      "Salario": 1678.48
    },
    {
      "id_personal": "ADM102",
      "id_hospital": "H003",
      "Nombre": "Eutimio Aguilera-Vidal",
      "Salario": 1628.65
    },
    {
      "id_personal": "ADM103",
      "id_hospital": "H003",
      "Nombre": "Cruz Molina Escamilla",
      "Salario": 2951.41
    },
    {
      "id_personal": "ADM104",
      "id_hospital": "H003",
      "Nombre": "Josefa Mármol Casado",
      "Salario": 1981.46
    },
    {
      "id_personal": "ADM105",
      "id_hospital": "H003",
      "Nombre": "Serafina Ferrándiz Sáez",
      "Salario": 1503.56
    },
    {
      "id_personal": "ADM106",
      "id_hospital": "H003",
      "Nombre": "Ernesto Zaragoza Figueras",
      "Salario": 2614.47
    },
    {
      "id_personal": "ADM107",
      "id_hospital": "H003",
      "Nombre": "Nydia Alemany Garzón",
      "Salario": 1953.65
    },
    {
      "id_personal": "ADM108",
      "id_hospital": "H003",
      "Nombre": "Pilar Planas Roselló",
      "Salario": 2237.01
    },
    {
      "id_personal": "ADM109",
      "id_hospital": "H003",
      "Nombre": "Epifanio Roda Gibert",
      "Salario": 1969.6
    },
    {
      "id_personal": "ADM110",
      "id_hospital": "H003",
      "Nombre": "Bartolomé Bosch Espejo",
      "Salario": 1716.68
    },
    {
      "id_personal": "ADM111",
      "id_hospital": "H003",
      "Nombre": "Jesús Maximiano Suárez Sobrino",
      "Salario": 2522.78
    },
    {
      "id_personal": "ADM112",
      "id_hospital": "H003",
      "Nombre": "Urbano Lino Gallardo Rodríguez",
      "Salario": 1898.38
    },
    {
      "id_personal": "ADM113",
      "id_hospital": "H003",
      "Nombre": "Matías Tejedor Trujillo",
      "Salario": 2455.24
    },
    {
      "id_personal": "ADM114",
      "id_hospital": "H003",
      "Nombre": "Juan Gallart Seco",
      "Salario": 1939.8
    },
    {
      "id_personal": "ADM115",
      "id_hospital": "H003",
      "Nombre": "Luciano Ojeda Paniagua",
      "Salario": 2066.31
    },
    {
      "id_personal": "ADM116",
      "id_hospital": "H003",
      "Nombre": "Feliciana Morales Valera",
      "Salario": 2676.25
    },
    {
      "id_personal": "ADM117",
      "id_hospital": "H003",
      "Nombre": "Inmaculada Olivares Cobo",
      "Salario": 1885.11
    },
    {
      "id_personal": "ADM118",
      "id_hospital": "H003",
      "Nombre": "Marisa Tomas",
      "Salario": 2041.9
    },
    {
      "id_personal": "ADM119",
      "id_hospital": "H003",
      "Nombre": "Reyes Amor Ríos Alsina",
      "Salario": 2786.43
    },
    {
      "id_personal": "ADM120",
      "id_hospital": "H003",
      "Nombre": "Eva de Benitez",
      "Salario": 2553.94
    },
    {
      "id_personal": "ADM121",
      "id_hospital": "H003",
      "Nombre": "Primitivo Marco Mercader Figuerola",
      "Salario": 2636.11
    },
    {
      "id_personal": "ADM122",
      "id_hospital": "H003",
      "Nombre": "Reyes Martin",
      "Salario": 2076.0
    },
    {
      "id_personal": "ADM123",
      "id_hospital": "H003",
      "Nombre": "Roldán Vigil Palomino",
      "Salario": 2833.05
    },
    {
      "id_personal": "ADM124",
      "id_hospital": "H003",
      "Nombre": "Clemente Huerta",
      "Salario": 2477.03
    },
    {
      "id_personal": "ADM125",
      "id_hospital": "H003",
      "Nombre": "Prudencio Cifuentes Alcántara",
      "Salario": 2191.52
    },
    {
      "id_personal": "ADM126",
      "id_hospital": "H003",
      "Nombre": "Timoteo Prieto-Alegre",
      "Salario": 2600.73
    },
    {
      "id_personal": "ADM127",
      "id_hospital": "H003",
      "Nombre": "Lupe de Rodriguez",
      "Salario": 2701.5
    },
    {
      "id_personal": "ADM128",
      "id_hospital": "H003",
      "Nombre": "Martirio Montoya",
      "Salario": 1516.95
    },
    {
      "id_personal": "ADM129",
      "id_hospital": "H003",
      "Nombre": "Lorenza Morera-Montaña",
      "Salario": 1732.28
    },
    {
      "id_personal": "ADM130",
      "id_hospital": "H003",
      "Nombre": "Hortensia Durán Río",
      "Salario": 1862.84
    },
    {
      "id_personal": "ADM131",
      "id_hospital": "H003",
      "Nombre": "Perla Bejarano-Adán",
      "Salario": 2225.8
    },
    {
      "id_personal": "ADM132",
      "id_hospital": "H003",
      "Nombre": "Calixto Moya Campo",
      "Salario": 2898.4
    },
    {
      "id_personal": "ADM133",
      "id_hospital": "H003",
      "Nombre": "José María Gascón Castro",
      "Salario": 2313.7
    },
    {
      "id_personal": "ADM134",
      "id_hospital": "H003",
      "Nombre": "Prudencio Horacio Canales Romeu",
      "Salario": 2615.52
    },
    {
      "id_personal": "ADM135",
      "id_hospital": "H003",
      "Nombre": "Olivia Miranda Viñas",
      "Salario": 2535.39
    },
    {
      "id_personal": "ADM136",
      "id_hospital": "H003",
      "Nombre": "Óscar Cobos-Roma",
      "Salario": 2662.34
    },
    {
      "id_personal": "ADM137",
      "id_hospital": "H003",
      "Nombre": "Melisa Villar Crespi",
      "Salario": 2849.98
    },
    {
      "id_personal": "ADM138",
      "id_hospital": "H003",
      "Nombre": "Zoraida Giner Donaire",
      "Salario": 2149.82
    },
    {
      "id_personal": "ADM139",
      "id_hospital": "H003",
      "Nombre": "Yaiza González Riquelme",
      "Salario": 2096.73
    },
    {
      "id_personal": "ADM140",
      "id_hospital": "H003",
      "Nombre": "Ibán de Córdoba",
      "Salario": 2740.62
    },
    {
      "id_personal": "ADM141",
      "id_hospital": "H003",
      "Nombre": "Ale Bayón Jove",
      "Salario": 2385.33
    },
    {
      "id_personal": "ADM142",
      "id_hospital": "H003",
      "Nombre": "Aroa Cervantes Larrea",
      "Salario": 2504.08
    },
    {
      "id_personal": "ADM143",
      "id_hospital": "H003",
      "Nombre": "Olivia Donaire Rey",
      "Salario": 1686.77
    },
    {
      "id_personal": "ADM144",
      "id_hospital": "H003",
      "Nombre": "Mercedes Coello González",
      "Salario": 1655.72
    },
    {
      "id_personal": "ADM145",
      "id_hospital": "H003",
      "Nombre": "Horacio Gallego Grande",
      "Salario": 1795.61
    },
    {
      "id_personal": "ADM146",
      "id_hospital": "H003",
      "Nombre": "Yolanda Verdugo Montserrat",
      "Salario": 2724.78
    },
    {
      "id_personal": "ADM147",
      "id_hospital": "H003",
      "Nombre": "Leandro del Rivero",
      "Salario": 2009.34
    },
    {
      "id_personal": "ADM148",
      "id_hospital": "H003",
      "Nombre": "Gervasio Santos Alarcón",
      "Salario": 2626.64
    },
    {
      "id_personal": "ADM149",
      "id_hospital": "H003",
      "Nombre": "Abraham Florentino Mulet Piñeiro",
      "Salario": 2920.24
    },
    {
      "id_personal": "ADM150",
      "id_hospital": "H003",
      "Nombre": "Urbano Juliá Villalobos",
      "Salario": 1573.92
    },
    {
      "id_personal": "ADM151",
      "id_hospital": "H004",
      "Nombre": "Alba Sales",
      "Salario": 2143.79
    },
    {
      "id_personal": "ADM152",
      "id_hospital": "H004",
      "Nombre": "Leoncio Duarte Mariscal",
      "Salario": 2269.37
    },
    {
      "id_personal": "ADM153",
      "id_hospital": "H004",
      "Nombre": "Ramón Vilar Bartolomé",
      "Salario": 1640.93
    },
    {
      "id_personal": "ADM154",
      "id_hospital": "H004",
      "Nombre": "Carmelo Saez Hervás",
      "Salario": 1581.66
    },
    {
      "id_personal": "ADM155",
      "id_hospital": "H004",
      "Nombre": "Pascuala Ribas-Armas",
      "Salario": 2788.17
    },
    {
      "id_personal": "ADM156",
      "id_hospital": "H004",
      "Nombre": "Ciro Perelló Rivero",
      "Salario": 2104.76
    },
    {
      "id_personal": "ADM157",
      "id_hospital": "H004",
      "Nombre": "Cirino Casas Serrano",
      "Salario": 1887.95
    },
    {
      "id_personal": "ADM158",
      "id_hospital": "H004",
      "Nombre": "Bernardita del Rios",
      "Salario": 1998.35
    },
    {
      "id_personal": "ADM159",
      "id_hospital": "H004",
      "Nombre": "Dominga Salom Zaragoza",
      "Salario": 2950.58
    },
    {
      "id_personal": "ADM160",
      "id_hospital": "H004",
      "Nombre": "Teresa de Sandoval",
      "Salario": 2558.92
    },
    {
      "id_personal": "ADM161",
      "id_hospital": "H004",
      "Nombre": "Ildefonso de Jaume",
      "Salario": 2735.58
    },
    {
      "id_personal": "ADM162",
      "id_hospital": "H004",
      "Nombre": "Rafa Higueras Mate",
      "Salario": 2136.63
    },
    {
      "id_personal": "ADM163",
      "id_hospital": "H004",
      "Nombre": "Buenaventura Mulet Bayón",
      "Salario": 2843.02
    },
    {
      "id_personal": "ADM164",
      "id_hospital": "H004",
      "Nombre": "Marco de Vall",
      "Salario": 2460.93
    },
    {
      "id_personal": "ADM165",
      "id_hospital": "H004",
      "Nombre": "Rubén de Millán",
      "Salario": 2107.92
    },
    {
      "id_personal": "ADM166",
      "id_hospital": "H004",
      "Nombre": "Fátima Vilalta-Echeverría",
      "Salario": 1595.29
    },
    {
      "id_personal": "ADM167",
      "id_hospital": "H004",
      "Nombre": "Lupe Batlle Elías",
      "Salario": 1629.46
    },
    {
      "id_personal": "ADM168",
      "id_hospital": "H004",
      "Nombre": "Florinda Llamas-Miguel",
      "Salario": 2016.37
    },
    {
      "id_personal": "ADM169",
      "id_hospital": "H004",
      "Nombre": "Timoteo Contreras Ramírez",
      "Salario": 2905.49
    },
    {
      "id_personal": "ADM170",
      "id_hospital": "H004",
      "Nombre": "Manu Nicolás Marquez",
      "Salario": 2977.56
    },
    {
      "id_personal": "ADM171",
      "id_hospital": "H004",
      "Nombre": "Patricio Pozo Portero",
      "Salario": 2967.56
    },
    {
      "id_personal": "ADM172",
      "id_hospital": "H004",
      "Nombre": "Cornelio Pi",
      "Salario": 2611.54
    },
    {
      "id_personal": "ADM173",
      "id_hospital": "H004",
      "Nombre": "Débora de Cámara",
      "Salario": 2196.01
    },
    {
      "id_personal": "ADM174",
      "id_hospital": "H004",
      "Nombre": "Jordán Alemán Salinas",
      "Salario": 2067.84
    },
    {
      "id_personal": "ADM175",
      "id_hospital": "H004",
      "Nombre": "Gregorio Millán Barrera",
      "Salario": 2803.96
    },
    {
      "id_personal": "ADM176",
      "id_hospital": "H004",
      "Nombre": "Cándida Juárez Sanz",
      "Salario": 2369.75
    },
    {
      "id_personal": "ADM177",
      "id_hospital": "H004",
      "Nombre": "Maristela Valdés Patiño",
      "Salario": 1556.03
    },
    {
      "id_personal": "ADM178",
      "id_hospital": "H004",
      "Nombre": "Evangelina del Zorrilla",
      "Salario": 2960.82
    },
    {
      "id_personal": "ADM179",
      "id_hospital": "H004",
      "Nombre": "Tadeo Adán-Valencia",
      "Salario": 1972.15
    },
    {
      "id_personal": "ADM180",
      "id_hospital": "H004",
      "Nombre": "Angelina Rocamora",
      "Salario": 2461.75
    },
    {
      "id_personal": "ADM181",
      "id_hospital": "H004",
      "Nombre": "Manu Serra",
      "Salario": 1901.71
    },
    {
      "id_personal": "ADM182",
      "id_hospital": "H004",
      "Nombre": "Oriana Isern Lago",
      "Salario": 2530.62
    },
    {
      "id_personal": "ADM183",
      "id_hospital": "H004",
      "Nombre": "Maricruz Gallart",
      "Salario": 2587.08
    },
    {
      "id_personal": "ADM184",
      "id_hospital": "H004",
      "Nombre": "Camilo Real",
      "Salario": 2571.99
    },
    {
      "id_personal": "ADM185",
      "id_hospital": "H004",
      "Nombre": "Jose Francisco Ribera Arnaiz",
      "Salario": 1742.07
    },
    {
      "id_personal": "ADM186",
      "id_hospital": "H004",
      "Nombre": "Narcisa León Patiño",
      "Salario": 1992.24
    },
    {
      "id_personal": "ADM187",
      "id_hospital": "H004",
      "Nombre": "Irene del Vilar",
      "Salario": 1824.21
    },
    {
      "id_personal": "ADM188",
      "id_hospital": "H004",
      "Nombre": "Lupita Giralt Gimenez",
      "Salario": 2758.94
    },
    {
      "id_personal": "ADM189",
      "id_hospital": "H004",
      "Nombre": "Manu Dorotea Cortina Rovira",
      "Salario": 1735.82
    },
    {
      "id_personal": "ADM190",
      "id_hospital": "H004",
      "Nombre": "Jose Antonio Quevedo Andrade",
      "Salario": 2118.62
    },
    {
      "id_personal": "ADM191",
      "id_hospital": "H004",
      "Nombre": "Reinaldo Bueno-Giménez",
      "Salario": 2553.88
    },
    {
      "id_personal": "ADM192",
      "id_hospital": "H004",
      "Nombre": "Begoña Azahara Aguirre Villegas",
      "Salario": 1871.06
    },
    {
      "id_personal": "ADM193",
      "id_hospital": "H004",
      "Nombre": "Máxima Coca Cortés",
      "Salario": 2677.46
    },
    {
      "id_personal": "ADM194",
      "id_hospital": "H004",
      "Nombre": "Lalo Batlle Clemente",
      "Salario": 2360.39
    },
    {
      "id_personal": "ADM195",
      "id_hospital": "H004",
      "Nombre": "Florencia Teresa Casares Caro",
      "Salario": 1951.2
    },
    {
      "id_personal": "ADM196",
      "id_hospital": "H004",
      "Nombre": "Loreto Rosell-Gracia",
      "Salario": 2574.56
    },
    {
      "id_personal": "ADM197",
      "id_hospital": "H004",
      "Nombre": "Eufemia Marqués Rosales",
      "Salario": 2009.09
    },
    {
      "id_personal": "ADM198",
      "id_hospital": "H004",
      "Nombre": "Ainoa Alemán Portero",
      "Salario": 1789.82
    },
    {
      "id_personal": "ADM199",
      "id_hospital": "H004",
      "Nombre": "Purificación Madrid Pozo",
      "Salario": 1602.47
    },
    {
      "id_personal": "ADM200",
      "id_hospital": "H004",
      "Nombre": "Fabio Gil",
      "Salario": 2611.57
    },
    {
      "id_personal": "ADM201",
      "id_hospital": "H005",
      "Nombre": "Rufina Romeu Puente",
      "Salario": 1753.38
    },
    {
      "id_personal": "ADM202",
      "id_hospital": "H005",
      "Nombre": "Angélica Valenzuela-Martín",
      "Salario": 2504.93
    },
    {
      "id_personal": "ADM203",
      "id_hospital": "H005",
      "Nombre": "Rosa María Orozco Garrido",
      "Salario": 1752.98
    },
    {
      "id_personal": "ADM204",
      "id_hospital": "H005",
      "Nombre": "Haroldo Jordán",
      "Salario": 2900.47
    },
    {
      "id_personal": "ADM205",
      "id_hospital": "H005",
      "Nombre": "Lucila Santana Conde",
      "Salario": 2568.31
    },
    {
      "id_personal": "ADM206",
      "id_hospital": "H005",
      "Nombre": "Isaura Dávila Pineda",
      "Salario": 2877.03
    }
}

```
## Descripción Técnica

Para realizar el modelo físico, se tuvieron en cuenta los datos de las inserciones y en base a esto, se realizaron las mismas para luego crear las funciones y hacer las consultas

# Referencias

❖ Concepto 041531 de 2024 Departamento Administrativo de la Función Pública,Funcion pública(2024),
https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=238117#:~:text=La%20planta%20de%20personal%2C%20es,establecidos%20mediante%20el%20Decreto%20Ley 

❖ El departamento de recursos humanos de un hospital, unir,

https://www.unir.net/revista/salud/recursos-humanos-hospital/


❖  Personal del hospital , Manual MSD (2025),


https://www.msdmanuals.com/es/hogar/temas-especiales/atenci%C3%B3n-hospitalaria/personal-del-hospital
