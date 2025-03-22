const express = require("express");
const router = express.Router();
const CourseMaster = require("./../model/Course_Master");
const constant = require("./../constant/constant");

router.post("/courseMaster", async (req, res) => {
  try {
    let insert_result = await CourseMaster.create(req.body);
    res.json({ result: insert_result, api_result: constant.OK });
  } catch (error) {
    console.log(error);
    res.json({ result: error, api_result: constant.NOK }); //shown error
  }
});


router.get("/courseMaster", async (req, res) => {
  //function respone and request
  try {
    let result = await CourseMaster.findAll();
    res.json({
      result,
      api_result: constant.OK
    });
  } catch (error) {
    console.log("************error***************");
    res.json({
      error,
      echo: req.body,
      api_result: constant.NOK
    });
  }
});

//select Division from Database
// router.get("/courseMaster", async (req, res) => {
//   let result = await CourseListMaster.sequelize.query(
//     `Select [divisionName]  FROM [MICWebDB].[dbo].[DivisionMasters]`
//   );

//   res.json({ result : result[0]});
// });


module.exports = router; 