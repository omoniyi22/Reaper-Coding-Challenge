// This will be our application entry. We'll setup our server here.
const open = require('open');
const app = require('./app');



require('dotenv').config();

const port = process.env.PORT || 5000;
const server = app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(err);
    // open(`http://localhost:${port}`);
  }
});
