const express = require("express");
const router = express.Router();
const manpower_master = require("./../model/manpower_master");
const constant = require("./../constant/constant"); 


router.post("/manpower_master", async (req, res) => {
    try {
      //  result = user.create(req.body)
      let insert_result = await manpower_master.create(req.body); //สร้างตัวแปร insert_result มารับค่า
      res.json({ result: insert_result, api_result: constant.ok });
    } catch (error) {
      console.log(error);
      res.json({ result: error, api_result: constant.nok }); //shown error
    }
  });
  
  //select user
  router.get("/manpower_master", async (req, res) => {
    try {
      let result = await manpower_master.findAll();
      res.json({ result, api_result: constant.ok });
    } catch (error) {
      console.log(error);
      res.json({ error, api_result: constant.nok });
    }
  });
  
  //update user
  router.put("/manpower_master", async (req, res) => {
    try {
      let result = await manpower_master.update(req.body, {
        where: { empNumber_number: req.body.empNumber_number },
      });
      res.json({ result, api_result:constant.ok });
    } catch (error) {
      console.log(error);
      res.json({ error, api_result:constant.nok });
    }
  });
  
  //delete user
  router.delete("/manpower_master", async (req, res) => {
  
      try {
          let result = await manpower_master.destroy({
            where: { empNumber_number: req.body.empNumber_number },
          });
          res.json({ result, api_result:constant.ok });
        } catch (error) {
          console.log(error);
          res.json({ error, api_result:constant.nok });
        }
  });
  
  module.exports = router;