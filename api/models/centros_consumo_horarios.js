const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const CentrosConsumo = require("./centros_consumo");

const CentrosConsumoHorarios = sequelize.define(
  "horarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    centroConsumoId: {
      field: "centro_consumo_id",
      type: DataTypes.INTEGER,
    },
    dia: {
      type: DataTypes.ENUM('0','1','2','3','4','5','6'),
    },
    horaInicio: {
      field: "hora_inicio",
      type: DataTypes.TIME,
    },
    horaFinal: {
      field: "hora_final",
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
    tableName: "centros_consumo_horarios",
  }
);
/*CentrosConsumoHorarios.belongsTo(CentrosConsumo, {
  foreignKey: "centro_consumo_id",
});*/
module.exports = CentrosConsumoHorarios;
