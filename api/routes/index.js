const centroConsumo = require("./centro_consumo");
const hotel = require("./hotel");
function init(app) {
  app.use("/api", centroConsumo);
  app.use("/api", hotel);
}

module.exports = {
  init,
};
