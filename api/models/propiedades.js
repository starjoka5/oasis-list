const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const Propiedades = sequelize.define(
  "propiedad",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "propiedades",
  }
);
module.exports = Propiedades;
