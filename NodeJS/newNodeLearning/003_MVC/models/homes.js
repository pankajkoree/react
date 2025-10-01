const path = require("path");
const fs = require("fs");
const rootDirectory = require("../utils/pathUtil");

const registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  // this in previous worked well, but due to registeredHomes not being there, it won't work so doing new way
  // save() {
  //   registeredHomes.push(this);
  //   const homeDataPath = path.join(rootDirectory, "data", "homes.json");
  //   fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
  //     console.log(`File writing process : `, error);
  //   });
  // }

  save() {
    Home.fetchAllThings((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDirectory, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log(`File writing process : `, error);
      });
    });
  }

  // this works fine but when we reload the page, it doesn't fetch the things from json file so changing it
  // static fetchAllThings() {
  //   return registeredHomes;
  // }

  static fetchAllThings(callback) {
    const homeDataPath = path.join(rootDirectory, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("Reading from file : ", err, JSON.parse(data));
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
