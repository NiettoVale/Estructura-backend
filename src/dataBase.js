// Importaciones necesarias:
require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;

// Creación de la base de datos:
const sequelize = new Sequelize(
  `${DB_USER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

  {
    logging: false,
  }
);

// Inicialización de los modelos:

// Relaciones:

// Exportación:
module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
