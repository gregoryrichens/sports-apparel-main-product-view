const express = require('express');
const controllers = require('../db/controllers/product.js');

module.exports = function createServer() {
  const app = express();
  const PORT = 5000;
  app.use(express.json());
  app.get('/test', controllers.testGet);
  app.get('/allProducts', controllers.allProducts);
  app.get('/oneProduct', controllers.oneProduct);
  app.get('/oneProductControl', controllers.oneProductControl);
  app.foo = app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`connected at http://localhost:${PORT}`);
  });

  return app;
};
