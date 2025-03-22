import React, { Component } from "react";
import * as moment from 'moment';
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants/constants";
import Swal from "sweetalert2";


class RecordHistory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      TrainingDate: moment().format("YYYY-MM-DD"),
      FinishDate: moment().format("YYYY-MM-DD"),
      FYYear: "",
      Quater: "",
      CourseName: [],
      selectedCourseName: "",
      //RFID_Registered : "" ,
      DIVISION: "",
      DIVI_NAME: "",
      EMP_NAME: "",
      EmpNo: "",
      PLACE_NAME: "",
      PROCESS: "",
      SECTION: "",
      rfidCard: "",
      Scantime: moment().format('yyyy-MM-DD HH:mm:ss'),


    };

  }

  async componentDidMount() {
    await this.courseName();
    await this.RFID_Registered();
    await this.RecordHistory();
  }

  courseName = async () => {
    let selectCourse = await httpClient.get(server.courseName_URL)
    //console.log (selectedCourseName.data.result)
    //await this.setState({CourseName :selectDivision.data.result })
    await this.renderCourse()
    var new_course = this.state.CourseName
    for (var i = 0; i < selectCourse.data.result.length; i++) {
      await new_course.push({ Course: selectCourse.data.result[i].CourseName })

    }
    console.log(new_course);
    await this.setState({
      CourseName: new_course
    })
  }

  renderCourse() {
    if (this.state.CourseName !== null) {
      return this.state.CourseName.map((item) => (
        <option key={item.Course}>{item.Course}</option>
      ));
    }
  }

  RFID_Registered = async () => {
    let RFIDNumber = await httpClient.get(server.RFID_Registered_URL + "/" + this.state.rfidCard)
    console.log(RFIDNumber.data.result);
    //console.log(RFIDNumber.data.result[0].EMP_NAME) ; 
    //console.log(RFIDNumber.data.result[0].DIVI_NAME) ;
    //console.log(RFIDNumber.data.result[0].EmpNo) ;

    //  set state
    await this.setState({
      EMP_NAME: RFIDNumber.data.result[0].EMP_NAME
      , DIVISION: RFIDNumber.data.result[0].DIVISION,
      DIVI_NAME: RFIDNumber.data.result[0].DIVI_NAME,
      EmpNo: RFIDNumber.data.result[0].EmpNo,
      PLACE_NAME: RFIDNumber.data.result[0].PLACE_NAME,
      PROCESS: RFIDNumber.data.result[0].PROCESS,
      RFID: RFIDNumber.data.result[0].RFID,
      SECTION: RFIDNumber.data.result[0].SECTION,
    })

    await console.log(this.state);

  }

  RecordHistory = async () => {
    let History_result = await httpClient.post(server.CHECKIN_URL + "/" + this.state.FYYear + "/"
      + this.state.Quater + "/" + this.state.selectedCourseName + "/" + this.state.DIVISION + "/" + this.state.DIVI_NAME + "/" + this.state.EMP_NAME + "/" + this.state.EmpNo + "/"
      + this.state.PLACE_NAME + "/" + this.state.PROCESS + "/" + this.state.SECTION + "/" + this.state.rfidCard + "/" + this.state.Scantime + "/"
      + this.state.TrainingDate + "/" + this.state.FinishDate)

    // console.log(History_result.data.result.TrainingDate) ;
    // console.log(History_result.data.result.FinishDate) ;

    if (History_result.data.api_result !== 'ok') {
      console.log(History_result.data);
      Swal.fire({
        title: "Fail!",
        text: "register Fail",
        icon: "error",
        confirmButtonText: "NOK",
      });
      return
    } else {
      console.log(History_result.data);
      Swal.fire({
        title: "Success!",
        text: "register success",
        icon: "success",
        confirmButtonText: "OK",

      })

    }
  }

  EnterKeyPress = async (event) => {
    if (event.key === "Enter") {
      await this.RFID_Registered();
      await this.RecordHistory();

    }
  };

  render() {
    return (
      <div className="content-wrapper "> 
      <br/>
        <h1 class="text-dark text-center"> Input Training History </h1>
        <div className="card card-warning" >
          <div className="card-header">
            <h3 className="card-title">Please Input Detail </h3>
          </div>
          <div className="card-body validation"  >
            <div className="form-group" >
              <label> FY Year </label>
              <select onChange={(e) => {
                this.setState({ FYYear: e.target.value });
              }}
                className="form-control select2bs4 select2-hidden-accessible "
                style={{ width: "100%" }}
                data-select2-id={0}
                tabIndex={-1}
                aria-hidden="true"
              >
                <option selected="selected" >
                  --- Please select---
                </option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                {/* <option>2023</option>
                <option>2023</option> */}
              </select>
            </div>
            <div className="form-group" >
              <label> Quarter </label>

              <select onChange={(e) => {
                this.setState({ Quater: e.target.value });
              }}
                className="form-control select2bs4 select2-hidden-accessible   "
                style={{ width: "100%" }}
                data-select2-id={0}
                tabIndex={-1}
              //aria-hidden="true"
              >
                <option selected="selected">
                  --- Please select---
                </option>
                <option>Q1(Apr-Jun) </option>
                <option>Q2(Jul-Sep) </option>
                <option>Q3(Oct-Dec) </option>
                <option>Q4(Jan-Mar)</option>
              </select>
            </div>
            <div className="form-group" >
              <label>Course </label>
              <select onChange={(e) => {
                this.setState({ selectedCourseName: e.target.value });
              }}
                className="form-control select2bs4 select2-hidden-accessible"
                style={{ width: "100%" }}
                data-select2-id={0}
                tabIndex={-1}
                aria-hidden="true"
              >
                <option selected="selected"
                >
                  --- Please select course ---
                </option>
                {this.renderCourse()}
              </select>
            </div>
            <div className="row">
              {/* select Date */}
              <div className="col-md-3" >
                <label> Training Date </label> <br />
                <input
                  class="form-control"
                  type="date"
                  id="id_daydate"
                  name="name_daydate"
                  value={this.state.TrainingDate}
                  onChange={async (e) => {
                    await this.setState({
                      TrainingDate: moment(e.target.value).format("YYYY-MM-DD"),
                      // Trainingdate: moment(e.target.value).format("YYYY/MM/DD"),
                    });
                    //
                  }}
                />
              </div>
              <div className="col-md-3" >
                <label>Finish Date </label> <br />
                <input
                  class="form-control"
                  type="date"
                  id="id_daydate"
                  name="name_daydate"
                  value={this.state.FinishDate}
                  onChange={async (e) => {
                    await this.setState({

                      FinishDate: moment(e.target.value).format("YYYY-MM-DD"),
                      //Enddate: moment(e.target.value).format("YYYY/MM/DD"),
                    });
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label> RfidCard </label>
              <input onChange={(e) => {
                this.setState({ rfidCard: e.target.value });
              }}
                onKeyPress={this.EnterKeyPress}
                type="text" className="form-control" placeholder=" สแกนบัตร" />
            </div>

            <button onClick={async (e) => {
              await e.preventDefault();
              await this.RFID_Registered();
              await this.RecordHistory();
            }}
              type="submit" className="btn btn-primary">
              Submit
            </button>
            {/* เว้นวรรค */}
            &nbsp; &nbsp;

            <button onClick={(e) => {
              e.preventDefault();
              window.location.replace("../HistoryList")
            }}
              type="button" class="btn btn-success"> History List</button>

            &nbsp; &nbsp;

            {/* <button 
              type="button" class="btn btn-success"> ?? </button> */}

            {/* <div>
                <p> FY Year : {this.state.FYYear}</p>
                <p> Quarter : {this.state.Quater}</p>
                <p> CourseName : {this.state.selectedCourseName}</p>
                <p> TrainingDate : {this.state.TrainingDate}</p>
                <p> FinishDate : {this.state.FinishDate}</p>
                <p> RfidCard : {this.state.rfidCard}</p>
              </div> */}
          </div>






        </div>
      </div>
    );
  }
}

export default RecordHistory;
