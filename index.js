#!/usr/bin/env node

const cmder = require("commander");
const chalk = require("chalk");
const download = require("download-git-repo");
const inquirer = require("inquirer");

const ora = require("ora");

const oraOpt = require("./progressAni");
const onDownload = require("./onDownload");
const onWorkspace = require("./onWorkspace");

const templateUrl = "github:oodavy41/visdataCompTemplate";

cmder
  .version(require("./package").version, "-v, --version")
  .command("init <name>")
  .option("-w --workspace", "add to workspace")
  .option("-s --set-version <string>", "set componment initialization version", "0.1")
  .option("-b --branch <string>", "branch of template", "master")
  .action((name, args) => {
    let gitUrl = `${templateUrl}#${args.branch}`;
    let oraProcess = ora(oraOpt);
    oraProcess.start();
    download(gitUrl, name, { clone: false }, err => {
      if (err) {
        oraProcess.fail("X_X");
        console.log(chalk.red("download fail:"), chalk.red(err));
      } else {
        oraProcess.succeed("^_^");
        onDownload(name, args);
        onWorkspace(name, args);
        console.log(chalk.green("download success"));
      }
    });
  });
cmder.parse(process.argv);
