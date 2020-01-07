const fs = require("fs");
const handlebars = require("handlebars");
module.exports = (name, args) => {
  const fileName = `${name}/package.json`;
  const meta = {
    name: name,
    data: {
      widgetName: name,
      version: args.setVersion
    }
  };
  if (fs.existsSync(fileName)) {
    const content = fs.readFileSync(fileName).toString();
    const result = { ...JSON.parse(content), ...meta };
    fs.writeFileSync(fileName, JSON.stringify(result, " ", 2));
  }
};
