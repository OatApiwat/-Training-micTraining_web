//Reference
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
//Create constant and link to model
// จะทำงาน แม้ว่ายังไม่มีการกด link ก็ตาม
const training_delete_log_table = require("../model/training_delete_log");

const constant = require("../constant/constant");
const bcrypt = require("bcryptjs");

router.post("/add", async (req, res) => {
  try {
    let insert_result = await training_delete_log_table.create(req.body); //await คือรอให้ส่ง ข้อมูลก่อนจึงตอบ
    res.json({ result: insert_result, api_result: constant.OK });
    console.log("insert_result <===========*********************");
    console.log(insert_result);
  } catch (error) {
    res.json({ result: error, api_result: constant.NOK });
  }
});
router.post("/log", async (req, res) => {
  try {
    let result = await training_delete_log_table.sequelize.query(
      `SELECT [rev],CONVERT(varchar, [timestamp], 23) as [date]  
      ,[operation] as [change_part]
      ,iif([operation]='Create',[condition] +'.',[condition] +' for '+ [cause_name]+' course on '+ CONVERT(varchar, [mfgdate], 23) ) as [content]
      ,[remark] as [reason],[update_by]	  
      FROM [MIC_TrainingDB].[dbo].[training_delete_logs]
        order by [timestamp]   
          /*------------------------ mic training -----------============================--------------*/       `
    );
    res.json({ result: result[0], api_result: constant.OK });
  } catch (error) {
    res.json({ error, api_result: constant.NOK });
  }
});
module.exports = router;
