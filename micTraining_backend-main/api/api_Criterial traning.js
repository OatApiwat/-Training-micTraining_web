const express = require("express");
const router = express.Router();
const constant = require("./../constant/constant");
const { Router } = require("express");
//import model
const Recordhistory = require("./../model/RecordHistory");

//  criterial level 
router.post("/level", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`SELECT [Group]as [level]
        FROM [MIC_TrainingDB].[dbo].[GroupMaster]
        group by [Group] `); /*---*/ 
        console.log("********OK*********");
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
  router.post("/sort_courseName", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(` SELECT [CourseName]
        FROM [MIC_TrainingDB].[dbo].[GroupMaster]
        where [Group] = '${req.body.level}' `); /*---*/ 

        console.log("********OK*********",result);
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

  router.post("/General_emp", async (req, res) => {
    var command_emp = `` ;
    if (req.body.Search_emp == "") {
      command_emp =  ``;
    } else {
      command_emp = `where [EmpNo] = '${req.body.Search_emp}'`;
    }
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME]
          ,[Recordhistories].[EMP_NAME]
          ,[Recordhistories].[EmpNo]
          ,convert(varchar,[TrainingDate], 6) as TrainingDate 
          ,convert(varchar,[FinishDate], 6) as  [FinishDate]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      where [Group] = 'General Staff'  /*---*/
      )
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1 
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/ 
        or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
        or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo] 
      ) 
      select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,'-','Pass') as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,'-','Pass') as JS
      ,iif([Basic node.js and React]=0,'-','Pass')as WEB
	  ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,'-','Pass')as IoT
	  ,iif([Basic Knowledge for Python]=0,'-','Pass')as Python
	  ,iif([The fundamentals of machine learning]=0,'-','Pass')as ML
	  ,iif([Data analysis and dashboard visualization with Python]=0,'-','Pass')as [Analytic]
      from tb2
      pivot (count([CourseName]) 
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)] 
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
	  ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python]) 
      )as pvt
      `+ command_emp + `
      order by pvt.[EmpNo]; 
    `); /*---*/ 

        console.log("********OK*********");
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

  router.post("/Developer_emp", async (req, res) => {
    var command_emp = `` ;
    if (req.body.Search_emp == "") {
      command_emp =  ``;
    } else {
      command_emp = `where [EmpNo] = '${req.body.Search_emp}'`;
    }
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME]
          ,[Recordhistories].[EMP_NAME]
          ,[Recordhistories].[EmpNo]
          ,convert(varchar,[TrainingDate], 6) as TrainingDate 
          ,convert(varchar,[FinishDate], 6) as  [FinishDate]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      where [Group] = 'Developer'  /*---*/
      )
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1 
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/ 
        or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
        or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo] 
      ) 
      select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,'-','Pass') as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,'-','Pass') as JS
      ,iif([Basic node.js and React]=0,'-','Pass')as WEB
	  ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,'-','Pass')as IoT
	  ,iif([Basic Knowledge for Python]=0,'-','Pass')as Python
	  ,iif([The fundamentals of machine learning]=0,'-','Pass')as ML
	  ,iif([Data analysis and dashboard visualization with Python]=0,'-','Pass')as [Analytic]
      from tb2
      pivot (count([CourseName]) 
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)] 
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
	  ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python]) 
      )as pvt
      `+ command_emp + `
      order by pvt.[EmpNo]; 
    `); /*---*/ 

        console.log("********OK*********");
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

