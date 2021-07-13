const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const Hoteles = require("./hoteles");

const Locaciones = sequelize.define(
  "locacion",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    locacion: {
      type: DataTypes.STRING,
    },
    hotelId: {
      field: "hotel_id",
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "locaciones",
  }
);
Locaciones.belongsTo(Hoteles, { foreignKey: "hotel_id" });
module.exports = Locaciones;
