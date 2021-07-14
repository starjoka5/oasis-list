
const routes = require("./routes");
function init(app) {
  app.use("/api", routes);
}

module.exports = {
  init,
};
