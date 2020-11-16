const dummyData = require('../dummyData.js');
const db = require('./db.js');
const model = require('../db/models/product.js');

const sampleProduct = {
  productID: dummyData.productId,
  variants: dummyData.variants,
};

describe('product', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterEach(async () => {
    await db.clearDatabase();
  });

  afterAll(async () => {
    await db.closeDatabase();
  });

  it('can be created correctly', async () => {
    expect(async () => model.create(sampleProduct))
      .not
      .toThrow();
  });
});
