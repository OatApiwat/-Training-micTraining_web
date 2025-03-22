const express = require("express");
const router = express.Router();
const constant = require("./../constant/constant");

const formidable = require("formidable");
const fs = require("fs");

//import model
const Recordhistory = require("./../model/RecordHistory");
const FileEvaluateForm = require("../model/FileEvaluateForm");


router.post("/", async (req, res) => {

});


// ดึงข้อมูล
router.get("/searchEmp", async (req, res) => {
  // const {
  //   empNumber
  // } = req.params;
  try {
    let result = await Recordhistory.sequelize.query(`
    select  
    Recordhistories.id
    ,Recordhistories.FYYear,
    Recordhistories.Quater
    --,users.empNumber
    ,Recordhistories.EmpNo
    ,Recordhistories.CourseName
    ,Recordhistories.DIVI_NAME
    ,Recordhistories.EMP_NAME
    ,Recordhistories.TrainingDate
    ,Recordhistories.FinishDate
    ,users.username
  FROM [MIC_TrainingDB].[dbo].[Recordhistories] left join [MIC_TrainingDB].[dbo].[users]
  on Recordhistories.EmpNo = users.empNumber
  order by id
   `);

    console.log("result");
    res.json({
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



//insert picture
// router.post("/FileDetail/:FYYear/:Quater/:CourseName/:DIVI_NAME/:EMP_NAME/:EmpNo/:FileDetail", async (req, res) => {
//   const {FYYear,Quater,CourseName,DIVI_NAME,EMP_NAME,EmpNo,FileDetail}  = req.params;
//   try {
//     let InsertData = await FileEvaluateForm.sequelize.query(`
//     insert into [MIC_TrainingDB].[dbo].[FileEvaluateForms] 
// 		(FYYear,Quater,CourseName,DIVI_NAME,EMP_NAME,EmpNo,FileDetail)
// 		value ('${FYYear}','${Quater}','${CourseName}','${DIVI_NAME}','${EMP_NAME}','${EmpNo}','${FileDetail}');
//      `);

//     console.log(InsertData);
//     res.json({
//       result: result[0],
//       api_result: constant.resultOK,
//     });
//   } catch (error) {
//     console.log("-------error---------");
//     res.json({
//       error,
//       api_result: constant.resultNOK,
//     });
//   }
// });


router.post("/FileDetail", async (req, res) => {

      try {
        const form = new formidable.IncomingForm();
        form.parse(req, async (error, fields, files) => {
          console.log("error : " + JSON.stringify(error));
          console.log("Fields : " + JSON.stringify(fields));
          console.log("Files : " + JSON.stringify(files));

          const {FYYear,Quater,CourseName,DIVI_NAME,EMP_NAME,EmpNo,} = fields

          var data = {}
          if (files.FileDetail == undefined) {
              data = {
                 FYYear,
                 Quater,
                 CourseName,
                 DIVI_NAME,
                 EMP_NAME ,
                 EmpNo,
              }
              await FileEvaluateForm.create(data);
          } else {
              data = {
                FYYear,
                Quater,
                CourseName,
                DIVI_NAME,
                EMP_NAME,
                EmpNo ,
                fileType : files.FileDetail.type,
                FileDetail: await fs.readFileSync(files.FileDetail.path),
                
              }
              await FileEvaluateForm.create(data);
              fs.unlinkSync(files.FileDetail.path);
          }
          res.json({
              // result,
              api_result: constant.resultOK,
          });
      })
  } catch (error) {
      res.json({
          api_result: constant.resultNOK,
          error,
      });
  }
})






    module.exports = router;