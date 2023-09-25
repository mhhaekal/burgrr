const express = require("express");
const Router = express.Router();

// Import All Controller
const { usersController } = require("../controllers");
const { verify, verifyByParams } = require("./../lib/jwt");
const upload = require('./../middleware/upload');

const { validation, validate, validationHeaders } = require("./../lib/validator");

Router.post("/login", validation(), validate, usersController.login);
Router.post("/register", validation(), validate, usersController.register);
Router.post("/req", usersController.reqChangePassword);
Router.get("/verify/", verify, usersController.verifyToken);
Router.get("/verifyJWT/:token", verifyByParams, usersController.verifyToken);
Router.get("/changepass", verify, validationHeaders, usersController.checkPassword);
Router.get("/employee", usersController.getEmployeeData);
Router.get("/data/:token", verify, usersController.getTokenUser);
Router.patch('/change-picture/:idImage', upload, usersController.updateImage);
module.exports = Router;
