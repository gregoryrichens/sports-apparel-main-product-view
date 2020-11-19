const express = require('express');
const mongoose = require('mongoose');
const controllers = require('../db/controllers/product.js');

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

app.use(express.static('public'));
app.use(express.json());

app.get('/test', controllers.testGet);

// app.get for all products
app.get('/allProducts', controllers.allProducts);

// app.get for one product
app.get('/oneProduct', controllers.oneProduct);

// app.get for test environment duplicates above with productID: 21
app.get('/oneProductControl', controllers.oneProductControl);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Taking off every zig at http://localhost:${PORT}`);
});
