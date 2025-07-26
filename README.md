# Descripcion del proyecto 

- El proyecto consiste en el diseño de una base de datos de un sistema horpitalario, buscando la mejora y gestion de los pacientes, medicos, tratamientos, medicamentos,  inventario, areas especializadas, personal administrativo, visitas medicas, Historiales clinicos y personal general, utlizando bases de datos NOSQL  (MongoDB), Realizando la documentación respectiva de la base de datos, la implementación de la base de datos en MongoDB y las inserciones de los datos planteadas con base en los requerimeintos del sistema y modelos E-R.


<br>
<br>


# 💻 Tecnologias utilizadas
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="100" alt="MongoDB"/>

  <p>

  ---

<br>
<br>
<br>



  # 📝 Requisitos del sistema


##  Poseer un servidor de mongoDB Atlas y la ultima version de MongoDB

Visitar el siguiente enlace para crear unacuenta y adquirir un  servidor de MongoDB Atlas: https://www.mongodb.com/cloud/atlas ( en caso de no poseer cuenta)

--- 

<br>
<br>


# Instalación y configuración 

<br>

## 1. Tener instalado MongoDB Compass y MongoDB en el equipo donde se planean visualizar los datos
<br>
<br>


## 2. Tener Instalado Visual Code en el pc para poder previsualizar la información

<br>
<br>

## 3.Establecer la conexión en compas con el servidor de talas con la sigueinte ruta:


 mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_base_datos>?retryWrites=true&w=majority&appName=<nombre_app>


## 4. Descargar o leer el archivo ddl.json Para poder leer las instrucciones y abrir la terminal de MongoDB




## 5.  Descargar el archivo dml.json Hacer la inserción de datos en la terminal del pc:

 usando, primeramente el comando mongosh e insertar la siguiente información mongoimport --db NOMBRE_DB --collection NOMBRE_COLECCION --file RUTA/archivo.json --jsonArray , o ingresar el siguiente comando en la terminal de Mongo db para la insercion de los datos.

## 6. Visualizar las diferentes consultas que se encuentran en el archivo dql_select.json y ejecutarlas para comprobarlas

## 7. Revisar la documentación (Documentación.md) para enetender mejor la estructura del proyecto.