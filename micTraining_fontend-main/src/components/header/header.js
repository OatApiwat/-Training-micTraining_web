import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { key, LOGIN_PASSED } from "../../constants/constants";
import { FiHome, FiBook, FiCalendar, FiUsers,FiLogOut,FiSettings } from "react-icons/fi";
import "./header.css"


class Header extends Component {
  render() {
    return (
      <div class="wrapper">
        <nav className="main-header navbar navbar-expand navbar-dark navbar-light ">
          {/* Left navbar links */}
          <ul className="navbar-nav ">
            <li className="nav-item">
              {/* <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a> */}
            </li>

            {/* Link Home */}
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="./../home" className="nav-link">
                <FiHome /> &nbsp;
                Home
              </Link>
            </li>

            <li className="nav-item d-none d-sm-inline-block">
              <Link to="../content" className="nav-link">
                <FiBook />&nbsp;
                Training Course
              </Link>
            </li>

            <li className="nav-item d-none d-sm-inline-block">
              <Link to="./../editPlan" className="nav-link">
                <FiCalendar />&nbsp;
                Training Calendar
              </Link>
            </li>

            <li className="nav-item d-none d-sm-inline-block">
              <Link to="../DepverlopTeam" className="nav-link">
                <FiUsers />&nbsp;
                Developer Team
              </Link>
            </li>

            {/* Dropdown for Admin */}
            {/* <div className="btn-group">
              <button type="button" className="btn btn-dark">For Admin </button>
              <button type="button" className="btn btn-dark dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown" aria-expanded="false">
              </button>
              <div className="dropdown-menu" role="menu">
                <Link to="./../CourseMaster" className="dropdown-item">Course Master </Link>
                <Link to="./../InputCSV" className="dropdown-item">Input by CSV </Link>
              </div>
            </div> */}

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                <FiSettings/>
                <span className="badge badge-danger navbar-badge"> For Admin </span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" >

                <div className="dropdown-divider" />
                <Link to="./../CourseMaster" className="dropdown-item">
                  <i className="far fa-list-alt" /> Course Master
                  {/* <span className="float-right text-muted text-sm">3 mins</span> */}
                </Link>

                <div className="dropdown-divider" />
                <Link to="./../InputCSV" className="dropdown-item">
                  <i className="far fa-list-alt" /> Input by CSV
                  {/* <span className="float-right text-muted text-sm">3 mins</span> */}
                </Link>


              </div>
            </li>

          </ul>
          <ul className="navbar-nav ml-auto">
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                <i className="fas fa-users" />
                <span className="badge badge-warning navbar-badge"> Hi </span>
              </a>
            </li>
          </ul>
          {/* links ทางขวา */}
          <a className="navbar-nav text-blue" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            Welcome :  {localStorage.getItem(key.USER_EMP)} <div> &nbsp; </div>
          </a>
          <li className="nav-item d-none d-sm-inline-block text-red " >
            <a className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("../login");
                localStorage.removeItem(key.LOGIN_PASSED);
                // localStorage.removeItem(key.USER_NAME,result.data.username);
                // localStorage.removeItem(key.USER_EMP,result.data.empNumber);
              }}>
              {/* Icon logout */}
              <FiLogOut/>
              Log out
            </a>

          </li>


        </nav>
      </div>
    );
  }
}

export default Header;
