let puppeteer = require('puppeteer')
let $ = require("cheerio")
let product_url = require('./productUrl')

async function configureBrowser(product_name, page_num) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(product_url(product_name, page_num));
  return page
}


/** check_products_sold
 * 
  * @desc retrieve 4 pages of all products searched
  *
  * @param {Array} product_names Array of Strings
  * 
  * @returns {Array} return 4 pages x 200 product = 800 products
  * 
  */

module.exports.check_product_sold = async (product_names, callback) => {
  let page, html, all_sales = []

  for (let product_name of product_names) {

    let start = new Date().getTime();
    let product_sales = []

    for (let page_num = 1; page_num <= 4; page_num++) {

      page = await configureBrowser(product_name, (page_num))
      html = await page.evaluate(() => document.body.innerHTML)
      await page.reload();

      $('.s-item', html).each(function () {
        let product_sold = {
          name: $('.s-item__title', this).text().replace(/\\/g, "_"),
          sold_on: $('.POSITIVE:contains("Sold")', this).text(),
          price: $('.POSITIVE:contains("$")', this).text(),
        }

        let { name, sold_on, price } = product_sold
        if (name && sold_on && price) {
          product_sales.push(product_sold)
        }
      })
    }
    let end = new Date().getTime();

    let result_details = {
      fetched_on: Date().slice(0, 24),
      product_name,
      total: product_sales.length,
      fetch_duration: `${((end - start) / 1000)}sec`,
    }
    product_sales.unshift(result_details)
    all_sales.push(product_sales)
  }

  callback(all_sales, true)
  await page.close()
}