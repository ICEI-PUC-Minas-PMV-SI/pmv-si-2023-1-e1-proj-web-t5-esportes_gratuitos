const fs = require('fs');
const path = require('path')

const jsonsInDir = fs.readdirSync('./mocks').filter(file => path.extname(file) === '.json');

let db = {};

jsonsInDir.forEach(file => {
  const fileData = fs.readFileSync(path.join('./mocks', file));
  const fileName = file.replace('.json', '');
  const json = JSON.parse(fileData.toString());

  db[fileName] = json;
});

module.exports = db