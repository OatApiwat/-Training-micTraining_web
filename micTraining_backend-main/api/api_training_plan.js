//Reference
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
//Create constant and link to model
// จะทำงาน แม้ว่ายังไม่มีการกด link ก็ตาม
const training_plan_table = require("./../model/training_plan");

const constant = require("../constant/constant");
const bcrypt = require("bcryptjs");
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 == 0) {
        return "yes";
      } else {
        return "no";
      }
    } else {
      return "yes";
    }
  } else {
    return "no";
  }
}
//query
router.post("/calendar_monthly_plan", async (req, res) => {
  var leap_condition = "";

  if (isLeap(req.body.year_no) == "no" && req.body.month_no == "02") {
    leap_condition = ` top(28) `;
  } else {
    leap_condition = ` `;
  }

  try {
    let result = await training_plan_table.sequelize.query(
      `with year_table as (
        SELECT ` +
        leap_condition +
        ` '${req.body.year_no}'+'-' +[date] as [date]  FROM [MIC_TrainingDB].[dbo].[list_date]
        where SUBSTRING([date],1,2)='${req.body.month_no}'
        )
  ,train_table as (
    select  [mfgdate] as [date_long],[cause_name],[rev] 
    from [training_plans]
    where [rev] = '${req.body.rev}' 
  )
select year_table.[date] as [date_long]		
    ,iif(SUBSTRING([date],9,1)='0',SUBSTRING([date],10,1),SUBSTRING([date],9,2)) as [date_short]
    ,iif(DATENAME(dw,[date])='Thursday','TH',left(DATENAME(dw,[date]),1)) as [date_week]
    ,iif([cause_name] is null,'',[cause_name]) as [cause_name]
    ,CASE
      WHEN [cause_name] = 'IOT' THEN 'btn btn-block btn-warning'
      WHEN [cause_name] = 'Python_task' THEN 'btn btn-block btn-primary'
      WHEN [cause_name] = 'Advance_IoT' THEN 'btn btn-block btn-success'
      WHEN [cause_name] = 'Kafka' THEN 'btn btn-block btn-info'
      WHEN [cause_name] = 'ROS' THEN 'btn btn-block btn-danger'
      WHEN [cause_name] = 'Database' THEN 'btn btn-block btn-outline-danger'
      WHEN [cause_name] = 'JavaScript' THEN 'btn btn-block btn-dark'
      WHEN [cause_name] = 'React' THEN 'btn btn-block btn-secondary'
      WHEN [cause_name] = 'Docker' THEN 'btn btn-block btn-outline-primary'
      
      ELSE 'btn btn-block btn-outline-secondary'
      END AS [class_button] 
    ,iif(DATENAME(dw,[date])='Sunday','red','black') as [date_color]
from year_table left join train_table
on year_table.[date]=train_table.[date_long]
/*------------------------ mic training -------------------------*/`
    );
    console.log({ result });
    res.json({ result: result[0] });
  } catch (error) {
    // console.log(error);
    res.json({ error, api_result: constant.NOK });
  }
});
router.post("/check_plan", async (req, res) => {
  try {
    let result = await training_plan_table.findOne({
      where: { mfgdate: req.body.selected_date, rev: req.body.rev },
    });
    //console.log({ result });
    res.json({ result });
  } catch (error) {
    res.json({ error, api_result: constant.NOK });
  }
});
router.post("/delete", async (req, res) => {
  console.log("***** delete ****");
  // console.log(req.body);
  try {
    let result = await training_plan_table.destroy({
      where: { mfgdate: req.body.mfgdate, rev: req.body.rev },
    });
    res.json({ result, api_result: constant.OK });
    // console.log(result);
  } catch (error) {
    res.json({ error, api_result: constant.NOK });
    // console.log(error);
  }
});
router.post("/add", async (req, res) => {
  try {
    let insert_result = await training_plan_table.create(req.body); //await คือรอให้ส่ง ข้อมูลก่อนจึงตอบ
    res.json({ result: insert_result, api_result:constant.OK });
  } catch (error) {
    res.json({ result: error, api_result: constant.NOK });
  }
});
router.post("/list_rev", async (req, res) => {
  try {
    let result = await training_plan_table.sequelize.query(
      `with table_full as(
          SELECT distinct [rev] FROM [MIC_TrainingDB].[dbo].[training_actuals]
          where YEAR([mfgdate]) = '${req.body.year_no}'
           union all 
          SELECT distinct [rev]   FROM [MIC_TrainingDB].[dbo].[training_plans]
          where YEAR([mfgdate]) = '${req.body.year_no}'
            )      
 SELECT distinct iif([rev] is null,0,[rev]) as [rev]  FROM table_full
             
          /*------------------------ mic training -------------------------*/       `
    );
    res.json({ result: result[0], api_result: constant.OK });
  } catch (error) {
    res.json({ error, api_result: constant.NOK });
  }
});
router.post("/copy", async (req, res) => {
  try {
    let result = await training_plan_table.sequelize.query(
      `INSERT INTO [MIC_TrainingDB].[dbo].[training_plans] 
      ([rev],[mfgdate],[cause_name],[createdAt],[updatedAt])

      SELECT '${req.body.next_rev}',[mfgdate],[cause_name],[createdAt],[updatedAt]
      FROM [MIC_TrainingDB].[dbo].[training_plans] 
      WHERE [rev] = '${req.body.last_rev}' and  YEAR([mfgdate]) = '${req.body.selected_year}'          
          /*------------------------ mic training -------------------------*/       `
    );
    res.json({ result: result[0], api_result: constant.OK });
  } catch (error) {
    res.json({ error, api_result: constant.NOK });
  }
});
module.exports = router;
