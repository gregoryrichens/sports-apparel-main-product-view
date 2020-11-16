/* eslint-disable no-restricted-syntax */
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

const connect = async function connect() {
  const uri = await mongod.getConnectionString();

  const mongooseOpts = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
  };

  await mongoose.connect(uri, mongooseOpts);
};

const closeDatabase = async function closeDatabase() {
  await mongoose.connection.dropDatabase();
  await mongoose.connetion.close();
  await mongod.stop;
};

const clearDatabase = async function clearDatabase() {
  const tables = mongoose.connection.collections;

  // eslint-disable-next-line no-restricted-syntax
  // eslint-disable-next-line guard-for-in
  for (const key in tables) {
    // eslint-disable-next-line no-await-in-loop
    await tables[key].deleteMany();
  }
};

module.exports.connect = connect;
module.exports.closeDatabase = closeDatabase;
module.exports.clearDatabase = clearDatabase;
