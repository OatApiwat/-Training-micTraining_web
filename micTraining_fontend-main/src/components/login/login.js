import React, { Component } from "react";
import { server } from "../../constants/constants";
import { httpClient  } from "../../utils/HttpClient";
import Swal from "sweetalert2";
import {key,YES} from "../../constants/constants";
import { Link } from "react-router-dom";
import "./login.css"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
    };
  }

  LoginData = async () => {
    let result = await httpClient.post(server.LOGIN_URL, this.state);
try {
  if (result.data.api_result) {
    //login pass
    console.log(result.data) ;
    localStorage.setItem(key.LOGIN_PASSED, YES);
    localStorage.setItem(key.USER_NAME,result.data.result.username);
    localStorage.setItem(key.USER_EMP,result.data.result.empNumber);
    
    Swal.fire({
      title: "Success!",
      text: "Login success",
      icon: "success",
      confirmButtonText: "OK",
    }).then (() => {

    //คำสั่งให้กลับไปที่หน้า
    // this.props.history.push("/home");
    window.location.replace("../home");
    })
  } else {
    Swal.fire({
      title: "Fail!",
      text: "Login Fail",
      icon: "error",
      confirmButtonText: "NOK",
    });
  }
} catch (error) {
  alert("username not found please register");
}
  };

  //ให้กด enter -> do login 
  handleKeyPress = async(event) => {
    if (event.key === "Enter") {
      await this.LoginData();
    
    }
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="./login.js">
              <p><b>MIC Training Website</b></p>
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <div className="input-group mb-3">
                <input
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                  type="text"
                  className="form-control"
                  placeholder="username"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                  onKeyPress={this.handleKeyPress}

                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
          
                {/* /.col */}
                <div className="col-6">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.LoginData();
                    }}
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Login
                  </button>

                </div>

                <div className="col-6">
                  <button onClick={(e) => {
                        e.preventDefault ();
                        window.location.replace("../register")
                      }}
                    type="submit"
                    className="btn btn-warning btn-block"
                  >
                    Register
                  </button>

                </div>
                {/* /.col */}
              </div>
              <p className="mb-0">
                <Link to="/changePW" className="text-center">
                  Forgot my password 
                </Link>
              </p>
            </div> 

            </div>
            {/* /.login-card-body */}
          </div>
        </div>
     
    );
  }
}

export default Login;
