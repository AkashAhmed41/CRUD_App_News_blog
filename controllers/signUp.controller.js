const db = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const {body, validationResult} = require("express-validator")

const path = require("path");

const getSignUpPage = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/signUp.html"));
}

const postUserSignUp = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                "message": "Enter email and password in correct format",
                // "errors": errors.array()
            });
        }

        let { name, email, username } = req.body;

        const password = await bcrypt.hash(req.body.password, 10);

        var userid = uuidv4();

        function isRegistered(callback) {

            var query = "select email from tbl_user where email = ? ";

            db.query(query, [email], (err, results) => {

                if (results.length == 1) {
                    res.status(409).json({
                        message: `User with email ${email} is already registered`,
                    });
                }
                else {
                    var query = "select username from tbl_user where username = ? ";

                    db.query(query, [username], (err, results) => {

                        if (results.length == 1) {
                            res.status(409).json({
                                message: `username ${username} is not available`,
                            });
                        }
                        else {
                            callback();
                        }

                    });
                }
            });
        };

        isRegistered(callback);

        function callback() {
            var query = "insert into tbl_user values (?, ?, ?, ?, ?)";
            db.query(query, [userid, name, email, username, password], (err, results) => {
                if (!err) {
                    res.status(201).json({
                        success: `Registration successful for ${name}`,
                        results
                    });
                }
                else {
                    console.log(err);
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            "message": "Registration failed!"
        });
        console.log("Registration Failed \n Error: " + error);
    }

};

module.exports = { getSignUpPage, postUserSignUp }