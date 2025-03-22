import React, { Component } from "react";
import { Link } from "react-router-dom";

class MachineLearning extends Component {
  render() {
    const mystyle = {
      color: "#4d4dbd",
      padding: "20px",
      fontFamily: "Arial"
    };

    const mystyle1 = {
      textindent: "50px",
    };

    const mystyle2 = {
      color: "#4caf50",
      padding: "20px",
      fontFamily: "Arial"
    };

    const img = {
      display: "flex",
      justifyContent: "center",
      alignItem: "center"
    }


    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header ">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h4> The fundamentals of machine learning </h4>
                <h5></h5>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="./../content">Training course</Link></li>
                  <li className="breadcrumb-item active">Content</li>
                </ol>
              </div>

              <table className="table table-striped table-bordered table-hover table-md">
                <thead className="bg-primary" style={{ textAlign: 'center', overflow: 'auto' }}>
                  <tr>
                    <th>Topic</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody><tr>
                  <td> Name of Course (หลักสูตร)</td>
                  <td> The fundamentals of machine learning <b></b>
                  </td>
                </tr>
                  <tr>
                    <td> Time (ระยะเวลา) </td>
                    <td> 3 วัน <br />
                      08.30-09.00 น. Registration <br />
                      09.00-16.00 น. Training
                    </td>
                  </tr>
                  <tr>
                    <td> Objectives (วัตถุประสงค์) </td>
                    <td>
                      1. สำหรับผู้เริ่มต้นศึกษาภาษาคอมพิวเตอร์ <br />
                      2. เพื่อเป็นพื้นฐานสำหรับผู้สนใจหรือผู้เริ่มต้นพัฒนา machine learning <br />

                    </td>
                  </tr>
                  <tr>
                    <td>Qualification (คุณสมบัติผู้เข้ารับการอบรม)</td>
                    <td>Staff level up (M12 level up) (10 persons : group)  <br />
                    • ผู้เข้าอบรมต้องผ่านหลักสูตร Basic Knowledge for Python  <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day1</td>
                    <td> Inductive Learning Techniques <br />
                    • Concept Learning & Inductive Learning Hypothesis  <br />
                    • Decision tree learning <br/>
                    • Bayesian learning <br /> 
                    • Nearest-neighbours algorithms

                    </td>
                  </tr>
                  <tr>
                    <td> Day2</td>
                    <td> Statistical Pattern Recognition <br /> 
                    • Radial basic functions & kernel-based approaches <br />
                    • Support vector machines <br /> 
                    • Linear models & regression problems <br />
                    • Cluster analysis & unsupervised learning <br />
                    </td>
                  </tr>

                  <tr>
                    <td> Notebook and Software </td>
                    <td> ** ผู้เข้าอบรมต้องนำ Computer Notebook มาด้วย รายละเอียดดังนี้ <br />
                      (คอมพิวเตอร์ต้องไม่ใช่ Stand alone)  <br />
                      1. Window OS 10  <br />
                      2. CPU	Intel core i5 <br />
                      3. Disk free space drive C	10 Gb <br />
                      4. install Program  <br />
                      •  VS code <br />
                      •  Miniconda  <br />
                    </td>
                  </tr></tbody></table>
            </div>
          </div>

        </section>

        <section className="content">
          {/* Scroll to top */}
          <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
            <i className="fas fa-chevron-up" />
          </a>

          {/* แคบซูล 1 */}
          <div className="card card-blue">
            <div className="card-header">
              <h3 className="card-title">  </h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove">
              <i className="fas fa-times" />
            </button> */}
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body " >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label> </label>
                  </div>
                </div>
              </div>
              {/* /.row */}






              {/* /.row */}
            </div>
            {/* /.card-body */}
          </div>

          {/* เพิ่มใหม่ตรงนี้ */}

        </section >
      </div >
    );
  }
}

export default MachineLearning;
