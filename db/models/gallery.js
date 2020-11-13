var mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  _id: Schema.ObjectId,
  productID: String,
  uniqueID: String,
  color: String,
  price: Number,
  salesPrice: Number,
  stars: Number,
  numRatings: Number,
  images: [{mainUrl: String, description: String}]
});

const Gallery = mongoose.model('Gallery', gallerySchema);

var findAll = function (callback) {
  Gallery.find({}, callback);
};

//takes a product ID: these are shared across color variations for a product
var findProduct = function (id, callback) {
  Gallery.find({
    productID: id
  }, callback);
};

//takes an unique ID: these are unique in the database
var findItem = function (id, callback) {
  Gallery.find({
    uniqueID: id
  }, callback);
};

var insertGallery = function (gallery, callback) {
  Gallery.create(gallery, callback);
};

module.exports.findAll = findAll;
module.exports.findProduct = findProduct;
module.exports.findItem = findItem;
module.exports.insertGallery = insertGallery;