const mongoose = require("../database/connection");
const Schema = mongoose.Schema;
const products = require("../database/db");

const productSchema = new Schema({
  name: String,
  img: String,
  price: Number,
  description: String,
  category: String
});

const Product = mongoose.model("Product", productSchema);

products.forEach((product) => {
  const { name, img, price, description, category } = product;
  Product.insertMany([
    new Product({
      name,
        img,
        price,
        description,
        category
    }).populate((error) => {
      if (error) console.error(error);
      else console.log("Data save");
    }),
  ]);
});

module.exports = Product;