// General level 
 router.post("/General_emp_Chart", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME]
          ,[Recordhistories].[EMP_NAME]
          ,[Recordhistories].[EmpNo]
          ,convert(varchar,[TrainingDate], 6) as TrainingDate 
          ,convert(varchar,[FinishDate], 6) as  [FinishDate]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      where [Group] = 'General Staff'  /*---*/
      )
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1 
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/ 
        or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
        or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo] 
      ) 
      , tb3 as (select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,'-','Pass') as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,'-','Pass') as JS
      ,iif([Basic node.js and React]=0,'-','Pass')as WEB
	  ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,'-','Pass')as IoT
	  ,iif([Basic Knowledge for Python]=0,'-','Pass')as Python
	  ,iif([The fundamentals of machine learning]=0,'-','Pass')as ML
	  ,iif([Data analysis and dashboard visualization with Python]=0,'-','Pass')as [Analytic]
      from tb2
      pivot (count([CourseName]) 
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)] 
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
	  ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python]) 
      )as pvt
      )
      --order by pvt.[EmpNo]; 
	  select count([DIVI_NAME]) as[Staff],[DIVI_NAME] as DIVISION
	
	  from tb3 
	  where  MES ='Pass' and WEB ='Pass'and JS ='Pass'
      group by [DIVI_NAME]
      order by [Staff]
    `); /*---*/ 

        console.log("********OK*********",result);
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
// General level table
  router.post("/General_emp_Tb", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME]
          ,[Recordhistories].[EMP_NAME]
          ,[Recordhistories].[EmpNo]
          ,convert(varchar,[TrainingDate], 6) as TrainingDate
          ,convert(varchar,[FinishDate], 6) as  [FinishDate]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      where [Group] = 'General Staff'  /*---*/
      )
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/
        or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
        or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo]
      )
      , tb3 as (select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,'-','Pass') as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,'-','Pass') as JS
      ,iif([Basic node.js and React]=0,'-','Pass')as WEB
          ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,'-','Pass')as IoT
          ,iif([Basic Knowledge for Python]=0,'-','Pass')as Python
          ,iif([The fundamentals of machine learning]=0,'-','Pass')as ML
          ,iif([Data analysis and dashboard visualization with Python]=0,'-','Pass')as [Analytic]
      from tb2
      pivot (count([CourseName])
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
          ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python])
      )as pvt
      )
      --order by pvt.[EmpNo];
          select [EMP_NAME],[DIVI_NAME],MES, WEB, JS
          from tb3
          where  MES ='Pass' and WEB ='Pass'and JS ='Pass'
 
    `); /*---*/ 

        console.log("********OK*********",result);
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

  router.post("/Dev_emp_Chart", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME]
          ,[Recordhistories].[EMP_NAME]
          ,[Recordhistories].[EmpNo]
          ,convert(varchar,[TrainingDate], 6) as TrainingDate 
          ,convert(varchar,[FinishDate], 6) as  [FinishDate]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      where [Group] = 'Developer'  /*---*/
      )
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1 
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/ 
        or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
        or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo] 
      ) 
      , tb3 as (select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,'-','Pass') as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,'-','Pass') as JS
      ,iif([Basic node.js and React]=0,'-','Pass')as WEB
	  ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,'-','Pass')as IoT
	  ,iif([Basic Knowledge for Python]=0,'-','Pass')as Python
	  ,iif([The fundamentals of machine learning]=0,'-','Pass')as ML
	  ,iif([Data analysis and dashboard visualization with Python]=0,'-','Pass')as [Analytic]
      from tb2
      pivot (count([CourseName]) 
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)] 
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
	  ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python]) 
      )as pvt
      )
      --order by pvt.[EmpNo]; 
	  select count([DIVI_NAME]) as[Staff],[DIVI_NAME] as DIVISION
	  from tb3 
	  where  MES ='Pass' and WEB ='Pass'and JS ='Pass'and IoT ='Pass'and Python ='Pass' and ML ='Pass' and [Analytic] ='Pass'
      group by [DIVI_NAME]
      order by [Staff]
    `); /*---*/ 

        console.log("********OK*********",result);
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

  router.post("/Dev_emp_Tb", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME]
          ,[Recordhistories].[EMP_NAME]
          ,[Recordhistories].[EmpNo]
          ,convert(varchar,[TrainingDate], 6) as TrainingDate 
          ,convert(varchar,[FinishDate], 6) as  [FinishDate]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      where [Group] = 'Developer'  /*---*/
      )
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1 
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/ 
        or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
        or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo] 
      ) 
      , tb3 as (select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,'-','Pass') as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,'-','Pass') as JS
      ,iif([Basic node.js and React]=0,'-','Pass')as WEB
	  ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,'-','Pass')as IoT
	  ,iif([Basic Knowledge for Python]=0,'-','Pass')as Python
	  ,iif([The fundamentals of machine learning]=0,'-','Pass')as ML
	  ,iif([Data analysis and dashboard visualization with Python]=0,'-','Pass')as [Analytic]
      from tb2
      pivot (count([CourseName]) 
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)] 
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
	  ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python]) 
      )as pvt
      )
      --order by pvt.[EmpNo]; 
	  select [EMP_NAME],[DIVI_NAME] as DIVISION ,MES,JS,WEB,IoT,Python,ML,[Analytic]
	  from tb3 
	  where  MES ='Pass' and WEB ='Pass'and JS ='Pass'and IoT ='Pass'and Python ='Pass' and ML ='Pass' and [Analytic] ='Pass'

    `); /*---*/ 

        console.log("********OK*********");
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

  //  เช็คว่ามีใครต้องเพิ่มหลักสูตรไหนบ้าง 
  router.post("/check_Dev", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME],[Recordhistories].[EMP_NAME],[Recordhistories].[EmpNo]
          ,convert(varchar,[TrainingDate], 6) as TrainingDate
          ,convert(varchar,[FinishDate], 6) as  [FinishDate]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      where [Group] = 'Developer'  /*---*/
      ) 
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/
      or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
      or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo]
      ) 
      , tb3 as (select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,0,1) as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,0,1) as JS
      ,iif([Basic node.js and React]=0,0,1)as WEB
      ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,0,1)as IoT
      ,iif([Basic Knowledge for Python]=0,0,1)as Python
      ,iif([The fundamentals of machine learning]=0,0,1)as ML
      ,iif([Data analysis and dashboard visualization with Python]=0,0,1)as [Analytic]
      from tb2 
      pivot (count([CourseName])
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
          ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python])
      )as pvt 
      ) 
        select [EmpNo],[EMP_NAME],[DIVI_NAME],iif(MES=0,'-','Pass') as MES ,iif(JS=0,'-','Pass') as JS ,iif(WEB=0,'-','Pass') as WEB ,iif(IoT=0,'-','Pass') as IoT ,iif(Python=0,'-','Pass') as Python
		,iif(ML=0,'-','Pass') as ML,iif([Analytic]=0,'-','Pass') as [Analytic]
		,(MES+JS+WEB+IoT+Python+ML+[Analytic])as TTL
		from tb3
        where  (MES+JS+WEB+IoT+Python+ML+[Analytic]) >=3
		order by (MES+JS+WEB+IoT+Python+ML+[Analytic]) desc  `); /*---*/ 

        console.log("********OK*********",result);
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

  router.post("/Level_ratio", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (SELECT [Recordhistories].[CourseName]
          ,[Recordhistories].[DIVI_NAME]
          ,[Recordhistories].[EMP_NAME]
          ,[Recordhistories].[EmpNo]
      FROM [MIC_TrainingDB].[dbo].[Recordhistories] inner join [MIC_TrainingDB].[dbo].[GroupMaster]
      on [Recordhistories].CourseName = [GroupMaster].[CourseName]
      --where [Group] = 'General Staff'  /*---*/
      )
      , tb2 as (select [EmpNo],[EMP_NAME],[DIVI_NAME],[CourseName]
        from tb1
        where [CourseName] ='Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)'  /*---*/
        or [CourseName] = 'Basic Knowledge computer language (JavaScript)'  /*---*/
        or [CourseName] = 'Basic node.js and React'  /*---*/
      or [CourseName] = 'Basic Knowledge for IoT Development on Arduino Platform'  /*---*/
      or [CourseName] = 'Basic Knowledge for Python'
      or [CourseName] = 'The fundamentals of machine learning'
      or [CourseName] = 'Data analysis and dashboard visualization with Python'
        group by [CourseName],[DIVI_NAME],[EMP_NAME],[EmpNo]
      )
	  --select * from tb2
    --pivot
      , tb3 as (select [EmpNo],[EMP_NAME],[DIVI_NAME]
      ,iif([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]=0,'-','Pass') as MES
      ,iif([Basic Knowledge computer language (JavaScript)]=0,'-','Pass') as JS
      ,iif([Basic node.js and React]=0,'-','Pass')as WEB
      ,iif([Basic Knowledge for IoT Development on Arduino Platform]=0,'-','Pass')as IoT
      ,iif([Basic Knowledge for Python]=0,'-','Pass')as Python
      ,iif([The fundamentals of machine learning]=0,'-','Pass')as ML
      ,iif([Data analysis and dashboard visualization with Python]=0,'-','Pass')as [Analytic]
      from tb2
      pivot (count([CourseName])
      for [CourseName] in ([Basic Knowledge of Database management for MES(Tool : SQL&C Sharp)]
      ,[Basic Knowledge computer language (JavaScript)],[Basic node.js and React],[Basic Knowledge for IoT Development on Arduino Platform]
          ,[Basic Knowledge for Python],[The fundamentals of machine learning],[Data analysis and dashboard visualization with Python])
      )as pvt
      ) 
      --select * from tb3
	  ,tb4 as ( select count([EMP_NAME]) as num,[EMP_NAME],[DIVI_NAME],MES, WEB, JS,IoT,Python,ML,[Analytic]
	  from tb3 
	  group by [EMP_NAME],[DIVI_NAME],MES, WEB, JS,IoT,Python,ML,[Analytic] ) 
      
          , fn1 as (select sum(iif(MES = 'Pass' and  WEB = 'Pass' and  JS = 'Pass' ,1,0))  as [General]
		  ,sum(iif(MES = 'Pass' and  WEB = 'Pass' and  JS = 'Pass' and IoT ='Pass'and Python ='Pass'and ML ='Pass'and [Analytic] ='Pass',1,0)) as [Developer]
		  ,sum(num) as TTL 
		  from tb4 ) 
		  select [General],[Developer],TTL 
		  ,cast(round((cast([General] as DECIMAL(16,2))*100 )/TTL,2,1) as DECIMAL(16,2)) as [General_ratio]
		  ,cast(round((cast([Developer] as DECIMAL(16,2))*100 )/TTL,2,1) as DECIMAL(16,2)) as [Developer_ratio]
		  from fn1
      `); /*---*/ 

        console.log("********OK*********",result);
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
  //view
  router.post("/Level_ratio1", async (req, res) => {
    try {
        let result = await Recordhistory.sequelize.query(`
        with tb1 as (select [TTL],[General] ,[Developer],level1,[ratio]
          FROM [MIC_TrainingDB].[dbo].[ratio_table]
          unpivot ([ratio] for level1 in ([General_ratio],[Developer_ratio]) )  as pvt 
          ) 
          select [TTL],level1,[ratio] from tb1
          group by level1,[ratio],[TTL]
      `); /*---*/ 

        console.log("********OK*********",result);
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


module.exports = router;