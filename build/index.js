"use strict";

var _require = require("child_process"),
  exec = _require.exec;
var chalk = require("chalk");
var command = process.argv[2];
if (command === "build") {
  console.log("".concat(chalk.gray("\u250C"), " ").concat(chalk.gray("linterf-scripts"), " \u259E ").concat(chalk.hex("#00ADB5")(command), " ").concat(chalk.gray("\u2510")));
  exec("mkdir xcopy", {
    cwd: __dirname.replace("\\bin", "")
  }, function (error) {
    if (!error) exec("xcopy ".concat(process.argv[1], " ").concat(__dirname.replace("\\bin", ""), "\\xcopy /E"), {
      cwd: "./"
    }, function (error) {
      if (!error) console.log("".concat(chalk.gray("\u2514\u2504>"), " build start"));
      if (!error) exec("npx --plugins=transform-jsx-syntax.js babel xcopy --out-dir build", {
        cwd: __dirname.replace("\\bin", "")
      }, function (error) {
        if (!error) console.log("".concat(chalk.gray("\u2514\u2504>"), " success."));
        if (!error) exec("rmdir /s /q xcopy", {
          cwd: __dirname.replace("\\bin", "")
        }, function (error) {
          if (!error) exec("node .", {
            cwd: __dirname.replace("\\bin", "\\build")
          });
        });
      });
    });
  });
}