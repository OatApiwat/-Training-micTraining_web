const express = require("express"); //constant
const app = express(); // constant app
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "./files")));
app.use(cors());


app.use("/MICTraining/authen", require("./api/api_authen"));
app.use("/MICTraining/manage_user", require("./api/api_user"));
app.use("/MICTraining/manpower", require("./api/api_manpower_master"));
app.use("/MICTraining/DivisionMaster", require("./api/api_DivisionMaster"));
app.use("/MICTraining/NewTrainee", require("./api/api_NewTraineeRegister"));
app.use("/MICTraining/History", require("./api/api_Recordhistory"));
app.use("/MICTraining/CourseMaster", require("./api/api_CourseMaster"));
app.use("/MICTraining/evaluate", require("./api/api_Evaluation"));
app.use("/MICTraining/job_file", require("./api/api_getFile"));
app.use("/MICTraining/video", require("./api/api_VideoInput"));
//app.use("/MICTraining/PlanTraining", require("./api/api_PlanTraining"));
app.use("/MICTraining/training_plan", require("./api/api_training_plan"));
app.use("/MICTraining/training_actual", require("./api/api_training_actual"));
app.use("/MICTraining/training_delete", require("./api/api_training_delete_log"));
app.use("/MICTraining/criterial_level", require("./api/api_Criterial traning"));


app.listen(2006, () => {
  console.log("Backend is running...Port 2006");
});
