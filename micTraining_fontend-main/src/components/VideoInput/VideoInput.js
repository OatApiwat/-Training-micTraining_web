import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as moment from 'moment';
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants/constants";
import Swal from "sweetalert2";

class VideoInput extends Component {

  constructor(props) {
    super(props);
    this.state = {

      TrainingDate: moment().format("YYYY-MM-DD"),
      FinishDate: moment().format("YYYY-MM-DD"),
      CourseName: [],
      selectedCourseName: "",
      fileType: "",
      FileDetail: "",


    }
  }


  async componentDidMount() {
    await this.courseName();
    await this.UploadVideo ();
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


UploadVideo  = async () => {
  var data = await new FormData() ;
  data.append('CourseName' , this.state.selectedCourseName) ;
  data.append('TrainingDate' , this.state.TrainingDate) ;
  data.append('FinishDate' , this.state.FinishDate) ;


  let VideoFile = await httpClient.post(server.VideoFile_URL,data)
  console.log(VideoFile.data.result);

  if (VideoFile.data.api_result !== 'ok'){
    console.log(VideoFile.data);
    Swal.fire({
      title: "Success!",
      text: "Update success",
      icon: "success",
      confirmButtonText: "OK",
    });
 
    return
  } else {
    // console.log(PictureFile.data) ;
    Swal.fire({
      title: "Fail!",
      text: "Update Fail",
      icon: "error",
      confirmButtonText: "NOK"
    })
    return
  }
  
}





  render() {
    return (
      <div className="content-wrapper">
        <section classname="content-header">
          <div classname="container-fluid">
            <section className="content-header">
              <div className="container-fluid">

                <h1 class="m-3 text-dark text-center"> Video Form </h1>
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title"> Upload Video </h3>
                  </div>
                  <form>
                    <div className="card-body">

                      <div className="row">
                        <div className="col-md-10" data-select2-id={79}>
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

                        </div>
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

                      <div className='form-group'>
                        <label></label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input onChange={(e) => {
                              this.setState({ setFileNameDetail: e.target.files[0] });
                              document.getElementById("chooseFile").innerHTML = e.target.files[0].name;
                            }
                            }
                              type="file" className="custom-file-input" />
                            <label id="chooseFile" className="custom-file-label">Choose file...</label>
                          </div>
                        </div>
                      </div>

                      
                        <button onClick ={async (e) => {
                          await e.preventDefault ();
                          await this.UploadVideo ();
                        }}
                         type="submit" className="btn btn-success">
                          Submit
                        </button>
                   

                      <div>
                        <p> Name : {this.state.selectedCourseName}</p>
                        <p> start Date : {this.state.TrainingDate}</p>
                        <p> Finish Date  : {this.state.FinishDate}</p>
                      </div>

                    </div>
                  </form>
                </div>
              </div>

            </section>
          </div>
        </section>

        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><b> Video list </b> </h3>
              <div className="card-tools">
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>CourseName</th>
                    <th>Training Date </th>
                    <th>Finish Date </th>
                    <th> Video </th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
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

export default VideoInput;
