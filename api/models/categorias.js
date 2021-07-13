const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const Categorias = sequelize.define(
  "categoria",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "categorias",
  }
);
module.exports = Categorias;
