const mongoose = require('mongoose');
const db = require('./db/models/product.js');
// import db saver - make db saver async

mongoose.connect('mongodb://localhost/sadida');

const nmd = [
  {
    color: 'Collegiate Navy / Scarlet / Cloud White',
    images: ['https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_01_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_010_hover_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_02_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_03_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_04_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_05_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_06_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_41_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_42_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_43_detail.jpg'],
  },
  {
    color: 'Grey Four / Grey Four / Core Black',
    images: ['https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_01_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_010_hover_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_02_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_03_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_04_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_05_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_06_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_41_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_42_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_black/NMD_R1_Shoes_Grey_FV1733_43_detail.jpg'],
  },
  {
    color: 'Core Black / Supplier Colour / Core Black',
    images: ['https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_01_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_010_hover_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_02_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_03_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_04_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_05_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_06_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_41_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_42_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_pur/NMD_R1_Shoes_Black_FV8732_43_detail.jpg'],
  },
];

const ss = [
  {
    color: 'Cloud White / Blue / Gum',
    images: ['https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_01_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_010_hover_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_02_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_03_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_04_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_05_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_06_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_41_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_42_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_blue/Stan_Smith_Shoes_White_FU9600_43_detail.jpg'],
  },
  {
    color: 'Cloud White / Green / Gum',
    images: ['https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_01_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_010_hover_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_02_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_03_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_04_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_05_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_06_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_41_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_42_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/ss_green/Stan_Smith_Shoes_White_FU9599_43_detail.jpg'],
  },
];

const backpack = [
  {
    color: 'Signal Orange',
    images: ['https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/backpack/Utility_Backpack_Orange_EV7559_01_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/backpack/Utility_Backpack_Orange_EV7559_02_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/backpack/Utility_Backpack_Orange_EV7559_04_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/backpack/Utility_Backpack_Orange_EV7559_05_hover_standard.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/backpack/Utility_Backpack_Orange_EV7559_41_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/backpack/Utility_Backpack_Orange_EV7559_42_detail.jpg', 'https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/backpack/Utility_Backpack_Orange_EV7559_43_detail.jpg'],
  },
];

const imageArrays = [nmd, ss, backpack];

const createProduct = function createProduct(id) {
  const product = {
    productID: id,
    variants: [],
  };
  // product id is id
  // variants: []
  // pick a random index [i] from image arrays
  const productIndex = id % 3;
  // pick a random number [j] based on selected index length
  const numVariants = Math.ceil(Math.random() * imageArrays[productIndex].length);
  // push j elements of array at index i into images
  for (let i = 0; i < numVariants; i += 1) {
    product.variants.push(imageArrays[productIndex][i]);
  }
  return product;
};

const seedDB = async function seedDB(numRecords) { // make this async
  // initiate a count at 1
  let count = 1;
  // while the count is less than num records keep going
  while (count <= numRecords) {
    const dbProduct = createProduct(count);
    db.insertProduct(dbProduct);
    console.log('product inserted');
    count += 1;
  }

  mongoose.disconnect();
  // run create product
  // run and await dbsaver
  // increment count by 1
};

seedDB(100);
