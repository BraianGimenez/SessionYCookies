const express = require("express");
const router = express.Router();

// controllers
const {index,stored, welcome,login, destroy} = require("../controllers/indexController");
const usersValidator = require("../validator/usersValidator");

// index
router.get("/", index)
router.post("/",usersValidator ,stored)

// welcome
router.get("/welcome", welcome)

// login
router.get("/login",login);

// cookie
router.post("/destroy", destroy)
module.exports = router