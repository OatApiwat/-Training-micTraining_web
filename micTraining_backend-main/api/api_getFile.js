const express = require("express");
const router = express.Router();
const constant = require("./../constant/constant");

const formidable = require("formidable");
const fs = require("fs");

//import model
const Recordhistory = require("./../model/RecordHistory");
const FileEvaluateForm = require("../model/FileEvaluateForm");


router.get("/showFile", async (req, res) => {

  const {
    empNumber
  } = req.params;
  try {
    let result = await FileEvaluateForm.sequelize.query(`
    SELECT FileEvaluateForms.FYYear
    ,FileEvaluateForms.Quater
    ,FileEvaluateForms.CourseName
    ,FileEvaluateForms.DIVI_NAME
    ,FileEvaluateForms.EMP_NAME
  ,users.empNumber
    ,FileEvaluateForms.EmpNo
    ,FileEvaluateForms.fileType
    ,FileEvaluateForms.FileDetail
    ,FileEvaluateForms.createdAt
FROM [MIC_TrainingDB].[dbo].[FileEvaluateForms] left join [MIC_TrainingDB].[dbo].[users]
on FileEvaluateForms.EmpNo = users.empNumber ' `);

    console.log("result");
    res.json({
      // result:result.fileType,
      // result: result.FileDetail ,
      result: result[0],
      api_result: constant.resultOK,
    });
  } catch (error) {
    console.log("-------error---------");
    res.json({
      error,
      api_result: constant.resultNOK,
    });
  }
});
router.get("/showid/:empNumber/:CourseName", async (req, res) => {
  const { empNumber,CourseName} = req.params;
  try {
    let result = await FileEvaluateForm.sequelize.query(`
    SELECT  [id]
    FROM [MIC_TrainingDB].[dbo].[FileEvaluateForms]

  where EmpNo = '${empNumber}' and [CourseName]= '${CourseName}'`);

    console.log("result");
    res.json({
      // result:result.fileType,
      // result: result.FileDetail ,
      result: result[0],
      api_result: constant.resultOK,
    });
  } catch (error) {
    console.log("-------error---------");
    res.json({
      error,
      api_result: constant.resultNOK,
    });
  }
});

//show picture 
router.get('/File/:id', async (req, res) => {
  try {
    let {id} = req.params
    let result = await FileEvaluateForm.findOne({
      where: {id},
      attributes: ['FileDetail', 'fileType']
    });
    // console.log(result);
    res.type(result.fileType);
    res.end(result.FileDetail);
  } catch (error) {
    console.log(error);
    res.json({
      api_result: constants.resultNOK,
      error,
    });
  }
})



module.exports = router;