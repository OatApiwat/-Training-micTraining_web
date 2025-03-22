const express = require("express");
const router = express.Router();
const Sequeliza = require("sequelize") ; 

// Import model
const NewTraineeRegister = require("./../model/NewTraineeRegister");
const Recordhistory = require("./../model/RecordHistory");
const constant = require("./../constant/constant"); 
const { Router } = require("express");

//select Course from Database
router.get("/courseName", async (req, res) => {
  let result = await Recordhistory.sequelize.query(
    `SELECT [CourseName] FROM [MIC_TrainingDB].[dbo].[CourseMasters]`
  );
  res.json({ result : result[0]});
});


//select Rfid card from RFID_Registered
router.get("/RFID_Registered/:rfidCard", async (req, res) => {
  const { rfidCard }  = req.params; 
  try { 
    let RFID_result = await Recordhistory.sequelize.query(
      `SELECT employee_lists.PLACE_NAME
        ,employee_lists.DIVISION
        ,replace(employee_lists.DIVI_NAME,'/','') as DIVI_NAME
        ,employee_lists.SECTION
        ,employee_lists.PROCESS
        ,RFID_Registered.EmpNo
        ,RFID_Registered.RFID
        ,employee_lists.EMP_NAME
  from [Common_Master].[dbo].[RFID_Registered] left join [Common_Master].[dbo].[employee_lists]
  on employee_lists.EMP_NO = RFID_Registered.EmpNo 
  where RFID_Registered.RFID = '${rfidCard}'`

    );
    console.log(RFID_result);
       res.json({
         result: RFID_result[0],
         api_result: constant.OK,
       });
       
      } catch (error) {
       console.log("=======error=======");
       res.json({
         error,
         api_result: constant.NOK,
       });
      }
});

router.post("/newRegister/:EmpNo/:DIVI_NAME/:EMP_NAME/:selectedCourseName/:rfidCard/:Scantime/:createdAt/:updatedAt", async (req, res) => {    
const { EmpNo,DIVI_NAME,EMP_NAME,selectedCourseName,rfidCard,Scantime,createdAt,updatedAt} = req.params; 
try {
 
    let insert_result = await NewTraineeRegister.sequelize.query(`insert into NewTraineeRegisters
    (EmpNo,DIVI_NAME,EMP_NAME,CourseName,rfidCard,Scantime,createdAt,updatedAt ) 
    Values ( '${EmpNo}', '${DIVI_NAME}' ,'${EMP_NAME}' , '${selectedCourseName}' ,'${rfidCard}','${Scantime}' ,'${createdAt}' , '${updatedAt}') `); 
    console.log(insert_result);
 res.json({
   result: insert_result[0],
   api_result: constant.OK,
 });
} catch (error) {
 console.log(error);
 res.json({
   error,
   api_result: constant.NOK,
 });
}
});

// router.post("/newRegister",  async (req, res) => {
//   try {
//     let insert_result = await NewTraineeRegister.create(req.body);
//     res.json({ result: insert_result, api_result: constant.OK });
//   } catch (error) {
//     console.log(error);
//     res.json({ result: error, api_result: constant.NOK }); //shown error
//   }
// });




//get all data to table
router.get("/newRegister", async (req, res) => {    
      //function respone and request
  try {
    let result = await NewTraineeRegister.findAll();
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

    
module.exports = router;
