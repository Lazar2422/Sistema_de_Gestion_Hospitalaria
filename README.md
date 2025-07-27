# 🏥 Sistema de Información Hospitalario

## 📌 Descripción del Proyecto

El proyecto consiste en el diseño de una base de datos para un sistema hospitalario, con el objetivo de optimizar la gestión de pacientes, médicos, tratamientos, medicamentos, inventario, áreas especializadas, personal administrativo, visitas médicas e historiales clínicos.

Este sistema está basado en **bases de datos NoSQL** utilizando **MongoDB**, e incluye:

- Modelado entidad-relación (E-R)
- Documentación detallada
- Implementación en MongoDB
- Inserción de datos con base en requerimientos del sistema

---

## 💻 Tecnologías Utilizadas

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="100" alt="MongoDB"/>
</p>


---

## ⚙️ Requisitos del Sistema

- Tener una cuenta y servidor activo en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Última versión de MongoDB instalada
- MongoDB Compass
- Visual Studio Code

---

## 🛠️ Instalación y Configuración

### 1. Instalar MongoDB y MongoDB Compass

Asegúrate de tener MongoDB y Compass instalados en tu equipo.

### 2. Instalar Visual Studio Code

Será útil para visualizar y editar los archivos JSON de manera clara y estructurada.

### 3. Conexión con MongoDB Atlas

Establece la conexión en Compass usando la siguiente cadena:

```bash
mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_base_datos>?retryWrites=true&w=majority&appName=<nombre_app>
```

### 4. Importar archivos JSON

#### 📥 Importar estructura (`ddl.json`)

Abre la terminal de MongoDB e ingresa el contenido del archivo `ddl.json` para crear las colecciones.

#### 📥 Importar datos (`dml.json`)

Ejecuta en terminal:

```bash
mongoimport --db NOMBRE_DB --collection NOMBRE_COLECCION --file RUTA/archivo.json --jsonArray
```

> También puedes hacerlo desde `mongosh`.

#### 📑 Consultas (`dql_select.json`)

Explora y prueba las consultas predefinidas que se encuentran en este archivo.

### 5. Revisar la documentación

Consulta `Documentación.md` para entender la estructura y modelo lógico del sistema.

---

## 🗃️ Estructura de Datos

(🔽 Aquí puedes insertar el contenido en formato Markdown que resume las entidades y atributos del sistema)

---

## 🧾 Ejemplos de Consultas

Aquí encontrarás consultas como:

- Buscar pacientes por nombre
- Listar medicamentos disponibles
- Consultar tratamientos asignados a un paciente
- Ver el historial clínico completo de un paciente

📁 Ver archivo: `dql_select.json`

---

## 🔧 Funciones

Aquí puedes definir o agregar funciones como:

- Clasificación de pacientes
- Cálculo de citas pendientes
- Verificación de stock en inventario

---

## 👤 Roles de Usuario y Permisos

- **Administrador**: Acceso total al sistema, gestión de usuarios y datos.
- **Médico**: Acceso a pacientes asignados, tratamientos y diagnósticos.
- **Recepción/Personal administrativo**: Gestión de citas, registros y documentación.
- **Enfermero**: Visualización de pacientes y tratamientos asignados.

---

## 🤝 Contribuciones

- 👨‍💻 Juan Fernando Umaña  
- 👨‍💻 Omar Fernando Granados

---

## 📬 Licencia y Contacto

📧 Correo de contacto: [juanferumanaa@gmail.com](mailto:juanferumanaa@gmail.com)

---

