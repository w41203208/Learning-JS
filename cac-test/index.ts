const cli = require("cac")();

cli.option("--type [type]", "Choose a project type", {
  default: "node",
});
cli.option("--name <name>", "Provide your name");

cli
  .command("lint [...files]", "Lint files")
  .option("test", "test")
  .action((files: any, options: any) => {
    console.log(files, options);
  });

// Display help message when `-h` or `--help` appears
cli.help();
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version("0.0.0");

cli.parse();
