const express = require("express");
const router = express.Router();
const Hoteles = require("../models/hoteles");

const getAllHoteles = (req, res) => {
  Hoteles.findAll().then((hoteles) => {
    res.json(hoteles);
  });
};

router.get("/hoteles", getAllHoteles);
module.exports = router;
