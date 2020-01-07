const fs = require("fs");
const handlebars = require("handlebars");
module.exports = (name, args) => {
  const fileName = `./package.json`;
  if (fs.existsSync(fileName)) {
    const package = fs.readFileSync(fileName).toString();
    if (package.workspaces) {
      package.workspaces && package.workspaces.push(name);
      fs.writeFileSync(fileName, JSON.stringify(package, " ", 2));
    }
  }
};
