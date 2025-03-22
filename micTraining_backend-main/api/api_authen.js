const express = require("express");
const constant = require("../constant/constant");
const user = require("../model/users");
const router = express.Router();
const bcrypt = require("bcryptjs");

// ระบบ login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let dbPassword = await user.findOne({ where: { username } });

    if (dbPassword == null) {
      res.json({
        error: "username not found please register",
        api_result: constant.NOK,
      });
    } else {
      if (bcrypt.compareSync(password, dbPassword.password)) {
        res.json({
          result: dbPassword,
          api_result: constant.OK,
        });
      } else {
        res.json({
          error: "password not match please try again",
          api_result: constant.NOK,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ error, api_result: constant.NOK });
  }

  //  res.json({ dbPassword });
  //   res.json({ password: dbPassword.password });
});



module.exports = router;
