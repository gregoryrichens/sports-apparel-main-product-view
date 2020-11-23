const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const controllers = require('../db/controllers/product.js');

const app = express();
const PORT = 3001;

mongoose.connect('mongodb://database/sadida')
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('db connected');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.error('connection error');
  });

app.use(express.static('public'));
app.use(express.json());

app.get('/test', controllers.testGet);

// app.get for all products
app.get('/allProducts', controllers.allProducts);

// app.get for one product
app.get('/api/products/:id/trackpinch', controllers.oneProduct);

app.get('/:id', ((req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('index.html sent');
    }
  })
}))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Taking off every zig at http://localhost:${PORT}`);
});
