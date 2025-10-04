const path = require("path");
const fs = require("fs");
const rootDirectory = require("../utils/pathUtil");
const Favourites = require("./favourites");

const homeDataPath = path.join(rootDirectory, "data", "homes.json");

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
      if (this.id) {
        //edit home
        registeredHomes = registeredHomes.map((home) =>
          home.id === this.id ? this : home
        );
      } else {
        // add home
        this.id = Math.floor(Math.random() * 10000 + 1).toString();
        registeredHomes.push(this);
      }
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
    fs.readFile(homeDataPath, (err, data) =>
      callback(!err ? JSON.parse(data) : [])
    );
  }

  static findById(homeId, callback) {
    Home.fetchAllThings((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    Home.fetchAllThings((homes) => {
      homes = homes.filter((home) => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), (error) => {
        Favourites.deleteById(homeId, callback);
      });
    });
  }
};
