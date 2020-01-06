const fs = require("fs");
const handlebars = require("handlebars");
export default (name, args) => {
  const fileName = `./package.json`;
  if (fs.existsSync(fileName)) {
    const package = fs.readFileSync(fileName).toString();
    package.workspaces && package.workspaces.push(name);
    fs.writeFileSync(fileName, JSON.stringify(package, " ", 2));
  }
};
