const mysql = require("../utils/mysql_db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

function generateAccessToken(username) {
    return jwt.sign({username}, process.env.SECRET_KEY, { expiresIn:"30s" });
}

function compare(username, password, hash, res) {
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      const token = generateAccessToken(username)
      res.json({ status: true, message: "login successfully", token});
    } else {
      res.json({ status: false, message: "invalid password" });
    }
  });
}

const login = (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    mysql.db.execute(
      "SELECT * FROM `users` WHERE username = ?",
      [username],
      (err, result) => {
        if (err) return res.json({ status: false, message: err.message });
        if (result.length != 0) {
          //have username
          compare(username, password, result[0].password, res);
        } else {
          //not have username
          return res.json({
            status: false,
            message: "This username does not exist.",
          });
        }
      }
    );
  }
};

module.exports.login = login;
