const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const Propiedades = require("./propiedades");

const Hoteles = sequelize.define(
  "hotel",
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
    clave: {
      type: DataTypes.STRING,
    },
    propiedadId: {
      field:'propiedad_id',
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "hoteles",
  }
);
Hoteles.belongsTo(Propiedades, { foreignKey: "propiedad_id" });
module.exports = Hoteles;
