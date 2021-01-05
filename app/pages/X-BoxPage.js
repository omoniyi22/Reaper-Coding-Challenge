const XBOX_View = require('../controllers/X_Box')

module.exports = (router) => {
  router.route('/X_BOX')
    .get(XBOX_View)
}