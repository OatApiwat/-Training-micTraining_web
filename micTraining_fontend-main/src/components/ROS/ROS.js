import React, { Component } from "react";
import { Link } from "react-router-dom";

class ROS extends Component {
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
      <div className="content-wrapper" >
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0"> Basic robot operating system (ROS) </h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="../content"> Training Course</Link></li>
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
                  <td> Basic robot operating system (ROS) <b></b>
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
                      1. เรียนรู้การใช้งานระบบปฏิบัติการหุ่นยนต์(ROS) <br />
                      2. ประยุกต์ใช้ระบบปฏิบัติการหุ่นยนต์(ROS) กับระบบในโรงงาน <br />
                      3. ประยุกต์ใช้ระบบปฏิบัติการหุ่นยนต์(ROS) กับหุ่นยนต์เคลื่อนที่(AGV) <br />
                    </td>
                  </tr>
                  <tr>
                    <td>Qualification (คุณสมบัติผู้เข้ารับการอบรม)</td>
                    <td>Staff level up (M12 level up) (5 persons : group) Pass Basic python,IOT (arduino), advance IOT  <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day1</td>
                    <td> 
                      1. อธิบายระบบ ROS <br />
                      2. Create workspace <br />
                      3. Create package <br />
                      4. Operation ROS (publish,subscribe,service) <br />
                      5. turtlebot simulation <br />
                      6. ROS communicate with robot (Dobot MG400) <br />
                      7. ROS communicate with factory equipment <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day2</td>
                    <td>
                      8. Conncept of AGV <br />
                      9. Make simulation AGV with ROS  <br />
                      10. AGV simulation comunication with IoT <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day3 </td>
                    <td>
                      11. Make and turning AGV by ROS <br />
                      12. actual AGV comunication with IoT  <br />
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
                      •  NOde-red
                    </td>
                  </tr></tbody></table>
            </div>
          </div>
        </div>

        <section className="content">
          {/* Scroll to top */}
          <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
            <i className="fas fa-chevron-up" />
          </a>

        </section >
      </div >

    );
  }
}

export default ROS;
