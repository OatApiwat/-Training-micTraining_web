import React, { Component } from "react";
import { Link } from "react-router-dom";

class Advance_IoT extends Component {
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
                <h1 className="m-0"> Advance IoT </h1>
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
                  <td> Advance IoT <b></b>
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
                      1. เพื่อเรียนรู้การสร้างระบบ IoT สำหรับผู้เริ่มต้น <br />
                      2. ประยุกต์ใช้ระบบ IoT เช่น MMS, ระบบการแจ้งเตือน <br />
                      3. เพื่อให้ผู้เรียนสามารถประใช้โปรแกรม Arduino และสามารถสร้าง library ที่ง่ายต่อการใช้งาน <br />
                    </td>
                  </tr>
                  <tr>
                    <td>Qualification (คุณสมบัติผู้เข้ารับการอบรม)</td>
                    <td>Staff level up (M12 level up) (5 persons : group)  <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day1</td>
                    <td> 
                      1. Basic Hardware MCU  <br />
                      2. MODBUS Protocal <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day2</td>
                    <td>
                      3. Introduction for basic C/C++ and  IoT system  <br />
                      4. MQTT Protocal for IoT  <br />
                      5. Create a library for Arduino  <br />
                      6. Submits data to a database  <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day3</td>
                    <td>
                      7. Using Garfana for Monitoring  <br />
                      8. Using Gmail for Notifications   <br />
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
                      •  VS code  เวอร์ชั่น 1.84.2 ขึ้นไป <br />
                      •  Gafana for windown  <br />
                      •  Node-red  <br />
                      •  Miniconda  <br />
                      •  Arduino IDE  <br />
                      •  Microsoft SQL Server 2019, Microsoft SQL Server management studio 18  <br />
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

export default Advance_IoT;
