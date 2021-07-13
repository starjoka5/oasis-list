const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const Categorias = require("./categorias");
const CentrosConsumoHorarios = require("./centros_consumo_horarios");
const Hoteles = require("./hoteles");


const CentrosConsumo = sequelize.define(
  "centros_consumo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    conceptoEs: {
      field: "concepto_es",
      type: DataTypes.STRING,
    },
    conceptoEn: {
      field: "concepto_en",
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    imgPortada: {
      field: "img_portada",
      type: DataTypes.STRING,
    },
    categoriaId: {
      field: "categoria_id",
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "centros_consumo",
  }
);
CentrosConsumo.belongsTo(Categorias, { foreignKey: "categoria_id" });
CentrosConsumo.hasOne(CentrosConsumoHorarios, { foreignKey: "centro_consumo_id" });
CentrosConsumo.belongsToMany(Hoteles,{through:'centros_consumo_detalles',foreignKey:'centro_consumo_id',otherKey:'hotel_id'})
module.exports = CentrosConsumo;
