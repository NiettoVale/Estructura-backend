# Estructura Backend con Express, Sequelize, PostgreSQL y JavaScript

Este repositorio proporciona una estructura básica para un proyecto backend utilizando Express, Sequelize, PostgreSQL y JavaScript. La estructura del proyecto está diseñada para agilizar el proceso de creación, permitiéndote comenzar rápidamente con el desarrollo de tu aplicación.

## Estructura de Carpetas

- **src**: Directorio principal del código fuente.

  - **controllers**: Controladores de Express para manejar la lógica de la aplicación.
  - **models**: Modelos de Sequelize para la interacción con la base de datos.
  - **routes**: Rutas de Express para definir las API y manejar las solicitudes HTTP.
  - **dataBase.js**: Configuración de la base de datos utilizando Sequelize.
  - **app.js**: Archivo principal de la aplicación Express.

- **index.js**: Punto de entrada de la aplicación.
- **package.json**: Archivo de configuración de npm con las dependencias y scripts.
- **package-lock.json**: Bloquea las versiones exactas de las dependencias instaladas.
- **.gitignore**: Archivo que especifica patrones de archivos que git debe ignorar.

## Scripts

- **start**: Inicia la aplicación con Node.
- **dev**: Inicia la aplicación en modo de desarrollo con nodemon.

## Dependencias Principales

- **express**: Marco web para Node.js.
- **sequelize**: ORM para Node.js, compatible con varias bases de datos relacionales.
- **pg**: Controlador de PostgreSQL para Sequelize.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.
- **cors**: Middleware para habilitar el intercambio de recursos entre dominios.
- **morgan**: Middleware para registrar solicitudes HTTP en el desarrollo.
- **pg-hstore**: Serializa datos JSON en hstore, un formato de datos para PostgreSQL.

## Instalación

1. Clona el repositorio: `git clone https://github.com/NiettoVale/Estructura-backend.git`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` y configura las variables de entorno necesarias:

   ```plaintext
   DB_NAME=nombre_de_tu_base_de_datos
   DB_PASSWORD=contraseña_de_tu_base_de_datos
   DB_HOST=localhost
   DB_USER=nombre_de_usuario_de_tu_base_de_datos
   ```

## Uso

- Ejecuta la aplicación en modo de desarrollo: `npm run dev`
- Inicia la aplicación en producción: `npm start`
