const Product = require('../models/product.js');

const testGet = (req, res) => {
  res.send('All your base are belong to us');
};

const allProducts = (req, res) => {
  Product.findAll((err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(results);
    }
  });
};

const oneProduct = (req, res) => {
  Product.findOne(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      console.log('hi');
      res.json(results);
    }
  });
};

// const oneProductControl = (req, res) => {
//   Product.findOneControl((err, results) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.json(results);
//     }
//   });
// };

module.exports.testGet = testGet;
module.exports.allProducts = allProducts;
module.exports.oneProduct = oneProduct;
// module.exports.oneProductControl = oneProductControl;
