var seedData = require('./seed_data.js');
var mongoose = require('mongoose');
var Gallery = require('./db/models/gallery.js');

mongoose.connect('mongodb://localhost/sadida');

var seedDB = function (data) {
  data.forEach((item) => {
    let dbItem = {
      productID: data['productID'],
      uniqueID: data['uniqueID'],
      color: data['color'],
      price: data['price'],
      salesPrice: data['salesPrice'],
      stars: data['stars'],
      numRatings: data['numRatings'],
      images: data['images']
    };
    Gallery.insertGallery(dbItem, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${results} inserted`);
      }
    });
  });
};

seedDB(seedData);