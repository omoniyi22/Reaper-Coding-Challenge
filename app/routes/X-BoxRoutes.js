const X_Box_Controller = require('./../controllers/X_Box_Controller')

module.exports = (router) => {
  router.route('/xbox')
    .get(X_Box_Controller)
}