import React, { Component } from "react";
import Swal from "sweetalert2";
import { httpClient } from "../../utils/HttpClient";
import { OK, server } from "../../constants/constants";

class ChangePW extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmpassword: "",

    }
  }

  ChangePW = async () => {
    try {
      if (this.state.password !== this.state.confirmpassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password not match!',
        })

      } else {
        let result = await httpClient.put(server.ChangePW_URL,this.state);
        console.log(result.data.result);
        // debugger
        if (result.data.api_result === OK) {
          Swal.fire({
            icon: 'success',
            title: 'OK',
            text: 'Change password OK',

          }).then(() => {

            //คำสั่งให้กลับไปที่หน้า
            // this.props.history.push("/home");
            window.location.replace("../login");
          })

        } else {
          //alert("Register failed");
          Swal.fire({
            title: "Fail!",
            text: "Register Fail",
            icon: "error",
            confirmButtonText: "NOK",
          });
        }
      }
    } catch (error) {
      // alert(error);
    }
  }


  render() {
    return <div className="register-page">
      <div className="register-box">
        <div className="register-logo">
          <b>Change Password</b>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg"></p>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username มากกว่า 4 ตัว"
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />

              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="confirmpassword"
                onChange={(e) => {
                  this.setState({ confirmpassword: e.target.value });
                }}
                onKeyPress={this.handleKeyPress}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    //  this.doRegister();
                    this.ChangePW();
                  }}
                  className="btn btn-primary btn-block"
                >
                  Change password
                </button>
              </div>
            </div>

            {/* เช็คค่าว่าถ้าอินพุทในช่องแล้วค่าเข้ามั้ย */}
            {/* <div >
              <p> state username : {this.state.username}</p>
              <p> state password : {this.state.password}</p>
              <p> state confirmpassword : {this.state.confirmpassword}</p>
            </div> */}
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    </div>;
  }
}

export default ChangePW;
