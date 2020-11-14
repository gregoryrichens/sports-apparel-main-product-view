const express = require('express');
const mongoose = require('mongoose');
const Product = require('../db/models/product.js');

const app = express();
const PORT = 3002;

mongoose.connect('mongodb://localhost/sadida')
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('db connected');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.error('connection error');
  });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.on('open', ()=>{
//   console.log('db connected');
// });

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('All your base are belong to us');
});

// app.get for all products
app.get('/allProducts', (req, res) => {
  Product.findAll((err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(results);
    }
  });
});

// app.get for one product
app.get('/oneProduct', (req, res) => {
  Product.findOne((err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Taking off every zig at http://localhost:${PORT}`);
});
