var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productID: Number,
  variants: Array
});

const Product = mongoose.model('Product', productSchema);

var findAll = function (callback) {
  Product.find({}, callback);
};

var findOne = function (callback) {
  let id = Math.ceil(Math.random() * 100);
  Product.find({
    productID: id
  }, callback);
};

var insertProduct = async function (product, callback) {
  Product.create(product, callback);
};

module.exports.findAll = findAll;
module.exports.findOne = findOne;
module.exports.insertProduct = insertProduct;