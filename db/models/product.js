var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: Schema.ObjectId,
  productID: Number,
  variants: [{color: String, images: Array}]
});

const Product = mongoose.model('Product', productSchema);

var findAll = function (callback) {
  Product.find({}, callback);
};

//takes a product ID: these are shared across color variations for a product
// var findProduct = function (id, callback) {
//   Product.find({
//     productID: id
//   }, callback);
// };

var insertProduct = async function (product, callback) {
  Product.create(product, callback);
};

module.exports.findAll = findAll;
module.exports.insertProduct = insertProduct;