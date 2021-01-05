let { CronJob } = require('cron')
let { check_product_sold } = require('../utils/bot')
const path = require('path');
const jsonFile = require('jsonfile')

module.exports.ProductFetcher = {
  async  DailyJob() {
    const directoryPath = path.join(__dirname, '../../results');
    try {
      let job = new CronJob('*/60 */23 * * *',
        async function () {
          console.log('I have started my daily job, Please hold on')
          check_product_sold(

            ['PS5', 'Xbox Series X'], (data, respose) => {
              if (respose) {
                data.forEach(data => {
                  if (data.length > 2) {
                    let file_name = `${Date().slice(0, 24).replace(/ /g, "_").replace(/:/g, "-")}.json`
                    const file = data[0].product_name === "PS5" ? `${directoryPath}/PS_5/${file_name}` : `${directoryPath}/X_Box/${file_name}`
                    jsonFile.writeFile(file, data, { spaces: 2 })
                      .then(res => {
                        console.log('Data generated')
                      }).catch(err => {
                        console.log({ err })
                      })
                  } else {
                    console.log('Data not generated')
                  }
                })
              }
            })

        }, null, true, null, null, true)
      job.start()
    } catch (error) {
      console.log({ error })
    }
  }
}
