const express = require("express");
const { getLogInPage, postUserLogin } = require("../controllers/logIn.controller");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// get log in page
router.get("/userLogin", getLogInPage)

// user log in
router.post("/userLogin", body('password').isLength({
    min: 4
}), body('username').isLength({
    min: 4
}), postUserLogin)

module.exports = router;