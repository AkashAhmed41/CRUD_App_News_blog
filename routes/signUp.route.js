const express = require("express");
const { body, validationResult } = require("express-validator")

const { getSignUpPage, postUserSignUp } = require("../controllers/signUp.controller");


const router = express.Router();

// get sign up page
router.get("/userRegistration", getSignUpPage);

// User sign up
router.post("/userRegistration", body('email').isEmail().normalizeEmail(),
    body('password').isLength({
        min: 4
    }), body('username').isLength({
        min: 4
    }), postUserSignUp);

module.exports = router;

