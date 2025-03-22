import React, { Component } from "react";
import { Link } from "react-router-dom";

class Python_task extends Component {
  render() {
    const mystyle = {
      color: "#4d4dbd",
      padding: "20px",
      fontFamily: "Arial"
    };

    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-8">
                <h3> การจัดการเอกสาร Office โดยใช้ภาษา Python </h3>
              </div>
              <div className="col-sm-4">
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
                  <td> Python for Office:Automating Company Tasks
                  </td>
                </tr>
                  <tr>

                    <td> Time (ระยะเวลา) </td>
                    <td> 5 วัน (**อบรมต่อเนื่อง**) <br />
                      08.30-09.00 น. Registration   <br />
                      09.00-16.00 น. Training

                    </td>
                  </tr>
                  <tr>
                    <td> Objectives (วัตถุประสงค์) </td>
                    <td> เพื่อส่งเสริมให้บุคลากรในบริษัท มีความรู้ที่จะใช้ระบบการจัดการด้วยคอมพิวเตอร์
                      มาปรับปรุงและพัฒนางาน อีกทั้งเพื่อเตรียมความพร้อม ระบบการผลิตเพื่อเข้าไปสู่ Factory 4.0  <br />
                      To encourage employees gaining the knowledge of computer system management for working improvement <br />
                      and development.  And, to prepare a production system for Factory 4.0 as well.
                    </td>
                  </tr>
                  <tr>
                    <td> Qualification  (คุณสมบัติผู้เข้ารับการอบรม) </td>
                    <td> Staff level up (M12 level up) (10 persons : group)  <br />
                    </td>
                  </tr>
                  <tr>
                    <td> เนื้อหาหลักสูตร </td>
                    <td> 1. สร้างเครื่องมือจัดการงานเอกสารแบบอัตโนมัติ  <br />
                      2. ทำรายงานอัตโนมัติ (excel,pdf,word,powerpoint)  <br />
                      3. ส่งรายงานอัตโนมัติ ( email, Line Notify)  <br />
                      4. นำโปรแกรมไปใช้งานจริง  Deployments และ บำรุงรักษาระบบ <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Notebook and Software </td>
                    <td> ** ผู้เข้าอบรมต้องนำ Computer Notebook มาด้วย รายละเอียดดังนี้ <br />
                      1. Windows 10 (คอมพิวเตอร์ต้องไม่ใช่ Stand alone)  <br />
                      2. CPU Intel core i5  <br />
                      3. Disk free space drive C 10 Gb <br />
                      4. install Program  <br />
                      • Visual Studio Code  <br />
                      • Miniconda (version 3.9 ขึ้นไป) <br />
                      • Microsoft SQL Server 2019 + Microsoft SQL Server management studio 18 <br />
                      • NodeJs + Node-red <br />
                      • Docker <br />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
          <i className="fas fa-chevron-up" />
        </a>


      </div>
    );
  }
}

export default Python_task;
