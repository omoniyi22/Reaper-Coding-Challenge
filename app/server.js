const express = require('express')
const app = express()
const Pages = require('./pages/index');
const cors = require('cors')
const router = express.Router();
const { Routes } = require("./routes/index")
const { ProductFetcher } = require('./services/ProductFetcher')
const path = require('path')

require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

Routes(router);
ProductFetcher.DailyJob()

app.use('/api/v1', router);

app.get('*', Pages)

app.listen(process.env.PORT, () => console.log('Server running'))