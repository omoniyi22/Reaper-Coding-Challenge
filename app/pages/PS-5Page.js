const PS_5_View = require('../controllers/PS_5')

module.exports = (router) => {
  router.route('/PS_5')
    .get(PS_5_View)
}