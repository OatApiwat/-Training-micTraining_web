import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { OK, server } from "../../constants/constants";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

class Register extends Component {
  // ==========================  สร้างstate เพื่อรับค่าที่อินพุท
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      empNumber: "",
      password: "",
      confirmpassword: "",

    };
  }

  //  componentDidMount() {
  //        this.getData();
  //      }


  doRegister = async () => {
    try {
      if (this.state.password !== this.state.confirmpassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password not match!',
        })

      } else {
        let result = await httpClient.post(server.USER_URL, this.state);
        // console.log(result);
        // debugger
        if (result.data.api_result === OK) {
          Swal.fire({
            icon: 'success',
            title: 'OK',
            text: 'Register completed',

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
  };

  showError() {
    if (this.props.userReducer.isError) {
      this.props.userErrorAlert(this.props.userReducer.errorMessage);
    }
  }

  handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      await this.doRegister();

    }
  };


  render() {
    return (
      <div className="register-page">
        <div className="register-box">
          <div className="register-logo">
            <b>Register</b>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>

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
                  type="text"
                  className="form-control"
                  placeholder="EmpNumber"
                  onChange={(e) => {
                    this.setState({ empNumber: e.target.value });
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
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
                      this.doRegister();
                    }}
                    className="btn btn-primary btn-block"
                  >
                    Register
                  </button>
                </div>
              </div>

              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.replace("../login")
                  }}
                  className="btn btn-success btn-block" > Already have a account

                </button>
              </div>

              {/* เช็คค่าว่าถ้าอินพุทในช่องแล้วค่าเข้ามั้ย */}
              {/*   <div > 
              <p> state username : {this.state.username}</p>
              <p> state empNumber : {this.state.empNumber}</p>
              <p> state password : {this.state.password}</p>
              <p> state confirmpassword : {this.state.confirmpassword}</p>
            </div>  */}
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  }
}

export default Register;
