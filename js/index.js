const fs = require('fs');

function prettify(name) {
  const names = JSON.parse(fs.readFileSync(__dirname + '/names.json'));
  return names[name] || name;
}

module.exports = prettify;
