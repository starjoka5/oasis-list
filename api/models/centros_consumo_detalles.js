const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const CentrosConsumo = require("./centros_consumo");
const Hoteles = require("./hoteles");

const CentrosConsumoDetalles = sequelize.define(
  "detalle",
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
    hotelId: {
      field: "hotel_id",
      type: DataTypes.INTEGER,
    },
    destacado: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "centros_consumo_detalles",
  }
);
//CentrosConsumoDetalles.belongsTo(Hoteles, { foreignKey: "hotel_id" });
/*CentrosConsumoDetalles.belongsTo(CentrosConsumo, {
  foreignKey: "centro_consumo_id",
});*/
module.exports = CentrosConsumoDetalles;
