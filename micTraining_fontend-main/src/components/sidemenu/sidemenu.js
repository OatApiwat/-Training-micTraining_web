import React, { Component } from "react";
import { Link } from "react-router-dom";




class Sidemenu extends Component {


  render() {
    return (
      <aside className="main-sidebar sidebar-dark-pink">
        {/* Brand Logo */}
        <Link to="../home" className="brand-link">
          <img
            src="dist/img/mic_logo_icon.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-4"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">MIC Training Website</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/global-connection.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="./../home" className="d-block">
                MIC Training Website
              </a>
            </div>
          </div> */}

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-ellipsis-v" />
                  <p>
                    MENU
                    <i className="right fas fa-angle-left" />
                  </p>

                </a>
                <ul className="nav nav-treeview" style={{ display: "block" }}>
                  <li className="nav-item">
                    <Link to="../content" className="nav-link">
                      <i className="far fas fa-book nav-icon" />
                      <p>Training course list</p>
                    </Link>
                  </li>

   
                  {/* <li className="nav-item">
                    <Link to="./../VideoInput" className="nav-link">
                      <i className="fas fa-video nav-icon" />
                      <p> Training Video </p>
                    </Link>
                  </li> */}

                  <li className="nav-item">
                    <Link to="./../Calendar" className="nav-link">
                      <i className="far fa-calendar-alt nav-icon" />
                      <p> Training Calendar </p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="../DepverlopTeam" className="nav-link">
                      <i className="fas fa-users nav-icon" />
                      <p> Developer Team </p>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <a href="../summary" className="nav-link">
                    <i className="fas fa-chart-bar nav-icon" />
                      <p> Summary </p>
                    </a>
                  </li> */}

                </ul>
              </li>

              {/* <li className="nav-item menu-open">
                <a className="nav-link active">
                  <i className="fas fa-user-cog nav-icon" />
                  <p>
                    For Admin
                    <i className="right fas fa-angle-left" />
                  </p>

                </a>
                <ul className="nav nav-treeview" >
                  <li className="nav-item">
                    <Link to="./../CourseMaster" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Course Master for Admin</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="./../InputCSV" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Input CSV</p>
                    </Link>
                  </li>

                  
                  <li className="nav-item">
                    <Link to="./../VideoInput" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p> Input Video </p>
                    </Link>
                  </li>

                </ul>
              </li> */}


            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Sidemenu;
