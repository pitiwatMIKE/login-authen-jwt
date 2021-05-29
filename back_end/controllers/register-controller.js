const mysql = require("../utils/mysql_db");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    bcrypt.hash(password, 10, function (err, hash) {
      record(username,hash, res)
    });
  }else{
      res.json({status:false, message:req.body})
  }
};

function record(username, password, res) {
    mysql.db.execute(
      "INSERT INTO `users` (`id`, `username`, `password`) VALUES (NULL, ?, ?)",
      [username, password],
      (err, result) => {
        //failed
        if (err) return res.json({ status: false, message: err.message });
        //success
        res.json({ status: true, message: "register successfully" });
      }
    );
  }

module.exports.register = register;
