const express = require("express");
const router = express.Router();
const DivisionMaster = require("./../model/Division_Master");
const constant = require("./../constant/constant");

router.post("/divisionMaster", (req, res) => {
  try {
    let insert_result = DivisionMaster.create(req.body);
    res.json({ result: insert_result, api_result: constant.OK });
  } catch (error) {
    console.log(error);
    res.json({ result: error, api_result: constant.NOK }); //shown error
  }
});

//select Division from Database
router.get("/divisionMaster", async (req, res) => {
  let result = await DivisionMaster.sequelize.query(
    `Select [divisionName]  FROM [MIC_TrainingDB].[dbo].[DivisionMasters]`
  );

  res.json({ result : result[0]});
});

module.exports = router; 
