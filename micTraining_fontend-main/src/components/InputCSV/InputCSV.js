import React, { Component } from "react";
import { Link } from "react-router-dom";
import { key, server } from "../../constants/constants";
import { httpClient } from "../../utils/HttpClient";

import CSVReader from "react-csv-reader";
import Swal from "sweetalert2";



class InputCSV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      csv_data: "",
      uploaded : "",
      progress : 0 ,

    }
  }

  
  componentDidMount = async () => {
    //console.log(localStorage.getItem(key.USER_LV));
    //กำหนดสิทธิให้เฉพาะ Admin 
    if (localStorage.getItem(key.USER_EMP) !== "D9447") {
      window.location.replace("../home");
    } else {
      <Link to="./../InputCSV" className="nav-link">
      </Link>

    }
  };

  Data_import = async () => {
    //await console.log(this.state.csv_data);

    for (let index = 1; index <= this.state.csv_data.length - 1; index++) {
      if (this.state.csv_data[index][0] === "") {
        break;
      } else {
        let import_result = await httpClient.post(
          server.UPLOAD_Data +
            "/" +
            this.state.csv_data[index][0] +
            "/" +
            this.state.csv_data[index][1] +
            "/" +
            this.state.csv_data[index][2] +
            "/" +
            this.state.csv_data[index][3] +
            "/" +
            this.state.csv_data[index][4] +
            "/" +
            this.state.csv_data[index][5] +
            "/" +
            this.state.csv_data[index][6] +
            "/" +
            this.state.csv_data[index][7]+
            "/" +
            this.state.csv_data[index][8]+
            "/" +
            this.state.csv_data[index][9]+
            "/" +
            this.state.csv_data[index][10]+
            "/" +
            this.state.csv_data[index][11]+
            "/" +
            this.state.csv_data[index][12]+
            "/" +
            this.state.csv_data[index][13]

        );
        await this.setState({ uploaded: this.state.uploaded + 1 });
        await this.setState({
          progress:
            (100 * this.state.uploaded) / (this.state.csv_data.length - 2),
        });
      }
    }

    if (this.state.progress >= 100) {
      await Swal.fire({
        icon: "success",
        title: "Upload plan Successed",
        // text: { APP_TITLE }.APP_TITLE,
        showConfirmButton: false,
        timer: 1000,
      });
      await window.location.reload(false);
    }
  };

  render() {
    return (<div className="content-wrapper" >
      <section classname="content-header">
        <div classname="container-fluid">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-8">
                  <h1 style={{ textIndent: 500 }}>Input CSV Form</h1>
                </div>
                <div className="col-sm-4">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="./../home"> Home</Link></li>
                    {/* <li className="breadcrumb-item active"></li> */}
                  </ol>
                </div>
              </div>
            </div>{/* /.container-fluid */}
          </section>
        </div></section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              <div className="card card-info">
                {/* general form elements */}
                <div className="card-body" style={{ display: "block" }}>
                  <div className="row">
                    <CSVReader
                      onFileLoaded={(data, fileInfo) =>
                        this.setState({ csv_data: data })
                      }
                    />

                    <div style={{ width: "5%" }}></div>
                    <button
                      className="btn btn-primary float-right"
                      onClick={async(e) => {
                       await e.preventDefault();
                        this.Data_import();
                      }}
                    >
                      Upload
                    </button>
                  </div>
                  <br />
                  <div className="row">
                    {this.state.progress} %
                    <div className="progress" style={{ width: "100%" }}>
                      <div
                        className="progress-bar bg-primary progress-bar-striped"
                        role="progressbar"
                        style={{
                          width: this.state.progress + "%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>{/* /.container-fluid */}
      </section>


    </div>





    );
  }
}

export default InputCSV;
