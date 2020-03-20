var Fluxible = require("fluxible");
var Application = require("./components/Application");

var NameStore = require("./store/NameStore");

var App = new Fluxible({
  component : Application
});

App.registerStore(NameStore);

module.exports = App;