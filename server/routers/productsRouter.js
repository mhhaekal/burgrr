const express = require("express");
const Router = express.Router();

// Import All Controller
const { productsController } = require("../controllers");
const upload = require("./../middleware/upload");
const { verify } = require("./../lib/jwt");

Router.post("/add", upload, productsController.createProduct);
Router.post("/addcategory", productsController.createCategory);
Router.get("/category", productsController.getCategory);
Router.get("/all", productsController.getAllProducts);
Router.get("/all/:id", productsController.getProductById);
Router.get("/filtered", productsController.getAllProductsByCat);
Router.get("/allcart", productsController.getCart);
Router.post("/cart/:productId", productsController.addToCart);
Router.post("/minuscart/:productId", productsController.minusCart);
Router.patch("/deleteproduct/:productId", productsController.deleteProduct);
Router.patch("/deletecategory/:categoryId", productsController.deleteCategory);

module.exports = Router;
