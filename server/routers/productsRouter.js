const express = require("express");
const Router = express.Router();

// Import All Controller
const { productsController } = require("../controllers");
const upload = require("./../middleware/upload");
const { verify } = require("./../lib/jwt");

Router.post("/add", upload, productsController.createProduct);
Router.post("/addcategory", productsController.createCategory);
Router.get("/category", productsController.getCategory);
Router.patch("/editcategory", productsController.editCategory);
Router.get("/all", productsController.getAllProducts);
Router.get("/all/:id", productsController.getProductById);
Router.get("/filtered", productsController.getAllProductsByCat);
Router.get("/allcart", productsController.getCart);
Router.get("/addqty", productsController.plusQty);
Router.get("/minusqty", productsController.minusQty);
Router.patch("/saveCat", productsController.saveEditCat);
Router.post("/addProduct", productsController.addProductToCart);
Router.get("/getOneCat/:id", productsController.getOneCat);
Router.get("/getDataCart", productsController.getAllDataCart);
Router.get("/total", productsController.getTotal);
Router.post("/cart/:productId", productsController.addToCart);
Router.post("/minuscart/:productId", productsController.minusCart);
Router.patch("/deleteproduct/:productId", productsController.deleteProduct);
Router.patch("/deletecategory/:categoryId", productsController.deleteCategory);

module.exports = Router;
