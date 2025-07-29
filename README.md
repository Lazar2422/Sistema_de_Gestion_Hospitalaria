# 📌 Descripción del proyecto
El proyecto consiste en el diseño de una base de datos de un sistema hospitalario, buscando la mejora y gestión de los pacientes, médicos, tratamientos, medicamentos, inventario, áreas especializadas, personal administrativo, visitas médicas, historiales clínicos y personal general, utilizando bases de datos NoSQL (MongoDB).

El proyecto consiste en el diseño de una base de datos de un sistema hospitalario, buscando la mejora y gestión de los pacientes, médicos, tratamientos, medicamentos, inventario, áreas especializadas, personal administrativo, visitas médicas, historiales clínicos y personal general, utilizando bases de datos NoSQL (MongoDB), realizando la documentación respectiva de la base de datos, la implementación de la base de datos en MongoDB y las inserciones de los datos planteadas con base en los requerimientos del sistema y modelos E-R.

<br><br>

# 💻 Tecnologías utilizadas
<p align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="100" alt="MongoDB"/> 
<br><br><br>

# 📝 Requisitos del sistema
✅ Poseer un servidor de MongoDB Atlas y la última versión de MongoDB
🔗 Visitar el siguiente enlace para crear una cuenta y adquirir un servidor de MongoDB Atlas: MongoDB Atlas (en caso de no poseer cuenta)

<br><br>

# ⚙️ Instalación y configuración
<br>

### 1️⃣ Tener instalado MongoDB Compass y MongoDB en el equipo donde se planean visualizar los datos
<br><br>

### 2️⃣ Tener instalado Visual Studio Code en el PC para poder previsualizar la información
<br><br>

### 3️⃣ Establecer la conexión en Compass con el servidor de Atlas con la siguiente ruta:

mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_base_datos>

### 4️⃣ Descargar o leer el archivo ddl.json para poder leer las instrucciones y abrir la terminal de MongoDB
### 5️⃣ Descargar el archivo dml.json y hacer la inserción de datos en la terminal del PC:
📌 Usando primeramente el comando:

nginx
Copiar
Editar
mongosh
E insertar la siguiente información:

css
Copiar
Editar
mongoimport --db NOMBRE_DB --collection NOMBRE_COLECCION --file RUTA/archivo.json --jsonArray
O ingresar el siguiente comando en la terminal de MongoDB para la inserción de los datos.

6️⃣ Visualizar las diferentes consultas que se encuentran en el archivo dql_select.json y ejecutarlas para comprobarlas.
7️⃣ Revisar la documentación (Documentación.md) para entender mejor la estructura del proyecto.


# Estructura de la base de datos


El proyecto contiene 21 entidades , las cuales son: Hospital, en el cuál trabaja el personal administrartivo, es dirigido por un director general , el cual, puede manejar , 1 o mas hospitales, los hospitales, tienen especialidades, los hospitales tienen varios pacientes y medicamentos,acceso a las visitas médicas y también, aqui trabaja el personal de mantinimiento, enfermeros/as, el personal administrativo se relaciona con las cuentas y las enfermeras se relacionan con el hospital, las áreas y los pacientes.


# Ejemplos de consultas

## Basicas


```js

// Aquí lo que hacemos esbuscar todos los pacientes de la base de datos para conocer su información general como: nombre, telefono, direccion, correo electrónico, id del seguro, id del hospital, numero de historia, grupo de edad , idhospital y DNI.



 db.PACIENTES.find({});


```

```js




// Aqui ,lo que se busca es , mediante el uso de find y regex encontrar los correos de los pacientes que tengan @hospital y terminen con.org para contactarlos

  return db.PACIENTES.find({ CorreoElectronico: /@hospital\.org$/ });


```


```js

// Aquilo que busca , es toda la información de los pacientes los cuales sean adultos mayores para conocer sus datos

 db.PACIENTES.find({ GrupoEdad: ""Adulto Mayor"" });

```

## Avanzadas

``` js

// Muestra el detalle de la historia clinica con los mismos ids, en un nuevo campo llamado: Detalles
 db.HISTORIA_CLINICA.aggregate([
  { $lookup: {
    from: ""DETALLE_HISTORIA"",
    localField: ""id_historia_clinica"",
    foreignField: ""id_historia_clinica"",
    as: ""detalles""
  }}
]);


```


``` js

// Con unwind, quita el array de especialidades , y busca, específicamente, el nombre de la especialidad



 db.ESPECIALIDADES.aggregate([
  { $unwind: ""$Nombre"" }
]);



```




# Funciones

# 🤝 Contribuciones

- 👨‍💻 Juan Fernando Umaña  
- 👨‍💻 Omar Fernando Granados

---

# 📬 Licencia y Contacto

 
📧 Correo de contacto 1: [juanferumanaa@gmail.com](mailto:juanferumanaa@gmail.com)
 
📧 Correo de contacto 2: [ofergrapa@gmail.com](mailto:juanferumanaa@gmail.com)
