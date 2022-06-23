const express = require("express");

const { getHome, getProfile, updateProfile } = require("../controllers/user.controller");
const { checkLogin } = require("../middleware/authenticateLogin.middleware");
const { body, validationResult } = require("express-validator")

const router = express();

// get user home page
router.get("/home", checkLogin, getHome);

// get user profile page
router.get("/Profile", checkLogin, getProfile);

// update profile
router.put("/updateProfile", checkLogin, body('email').isEmail().normalizeEmail(),
    body('password').isLength({
        min: 4
    }), body('username').isLength({
        min: 4
    }), updateProfile);

module.exports = router;