const express = require("express");
const Categorias = require("../models/categorias");
const router = express.Router();

//const Hoteles = require('../models/hoteles');
const CentrosConsumo = require("../models/centros_consumo");
const Detalles = require("../models/centros_consumo_detalles");
//const Hoteles = require("../models/hoteles");
const CentrosConsumoHorarios = require("../models/centros_consumo_horarios");
const getAllByCategoria = (req, res) => {
  const { id, categoria } = req.params;

  CentrosConsumo.findAll({
    include: [
      {
        model: Categorias,
        where: {
          categoria: categoria,
        },
      },
      {
        model: Detalles,
        where: { hotelId: id },
      },
    ],
  }).then((centros) => {
    res.json(centros);
  });
};

router.get("/hotel/:id/centro-consumo/:categoria", getAllByCategoria);
module.exports = router;
