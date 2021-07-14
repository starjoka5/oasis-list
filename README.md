# Lista de centros de consumo de Hoteles Oasis

Este es un proyecto creado utilizando create-react-app, con una API hecha utilizando express con NodeJS

##

<a target="_blank" href="https://oasis-hotels.herokuapp.com/">
<img src="https://raw.githubusercontent.com/starjoka5/oasis-list/5ab8dbdfec333360e8e4c758839ea1ad39a2c50a/public/screenshot_ol.png"/></a>

## Estructura del proyecto

```
oasis-list

├── api
│   ├── config
│   ├── ├── db.js
│   ├── models
│   |   ├── ...
│   ├── routes
│   |   ├── index.js
│   |   ├── routes.js
├── public
│   ├── ...
├── src
│   ├── components
│   |   ├── ...
│   ├── services
│   |   ├── ...
│   ├── styles
│   |   ├── utils.scss
│   ├── App.js
│   ├── App.scss
│   ├── config.js
│   ├── index.js
├── app.js
├── package.json
└── yarn.lock

```

## Demo

En este enlace se puede ver una version en linea de la aplicacion:
<a target="_blank" href="https://oasis-hotels.herokuapp.com/">
Demo
</a>

## Instalar

Comandos para poder instalar de manera local la aplicacion:

#### `yarn`

Para instalar todas las dependencias del proyecto

## Configuración

Declarar las siguientes variables de entorno o cambiar las configuraciones dentro de los archivos de configuracion.

```
db.js /* Archivo de conexion a base de datos */
├── api
│   ├── config
│   ├── ├── db.js
```

### Variables de entorno:

#### `database_name`: Nombre de la base de datos

#### `database_host`: Direccion del host donde se encuentra la base de datos

#### `database_user`: Nombre de usuario de la base de datos

#### `database_pwd`: Contraseña del usuario de la base de datos

##

```
config.js /* Archivo de configuracion de los datos del lado del cliente */
├── src
│   ├── ...
│   ├── config.js
│   ├── ...
```

### Variables de entorno:

#### `API`: Url de los endpoints para obtener los datos

## Iniciar aplicacion

### `yarn start`

Si desea iniciar el proyecto de React. Y luego iniciar el servidor de NodeJS

### `yarn build`

Si desea compilar los archivos de React. Y luego iniciar el servidor e NodeJS

### `node app.js`

Iniciar servidor de NodeJS.
