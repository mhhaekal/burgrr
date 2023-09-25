const express = require("express");
const Router = express.Router();

// Import All Controller
const { usersController, productsController } = require("../controllers");
const { verify, verifyByParams } = require("./../lib/jwt");

const { validation, validate, validationHeaders } = require("./../lib/validator");

Router.post("/login", validation(), validate, usersController.login);
Router.post("/register", validation(), validate, usersController.register);
Router.post("/req", usersController.reqChangePassword);
Router.post("addProduct", productsController.addProductToCart);
Router.get("/verify/", verify, usersController.verifyToken);
Router.get("/verifyJWT/:token", verifyByParams, usersController.verifyToken);
Router.get("/changepass", verify, validationHeaders, usersController.checkPassword);
module.exports = Router;
