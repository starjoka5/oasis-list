const express = require("express");
const Categorias = require("../models/categorias");
const router = express.Router();
const CentrosConsumo = require("../models/centros_consumo");
const Detalles = require("../models/centros_consumo_detalles");
const CentrosConsumoHorarios = require("../models/centros_consumo_horarios");
const { getDay, parseISO } = require("date-fns");
const Hoteles = require("../models/hoteles");


const getAllHoteles = (req, res) => {
  Hoteles.findAll().then((hoteles) => {
    res.json(hoteles);
  });
};

const getAllByCategoria = (req, res) => {
  const { id } = req.params;
  const { filterDate, categoria } = req.query;

  const day = getDay(parseISO(filterDate));

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
      {
        model: CentrosConsumoHorarios,
        where: {
          dia: day.toString(),
        },
      },
    ],
  }).then((centros) => {
    res.json(centros);
  });
};

const getInfo = (req, res) => {
  const { filterDate } = req.query;
  const day = getDay(parseISO(filterDate));
  CentrosConsumo.findOne({
    include: [
      {
        model: CentrosConsumoHorarios,
        where: {
          dia: day,
        },
      },
    ],
  }).then((centro) => {
    res.json(centro);
  });
};

router.get("/hoteles", getAllHoteles);
router.get("/hoteles/:id/centros-consumo", getAllByCategoria);
//router.get("/centro-consumo", getInfo);
module.exports = router;
