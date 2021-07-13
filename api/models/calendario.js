const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Calendario = sequelize.define(
  "calendario",
  {
    id_: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    horaInicio: {
      field: "hora_inicio",
      type: DataTypes.TIME,
    },
    horaFinal: {
      field: "hora_final",
      type: DataTypes.TIME,
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    dia: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "calendario",
  }
);
module.exports = Calendario;
