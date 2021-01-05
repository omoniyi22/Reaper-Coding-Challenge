const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {

  let all_sales = {}

  let X_Box_Path = path.join(__dirname, '../../results/X_Box/');
  let X_Box_files = fs.readdirSync(X_Box_Path)
  let xbox_sales = []

  X_Box_files.reverse().forEach(function (file) {
    let result = fs.readFileSync(X_Box_Path + file)
    result = JSON.parse(result)
    xbox_sales.push(result)
  });
  all_sales.xbox = xbox_sales


  let PS_5_Path = path.join(__dirname, '../../results/PS_5/');
  let PS_5_files = fs.readdirSync(PS_5_Path)
  let ps5_sales = []

  PS_5_files.reverse().forEach(function (file) {
    let result = fs.readFileSync(PS_5_Path + file)
    result = JSON.parse(result)
    ps5_sales.push(result)
  });
  all_sales.ps5 = ps5_sales
  res.render('x_box', { all_sales })
}