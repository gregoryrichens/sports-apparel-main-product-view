const mongoose = require('mongoose');
const supertest = require('supertest');
const dummyData = require('../dummyData.js');
const model = require('../db/models/product.js');
const createServer = require('./server.js');

describe('routing test suite', () => {
  beforeEach(async () => {
    await mongoose.connect('mongodb://localhost/jest', { useNewUrlParser: true })
      .then(() => {
      })
      .catch((err) => console.log(err));
  });

  afterEach(async () => {
    await mongoose.connection.db.dropDatabase()
      .then(mongoose.connection.close())
      .catch((err) => console.log(err));
  });

  const app = createServer();

  // eslint-disable-next-line jest/consistent-test-it
  test('get /findOne should return one product with certain qualities', async () => {
    const product = await model.insertProduct({
      productID: dummyData.productID,
      variants: dummyData.variants,
    });

    await supertest(app)
      .get('/oneProduct')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body).toHaveLength(1);
        expect(response.body[0].productID).toEqual(dummyData.productID);
        expect(response.body[0].variants[0]).toEqual(dummyData.variants[0]);
      });
  });

  app.foo.close();
});
