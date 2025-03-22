const express = require("express");
const router = express.Router();
const constant = require("./../constant/constant");
const { Router } = require("express");
//import model
const Recordhistory = require("./../model/RecordHistory");


router.post("/recordedHistory", async (req, res) => {
  try {
    let insert_result = await Recordhistory.create(req.body);
    res.json({ result: insert_result, api_result: constant.OK });
  } catch (error) {
    console.log(error);
    res.json({ result: error, api_result: constant.NOK }); //shown error
  }
});


//select Course from Database
router.get("/courseName", async (req, res) => {
  let result = await Recordhistory.sequelize.query(
    `SELECT [CourseName] FROM [MIC_TrainingDB].[dbo].[CourseMasters]`
  );
  res.json({ result: result[0] });
});


//select Rfid card from RFID_Registered
router.get("/RFID_Registered/:rfidCard", async (req, res) => {
  const { rfidCard } = req.params;
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


//select Rfid card from RFID_Registered
router.post("/Registered/:FYYear/:Quater/:selectedCourseName/:DIVISION/:DIVI_NAME/:EMP_NAME/:EmpNo/:PLACE_NAME/:PROCESS/:SECTION/:rfidCard/:Scantime/:TrainingDate/:FinishDate", async (req, res) => {
  const { FYYear, Quater, selectedCourseName, DIVISION, DIVI_NAME, EMP_NAME, EmpNo, PLACE_NAME, PROCESS, SECTION, rfidCard, Scantime, TrainingDate, FinishDate } = req.params;
  try {
    let RFID_result = await Recordhistory.sequelize.query(
      `insert into [MIC_TrainingDB].[dbo].[Recordhistories]
      (FYYear,Quater,CourseName,DIVISION,DIVI_NAME,EMP_NAME,EmpNo,PLACE_NAME,PROCESS,SECTION,rfidCard,Scantime,TrainingDate,FinishDate)
      Values ('${FYYear}','${Quater}','${selectedCourseName}','${DIVISION}','${DIVI_NAME}','${EMP_NAME}','${EmpNo}','${PLACE_NAME}','${PROCESS}','${SECTION}','${rfidCard}','${Scantime}','${TrainingDate}','${FinishDate}')`

    );
    console.log(RFID_result);
    res.json({
      result: RFID_result[0],
      api_result: constant.OK,
    });

  } catch (error) {
    console.log("++++++++error++++++++");
    res.json({
      error,
      api_result: constant.NOK,
    });
  }
});


//get All History list to Table Data
router.get("/recordedHistory", async (req, res) => {
  //function respone and request
  try {
    let result = await Recordhistory.findAll();
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


//select sort History list  ******
router.get("/Selectlist/:FYYear/:Quater", async (req, res) => {
  const { FYYear, Quater } = req.params;
  try {
    let RFID_result = await Recordhistory.sequelize.query(
      `SELECT [Recordhistories].[FYYear]
      ,[Recordhistories].[Quater]
      ,[Recordhistories].[CourseName]
      ,[Recordhistories].[DIVI_NAME]
      ,[Recordhistories].[EMP_NAME]
      ,[Recordhistories].[EmpNo]
      ,[Recordhistories].[TrainingDate]
      ,[Recordhistories].[FinishDate]
	  ,[FileEvaluateForms].[id]
	  ,[FileEvaluateForms].[fileType]
      ,[FileEvaluateForms].[FileDetail]
  FROM [MIC_TrainingDB].[dbo].[Recordhistories] left join [MIC_TrainingDB].[dbo].[FileEvaluateForms]
  on ([Recordhistories].[EmpNo] = [FileEvaluateForms].[EmpNo] and
  [Recordhistories].[CourseName] = [FileEvaluateForms].[CourseName] )
  where [Recordhistories].[FYYear] = '${FYYear}' and [Recordhistories].[Quater] ='${Quater}' ;`

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



//SQL query Chart by course
router.get("/byCourse", async (req, res) => {
  try {
    let result = await Recordhistory.sequelize.query(`Select [CourseName],Count ([CourseName]) as [Person]
  From [MIC_TrainingDB].[dbo].[Recordhistories]
  Group by [CourseName]`);
    console.log("----------------");
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


//SQL query Chart Total
router.get("/ToTal", async (req, res) => {
  try {
    let result = await Recordhistory.sequelize.query(`with TableA as (Select [CourseName],Count ([CourseName]) as [Person] 
              From [MIC_TrainingDB].[dbo].[Recordhistories]
              Group by [CourseName])
  (select sum([Person]) as Person from TableA );`);
    console.log("*********************");
    res.json({
      result: result[0],
      api_result: constant.resultOK,
    });
  } catch (error) {
    console.log("********error***********");
    res.json({
      error,
      api_result: constant.resultNOK,
    });
  }
});


router.get("/ToTal", async (req, res) => {
  try {
    let result = await Recordhistory.sequelize.query(`with TableA as (Select [CourseName],Count ([CourseName]) as [Person] 
              From [MIC_TrainingDB].[dbo].[Recordhistories]
              Group by [CourseName])
  (select sum([Person]) as Person from TableA );`);
    console.log("*********************");
    res.json({
      result: result[0],
      api_result: constant.resultOK,
    });
  } catch (error) {
    console.log("********error***********");
    res.json({
      error,
      api_result: constant.resultNOK,
    });
  }
});

//SQL query by quarter Chart 
router.get("/data", async (req, res) => {
  let result = await Recordhistory.sequelize.query(
    `
   create table temp
(  [Year] nvarchar(max),
  [CourseName] nvarchar(max),
  [Person] int)
--------------
INSERT INTO temp ([Year],[CourseName],[Person])
select  [FYYear]+'-'+[Quater]
,REPLACE([CourseName], ' ', '')
,Count([CourseName])
FROM [MIC_TrainingDB].[dbo].[Recordhistories]
group by [FYYear],[Quater],[CourseName]


DECLARE @cols1 AS NVARCHAR(MAX),
@cols2 AS NVARCHAR(MAX),
  @query  AS NVARCHAR(MAX);

-- replace null as 0
SET @cols1 = STUFF((SELECT distinct ', ISNULL(' + QUOTENAME(c.[Year])  + ', 0) AS ' +  QUOTENAME(c.[Year])
          FROM temp c
          FOR XML PATH(''), TYPE
          ).value('.', 'NVARCHAR(MAX)') 
      ,1,1,'')
-- get all column
SET @cols2 = STUFF((SELECT distinct ',' + QUOTENAME(c.[Year])
          FROM temp c
          FOR XML PATH(''), TYPE
          ).value('.', 'NVARCHAR(MAX)') 
      ,1,1,'')


set @query = 'SELECT [CourseName], ' + @cols1 + ' from 
          (
              select  [Year],[CourseName],[Person]
              from temp
         ) x
          pivot 
          (
               sum(Person)
              for Year in (' + @cols2 + ')
          ) p '
--select @query
execute(@query)
drop table temp
   `
  );
  res.json({ result: result[0] });
});

router.get("/date", async (req, res) => {
  let result = await Recordhistory.sequelize.query(
    `
   select  [FYYear]+'-'+[Quater] as [quoter]
FROM [MIC_TrainingDB].[dbo].[Recordhistories]
group by [FYYear],[Quater]
   `
  );
  res.json({ result: result[0] });
});

//Table ควอเตอร์
router.get("/renderTable", async (req, res) => {
  let result = await Recordhistory.sequelize.query(
    `
   select [FYYear]+'-'+[Quater] as Year
   ,[CourseName]
   ,Count([CourseName]) as Person 
   FROM [MIC_TrainingDB].[dbo].[Recordhistories]
   group by [FYYear],[Quater],[CourseName]
   order by [FYYear]
   `
  );
  res.json({ result: result[0] });
});


router.post("/upload/:FYYear/:Quater/:CourseName/:DIVISION/:DIVI_NAME/:EMP_NAME/:EmpNo/:PLACE_NAME/:PROCESS/:SECTION/:rfidCard/:Scantime/:TrainingDate/:FinishDate", async (req, res) => {
  try {
    const { FYYear, Quater, CourseName, DIVISION, DIVI_NAME, EMP_NAME, EmpNo, PLACE_NAME, PROCESS, SECTION, rfidCard, Scantime, TrainingDate, FinishDate } = req.params;

    let result = await Recordhistory.sequelize.query(
      `INSERT INTO [MIC_TrainingDB].[dbo].[Recordhistories]
    ([FYYear],[Quater],[CourseName],[DIVISION],[DIVI_NAME],[EMP_NAME],[EmpNo],[PLACE_NAME],[PROCESS],[SECTION],[rfidCard],[Scantime],[TrainingDate],[FinishDate])
VALUES('${FYYear}','${Quater}','${CourseName}','${DIVISION}','${DIVI_NAME}','${EMP_NAME}','${EmpNo}','${PLACE_NAME}','${PROCESS}','${SECTION}','${rfidCard}','${Scantime}','${TrainingDate}','${FinishDate}'
) `
    );
    //console.log({ result });
    console.log(result);
    res.json({
      result: result[0],
      api_result: constant.OK,
    });

  } catch (error) {
    console.log("++++++++error++++++++");
    res.json({
      error,
      api_result: constant.NOK,
    });
  }

});

router.post("/select")

module.exports = router;