import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants/constants";
import moment from "moment";




class HistoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      HistoryData: null,
      CourseName: [],
      selectedCourseName: "",
      Quater: "",
      FYYear: "",
      selectList: [],
      // selectList1: [],
      display_table: "flex",
      display_edit: "none",

    };
  }

  async componentDidMount() {

    await this.getHistoryData();
    await this.courseName();
    await this.selectList();

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


  getHistoryData = async () => {
    let TableList = await httpClient.get(server.RecordHistory_URL)
    console.log(TableList.data.result);
    this.setState({ TableList: TableList.data.result })
  }

  renderHistoryData() {
    if (this.state.TableList != null) {
      return this.state.TableList.map((item) => (
        <tr>
          {/* <td>{item.id}</td> */}
          <td>{item.FYYear}</td>
          <td>{item.Quater}</td>
          <td>{item.EmpNo}</td>
          <td>{item.EMP_NAME}</td>
          <td>{item.DIVI_NAME}</td>
          <td>{item.CourseName}</td>
          <td>{moment(item.TrainingDate).format('DD MMM  YYYY')}</td>
          <td>{moment(item.FinishDate).format('DD MMM  YYYY')}</td>

        </tr>
      ))
    }

  }

  // select history data course
  selectList = async () => {
    let select = await httpClient.get(server.SelectList_URL + '/' + this.state.FYYear + '/' + this.state.Quater)
    console.log(select.data.result);
    this.setState({ selectList: select.data.result })
    await console.log(this.state.selectList);
  }

  renderselectList() {
    if (this.state.selectList != null) {
      return this.state.selectList.map((item) => (

        <tr>
          {/* <td>{item.id}</td> */}
          <td>{item.FYYear}</td>
          <td>{item.Quater}</td>
          <td>{item.EmpNo}</td>
          <td>{item.EMP_NAME}</td>
          <td>{item.DIVI_NAME}</td>
          <td>{item.CourseName}</td>
          <td>{moment(item.TrainingDate).format('DD MMM  YYYY')}</td>
          <td>{moment(item.FinishDate).format('DD MMM  YYYY')}</td>
          <td><img src={"http://10.121.1.123:2006/MICTraining/job_file/File/" + item.id} width="400" height="200"></img></td>

        </tr>
      ))
    }
  }





  render() {
    return (
      <div className="content-wrapper ">
        <section className="content-header"  >
          <div className="container-fluid">
            <br/>
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1> History List</h1>
              </div>

              <div className="col-sm-6" style={{ height: "auto" }}>
                <ol className="breadcrumb float-right" >
                  <li className="breadcrumb-item"><a href="./../HistoryList">Return</a></li>
                </ol>
              </div>

              {/*        
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="./../home">Home</a></li>
        
        </ol> */}
            </div>
          </div>
        </section>

        <div className="row" >
          <div className="col-12" style={{ display: this.state.display_table }}>
            <div className="card" >

              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                <div className="col-6 " >
                  {/* <div className="form-group" >
                    <br />
                    <label><h3> Course Name </h3> </label>
                    <select onChange={(e) => {
                      this.setState({ selectedCourseName: e.target.value });
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
                      {this.renderCourse()}
                    </select>
                  </div> */}
                  <div className="row" >
                    <div className="col-6 " >
                      <label> Quarter </label>
                      <select onChange={(e) => {
                        this.setState({ Quater: e.target.value });
                      }}
                        className="form-control select2bs4 select2-hidden-accessible "
                        style={{ width: "100%" }}
                        data-select2-id={0}
                        tabIndex={-1}
                        aria-hidden="true"
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

                    <div className="col-6 " >
                      <label> Year </label>
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
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </select>
                    </div>
                  </div>

                  <br />
                  <div className="col-4 " >
                    <button onClick={async (e) => {
                      e.preventDefault();
                      await this.selectList();
                      await this.setState({
                        display_table: "none",
                        display_edit: "flex",
                      })

                    }
                    }
                      type="button" class="btn btn-block btn-primary"> ค้นหา </button>
                  </div>
                </div>
                <br />
                <div className="col-md-12 " >
                  <table className="table table-head-fixed text-nowrap" style={{ fontSize: 14 }} >
                    <thead>
                      <tr>
                        {/* <th>ID</th> */}
                        <th>FYYear</th>
                        <th>Quarter</th>
                        <th>EmpNo.</th>
                        <th>Name</th>
                        <th>Division</th>
                        <th>CourseName</th>
                        <th>TrainingDate</th>
                        <th>FinishDate</th>
                      </tr>
                    </thead>
                    <tbody> {this.renderHistoryData()}</tbody>
                  </table>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>

          <div className="card col-md-12" style={{ display: this.state.display_edit, }}  >
            <div className="card-header">

              <table className="table table-head-fixed text-nowrap"  style={{ fontSize: 14 }} >
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>FYYear</th>
                    <th>Quarter</th>
                    <th>EmpNo.</th>
                    <th>Name</th>
                    <th>Division</th>
                    <th>CourseName</th>
                    <th>TrainingDate</th>
                    <th>FinishDate</th>
                    <th> Picture </th>
                  </tr>
                </thead>
                <tbody> {this.renderselectList()}</tbody>
              </table>

            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default HistoryList;
