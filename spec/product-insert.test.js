const dummyData = require('../dummyData.js');
const db = require('./db.js');
const model = require('../db/models/product.js');

const sampleProduct = {
  productID: dummyData.productId,
  variants: dummyData.variants,
};

describe('db test suite', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterEach(async () => {
    await db.clearDatabase();
  });

  afterAll(async () => {
    await db.closeDatabase();
  });

  describe('product', () => {
    it('can create a db entry without throwing an error', async () => {
      expect.hasAssertions();
      expect(async () => model.insertProduct(sampleProduct))
        .not
        .toThrow();
    });
  });
});
