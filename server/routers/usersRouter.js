const express = require("express");
const Router = express.Router();

// Import All Controller
const { usersController } = require("../controllers");
const { verify } = require("./../lib/jwt");

const { validation, validate } = require("./../lib/validator");

Router.post("/login", validation(), validate, usersController.login);
Router.post("/register", validation(), validate, usersController.register);
Router.get("/verify/:token", verify, usersController.verifyToken);
module.exports = Router;
