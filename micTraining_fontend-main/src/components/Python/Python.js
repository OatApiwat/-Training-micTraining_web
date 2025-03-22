import React, { Component } from "react";
import { Link } from "react-router-dom";

class Python extends Component {
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
                <h1 className="m-0"> Basic Knowledge for Python </h1>
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
                  <td> Basic Knowledge for Python <b></b>
                  </td>
                </tr>
                  <tr>
                    <td> Time (ระยะเวลา) </td>
                    <td> 2 วัน <br />
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
                    </td>
                  </tr>
                  <tr>
                    <td> Day1</td>
                    <td> 1. Getting Started  <br />
                      2. Variables and Simple Data Types <br />
                      3. Introducing lists <br />
                      4. Working with lists <br />
                      5. If statements <br />
                      6. Dictionaries <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day2</td>
                    <td>
                      7. User Input and while Loops  <br />
                      8. Function  <br />
                      9. Classes  <br />
                      10. Files and Exceptions  <br />
                      11. Testing Your code  <br />
                      12. Project : Data Visualization
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
          <h3 style={mystyle2} > Miniconda </h3>
          <p style={{ textIndent: 50 }} > เป็นส่วนหนึ่งของ Anaconda ซึ่งเป็นเฟรมเวิร์คสำหรับการทำ data science สำหรับภาษาไพทอน ส่วน Miniconda เป็นตัวจัดสภาพแวดล้อมให้ไพทอน
            เช่นถ้าต้องการพัฒนาโปรแกรมให้สามารถรันได้ทั้ง 32 บิตและ 64  บิต ก็ต้องตัวนี้เลย สามารถเลือกรุ่นของ Python ได้ด้วย</p>
        </div>

        <section className="content">
          {/* Scroll to top */}
          <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
            <i className="fas fa-chevron-up" />
          </a>

          {/* แคบซูล 1 */}
          <div className="card card-blue">
            <div className="card-header">
              <h3 className="card-title"> Install miniconda </h3>
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
            <div className="card-body " style={{ display: 'block' }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Miniconda</label>
                  </div>
                </div>
              </div>
              {/* /.row */}
              <p> 1. เข้าเว็บไซต์ https://docs.conda.io/en/latest/miniconda.html#system-requirements </p>
              <p> 2. เลือก window 64 bit  </p>
              <div style={img}>
                <img src="dist/img/Python/install.jpg" />
              </div>
              <div style={img}>
                <img src="dist/img/Python/install1.jpg" />
              </div>
              <p> 3. หลังจากลงเสร็จแล้ว ตรวจสอบ version  </p>
              <p> เปิด command prompt  </p>
              • conda --version
              <div style={img}>
                <img src="dist/img/Python/install2.jpg" />
              </div>
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

export default Python;
