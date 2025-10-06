const mongo = require("mongodb");

const mongoClient = mongo.MongoClient;

require("dotenv").config();

let _database;

const mongoDBConnect = (callback) => {
  mongoClient
    .connect(process.env.MONGO_URI)
    .then((client) => {
      callback();
      _database = client.db("airbnb");
    })
    .catch((error) => {
      console.log("Error while connecting to the database : ", error);
    });
};

const getDatabase = () => {
  if (!_database) {
    throw new Error("Unable to connect to the database");
  }
  return _database;
};

exports.mongoDBConnect = mongoDBConnect;
exports.getDatabase = getDatabase;
