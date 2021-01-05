const X_Box_Route = require('./X-BoxRoutes')
const PS_5_Route = require('./PS-5Routes')


module.exports.Routes = (router) => {
  X_Box_Route(router)
  PS_5_Route(router)
}