import React, { Component } from "react";
import { Link } from "react-router-dom";




class ControlChart extends Component {


  render() {

    const mystyle = {
      color: "#4d4dbd",
      padding: "30px",
      fontFamily: "Arial"
    };

    const mystyle1 = {
      color: "black",
      padding: "20px",
      fontFamily: "Arial"
    };

    const picture = {
      display: "flex",
      justifyContent: "center",
      alignItem: "center"

    };


    return (
      <div className="content-wrapper ">

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-9">
                <h3> Analysis Data by Control Chart </h3>

              </div>
              <div className="col-sm-3">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="./../content">Training course</Link></li>
                  <li className="breadcrumb-item active">Content</li>
                </ol>
              </div>

              <table className="table table-striped table-bordered table-hover table-md">
                <thead className="bg-warning" style={{ textAlign: 'center', overflow: 'auto' }}>
                  <tr>
                    <th>Topic</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody><tr>
                  <td> Name of Course (หลักสูตร)</td>
                  <td> Analysis Data by Control Chart การวิเคราะห์ข้อมูลด้วยแผนภูมิควบคุม
                  </td>
                </tr>
                  <tr>
                    <td> Time (ระยะเวลา) </td>
                    <td> 3 วัน <br />
                      08.30-09.00 น. Registration   <br />
                      09.00-16.00 น. Training

                    </td>
                  </tr>
                  <tr>
                    <td> Objectives (วัตถุประสงค์) </td>
                    <td> 1. เพื่อส่งเสริมให้บุคลากรในบริษัท มีความรู้ที่จะใช้ระบบการจัดการด้วยคอมพิวเตอร์ มาปรับปรุงและพัฒนางาน <br />
                      2. เพื่อนำข้อมูลที่มีอยู่มาวิเคราะห์ปัญหา และการแนวทางแก้ไข ในกระบวนการการทำงานต่อไป <br />
                    </td>
                  </tr>

                  <tr>
                    <td> Qualification  (คุณสมบัติผู้เข้ารับการอบรม) </td>
                    <td> Staff level up (M12 level up)  <br />
                      ** Basic Knowledge computer language (C/C++, C# ,Python etc. )   <br />
                      ** ต้องผ่านการอบรม คอร์ส Basic node.js และ React
                    </td>
                  </tr>
                  <tr>
                    <td> Notebook and Software </td>
                    <td> ** ผู้เข้าอบรมต้องนำ Computer Notebook มาด้วย รายละเอียดดังนี้ <br />
                      • Windows 10 (คอมพิวเตอร์ต้องไม่ใช่ Stand alone)  <br />
                      1. MS SQL server 2019  <br />
                      2. Visual studio code <br />
                      3. Node.js  <br />
                      4. Google Chrome <br />

                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </section>


        {/* หัวข้อที่1 */}
        <div class="card collapsed-card card-yellow">
          <div className="card-header ">
            <h3 className="card-title">แผนภูมิควบคุม Control Chart</h3>
            <div className="card-tools ">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                <i className="fas fa-times" />
              </button>

            </div>
          </div>

          <div className="card-body">
            <h4 style={mystyle} > ทำไม? ต้องใช้แผนภูมิควบคุม Control Chart</h4>
            <div style={picture}><img src="dist/img/controlChart/1.jpg" /></div> <br />

            <p> ในกระบวนการทำงานปกติ จะมีปัจจัยนำเข้า (Input) เช่น คน (Man) สิ่งของ (Materials) ข้อมูล (Information) ผ่านกระบวนการจัดการ (Process) และได้ผลลัพธ์ (Output) ออกมา ซึ่งในผลลัพธ์ดังกล่าว </p>
            <div>
              <p style={{ textIndent: 60 }}> มีโอกาสเกิดความผันแปร 2 ลักษณะคือ</p>
              <p style={{ textIndent: 90 }}> 1. ความผันแปรของข้อมูลที่เกิดจากความบังเอิญตามธรรมชาติ (Common cause variation) เกิดจากสาเหตุตามธรรมชาติ เป็นปกติวิสัยและเกิดขึ้น
                สม่ำเสมอกับทุกผลผลิตของกระบวนการจาก Input และ Process ของกระบวนการนั้นๆ </p>
              <p style={{ textIndent: 90 }}> 2. ความผันแปรของข้อมูลที่ไม่น่าจะเกิดจากความบังเอิญตามธรรมชาติ (Special cause variation) คือ ไม่เป็นไปตามธรรมชาติ เกิดขึ้นเป็นครั้งคราว และอยู่นอกเหนือการควบคุมจาก
                กระบวนการปกติ โดย Control Chart จะแสดงลักษณะจุดที่เกิดขึ้นในแผนภูมิควบคุมที่บ่งบอกถึงการเกิด Special cause variation ในกระบวนการ เช่น ผลลัพธ์ (จุด) อยู่ภายนอกขีดจำกัดควบคุมบน (UCL=X+3SD) หรืออยู่ภายนอกขีดจำกัดควบคุมล่าง (LCL=X-3SD) </p>
            </div>

            <div style={picture}><img src="dist/img/controlChart/2.jpg" /></div> <br />

            <h4> ประโยชน์ของ Control Chart </h4>
            <p style={{ textIndent: 80 }}> &#9755; สามารถเห็นความผิดปกติได้อย่างทันการณ์  นำสู่
              การค้นหาสาเหตุของความเปลี่ยนแปลงได้เร็ว กรณีเปลี่ยนแปลงไปในทางที่ดีขึ้น จะได้นำสู่การสร้างการเรียนรู้และจัดทำเป็นแนวทางปฏิบัติ แต่ในกรณีเปลี่ยนแปลงในทางที่ไม่ดี จะได้นำสู่
              การค้นหาสาเหตุให้ถึงรากปัญหา เพื่อหาแนวทางป้องกันไม่ให้เกิดเหตุการณ์ซ้ำ โดยอาจทำโครงการพัฒนาคุณภาพ เพื่อปรับปรุง คุณภาพกระบวนการทำงาน (Quality Improvement) </p>

            <h4> ส่วนประกอบของแผนภูมิควบคุม (Control Chart) </h4>
            <p style={{ textIndent: 90 }}>  นำข้อมูลที่เราสนใจประมาณ 10-15 จุดเป็นอย่างต่ำ มาคำนวณค่าเฉลี่ย
              (Center Line) และส่วนเบี่ยงเบนมาตรฐาน (±3 Sigma) โดยกำหนดเส้นขอบเขต
              ควบคุมค่าสูง (Upper control limit : UCL = CL+3sigma) และเส้นขอบเขต
              ควบคุมค่าต่ำ (Lower control limit : LCL = CL-3 sigma) เพื่อใช้เป็นขอบเขต
              (Outline) ส่วนการแปลผล ดูได้จากรูปแบบจุดในกราฟที่แสดงการเกิด Special
              cause variation </p>
            <div style={picture}><img src="dist/img/controlChart/3.jpg" /></div> <br />


            <p style={{ textIndent: 60 }} >
              รูปแบบของจุดในกราฟที่ส่งสัญญาณว่าเกิดความผิดปกติ (Special cause variation)  ในกระบวนการ 8 รูปแบบ
            </p>

            <div style={picture}><img src="dist/img/controlChart/4.jpg" /></div> <br />


            <p style={{ fontSize: 15 }} > ที่มา : https://www.qimacros.com/free-excel-tips/control-chart-limits/, https://commons.wikimedia.org/wiki/File:Poster_-_Control_Charts_
              for_Nelson_Rules.svg, https://www.youtube.com/watch?v=x_fyF_N5Eb4 </p>

            {/* ใส่เนื้อหาเพิ่มตรงนี้  */}
          </div>
          {/* /.card-body */}

        </div>
        {/* /.card */}

      </div>
    );
  }
}

export default ControlChart;
