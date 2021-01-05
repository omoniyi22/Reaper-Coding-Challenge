const PS_5_Controller = require('./../controllers/PS_5_Controller')

module.exports = (router) => {
  router.route('/ps5')
    .get(PS_5_Controller)
}