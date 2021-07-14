const config = require("../config/db");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  config.database_name,
  config.database_user,
  config.database_pwd,
  {
    host: config.database_host,
    dialect: "mysql",
    logging: null,
    dialectOptions: {
      timezone: "-05:00",
    },
    timezone: "-05:00",
  }
);

sequelize
  .authenticate()
  .then(() => {
    
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
module.exports = { Sequelize, sequelize };
