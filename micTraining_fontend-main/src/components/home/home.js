import React, { Component } from "react";
import { server } from "../../constants/constants";
import { httpClient } from "../../utils/HttpClient";
import { Link } from 'react-router-dom';
import { FiHome ,FiHash } from "react-icons/fi";

import "./home.css"
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      date: new Date().toLocaleString(),
    };
  }
  async componentDidMount() {
    let data = await httpClient.get(server.USER_URL);
    this.setState({ data: data.data.result });

  }
  getDate() {
    var datedata = { currentTime: new Date().toLocaleString() };
    this.setState({
      date: datedata
    });

  }
  render() {
    return (
      <div className="content-wrapper"style={{ backgroundImage: "url(/dist/img/photo-1542831371-29b0f74f9713.avif)" }}  >
        <div className="home-bg" >
          <div className="date">
            <p className="m-5 text-blue text-right"> <b>Today : {this.state.date} </b></p>
          </div>
          <h1 className="m-5 text-light text-center"><FiHash/> Welcome  MIC Training </h1>

          <div className="container-fluid ">
            <div className="row">
              {/* <div className="col-lg-3 col-6">
              <div className="small-box bg-primary">
                <div className="inner">
                  <h4>Register</h4>
                  <p>ลงทะเบียน</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="./../Newregister" className="small-box-footer">
                  Click
                </a>
              </div>
            </div> */}

              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h4>Input Training History</h4>
                    <p>บันทึกประวัติผู้อบรม</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <Link to="./../RecordHistory" className="small-box-footer">
                    Click
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box">
                  <div className="inner">
                    <h4>ประเมินการอบรม</h4>
                    <p>Upload Picture</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-document-store" />
                  </div>
                  <Link to="./../Evaluation" className="small-box-footer">
                    Click
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h4>History List</h4>
                    <p> ประวัติการอบรม</p>
                  </div>
                  <Link to="./../HistoryList" className="small-box-footer">
                    Click
                  </Link>
                </div>
              </div>
              {/* <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h4>Summarize</h4>
                <p>Summarize Data</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <Link to="./../summary" className="small-box-footer">
               Click 
              </Link>
            </div>
          </div> */}
              {/* <div className="col-lg-3 col-6">
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h4>Summarize</h4>
                    <p>Summarize Data</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <Link to="../summarize_chart" className="small-box-footer">
                    Click
                  </Link>
                </div>
              </div> */}
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h4>Criterial traning</h4>
                    <p>ข้อมูลการอบรมระดับของพนักงาน</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <Link to="./../Criteria_traning" className="small-box-footer">
                    Click
                  </Link>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
