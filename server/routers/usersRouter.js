const express = require('express');
const Router = express.Router();

// Import All Controller
const { usersController } = require('../controllers');

Router.get('/', usersController.login);
module.exports = Router;