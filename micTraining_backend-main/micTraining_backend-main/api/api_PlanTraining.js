const express = require("express");
const router = express.Router();

const constant = require("./../constant/constant"); 
const { Router } = require("express");


//import model
const PlanTable = require("./../model/planTable");
const Recordhistory = require("./../model/RecordHistory");

//select Course from Database
router.get("/courseName", async (req, res) => {
    try {
    let result = await Recordhistory.findAll()
        res.json({ result, api_result: constant.OK });
    
    } catch (error) {
      console.log(error);
      res.json({ error, api_result: constant.NOK });
    }
});
  
router.post("/editPlan",  async (req, res) => {

});



module.exports = router;