const chalk = require("chalk");
module.exports = {
  prefixText: chalk.green("downloading from:" + gitUrl + "\n"),
  spinner: {
    interval: 700, // Optional
    frames: ["0_0.", "o_o..", "-_-...", "-_-....", "-q-..zzZ"]
  },
  color: "yellow"
};
