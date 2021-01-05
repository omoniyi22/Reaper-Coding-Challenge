const PS_Page = require('./PS-5Page')
const XBOX_Page = require('./X-BoxPage')

const express = require('express')
const router = express.Router()

const Routes = (router) => {
  PS_Page(router)
  XBOX_Page(router)
}

Routes(router)

module.exports = router