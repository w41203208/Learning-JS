// examples/basic-usage.js
const cli = require("cac")();

cli.option("--type <type>", "Choose a project type", {
  default: "node",
});
cli.help();
cli.parse();
