const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  let all_sales = []
  const directoryPath = path.join(__dirname, '../../results/PS_5/');

  let files = fs.readdirSync(directoryPath)

  files.reverse().forEach(function (file) {
    let result = fs.readFileSync(directoryPath + file)
    result = JSON.parse(result)
    all_sales.push(result)
  });

  res.status(200).json(
    all_sales
  )
}