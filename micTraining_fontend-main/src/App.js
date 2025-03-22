import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ChangePW from "./components/ChangePW/ChangePW";
import Header from './components/header/header';
import Sidemenu from './components/sidemenu/sidemenu';
import NewRegister from "./components/Newregister/Newregister";
import RecordHistory from "./components/RecordHistory/RecordHistory";
import content from "./components/content/content";
import DepverlopTeam from "./components/DepverlopTeam/DepverlopTeam";
import MES from "./components/MES/MES";
import IOT from "./components/IOT/IOT";
import reactWeb from "./components/reactWeb/reactWeb";
import AI from "./components/AI/AI";
import CourseMaster from "./components/CourseMaster/CourseMaster";
import ControlChart from "./components/ControlChart/ControlChart";
import Evaluation from "./components/Evaluation/Evaluation";
import EvaluateForm from "./components/evaluateForm/evaluateForm";
import HistoryList from "./components/HistoryList/HistoryList";
import JavaScript from "./components/JavaScript/JavaScript";
import InputCSV from "./components/InputCSV/InputCSV";
import Python from "./components/Python/Python";
import Python_task from "./components/python_task/python_task";
import MachineLearning from "./components/machineLearning/machineLearning";
import Pandas from "./components/pandas/pandas";
import Advance_IoT from "./components/Advance_IoT/Advance_IoT"
import Kafka from "./components/Kafka/Kafka"
import ROS from "./components/ROS/ROS"
// import Summarize from "./components/summarize_chart/summarize_chart";
import Criteria from "./components/Criteria/Criteria";

// import Video from "./components/VideoInput/VideoInput";
//import Plan from "./components/";
import editPlan from "./components/editPlan/editPlan";
import Plan_log from "./components/Plan_log/Plan_log";

import Footer from './components/footer/footer';
import { key, YES } from "./constants/constants";


const isLogin = () => {
  return localStorage.getItem(key.LOGIN_PASSED) === YES;
};

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default class App extends Component {
  redirectToLogin = () => {
    //ถ้า return error ให้ไปที่ login
    return <Redirect to="/login" />;
  };

  render() {
    return (
      <Router>
        <div>
          {isLogin() && <Header />}
          {/* {isLogin () && <Sidemenu /> } */}
          <Switch>
            <Route path="/header" component={Header} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/changePW" component={ChangePW} />
            <Route path="/sidemenu" component={Sidemenu} />
            <Route path="/NewRegister" component={NewRegister} />
            <Route path="/Recordhistory" component={RecordHistory} />
            <Route path="/content" component={content} />
            <Route path="/DepverlopTeam" component={DepverlopTeam} />
            <Route path="/MES" component={MES} />
            <Route path="/IOT" component={IOT} />
            <Route path="/AI" component={AI} />
            <Route path="/reactWeb" component={reactWeb} />
            <Route path="/CourseMaster" component={CourseMaster} />
            <Route path="/ControlChart" component={ControlChart} />
            {/* <Route path="/Summarize_chart" component={Summarize} />   */}
            <Route path="/Criteria_traning" component={Criteria} />
            <Route path="/Evaluation" component={Evaluation} />
            <Route path="/EvaluateForm" component={EvaluateForm} />
            <Route path="/HistoryList" component={HistoryList} />
            <Route path="/JavaScript" component={JavaScript} />
            <Route path="/InputCSV" component={InputCSV} />
            <Route path="/Python" component={Python} />
            <Route path="/python_task" component={Python_task} />
            <Route path="/MachineLearning" component={MachineLearning} />
            <Route path="/pandas" component={Pandas} />
            <Route path="/editPlan" component={editPlan} />
            <Route path="/Plan_log" component={Plan_log} />
            <Route path="/Advance_IoT" component={Advance_IoT} />
            <Route path="/Kafka" component={Kafka} />
            <Route path="/ROS" component={ROS} />
            {/* <Route path="/VideoInput" component={Video} /> */}

            <Route path="/footer" component={Footer} />

            {/* ถ้า return error ให้ไปที่ login */}
            <Route exact={true} path="/" component={this.redirectToLogin} />
            <Route exact={true} path="*" component={this.redirectToLogin} />
          </Switch>

          {isLogin() && <Footer />}
        </div>
      </Router>
    );
  }
}
