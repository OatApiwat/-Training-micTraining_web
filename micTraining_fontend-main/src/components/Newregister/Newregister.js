import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants/constants";
import Swal from "sweetalert2";
import * as moment from 'moment';


class Newregister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmpNo: "",
      // divisionName :[],
      // selectedDivisionName : "",
      EMP_NAME: "",
      rfidCard: "",
      TableData: null,
      CourseName: [],
      selectedCourseName: "",
      DIVI_NAME: "",
      Scantime: moment().format('yyyy-MM-DD HH:mm:ss'),
      createdAt: moment().format('yyyy-MM-DD HH:mm:ss'),
      updatedAt: moment().format('yyyy-MM-DD HH:mm:ss'),



    };
  }

  async componentDidMount() {
    // await this.divName() ;
    await this.getTableData()
    await this.courseName();

  }

  //   divName = async () => {
  //     let selectDivision = await httpClient.get(server.DivisionURL) 
  //     //console.log (selectDivision.data.result)
  //     // await this.setState({divisionCode :selectDivision.data.result })
  //     await this.renderDivision()
  //     var new_div = this.state.divisionName

  //     for (var i =0 ; i < selectDivision.data.result.length;i++) {
  //        await new_div.push({div:selectDivision.data.result[i].divisionName})

  //     }
  //     console.log( new_div);
  // this.setState({
  //   divisionName:new_div
  // })
  //   }


  //  renderDivision() { 
  //    if( this.state.divisionName !== null ) { 
  //     return this.state.divisionName.map((item) =>(
  //       <option key= {item.div}>{item.div}</option>
  //     ));
  //    }
  //  }

  handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      await this.RFID_Registered();
      await this.NewregisterData();
    }
  };

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
    console.log(RFIDNumber.data.result[0].EMP_NAME);
    console.log(RFIDNumber.data.result[0].DIVI_NAME);
    console.log(RFIDNumber.data.result[0].EmpNo);

    //  set state
    await this.setState({
      EMP_NAME: RFIDNumber.data.result[0].EMP_NAME,
      DIVI_NAME: RFIDNumber.data.result[0].DIVI_NAME,
      EmpNo: RFIDNumber.data.result[0].EmpNo,
      RFID: RFIDNumber.data.result[0].RFID
    })

    await console.log(this.state);

  }

  NewregisterData = async () => {
    let insert_result = await httpClient.post(server.NewregisterURL + "/" + this.state.EmpNo
      + "/" + this.state.DIVI_NAME + "/" + this.state.EMP_NAME + "/" + this.state.selectedCourseName
      + "/" + this.state.rfidCard + "/" + this.state.Scantime + "/" + this.state.createdAt + "/" + this.state.updatedAt)

    console.log(insert_result.data.result);

    if (insert_result.data.api_result === 'ok') {
      console.log(insert_result.data);
      Swal.fire({
        title: "Success!",
        text: "register success",
        icon: "success",
        confirmButtonText: "OK",

      }).then(() => {
        window.location.replace("../Newregister");
      }
      )
    } else {
      console.log(insert_result.data);
      Swal.fire({
        title: "Fail!",
        text: "register Fail",
        icon: "error",
        confirmButtonText: "NOK",
      });
    }
  }

  getTableData = async () => {
    let TableData = await httpClient.get(server.NewregisterURL)
    console.log(TableData.data.result);
    this.setState({ TableData: TableData.data.result })
  }

  renderTableData() {
    if (this.state.TableData != null) {
      return this.state.TableData.map((item) => (
        <tr>
          <td>{item.EmpNo}</td>
          <td>{item.DIVI_NAME}</td>
          <td>{item.EMP_NAME}</td>
          <td>{item.CourseName}</td>
          <td>{item.rfidCard}</td>
          <td>{item.Scantime}</td>

        </tr>
      ))
    }
  }


  render() {
    return (
      <div className="content-wrapper">
        <h1 class="m-5 text-dark text-center"> Register Form </h1>

        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Information Details </h3>
          </div>
          {/* /.card-header */}
          {/* form start */}

          <div className="card-body">

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
                  --- Please select course ---{" "}
                </option>
                {this.renderCourse()}
              </select>
            </div>
            {/* <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Emp Number</label>
                  <input  onChange={(e) => {
                    this.setState({ EmpNo: e.target.value });
                  }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div> */}

            {/* <div className="form-group" >
                <label>Division </label>
                <select onChange={(e) => {
                    this.setState({ selectedDivisionName: e.target.value });
                  }}
                  className="form-control select2bs4 select2-hidden-accessible"
                  style={{ width: "100%" }}
                  data-select2-id={0}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option selected="selected" 
                  >
                    --- Please select Division Name---{" "}
                  </option>
                  {this.renderDivision()}
                </select>
              </div> */}

            {/* <div className="form-group">
            <label> Name </label>
            <input onChange={(e) => {
                    this.setState({ EMP_NAME: e.target.value });
                  }} type="text" className="form-control" placeholder=" ชื่อ" />
            </div> */}

            <div className="form-group">
              <label> RfidCard </label>
              <input onChange={(e) => {
                this.setState({ rfidCard: e.target.value });

              }}
                onKeyPress={this.handleKeyPress}
                type="text" className="form-control" placeholder=" สแกนบัตร" />
            </div>

            <button onClick={async (e) => {
              e.preventDefault();
              await this.RFID_Registered();
              await this.NewregisterData();

            }} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/*             
            <div>
                <p> empNumber : {this.state.EmpNo}</p>
                <p> divisionName : {this.state.selectedDivisionName}</p>
                <p> FirstName : {this.state.EMP_NAME}</p>
                <p> rfidCard : {this.state.rfidCard}</p>
               
              </div> */}
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#00BCD4" }}>
              <h3 className="card-title" ><b> New Register </b> </h3>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0" style={{ height: 300 }}>
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>Emp</th>
                    <th>Division</th>
                    <th>Name</th>
                    <th>CourseName</th>
                    <th>rfidCard</th>
                    <th>Scantime</th>
                  </tr>
                </thead>
                <tbody> {this.renderTableData()}</tbody>

              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>


      </div>

    );
  }
}

export default Newregister;
