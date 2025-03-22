import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { key, server } from "../../constants/constants";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


class CourseMaster extends Component {

  constructor(props) {
    super(props);

    this.state = {
      CourseID: null,
      CourseName: null,
    };
  }

  CourseMaster = async () => {
    let result = await httpClient.post(server.CourseMasterURL, this.state);

    if (result.data.api_result) {
      console.log(result.data);
      Swal.fire({
        title: "Success!",
        text: "input success",
        icon: "success",
        confirmButtonText: "OK",

      })
    } else {
      console.log(result.data);
      Swal.fire({
        title: "Fail!",
        text: "Input Fail",
        icon: "error",
        confirmButtonText: "NOK",
      });
    }
  }

  componentDidMount = async () => {
    //console.log(localStorage.getItem(key.USER_LV));
    if (localStorage.getItem(key.USER_EMP) !== "D9447") {
      window.location.replace("../home");
    } else {
      <Link href="./../CourseMaster" className="nav-link">
      </Link>

    }

    await this.getData ();
  };

  // get course Table 
  getData = async () => {
    let TableList = await httpClient.get(server.CourseMasterURL)
    console.log(TableList.data.result);
    this.setState({ TableList: TableList.data.result })
  }

  renderData() {
    if (this.state.TableList != null) {
      return this.state.TableList.map((item) => (
        <tr>
          {/* <td>{item.id}</td> */}
          <td>{item.CourseID}</td>
          <td>{item.CourseName}</td>
          <td>{item.updateBy}</td>
         
        </tr>
      ))
    }

  }

  render() {
    return (
      <div className="content-wrapper">
        <section classname="content-header">
          <div classname="container-fluid">
            <section className="content-header">
              <div className="container-fluid">

                <h1 class="m-3 text-dark text-center"> Course Master Form </h1>
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title"> Input Course Master ( For Admin) </h3>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Course ID</label>
                        <input
                          onChange={(e) => {
                            this.setState({ CourseID: e.target.value });
                          }}
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Course Name</label>
                        <input
                          onChange={(e) => {
                            this.setState({ CourseName: e.target.value });
                          }}
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder=""
                        />
                      </div>
                      <div className="card-footer">
                        <button onClick={(e) => {
                          e.preventDefault();
                          this.CourseMaster();
                        }} type="submit" className="btn btn-success">
                          Submit
                        </button>
                      </div>

                      {/* <div>
                <p> ID : {this.state.CourseID}</p>
                <p> Name : {this.state.CourseName}</p>
              </div> */}

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
              <h3 className="card-title"> MIC Training Course List</h3>
              <div className="card-tools">
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>CourseID</th>
                    <th>CourseName</th>
                    <th>updateBy</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderData()}
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

export default CourseMaster;
