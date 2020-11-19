const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productID: Number,
  variants: Array,
});

const Product = mongoose.model('Product', productSchema);

const findAll = function findAll(callback) {
  Product.find({}, callback);
};

const findOne = function findOne(callback) {
  const id = Math.ceil(Math.random() * 100);
  Product.find({
    // productID: 21
    productID: id,
  }, callback);
};

const findOneControl = function findOneControl(callback) {
  Product.find({
    productID: 21,
  }, callback);
};

const insertProduct = async function insertProduct(product) {
  await Product.create(product)
    .then(console.log('product inserted'))
    .catch((err) => console.error(err));
};

module.exports.findAll = findAll;
module.exports.findOne = findOne;
module.exports.insertProduct = insertProduct;
module.exports.Product = Product;
module.exports.findOneControl = findOneControl;
