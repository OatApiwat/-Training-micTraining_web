import React, { Component } from "react";
import { Link } from "react-router-dom";


class MES extends Component {
  render() {

    const mystyle = {
      color: "#4d4dbd",
      padding: "20px",
      fontFamily: "Arial"
    };

    const picture = {
      display: "flex",
      justifyContent: "center",
      alignItem: "center"

    };

    return (

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-9">
                <h3>การใช้งานพื้นฐาน Microsoft SQL server management studio</h3>
                <h5></h5>
              </div>
              <div className="col-sm-3">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="./../content">Training course</Link></li>
                  <li className="breadcrumb-item active">Content</li>
                </ol>
              </div>

              <table className="table table-striped table-bordered table-hover table-md">
                <thead className="thead-dark" style={{ textAlign: 'center', overflow: 'auto' }}>
                  <tr>
                    <th>Topic</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody><tr>
                  <td> Name of Course (หลักสูตร)</td>
                  <td> Basic Knowledge of Database management for MES 
                  </td>
                </tr>
                  <tr>
                    <td> Time (ระยะเวลา) </td>
                    <td> 2 วัน <br />
                      08.30-09.00 น. Registration    <br />
                      09.00-16.00 น. Training
                    </td>
                  </tr>
                  <tr>
                    <td> Objectives (วัตถุประสงค์) </td>
                    <td> เพื่อส่งเสริมให้บุคลากรในบริษัท มีความรู้ที่จะใช้ระบบการจัดการด้วยคอมพิวเตอร์ มาปรับปรุงและพัฒนางาน <br />
                      อีกทั้งเพื่อเตรียมความพร้อม ระบบการผลิตเพื่อเข้าไปสู่ Factory 4.0  <br />
                      To encourage employees gaining the knowledge of computer system management for working improvement <br />
                      and development.  And, to prepare a production system for Factory 4.0 as well.
                    </td>
                  </tr>
                  <tr>
                    <td>Day1</td>
                    <td> ความรู้เบื้องต้นและการใช้งาน Microsoft SQL server Management Studio <br />
                    •ความรู้เกี่ยวกับฐานข้อมูล <br />
                    • แบบจำลองฐานข้อมูล <br />
                    • พื้นฐานการใช้งานภาษา SQL <br />
                    • สร้าง แก้ไข และลบตาราง <br />
                    • การเรียกดูข้อมูลจากตาราง  (Select) <br/>
                    </td>
                  </tr>
                  <tr>
                    <td>Day2 </td>
                    <td> ความรู้เบื้องต้นและการใช้งาน Microsoft SQL server Management Studio (ต่อ ) <br />
                    • การใช้งานโอเปอเรเตอร์  (Operators) <br />
                    • การใช้ฟังก์ชันในภาษา SQL <br />
                    • การใช้งานโอเปอเรเตอร์ <br />
                    • การแทรก แก้ไข และลบแถว ( Insert,Update,Delete ) <br />
                    • การรวมข้อมูลและตารางด้วย Join <br/>
                    • การสร้าง view <br/>
                    • Back up and Restore Database <br/>
                    </td>
                  </tr>
                  <tr>
                    <td> Qualification  (คุณสมบัติผู้เข้ารับการอบรม) </td>
                    <td> Staff level up (M12 level up) (10 persons : group)  <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Notebook and Software </td>
                    <td> ** ผู้เข้าอบรมต้องนำ Computer Notebook มาด้วย รายละเอียดดังนี้ <br />
                      • windows 10 ขึ้นไป (คอมพิวเตอร์ต้องไม่ใช่ Stand alone)  <br />
                      <b>Software </b> <br/>
                      1. Microsoft SQL Server 2019 <br />
                      2. Microsoft SQL Server management studio 18   <br />
                      <b>ข้อควรระวังการติดตั้ง </b><br />
                          <b>• Service : </b> SQL Server ( SQLEXPRESS )  ต้องเปิด Automatic running ตอนติดตั้ง <br />
                          <b>• Browser : </b> SQL Server Browser ต้องเปิด Automatic running ตอนติดตั้ง <br />
                    </td>
                  </tr>
                </tbody></table>

            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">

          {/* Scroll to top */}
          <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
            <i className="fas fa-chevron-up" />
          </a>


          {/* หัวข้อที่1 */}
          <div class="card collapsed-card card-orange">
            <div className="card-header ">
              <h3 className="card-title">1.ความรู้เกี่ยวกับฐานข้อมูล</h3>
              <div className="card-tools ">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}

              </div>
            </div>

            <div className="card-body">
              <p style={{ textIndent: 50 }} > Database หรือ ฐานข้อมูล คือ กลุ่มของข้อมูลที่ถูกเก็บรวบรวมไว้ โดยมีความสัมพันธ์ซึ่งกันและกัน โดยไม่ได้บังคับว่าข้อมูลทั้งหมดนี้จะต้องเก็บไว้ในแฟ้มข้อมูลเดียวกันหรือแยกเก็บหลาย ๆ แฟ้มข้อมูล  </p>
              <p style={{ textIndent: 50 }} > ฐานข้อมูลเป็นเครื่องมือในการออกแบบและพัฒนาระบบการจัดการต่างๆ เช่น ระบบการลงทะเบียน ระบบคลังสินค้า ระบบการบัญชี ระบบการผลิต เป็นต้น  </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/22_Pic.png" /></div>

              <h4 style={mystyle} >โครงสร้างฐานข้อมูล</h4>
              <p> &#9755; ไบต์ (Byte) หรือ อักขระ (Character) คือ (A-Z,ก-ฮ) ตัวเลข(0-9) สัญลักษณ์บนแป้นพิมพ์ </p>
              <p> &#9755; ฟิลด์ (Field) คือ หน่วยของข้อมูลที่ประกอบขึ้นจากไบต์ (Byte) หรือ อักขระ (Character) ตั้งแต่หนึ่งคำขึ้นไปมารวมกันแล้วได้ความหมายเป็นคำหรือข้อความ เช่น รหัสนักศึกษา ชื่อ ที่อยู่</p>
              <p> &#9755; เรคคอร์ด (Record) คือ หน่วยของข้อมูลที่เกิดจากการนำฟิลด์ที่เกี่ยวข้องมารวมกัน เพื่อให้เกิดรายการข้อมูล เช่น ข้อมูลพนักงาน 1 คน จะประกอบด้วยฟิลด์ รหัสพนักงาน ชื่อ-สกุล ที่อยู่ ตำแหน่ง </p>
              <p> &#9755; ไฟล์ (File) คือ เกิดจากการนำข้อมูลหลายๆ เรคคอร์ด (Record) ที่สัมพันธ์กันมารวมกัน  </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/02_Pic.png" /></div>

              <h4 style={mystyle}> ระดับของการออกแบบฐานข้อมูล </h4>
              <p style={{ textIndent: 50 }} >ในการออกแบบฐานข้อมูล จะมีการแบ่งเป็นระดับต่างๆเพื่อให้มีอิสระต่อกัน ไม่มีผลกระทบเมื่อมีการเปลี่ยนแปลงในระดับใดระดับหนึ่ง แบ่งออกเป็น 3 ลำดับ </p>
              <p> <b> 1. การออกแบบฐานข้อมูลระดับแนวความคิด (Conceptual Database) </b>
                คือ ขั้นตอนการออกแบบระดับแรกเริ่ม โดยอยู่ในรูปแบบแผนภาพที่ประกอบด้วย ตาราง และแต่ละตารางต้องมีส่วนประกอบสัมพันธ์กันและกำหนดคีย์หลักเพื่อใช้สำหรับอ้างอิงข้อมูล
              </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/04_Pic.png" />
                <img src="dist/img/1/07_Pic.png" /> </div>

              <p> <b> 2. การออกแบบฐานข้อมูลระดับตรรกะ (Logical Database Design) </b>  คือ ขั้นตอนการออกแบบระดับกลาง โดยนำแผนภาพมาจัดเก็บข้อมูลและความสัมพันธ์ต่างๆ ให้อยู่ในรูปแบบของ Data model และต้องลดความซ้ำซ้อนให้น้อยที่สุด(Normalization) เพื่อทำให้เกิดประสิทธิภาพสูงสุดในการใช้งาน</p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/08_Pic.png" />
                <img src="dist/img/1/06_Pic1.jpg" /> </div>

              <p> <b> 3. การออกแบบฐานข้อมูลระดับกายภาพ (Physical Database Design) </b> คือ การออกแบบฐานข้อมูลระดับสุดท้าย โดยการนำข้อมูลไปเก็บไว้ในอุปกรณ์ Hardware เช่น Harddisk และเข้าไปจัดการฐานข้อมูลผ่าน Database Management System (DBMS)</p>
              <p> Database Management System (DBMS) คือ ซอฟต์แวร์สำหรับบริหารและจัดการฐานข้อมูล ซึ่งจะเป็นเสมือนตัวกลาง ระหว่างผู้ใช้กับฐานข้อมูล ทำหน้าที่ในการสร้าง เรียกใช้ข้อมูล หรือปรับปรุง ฐานข้อมูลในการทำงานกับฐานข้อมูลจะต้องผ่าน DBMS ทุกครั้ง</p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/12_Pic.png" /></div>

              <h4 style={mystyle}> ระบบฐานข้อมูลคืออะไร </h4>
              <p style={{ textIndent: 50 }}> การเข้าไปจัดการข้อมูลต่างๆ ที่อยู่ในฐานข้อมูลนั้นๆ โดยลดความซ้ำซ้อนของข้อมูลออก และเก็บข้อมูลไว้ที่ศูนย์กลาง เพื่อการใช้งานร่วมกันของบุคคลที่เกี่ยวข้อง ผ่านซอฟแวร์จัดการฐานข้อมูล (DBMS)
                ซึ่งมีการกำหนดสิทธิ์การใช้งานของแต่ละบุคคลแตกต่างกัน มีองค์ประกอบ ดังนี้ </p>
              <div>
                <p style={{ textIndent: 50 }}>☛ฐานข้อมูล (Database) คือ ระบบการจัดเก็บข้อมูลต่างๆ ที่มีโครงสร้างชัดเจนและมีความสัมพันธ์กันและลดความซ้ำซ้อนของข้อมูล</p>
                <p style={{ textIndent: 50 }}>☛ซอฟแวร์ (Software) คือ โปรแกรมที่ใช้ในการสั่งการหรือป้อนชุดคำสั่ง แบ่งได้ 2 ประเภท ได้แก่</p>
                <p style={{ textIndent: 50 }}>❖ Database Management System(DBMS) มีขั้นตอนการทำงานดังนี้ </p>
              </div>
              <div>
                <p style={{ textIndent: 90 }}> ❑ กำหนดโครงสร้างข้อมูล เช่น การออกแบบโครงสร้าง กำหนดคีย์หลัก </p>
                <p style={{ textIndent: 90 }}> ❑ ดึงข้อมูลจากฐานข้อมูล เช่น การบันทึกข้อมูล แก้ไขข้อมูล ลบข้อมูล </p>
                <p style={{ textIndent: 90 }}> ❑ ดูแลและรักษาความปลอดภัยของข้อมูล เช่น การกำหนดสิทธิ์เข้าถึง </p>
                <p style={{ textIndent: 90 }}> ❑ การสำรองและการกู้คืน เช่น แฟ้มข้อมูลเสียหายจาก Hardisk เสีย หรือจากไวรัส หรือไฟฟ้าดับ </p>
              </div>

              <p style={{ textIndent: 50 }}>❖ ซอฟท์แวร์ ใช้งาน(Application Software) คือ ซอฟต์แวร์ที่พัฒนาขึ้นเพื่อนำไปใช้กับงานร่วมกับ DBMS ผ่านโค้ดคำสั่ง SQL
                และรายงานในรูปแบบรายงานต่างๆได้ เช่น C# VB ในรูปแบบของแอฟลิเคชั่นทั่วไป เว็ปแอพพลิเคชั่น หรือโมบายแอพพลิเคชั่น </p>
              <div>
                <p style={{ textIndent: 50 }}>☛ บุคลากร(People) </p>
                <p style={{ textIndent: 50 }}>❖ผู้ใช้ทั่วไป(User) คือ บุคคลที่สามารถดูข้อมูล แก้ไข เพิ่ม ลบได้ เช่น ฝ่ายบุคคล สามารถดูเงินเดือนพนักงาน และแก้ไขได้ เป็นตัน</p>
                <p style={{ textIndent: 50 }}>❖ผู้พัฒนาโปรแกรม(Application Programer) คือ บุคคลที่พัฒนาระบบตามความต้องการของผู้ใช้ โดยการเขียนโปรแกรมต่างๆด้วยภาษาคอมพิวเตอร์</p>
                <p style={{ textIndent: 50 }}>❖ผู้ดูแลระบบฐานข้อมูล(Database Adminstrator:DBA) คือ บุคคลที่ดูแลระบบฐานข้อมูลทั้งหมด เช่น การกำหนดสิทธิ์ผู้ใช้ รักษาความปลอดภัยของข้อมูล สร้างระบบกู้คืนข้อมูล</p>
              </div>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/13_Pic.png" /></div>

              <div>
                <h3 style={{}}>ระบบฐานข้อมูลแบบรวมศูนย์และกระจาย </h3>
                <h4 style={{ textIndent: 40 }}>ระบบฐานข้อมูลแบบรวมศูนย์ </h4>
                <p> ระบบฐานข้อมูลที่มีการเก็บฐานข้อมูลเอาไว้ที่ศูนย์กลางเพียงจุดเดียว  นั่นหมายความว่า  การเรียกใช้และบันทึกนั้นจะเกิดเพียงจุดเดียว </p>
              </div>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/14_Pic.png" /></div>

              <h4 style={{ textIndent: 40 }}>ระบบฐานข้อมูลแบบกระจาย </h4>
              <p> ฐานข้อมูลที่มีการจัดเก็บข้อมูลอยู่ในระบบคอมพิวเตอร์หลายๆ เครื่องที่ติดตั้งอยู่ตามที่ต่างๆ โดยที่ระบบคอมพิวเตอร์
                เหล่านี้มีการสื่อสารกันได้ซึ่งผู้ใช้สามารถเรียกใช้ข้อมูลจากฐานข้อมูลที่มีอยู่ในเครื่องใดๆ ก็ได้</p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/15_Pic.png" /></div>

              <h4 style={{ textIndent: 40 }}>ระบบ ไคลเอนต์/เซิร์ฟเวอร์ </h4>
              <p style={{}}> คือ สถาปัตยกรรมทางระบบคอมพิวเตอร์แบบกระจายแบบนึง โดยการนำคอมพิวเตอร์หลายๆเครื่องมาเชื่อมต่อกันเป็นระบบเครือข่าย สามารถใช้งานข้อมูลถึงกันได้ ดังนี้ </p>

              <div>
                <p style={{ textIndent: 50 }}>❑ เชื่อมต่อการใช้งานด้วยเครื่องคอมพิวเตอร์ที่แยกกันระหว่างไคลเอนต์และเซิร์ฟเวอร์เครื่องเดียว </p>
                <p style={{ textIndent: 50 }}>❑ ฐานข้อมูลจะถูกเก็บไว้ในเครื่องเซิร์ฟเวอร์ เครื่องเดียว </p>
                <p style={{ textIndent: 50 }}>❑ โปรแกรมที่จะเรียกใช้งานฐานข้อมูล ทำงานบนเครื่องไคลเอนต์ </p>
              </div>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/16_Pic.png" /></div>

              <p style={{ textIndent: 50 }}>❖ <b>หน้าที่ของเซิร์ฟเวอร์ </b>จัดเก็บข้อมูลและโปรแกรม DBMS ไว้ที่เครื่องประมวล และส่งข้อมูลที่ไคลเอนต์ต้องการกลับไปที่เซิร์ฟเวอร์ (เรียกว่าBackend) </p>
              <p style={{ textIndent: 50 }}>❖ <b />หน้าที่ของไคลเอนต์ </p>
              <p style={{ textIndent: 90 }}> ❑ ส่งคำสั่งเรียกใช้ฐานข้อมูลไปยังเซิร์ฟเวอร์เพื่อให้เซิร์ฟเวอร์ส่งข้อมูลที่ต้องการกลับมา </p>
              <p style={{ textIndent: 90 }}> ❑ นำข้อมูลที่ได้จากเซิร์ฟเวอร์ไปแสดงผลให้กับผู้ใช้ ส่วนนี้(เรียกว่า Frontend) </p>

              <p style={{ textIndent: 50 }}>❖ข้อดีของระบบไคลเอนต์เซิร์ฟเวอร์ </p>
              <p style={{ textIndent: 90 }}> ❑ ใช้เวลาในการตอบสนองของระบบที่มีต่อการทำงานน้อยลงเพราะโปรแกรมเรียกใช้งานข้อมูลเพราะโปรแกรมใช้ฐานข้อมูลอยู่บนไคลเอนต์</p>
              <p style={{ textIndent: 90 }}> ❑ ได้ปริมาณผลลัพธ์มากขึ้นเนื่องจากการรับส่งข้อมูลระหว่างเซิร์ฟเวอร์กับไคเอนต์ได้ปริมาณที่มากและรวดเร็วกว่าต์</p>
              <p style={{ textIndent: 90 }}> ❑ DBMS สามารถทำงานได้ดีขึ้นโดยเฉพาะในกรณีที่เซิร์ฟเวอร์มีความสามารถสนับสนุนการทำงานต่างๆของDBMSได้อย่างดี</p>
              <p style={{ textIndent: 90 }}> ❑ เพิ่มประสิทธิภาพของ User Interface สามารถเข้าใช้บริการฐานข้อมูลได้สะดวกและรวดเร็วขึ้น </p>
              <p style={{ textIndent: 90 }}> ❑ ไคลเอนต์หลายเครื่องสามารถใช้ข้อมูลร่วมกันได้ </p>

              <p style={{ textIndent: 40 }}> ❖ ภาษาที่ใช้จัดการฐานข้อมูล </p>

              <p style={{ textIndent: 90 }}> <b> ภาษา SQL </b>  ใช้งานกับข้อมูลที่มีโครงสร้างที่ประกอบด้วย fields เเละ รายละเอียดต่าง ๆ โดยฐานข้อมูลที่มีจะถูกเตรียมให้เหมาะสมกับการนำไปใช้ รวมถึงยัง query ได้ง่าย</p>
              <p style={{ textIndent: 90 }}> <b> ภาษา No SQL </b> ถูกใช้ในรูปแบบ ที่เป็นการกระจายของข้อมูล จึงมีประสิทธิ์ภาพสูงสำหรับข้อมูลขนาดใหญ่ (big data) </p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/1/23_Pic.jpg" /></div>


              <h4 style={{ textIndent: 40 }}> ประโยชน์ของฐานข้อมูล (Database) </h4>
              <p> ฐานข้อมูล หรือ Database นั้น จะช่วยทำให้ข้อมูลที่เราจัดเก็บมีความเป็นระเบียบ มีโครงสร้าง (Structured) ที่ดี พร้อมที่นำไปใช้ในการต่อยอดเพื่อการวิเคราะห์ </p>

              <p style={{ textIndent: 90 }}> ❑ ลดการเก็บข้อมูลที่ซ้ำซ้อน ข้อมูลบางชุดที่อยู่ในรูปของแฟ้มข้อมูลอาจมีปรากฏอยู่หลาย ๆ แห่ง เพราะมีผู้ใช้ข้อมูลชุดนี้หลายคน เมื่อใช้ระบบฐานข้อมูลแล้วจะช่วยให้ความซ้ำซ้อนของข้อมูลลดน้อยลง</p>
              <p style={{ textIndent: 90 }}> ❑ รักษาความถูกต้องของข้อมูล เนื่องจากฐานข้อมูลมีเพียงฐานข้อมูลเดียว ในกรณีที่มีข้อมูลชุดเดียวกันปรากฏอยู่หลายแห่งในฐานข้อมูล ข้อมูลเหล่านี้จะต้องตรงกัน ถ้ามีการแก้ไขข้อมูลนี้ทุก ๆ แห่งที่ข้อมูลปรากฏอยู่จะแก้ไขให้ถูกต้องตามกันหมดโดยอัตโนมัติด้วยระบบจัดการฐานข้อมูล</p>
              <p style={{ textIndent: 90 }}> ❑ การป้องกันและรักษาความปลอดภัย (Security) ให้กับข้อมูลทำได้อย่างสะดวก การป้องกันและรักษาความปลอดภัยกับข้อมูลระบบฐานข้อมูลจะให้เฉพาะผู้ที่เกี่ยวข้องเท่านั้น ซึ่งก่อให้เกิดความปลอดภัย(Security) ของข้อมูลด้วย </p>

              {/* ใส่เนื้อหาเพิ่มตรงนี้  */}
            </div>
            {/* /.card-body */}

          </div>
          {/* /.card */}

          {/* หัวข้อที่2 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">2.แบบจำลองฐานข้อมูล</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">

              <h3>ประเภทของแบบจำลองฐานข้อมูล ( Data Model ) </h3>
              <p style={{ textIndent: 50 }}>แบบจำลองข้อมูล ใช้สำหรับอธิบายโครงสร้างและความสัมพันธ์ระหว่างข้อมูลภายในฐานข้อมูล มี 3 รูปแบบ</p>
              <p style={{ textIndent: 50 }}><b>1.แบบจำลองข้อมูลลำดับขั้น </b> (Hierarchical Database Model) 1 Child node 1 Parent node ซึ่ง Child node มีความซ้ำซ้อน </p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/2/221_Pic.png" /></div>

              <p style={{ textIndent: 50 }}><b>2.แบบจำลองฐานข้อมูลเครือข่าย </b> (Network Database Model)
                1 Child node many Parent node ซึ่ง Child node ไม่เป็นอิสระต่อกัน </p>
              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/image2.2.jpg" /></div>

              <p style={{ textIndent: 50 }}><b>3.แบบจำลองฐานข้อมูลเชิงสัมพันธ์ </b> (Relational Database Model)
                เป็นการเก็บข้อมูลในรูปแบบที่เป็นตาราง (Table) หรือเรียกว่า รีเลชั่น (Relation) มีลักษณะเป็น 2 มิติ คือเป็นแถว (row) และเป็นคอลัมน์ (column) การเชื่อมโยงข้อมูลระหว่างตาราง จะเชื่อมโยงโดยใช้แอททริบิวต์ (attribute) หรือคอลัมน์ที่เหมือนกันทั้งสองตารางเป็นตัวเชื่อมโยงข้อมูล</p>
              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/24_Pic.png" /></div>

              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/25_Pic.jpg" /></div>

              <h3 >โครงสร้างการเก็บข้อมูลด้วยตาราง</h3>
              <h4> ตาราง </h4> <p> ในตารางหนึ่ง ประกอบด้วย คอลัมน์และแถว โดยในฐานข้อมูลหนึ่งนั้น จะประกอบด้วยตารางอย่างน้อย 1 ตาราง และควรตั้งชื่อตารางให้สอดคล้องกับข้อมูลด้วย </p>

              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/288_Pic.png" /></div>

              <h4>คอลัมน์ (Columm) </h4>
              <p > ในแต่ละคอลัมน์นั้นจะเก็บข้อมูลเพียงค่าเดียว และชื่อแต่ละคอลัมน์ในตารางต้องไม่ซ้ำกัน โดยการเรียงลำดับของคอลัมน์ไม่มีผลต่อการเรียกใช้ข้อมูล แต่ควรจะเรียงลำดับตามความสำคัญก่อน</p>

              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/299_Pic.png" /></div>

              <h4 >แถว (Row) หรือ Record</h4>
              <p > ประกอบด้วยข้อมูลต่างๆในคอลัมน์</p>

              <h3>ประเภทของคีย์ ( Key Type ) </h3>
              <p style={{ textIndent: 50 }}> <b> คีย์หลัก (Primary Key)</b> หลักการกำหนด </p>

              <p style={{ textIndent: 90 }}>☛ ไม่มีข้อมูลซ้ำซ้อน (Unique) ใน Table </p>
              <p style={{ textIndent: 90 }}>☛ ไม่เป็นค่าว่าง (Null) </p>
              <p style={{ textIndent: 90 }}>☛ ค่าไม่เปลี่ยนแปลง </p>
              <p style={{ textIndent: 90 }}>☛ ทุกตารางจำเป็นต้องมีคีย์หลักเสมอ </p>

              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/30_Pic.png" /></div>

              <p style={{ textIndent: 50 }}><b>คีย์นอก (Foreign Key) </b>  เป็นคอลัมน์ของตารางหนึ่งที่ใช้ในเชื่อมโยงหรืออ้างอิงข้อมูลกับอีกตารางหนึ่งที่มีคอลัมน์เดียวกันนี้อยู่ </p>
              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/31_Pic.png" /></div>

              <div>
                <p style={{ textIndent: 50 }}> <b> Secondary Key (คีย์ลำดับรอง) </b> ในบางครั้งเรียกคีย์ชนิดนี้ว่า อินเด็กซ์ (Index) คีย์ชนิดนี้เปรียบเสมือนเป็นคีย์รองจากคีย์หลัก ช่วยในการค้นหาหรือจัดเรียกกลุ่มแถวที่มีจำนวนมาก ๆ ได้อย่างรวดเร็ว</p>
                <p style={{ textIndent: 50 }}> <b> Composite Key (คีย์รวม)</b> เป็น คีย์ที่เกิดจากการนำคอลัมน์หลาย ๆ คอลัมน์มารวมกัน เพื่อให้คุณสมบัติเป็นคีย์หลักคือ ไม่มีข้อมูลซ้ำกัน และไม่มีค่าว่าง
                  (NULL) เนื่องจากการบางครั้งการสร้างคีย์หลักจากคอลัมน์เดียวเดียว อาจมีโอกาสที่จะเกิดข้อมูลซ้ำกันได้ </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/32_Pic.png" /></div>

              <p style={{ textIndent: 50 }}><b>Candidate Key (คีย์คู่แข่ง)</b> เป็นคีย์ที่มีคุณสมบัติใกล้เคียงกับคีย์หลัก (Primary Key) หรือสามารถแทนคีย์หลักได้ ไม่มีค่าซ้ำ ไม่เป็นค่าว่าง </p>
              <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/2/333_Pic.png" /></div>

              {/* ใส่เนื้อหาต่อจากตรงนี้  */}
            </div>
          </div>

          {/* หัวข้อที่ 3 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">3.พื้นฐานการใช้ภาษา SQL</h3>

              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/SQL.jpg" /></div>
              <br />
              <p style={{ textIndent: 50 }} > <b> SQL ( Structured Query Language )</b> คือ ภาษา programming ที่ออกแบบมาเพื่อทำการจัดการข้อมูลที่อยู่ใน relational database management system (RDBMS)
                หรือก็คือไว้สำหรับค้นหาข้อมูล เปลี่ยนแปลง เพิ่ม และ ลด ข้อมูลที่ถูกเก็บอยู่ในฐานข้อมูลในรูปแบบตารางที่มีลักษณะเป็น column และ row
                ภาษา SQL ถูกแบ่งออกมาเป็นส่วนประกอบต่างๆ เราเรียกส่วนเหล่านี้ตามรูปแบบเช่น</p>

              <p>❑<b> Clauses</b> คือองค์ประกอบหนึ่งของ statement และ query (่ส่วนนี้เป็น Optional)</p>
              <p>❑ <b> Expressions </b> คือการสร้างผลลัพธ์ออกมาในรูป table ที่ประกอบด้วย column และ row จากข้อมูล</p>
              <p>❑ <b> Predicates</b>  คือรูปแบบเงื่อนไขที่มีผลลัพธ์เป็น true/false/unknown หรือก็คือ Boolean นั่นเอง</p>
              <p>❑ <b> Queries</b>  คือการดึงข้อมูลตามเงื่อนไข (clause) เป็นส่วนสำคัญใน SQL</p>
              <p>❑ <b> Statements</b>  คือสามารถมีผลต่อโครงสร้างข้อมูล, จัดการข้อมูล trasactions, program flow, session หรือแม้กระทั้ง วิเคราะห์ปัญหา โดยจำเป็นต้องจบด้วย semicolon (;) ซึ่งเป็นสิ่งจำเป็นที่ต้องมีทุกครั้งสำหรับ SQL </p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/34_Pic.png" /></div>

              <h4 style={mystyle} > SQL ทำอะไรได้บ้าง </h4>
              <p>&#10065; ใช้ในการสืบค้นข้อมูลในฐานข้อมูล </p>
              <p>&#10065; ใช้ใส่ข้อมูลเพิ่มเข้าไปยังฐานข้อมูล </p>
              <p>&#10065; ใช้ปรับปรุงข้อมูลในฐานข้อมูล </p>
              <p>&#10065; ใช้ลบรายการที่เราไม่ต้องการออกจากฐานข้อมูล </p>
              <p>&#10065; ใช้สร้างฐานข้อมูลขึ้นมาใหม่ </p>
              <p>&#10065; ใช้สร้างตาราง(Table) ในฐานข้อมูล </p>
              <hr />
              <h4 style={mystyle} >Comment</h4>
              <p> การคอมเม้นท์ในภาษา SQL นั้น ทำได้ดังนี้ </p>

              <p><b>&#9755; การใส่คอมเมนต์บรรทัดเดียว </b></p>

              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/3/35_Pic.png" /></div>

              <p><b>&#9755; การใส่คอมเมนต์แบบหลายบรรทัด </b></p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/3/36_Pic.png" /></div>
              <hr />
              <h4 style={mystyle} > คำสั่งพื้นฐานของภาษา SQL </h4>
              <h5> คำสั่งเปลี่ยนแปลงตาราง (ALTER TABLE) </h5>
              <p><b> &#9755; การเพิ่มคอลัมน์ในตาราง </b></p>
              <div style={
                { display: "flex", justifyContent: "center", lignItem: "center" }}>
                <img src="dist/img/3/41_Pic.png" /></div>


              <p><b> &#9755; การลบคอลัมน์ในตาราง </b></p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/42_Pic.png" /></div>

              <p><b> &#9755; การแก้ไขคอลัมน์ในตาราง </b></p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/43_Pic.png" /></div>

              <p><b> &#9755; ลบตาราง </b></p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/44_Pic.png" /></div>

              <p><b> &#9755; ลบฐานข้อมูลซึ่งจะเป็นการลบรายการทั้งหมดในฐานข้อมูลด้วย เช่นตาราง หรือดัชนี เป็นต้น   </b></p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/45_Pic.png" /></div>

              <p><b> &#9755; การลบคอลัมน์ในตาราง </b></p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/46_Pic.png" /></div>

              <hr />
              <h5> คำสั่งสำหรับการจัดการข้อมูล (Data Manipulate Language : DML) </h5>
              <p><b> - คำสั่งค้นหาข้อมูล (SELECT) </b> SQL Select statement
                จำเป็นต้องใช้ข้อมูล columm name และ table name ในการระบุุชุดข้อมูลที่จะแสดง </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/47_Pic.png" /></div>

              <p> ในกรณีที่เราต้องการเรียกดูข้อมูลทุก columm ของ table นั้น ต้องใช้รูปแบบตามด้านล่าง </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/48_Pic.png" /></div>

              <p><b> &#9755; คำสั่งเพิ่มข้อมูลลงในตาราง (INSERT) </b> SQL Insert into statement ข้อมูลที่ต้องระบุคือ table name , columm name ,value </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/49_Pic.png" /></div>

              <p><b> &#9755; คำสั่งลบแถวในตาราง (DELETE) </b> การทำ SQL Delete query statement จะเป็นการลบข้อมูลทั้งบรรทัดภายใต้ table ที่กำหนด
                ซึ่งใช้ Where clause  เป็นตัวระบุบรรทัดตามเงื่อนไข ถ้าไม่ระบุ where clause จะหมายถึง เป็นการลบข้อมูลทั้งหมดใน table นั้น
              </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/50_Pic.png" /></div>

              <p><b> &#9755; คำสั่งการเปลี่ยนแปลงข้อมูลในตาราง (UPDATE)</b> การทำ SQL Update มีลักษณะคล้ายกับ SQL Select statement โดยเราต้องกำหนด table ที่ต้องการเปลี่ยนแปลงก่อน ตามด้วยค่าของข้อมูลใหม่แต่ละ column
                ซึ่งถ้ามีหลาย column เราสามารถใช้ comma (,) เป็นตัวขั้นแต่ละ column รวมถึงสามารถนำเอา Where condition เพิ่มต่อเข้าไปได้เลย เพื่อให้ข้อมูลที่แสดงถูกกรองให้เหลือเฉพาะข้อมูลที่อยู่ในเงือนไขที่ต้องการ </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/500_Pic.png" /></div>
              <hr />
              <h5> คำสั่งควบคุมระบบฐานข้อมูล (Data Control Language : DCL) </h5>
              <p><b> &#9755; คำสั่งGRANT </b></p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/51_Pic.png" /></div>

              <p><b> &#9755; คำสั่ง REVOKE  </b></p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/522_Pic.png" /></div>

              <h4 style={mystyle} > ชนิดข้อมูลในภาษา SQL </h4>
              <h5 ><b> Identifiers (ตัวแปร) </b></h5>
              <p>&#10070; ชื่อของฐานข้อมูลจะต้องไม่ซ้ำกับฐานข้อมูลอื่นที่อยู่ในเซิร์ฟเวอร์เดียวกัน </p>
              <p>&#10070; ชื่อ table และชื่อ View จะต้องไม่ซ้ำหากอยู่ในฐานะข้อมูลหรือโครงสร้างเดียวกัน </p>
              <p>&#10070; ชื่อ Column,key,index และ Constraint จะต้องไม่ซ้ำกันภายใน table หรือ View  </p>
              <p>  นอกจากภาษา SQL ยังมีกฎในการตั้งชื่อให้ออบเจ็กต์ต่างๆ ในฐานข้อมูล </p>
              <p>&#10070; เราสามารถตั้งชื่อได้ ถึง 128 ตัวอักษร </p>
              <p>&#10070; ชื่อจะต้องเริ่มต้นด้วยตัวอักษร </p>
              <p>&#10070; ชื่อสามารถนำตัวเลข ตัวอักษร และเครื่องหมายขีดล่าง(_)มาประกอบกันได้ </p>
              <p>&#10070; ชื่อจะไม่สามารถมีช่องว่างหรืออักขระพิเศษอยู่ภายในชื่อได้ # $ % & เป็นต้น </p>
              <p>&#10070; ไม่สามารถนำคำสงวนที่กล่าวมาแล้วใช้เป็นชื่อได้ เช่น create,select หรือ Sum </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/53_AA.png" /></div>
              <br />
              <h5>Terminating  Semicolon</h5>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/54_AA.png" /></div>

              <h4 style={mystyle}>ชนิดข้อมูลในภาษา SQL </h4>
              <p>&#9755; ประเภทตัวเลข (Numeric) </p>
              <p>&#9755; ข้อความตัวอักษร (Character String) </p>
              <p>&#9755; วันที่และเวลา (Datetime)</p>
              <p>&#9755; ออบเจ็กต์ต่างๆ (Object) เช่น เก็บภาพ,วิดีโอ,เสียง หรือไฟล์อื่นๆ</p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/55_Pic.png" /> </div>

              <h5> Exact Numeric</h5>
              <p>&#9755; อาจจะเป็นตัวเลขติดค่าลบ ศูนย์ หรือตัวเลขค่าบวกก็ได้ </p>
              <p>&#9755; ตัวเลขนั่นอาจจะอยู่ในรูปของจำนวนเต็มหรือตัวเลขทศนิยมก็ได้ </p>
              <h5 > Approximate Numeric  </h5>
              <p> &#9755; ข้อมูลนี้อาจจะเป็นค่าติดลบ เป็นศูนย์หรือค่าบวกได้</p>
              <p> &#9755; ค่าที่ได้นั้นจะเป็นค่าโดยประมาณ หรือค่าที่มีการยอมรับได้(Float) </p>
              <p> &#9755; นิยมนำมาใช้วัดข้อมูลที่มีขนาดเล็กมากหรือขนาดใหญ่มากเช่นข้อมูลทางวิทยาศาสตร์ สถิติและการคำนวณทางการเงิน </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/57_Pic.png" /></div>

              <h5 ><b> ชนิดข้อมูลประเภท Character String </b></h5>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/58_Pic.png" /></div>

              <p> - Unicode charcter Stringe </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/59_Pic.png" /></div>

              <h5> <b>ชนิดข้อมูลประเภท Boolean </b> </h5>
              <h5> เป็นชนิดข้อมูลที่จัดเก็บค่าที่เป็นจริงโดยมี ลักษณะดังนี้ </h5>

              <p> &#9755; มีชื่อชนิดเป็น BOOLEAN </p>
              <p> &#9755; มีค่าความจริงเพียง 2 ค่า คือ True และ False (หรือไม่ระบุ)</p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/60_Pic.png" /></div>

              <h5 ><b>Datetime</b> </h5>
              <p> &#9755; ตัดเก็บข้อมูลในรูปแบบของ UTC (Universal Coordinated Time) หรือ GMT (Green-Wich Mean Time) </p>
              <p> &#9755; ค่าของเวลาจะแสดงอยู่ในรูปของ ชั่วโมง-นาที-วินาที ส่วนค่าของวันที่จะแสดงในรูปของปี-เดือน-วัน</p>
              <p> &#9755; ใช้เครื่องหมายยัติภังค์(-)เพื่อแยกส่วนของวันที่และเครื่องหมายทวิภาค (:) เพื่อแยกส่วนเวลาส่วนพื้นที่ว่างจะใช้แยกวันที่และเวลาเมื่อต้องจัดเก็บข้อมูลร่วมกัน  </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/3/61_Pic.png" /></div>

              <h5><b>ทำความรู้จักค่า Null</b> </h5>
              <p> &#9755; ในคำสั่งภาษา SQL ค่า Null จะหมายถึงค่าว่าง</p>
              <p> &#9755; ค่า Null นิยมนำมาใช้งานกับข้อมูลที่ไม่ทราบค่าข้อมูล (UNKNOWN)</p>
              <p> &#9755; ค่า Null ไม่ใช่ค่าศูนย์ เช่น ค่า Null ในคอลัมน์ราคา สินค้าไม่ใช่ราคาเป็นศูนย์ แต่ยังไม่ทราบราคาและไม่ใช่หมายถึงช่องว่างระหว่างข้อความสตริง ('') </p>
              <p> &#9755; ค่า Null สามารถปรากฏขึ้นได้กับคอลัมน์ใดๆ ที่ไม่ได้กำหนดไว้ให้เป็น NOT NULL ซึ่งจะบังคับให้ใส่ข้อมูลเป็นค่าว่างไม่ได้ เช่น Primary Key</p>

              {/* ใส่เนื้อหาต่อตรงนี้  */}

            </div>
            {/* /.card-body */}
          </div>

          {/* หัวข้อที่ 4 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">4.สร้าง แก้ไข และลบตาราง</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">
              <h4 style={mystyle} > การสร้างฐานข้อมูล</h4>
              <h5>คลิ๊กโปรแกรม SQL Server</h5>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/4/01_Pic.png" /></div>

              <h4 style={mystyle}> คำสั่งสร้างฐานข้อมูลเบื้องต้น</h4>
              <p>ขั้นตอนการเขียนคำสั่ง </p>
              <p> 1.คลิ๊กไปที่ New Query</p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/4/02_Pic.png" /></div>

              <p> 2.พิมพ์ Create database Orders </p>
              <p> <i> Orders ชื่อของ Database</i></p>

              <div class="position-relative form-group">
                <label for="exampleText" class="">Coding Example</label>
                <textarea name="text" id="exampleText" class="form-control" rows="3">
                  Create database Orders; </textarea>
              </div>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/4/03_Pic.png" /></div>

              <p> 3.เมื่อพิมพ์เสร็จแล้วให้คลิ๊กไปที่ Execute เพื่อเป็นการ Run คำสั่ง  </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/4/04_Pic.png" /></div>

              <p> 4.คลิ๊ก Refresh 1 ครั้ง </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/4/05_Pic.png" /></div>

              <p>5.หากต้องการลบ Databases ทั้งหมด คลิ๊กขวาแล้วคลิ๊กไปที่ Delete  คลิ๊ก OK</p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}><img src="dist/img/4/06_Pic.png" /></div>


              <h3 style={mystyle} >สร้างตาราง</h3>
              <h4>ขั้นตอนการสร้างตาราง</h4> <br />
              <p style={{ textIndent: 60 }} > 1.คลิ๊ก NewQuery และพิมพ์คำสั่ง </p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={8} defaultValue={"        CREATE TABLE Customer \n      (CustomerID nchar(3),\n\t CustomerName nvarchar  (40),\n\t CustomerAddress nvarchar(200),\n\t  ZipCode nchar(6),\n\t Telephone nchar(12) );\n"} />
              </div>

              <p style={{ textIndent: 60 }}> 2.คลิ๊กไปที่ Execute และคลิ๊กที่ปุ่ม Refresh </p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}><img src="dist/img/4/15_Pic.png" /></div>

              <p style={{ textIndent: 60 }}> 3.ดูตารางคลิ๊กขวาที dbo.Customer แล้วเลือก Design</p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}><img src="dist/img/4/08_Pic.png" /></div>

              <p style={{ textIndent: 60 }}> 4.ตารางการใส่ข้อมูลคลิ๊กขวาที่ dbo.Customer แล้วเลือก Edit Top 200 Rows </p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}><img src="dist/img/4/09_Pic.png" /></div>

              <h5> การกำหนดค่า NOT NULL เพื่อที่จะให้คอลัมน์มีค่าว่างไม่ได้  </h5>
              <p style={{ textIndent: 60 }} > 5.สร้างตาราง Category พิมพ์คำสั่งด้านล่าง เมื่อพิมพ์เสร็จแล้วให้คลิ๊กไปที่ Execute และคลิ๊กที่ปุ่ม Refresh </p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}><img src="dist/img/4/10_Pic.png" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"        CREATE TABLE Category\n        (CategoryID nchar  (3) not null,\n\t    CategoryName nvarchar  (50) not null,\n\t    CategoryDescription nvarchar  (200) );\n        "} />
              </div>

              <p style={{ textIndent: 60 }}> 6.คลิ๊กขวาที่ dbo.Category เลือกที่ EditTop 200 Rows จะปรากฎ Detail </p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/4/11_Pic.png" /></div>

              <p style={{ textIndent: 60 }} > 7.ค่า Default กำหนดค่าเริ่มต้นให้กับคอลัมน์  </p>
              <p style={{ textIndent: 60 }}> <i> คำสั่งนี้คือกำหนดค่าเริ่มต้นในวันที่ปัจจุบัน</i></p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/4/12_Pic.png" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"        CREATE TABLE Orders\n        (OrderID nchar (3) not null,\n\t    CustomerID nchar(3) ,\n\t    OrderDate Datetime not null Default getdate(),\n        ShippedDate Datetime);\n        "} />
              </div>

              <h3 style={{}}>คำสั่ง Insert ข้อมูล</h3>
              <p style={{ textIndent: 60 }}> 9. วางโค๊ดคำสั่งตามรูป </p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/4/13_Pic.png" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"        INSERT into Orders \n\t                (OrderID ,CustomerID ,ShippedDate ) \n\t                Values ('A02' , 'C02' ,'2020-11-20' ) ;\n        "} />
              </div>

              <p style={{ textIndent: 60 }}> 10.คลิ๊กไปที่ Execute และคลิ๊กที่ปุ่ม Refresh คลิ๊กขวาที่ dbo.Order เลือกที่ EditTop 200 Rows </p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/4/14_Pic.png" /></div>

              <h3 style={mystyle}>การกำหนดคีย์ให้กับคอลัมน์</h3>
              <h4 style={{}}>การกำหนดตัวของ Primary key หรือ คีย์หลัก </h4> <br />
              <p style={{ textIndent: 60 }}>กำหนดให้กับตารางหรือคอลัมน์ที่ต้องการ การกำหนด Primary key สามารถทำได้ตอนที่ Create table แต่จะมีเงื่อนไข ก็คือตัวของคอลัมน์ต้องเป็น Unit คือ มีค่าที่ไม่ซ้ำกัน แนะนำให้คีย์หลักกำหนดไว้ทุกตารางเพราะจะช่วยลดเรื่องของความซ้ำซ้อนของข้อมูล ใน 1ตารางจะต้องมีคีย์หลักได้ 1ตัว และค่าของคีย์หลักต้องมีค่าของทุกตัวจะเป็นค่าว่างไม่ได้  </p>

              <h5 style={{}}>ขั้นตอนการกำหนดตัวของ Primary key</h5> <br />
              <p style={{ textIndent: 60 }}> 1.ตั้ง Primary key ที่คอลัมน์ CategoryID พิมพ์คำสั่งตามรูป คลิ๊กไปที่ Execute และคลิ๊กที่ปุ่ม Refresh </p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example1</label>
                <textarea name="text" id="exampleText" className="form-control" rows={6} defaultValue={"            CREATE TABLE Category\n            ( CategoryID nchar (3) not null Primary Key,\n\t        CategoryName nvarchar (50) not null,\n\t        CategoryDescription nvarchar (20) );\n        "} />
              </div>

              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/4/166_Pic.png" /></div>
              <p style={{ textIndent: 60 }}> 2.คลิ๊กขวาที่ dbo.Category เลือกที่ Design จะขึ้นเป็นสัญญาลักษณ์รูปกุญแจสีเหลือง 1ตัว ดังรูป </p>
              <div style={
                { display: "flex", justifyContent: "center", alignItem: "center" }}>
                <img src="dist/img/4/19_Pic.png" /></div>

              <div>
                <h3 > การกำหนด Composite key</h3>
                <h5 > ขั้นตอนการใส่ Composite key </h5>
                <p style={{ textIndent: 60 }}>1.ตั้ง Primary key ที่คอลัมน์ OrderID,ProductID พิมพ์คำสั่งตามรูป คลิ๊กไปที่ Execute และคลิ๊กที่ปุ่ม Refresh</p>

                <div className="position-relative form-group">
                  <label htmlFor="exampleText" className>Coding Example</label>
                  <textarea name="text" id="exampleText" className="form-control" rows={8} defaultValue={"        CREATE TABLE OrderDetails\n        (OrderID nchar (3) Not Null,\n\t    ProductID nchar (3) Not Null,\n\t    ProductCount int,\n\t    Discount int,\n\t    Constraint OrderDetails_pk\n\t    Primary Key (OrderID,ProductID)\n        );\n    "} />
                </div>

                <div style={
                  { display: "flex", justifyContent: "center", alignItem: "center" }}>
                  <img src="dist/img/4/17_Pic.png" /></div>

                <p style={{ textIndent: 60 }}> 2.คลิ๊กขวาที่ dbo.Order เลือกที่ Design จะขึ้นเป็นสัญญาลักษณ์รูปกุญแจสีเหลือง 2ตัว ดังรูป </p>
                <div style={
                  { display: "flex", justifyContent: "center", alignItem: "center" }}>
                  <img src="dist/img/4/18_Pic.png" /></div>

                <h3 > การกำหนด Foreign key</h3>
                <p style={{ textIndent: 60 }}><b>Foreign key </b>เป็นการสร้างตัวเชื่อมหรือการเชื่อมต่อ 2ตารางที่มีความสัมพันธ์ 1 ต่อ n โดยนำเอาคีย์หลักของอีกตารางนึงมากำหนดเป็น Foreign key ของอีกตารางนึง เพื่อจะลดความซับซ้อนให้การปรับปรุงหรือลบข้อมูลในตารางได้</p>
                <h5 >ขั้นตอนการใส่ Foreign key</h5> <br />

                <p style={{ textIndent: 60 }}> 1.ตั้ง Primary key ของตารางที่ชื่อ Product ที่คอลัมน์ ProductID และพิมพ์ references category(CategoryID) พิมพ์คำสั่งตามรูป คลิ๊กไปที่ Execute และคลิ๊กที่ปุ่ม Refresh </p>

                <div className="position-relative form-group">
                  <label htmlFor="exampleText" className>Coding Example</label>
                  <textarea name="text" id="exampleText" className="form-control" rows={9} defaultValue={"        CREATE TABLE Product\n        (ProductID nchar  (3) not null Primary Key,\n\t    CategoryID nchar  (3) not null References  Category(CategoryID),\n    \tProductName nvarchar (50),\n\t    UnitPrice money,\n\t    VatFlag bit not null,\n\t    UnitInStock int);\n    "} />
                </div>

                <div style={
                  { display: "flex", justifyContent: "center", alignItem: "center" }}>
                  <img src="dist/img/4/20_Pic.png" /></div>

                <div style={
                  { display: "flex", justifyContent: "center", alignItem: "center" }}>
                  <img src="dist/img/4/21_Pic.png" /></div>

                <h3 style={{}}> กำหนดค่า Index</h3>
                <p style={{ textIndent: 60 }}> การกำหนดค่า Index จะช่วยให้สามารถกู้ข้อมูลที่เคยสร้างจากฐานข้อมูล เวลาเกิดปัญหาไม่สามารถค้นหาจากตารางหลักได้และจะเพิ่มความรวดเร็วในการค้นหาข้อมุลโดยสามารถที่จะสร้าง
                  Index ได้ทั้งแบบคอลัมน์เดียวหรือจะเป็นลักษณะเป็นกลุ่มก็ได้</p>

                <h4 style={{}}> วิธีการกำหนดค่า Index</h4>
                <p p style={{ textIndent: 60 }}> 1.ตั้ง Primary key ที่คอลัมน์ CustomerID และพิมพ์ Create Index idx_Customers ON Customers (CustomerName)) พิมพ์คำสั่งตามรูป คลิ๊กไปที่ Execute และคลิ๊กที่ปุ่ม Refresh</p>

                <div className="position-relative form-group">
                  <label htmlFor="exampleText" className>Coding Example</label>
                  <textarea name="text" id="exampleText" className="form-control" rows={10} defaultValue={"        CREATE TABLE Customers\n        (CustomerID int not null Identity,\n\t    CustomerName varchar(100) not null,\n\t    CustomerAddress varchar(200) not null,\n\t    ZipCode char(6) not null,\n\t    Telephone char(12) not null,\n\t    Primary key (CustomerID)\n        )\n        CREATE Index Idx_Customers\n        On Customers (CustomerName);\n        "} />
                </div>

                <div style={
                  { display: "flex", justifyContent: "center", alignItem: "center" }}>
                  <img src="dist/img/4/23_Pic.png" /></div>


                {/* เนื้อหา */}

              </div>
            </div>
          </div>

          {/* หัวข้อที่ 5 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">5. การแทรก แก้ไข และลบแถว </h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">
              <h4 style={mystyle} > แทรกแถวลงตารางด้วยคำสั่ง INSERT </h4>
              <p> การแทรกแถวใหม่ลงในตาราง สามารถใช้คำสั่ง INSERT เพื่อเพิ่มแถวใหม่ในตารางข้อมูลทีละแถวข้อมูล
                SQL Insert into statement ข้อมูลที่ต้องระบุคือ table name, column name, value </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/Insert.jpg" /></div>

              <p><b> คำเตือน </b> – การเรียงลำดับของชื่อ column จะต้องเหมือนกันกับ ลำดับของ value เพราะ SQL Insert into statement
                จะทำการเอาข้อมูล หรือ value ใส่ลงแต่ละ column ตามลำดับที่ระบุ  </p>
              <p><b> ตัวอย่าง</b> จากตัวอย่างต้องการแทรกแถวใหม่ลงในตาราง Customer ใช้คำสั่ง Insert </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/5/image5.2.11.jpg" /></div>
              <p>กด Execute และเช็คที่ Messages box ที่มีข้อมูล 1 แถวถูกแทรกเข้าไปในตาราง </p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={7} defaultValue={" Insert into Customer\n        values ('C01',\n\t\t'Mr.Suraphol',\n\t\t'777soi 9',\n\t\t'10240',\n\t\t'411-6000') ; \n        "} />
              </div>

              <p> หรือต้องการระบุชื่อคอลัมน์พร้อมกับข้อมูล </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/image5.2.12.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"        Insert Into Customer\n\t    (CustomerID ,CustomerName ,CustomerAddress ,ZipCode ,Telephone)\n        VALUES ('C02',\n              'EDUCARE 2',\n              '15/1',\n              '10120',\n                '2112710');\n        "} />
              </div>

              <h4 style={mystyle}> เพิ่มข้อมูลลงใน table โดยอาศัยข้อมูลจากอีก table </h4>
              <p style={{}}> คือ การนำข้อมูลจากตารางหนึ่งมาใส่อีกตารางหนึ่ง โดยจะต้องมีชื่อคอลัมน์และ data type ที่เหมือนกันอยู่ในทั้งสองตาราง  <br />

                <div style={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center"
                  }}><img src="dist/img/5/Insert11.jpg" /></div>

                <b>ตัวอย่าง</b> ถ้าต้องการนำข้อมูลจากตาราง New product มารวมกับข้อมูลในตาราง Product  </p>

              <p style={{ textIndent: 60 }}> 1. ในตาราง New product มีข้อมูลอยู่ 4 ข้อมูล ดังรูป </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/image5.3.11.jpg" /></div>
              <p style={{ textIndent: 60 }}> 2. ต้องการนำข้อมูลในตาราง New product รวมกับข้อมูลในตาราง Product โดยใช้คำสั่ง Insert
                ซึ่ง ค่า UnitInStock มากกว่า 0  หลังจากใช้คำสั่ง Insert ข้อมูลแล้วจะเห็นว่า ที่กล่อง Messages จะแสดงผลลัพธ์ว่ามีข้อมูลเพิ่ม 4 ข้อมูล </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/image5.3.12.jpg" /></div>

              <p style={{ textIndent: 60 }}> 3. เช็คข้อมูลในตาราง Product ที่รวมข้อมูลแล้ว จะพบข้อมูลที่ Insert ใหม่ </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/image5.3.2.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"        INSERT INTO Product\n        Select  ProductID, CategoryID, ProductName, UnitInStock\n        From NewProduct\n        Where UnitInStock > 0; \n    "} />
              </div>

              <h4 style={mystyle}> แก้ไขข้อมูลด้วยคำสั่ง UPDATE </h4>
              <p style={{}}>ถ้าเราต้องการปรับเปลี่ยนค่าบางอย่าง หรือ บาง column ที่มีอยู่ปัจจุบัน เราจะใช้คำสั่ง SQL Update query ในการแก้ไขข้อมูลที่ต้องการ โดยที่เราสามารถนำเอา Where Clause
                มากำหนดกลุ่มของข้อมูลที่เราต้องการได้ด้วย มิเช่นนั้นการแก้ไขข้อมูล หรือ Update จะมีผลต่อข้อมูลทุกบรรทัดทั้งหมดใน table <br /><br />
              </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/update11.jpg" /></div>
              <b> ตัวอย่าง </b>  จากตาราง Product ต้องการเปลี่ยนค่า UnitInStock ให้เป็น 1000 ทั้งหมด โดยใช้คำสั่ง  <p />

              <p style={{ textIndent: 60 }}> 1. ข้อมูลเดิมจากตาราง Product มี 8 แถว ต้องการUpdate UnitInStock เท่ากับ 1000 </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/image5.4.11.jpg" /></div>

              <p style={{ textIndent: 60 }}> 2. ใช้คำสั่ง Update ทำให้ข้อมูลมีการ Update UnitInStock = 1000 </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/image5.4.12.jpg" /></div>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}><img src="dist/img/5/image5.4.13.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className />
                <textarea name="text" id="exampleText" className="form-control" rows={4} defaultValue={"UPDATE Product\nSET UnitInStock = '1000';"} />
              </div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={4} defaultValue={"UPDATE Product\nSET UnitInstock = '550'\nWHERE ProductName = 'C++'  ;    --เพิ่มเงื่อนไขโดยใช้ Where ใช้แก้ไขข้อมูลที่ละแถวตาม [condition]\n"} />
              </div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={4} defaultValue={"UPDATE Product\nSET UnitInStock = '1000' , UnitPrice = '200'   -- update 2 columm \nWHERE ProductID = 'B07';                       \n"} />
              </div>


              <h4 style={mystyle}> ลบแถวด้วยคำสั่ง Delete </h4>
              <p style={{}}>วิธีการลบข้อมูลออกจาก table ด้วยคำสั่ง SQL Delete query statement โดยสามารถใช้คำสั่งร่วมกัน Where Clause ในการกำหนดกลุ่มของข้อมูลที่ต้องการจะลบออกจาก table </p>
              <br />
              <div style={picture}>
                <img src="dist/img/5/Delete.jpg" /></div>

              <br /> ตัวอย่าง <br />  ถ้าต้องการลบข้อมูลจากตาราง New Product <p />
              <p style={{ textIndent: 60 }}> 1. ข้อมูลเดิมของตาราง New Product มีอยู่ 4 แถว</p>
              <div style={picture}><img src="dist/img/5/image5.3.11.jpg" /></div>

              <p style={{ textIndent: 60 }}>2. ต้องการลบข้อมูลทั้งหมดในตาราง  เลือก New Query &gt; ใช้คำสั่ง Delete เพื่อลบข้อมูลทั้งหมดในตาราง
                มีข้อมูลทั้งหมด 4 แถวที่ถูกลบออก</p>

              <div style={picture}><img src="dist/img/5/image5.5.11.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={2} defaultValue={"        DELETE FROM NewProduct;  --กรณีที่ลบข้อมูลทั้งหมดออกจากตาราง"} />
              </div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className />
                <textarea name="text" id="exampleText" className="form-control" rows={3} defaultValue={"        DELETE FROM NewProduct\n        WHERE ProductID = 'B08';  -- เพิ่มเงื่อนไข Where ในกรณีที่ลบข้อมูลที่ละแถว"} />
              </div>

              {/* ใส้เนื้อหา */}

            </div>
            {/* /.card-body */}
          </div>

          {/* หัวข้อที่ 6 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">6.การเข้าถึงและเรียกดูข้อมูลจากตาราง</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">
              <h4 style={mystyle}> การเรียกดูข้อมูลในตารางด้วย SELECT </h4>
              <p>การเรียกดูข้อมูลในตารางด้วย select นั้น มีรูปแบบการใช้งาน ดังนี้

                <div style={picture}>
                  <img src="dist/img/6/Select.jpg" /></div>
                <div>
                  <b>ตัวอย่าง</b> จากตาราง Product แสดงข้อมูลด้านล่าง ต้องการเรียกดูข้อมูลที่มาจากคอลัมน์ ProductName และ ProductID โดยใช้คำสั่ง Select
                </div>
                <div style={picture}><img src="dist/img/6/image6.1.2.jpg" /></div>
                Result ที่ได้จะแสดงเฉพาะคอลัมน์ ProductName และ ProductID เท่านั้น </p>
              <div style={picture}><img src="dist/img/6/image6.1.11.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"    Select ProductName,ProductID\n    From Product;"} />
              </div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className />
                <textarea name="text" id="exampleText" className="form-control" rows={2} defaultValue={"    SELECT * FROM Product;  \n  "} />
              </div>
              <h4 style={mystyle}> การเรียกดูลำดับข้อมูลด้วยคำสั่ง Order by</h4>

              <p style={{ textIndent: 60 }}> เราสามารถใช้คำสั่ง SQL ORDER BY Clause ต่อหลัง SQL Select เพื่อให้ข้อมูลที่แสดงมีการจัดลำดับเรียงจากน้อยไปมาก หรือ มากไปน้อย ตามที่เราต้องการได้ ซึ่งคำสั่ง ORDER BY จะทำการเรียงข้อมูลจากน้อยไปมาก เป็นค่าเริ่มต้น (Default) </p>
              <p style={{ textIndent: 60 }}> ❑ ASC (Default) เรียงจาก น้อยไปมาก </p>
              <p style={{ textIndent: 60 }}> ❑ DESC เรียงจาก มากไปน้อย</p>
              <div style={picture}><img src="dist/img/6/Select1.jpg" /></div>

              <p style={{}}> <b> ตัวอย่าง </b> จากตาราง Product แสดงข้อมูลอยู่จำนวนหนึ่ง ดังรูป ต้องการเรียกข้อมูลทั้งหมดจากตาราง Product โดยค่าจากคอลัมน์ UnitInStock นั้น ต้องเรียงจาก น้อย &gt;&gt; มาก</p>
              <div style={picture}><img src="dist/img/6/image6.2.11.jpg" /></div>

              <p style={{}}>ใช้คำสั่ง Select * จากตาราง Product .  <br />
                Result จะแสดงผลลัพธ์จากค่าน้อย &gt;&gt; มาก ที่คอลัมน์ UnitInStock
                <br />
                <div style={picture}><img src="dist/img/6/image6.2.12.jpg" /></div>
                <br />
                ถ้าใช้ desc ข้อมูลในคอลัมน์ UnitInStock ก็จะแสดงผลลัพธ์จากมาก &gt;&gt; น้อย
                <br />
                <div style={picture}><img src="dist/img/6/image6.2.13.jpg" /></div>
              </p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={3} defaultValue={"    SELECT *\n    From Product\n    ORDER BY UnitInStock Asc;\n    "} />
              </div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>การดึงข้อมูลจาก table Product ทุก column โดยจัดเรียงข้อมูลด้วย column ที่ชื่อ ProductName และ UnitInStock จากน้อยไปมาก</label>
                <textarea name="text" id="exampleText" className="form-control" rows={3} defaultValue={"    SELECT * FROM Product\n    ORDER BY ProductName, UnitInStock;    \n"} />
              </div>

              <h4 style={mystyle}> การจัดเรียงข้อมูลตามคอลัมน์ </h4>
              <p style={{}}>การจัดเรียงข้อมูลตามคอลัมน์ ทำได้โดยกำหนดจาก Order by
                <br />
                <b>ตัวอย่าง</b> จากตาราง Product แสดงข้อมูล ดังรูป  ต้องการเรียงข้อมูลในคอลัมน์ที่กำหนด โดย เลือก New Query ใช้คำสั่ง Select กำหนดคอลัมน์ที่ต้องการเรียง </p>
              <div style={picture}><img src="dist/img/6/image6.2.11.jpg" /></div><br />
              <div style={picture}><img src="dist/img/6/image6.3.11.jpg" /></div>
              <p> Result ที่ได้จะแสดงผลโดยเรียงลำดับเลขจากคอลัมน์ ProductID หรือถ้าต้องการให้เรียงจาก CategoryID และ ProductName </p>
              <div style={picture}><img src="dist/img/6/image6.3.12.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"      Select ProductID,CategoryID,ProductName\n      From Product\n      Order By 1;"} />
              </div>

              <h4 style={mystyle}>การแสดงข้อมูลที่ไม่ซ้ำกัน distinct / จำลองชื่อคอลัมน์</h4>
              <h5>การแสดงข้อมูลที่ไม่ซ้ำกันจาก column ที่กำหนด</h5>
              <p style={{}}>เราสามารถใส่ keyword “DISTINCT” นำหน้า column name ที่ต้องการเอาข้อมูลที่ซ้ำออก <br />
              </p>
              <div style={picture}><img src="dist/img/6/Distinct.jpg" /></div>

              ตัวอย่าง<br /> จากตาราง Product ต้องการกำหนดคอลัมน์ CategoryID ไม่ซ้ำกัน โดย Result ที่ได้โปรแกรมจะแสดงข้อมูลที่ไม่ซ้ำกันเท่านั้น <p />
              <div style={picture}><img src="dist/img/6/image6.4.12.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={10} defaultValue={"      Select CategoryID \n      From Product \n      --Order by CategoryID ;\n      \n      -- “DISTINCT” นำหน้า column name ใน select \n      /*Select distinct CategoryID              \n      From Product \n      Order by CategoryID ; */\n      \n      "} />
              </div>

              <div>
                <h4 style={mystyle}>การจำลองชื่อด้วยคำสั่ง Aliase (AS)</h4>
                <p style={{}}>เราสามารถจำลองหรือเปลี่ยนชื่อคอลัมน์ขึ้นมาใหม่ได้ โดยมีรูปแบบดังนี้ </p>
              </div>
              <div style={picture}><img src="dist/img/6/image6.4.2.jpg" /></div><br />
              <div style={picture}><img src="dist/img/6/image6.4.3.jpg" /></div>

              <p style={{}}> <b>ตัวอย่าง </b> จากข้อมูลเดิมของตาราง Product ที่มีข้อมูลอยู่แล้ว ต้องการจำลองชื่อคอลัมน์ใหม่</p>
              <div style={picture}><img src="dist/img/6/image6.2.11.jpg" /></div>

              <p style={{}}> กำหนดคำสั่ง select ตามด้วยคอลัมน์ที่ต้องการเปลี่ยนชื่อ
                ผลลัพธ์ที่ได้ คือจะเปลี่ยน ชื่อ columm ใหม่ตามที่กำหนดไว้ </p>
              <div style={picture}><img src="dist/img/6/image6.4.13.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={6} defaultValue={"    select ProductID as \"รหัสสินค้า\",\n    CategoryID as \"หมวดหมู่สินค้า\",\n    ProductName as \"ชื่อสินค้า\"\n    From Product ;"} />
              </div>

              <div>
                <h4 style={mystyle}> การเรียกดูข้อมูลแบบมีเงื่อนไข Where cluase</h4>
                <p style={{}}> ถ้าต้องการเรียกดูข้อมูลแบบมีเงื่อนไข สามารถใช้ Where clause ได้ ส่วนการเรียกข้อมูลแบบไม่มีเงื่อนไขนั้น จะเป็นการแสดงข้อมูลทั้งหมดในคอลัมน์ที่เลือก
                  ดังนั้นเราจึงใช้ Where clause กรองข้อมูลที่ไม่ต้องการ </p>
              </div>
              <div style={picture}><img src="dist/img/6/WhereClause.jpg" /></div>

              <p style={{}}> ในส่วนของ condition เราสามารถนำเอา SQL Operator เช่น =, &gt;, &lt; เพื่อเปรียบเทียบข้อมูลใน table และ ข้อมูลที่เราต้องการ </p>
              <p style={{}}> <b> ตัวอย่าง </b>  จากข้อมูลในตาราง Product มีข้อมูลอยู่จำนวนหนึ่ง ต้องการแสดงข้อมูลในตารางบางส่วน
                กำหนดให้ ต้องการแสดงข้อมูลของ CategoryID ที่มีค่า 01
                ใช้คำสั่ง select * (หมายถึงเลือกข้อมูลทั้งหมด) จากตาราง Product ที่ CategoryID = 01

                <div style={picture}><img src="dist/img/6/image6.5.11.jpg" /></div>
                <br />
                <div style={picture}><img src="dist/img/6/image6.5.12.jpg" /></div>


                ผลลัพธ์ที่ได้จะแสดงเฉพาะข้อมูลที่มาจากคอลัมน์ Category = 01 เท่านั้น </p >

              <div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleText" className>Coding Example</label>
                  <textarea name="text" id="exampleText" className="form-control" rows={6} defaultValue={"    select *,\n    UnitInStock * UnitPrice as \"TOTAL\"\n    From Product\n    where UnitInStock > '100' ;"} />
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleText" className />
                  <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"    SELECT CustomerID,CustomerName, CustomerAddress \n    FROM Customer\n    WHERE CustomerName = 'BT Book';\n    "} />
                </div>
              </div>

            </div>
            {/* /.card-body */}
          </div>


          {/* หัวข้อที่ 7 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">7.การใช้งาน Operator (ตัวดำเนินการ)</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">
              <h4 style={mystyle} > 1. คำนวณทางคณิตศาสตร์ (Arithmetic operators)  </h4>
              <div style={picture}>
                <img src="dist/img/7/1.jpg" /></div>

              <p style={{}}> <b> ตัวอย่าง </b> ใช้คำสั่ง select ก็สามารถคำนวณตัวเลขได้เลย หรือถ้าต้องการเพิ่มชื่อคอลัมน์ก็ทำได้โดยใช้ as
                ตามด้วยคอลัมน์ </p>

              <div style={picture}><img src="dist/img/7/image7.1.11.jpg" /></div><br />
              <div style={picture}><img src="dist/img/7/image7.1.12.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={6} defaultValue={"     Select (10+5) as Addition,\n     (25-10) as Subtraction,\n\t (8*7) as Multiply,\n\t (10/5) as Division,\n\t (17%5) as Modulus ;"} />
              </div>

              <h4> การเรียกดูข้อมูลจากการคำนวณทางคณิตศาสตร์ </h4>
              <p > <b>ตัวอย่าง</b> จากตาราง Product ต้องการคำนวณหาค่า Price โดยกำหนดค่าคงที่ (discount) = 0.25 </p>

              <div style={picture}><img src="dist/img/7/image7.2.11.jpg" /></div><br />
              <div style={picture}><img src="dist/img/7/image7.2.12.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"\t    Select ProductID,\n\t    UnitPrice,\n\t    0.25 as DC,\n\t    UnitPrice *(1-0.25) as Price\n        From Product ;"} />
              </div>
              <h4 > การเปลี่ยนสัญลักษณ์ให้กับตัวเลข </h4>
              <div style={picture}><img src="dist/img/7/image7.3.1.jpg" /></div><br />
              <div style={picture}><img src="dist/img/7/image7.3.2.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"        Select  ProductID,\n        -UnitPrice as UnitPrice\n        From Product ;"} />
              </div>

              <h4> ลำดับในการคำนวณทางคณิตศาสตร์ </h4>
              <div style={{ textIndent: 60 }}>
                <p>กำหนดลำดับในการคำนาณทางคณิตศาสตร์ มีอยู่สามข้อ คือ </p>
                <p>1. ตัวดำเนินการคูณหาร (*, /) จะถูกคำนวณก่อนบวกและลบ (+,-) </p>
                <p>2. ตัวดำเนินการที่อยู่ในวงเล็บ (..) จะถูกคำนวณก่อน โดยเริ่มจากวงเล็บด้านในสุด </p>
                <p>3. ตัวดำเนินการจะจัดลำดับจากซ้ายไปขวา หากไม่มีวงเล็บ มีเพียง +,- หรือ *, / </p> </div>

              <p > <b> ตัวอย่าง </b></p>
              <div style={picture}><img src="dist/img/7/image7.4.11.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"        Select  3+4*5 as \"3+4*5=\" ,\n            (3+4)*5 as \"(3+4)*5\" ,\n            6/1*2 as \"6/1*2 =\" ,\n            6/(1*2) as \"6/(1*2)=\" ;\n    "} />
              </div>
              <h4 style={mystyle} > 2. เปรียบเทียบ (Comparison operators)</h4>
              <p > ตัวดำเนินการเปรียบเทียบ (Comparision Operaters) เปรียบเทียบค่าที่อยู่ในคอลัมน์ ถ้าเป็นจริงค่าก็จะแสดงผลออกมา
                แต่ถ้าเป็นเท็จค่าก็จะไม่แสดงผล </p>
              <div style={picture}><img src="dist/img/7/2.jpg" /></div>

              <h4 style={mystyle} > 3. ตรรกศาตร์ (Logical Operater) </h4>
              <div style={{ textIndent: 60 }}>
                <p>เป็นตัวดำเนินการที่ประกอบไปด้วย </p>
                <p>☛ AND และ OR ใช้ในการเชื่อมตัวดำเนินการทางคณิตศาสตร์ </p>
                <p>☛ NOT จะเป็นเงื่อนไขที่ตรงกันข้าม </p>
              </div>

              <h4 style={mystyle}> การเรียกดูข้อมูลแบบมีเงื่อนไข And Or Clause </h4>
              <p> การเรียกดูข้อมูลที่มากกว่า 1 เงื่อนไข โดยอาศัยการเชื่อมความสัมพันธ์ด้วย And & Or Clause </p>
              <h4 style={mystyle}> AND Operator </h4>
              <p> เราสามารถ เชื่อมหลายๆเงื่อนไขต่อกัน ด้วยการใช้ keyword “AND” นำหน้าแต่ละเงื่อนไขที่เพิ่มเข้ามา </p>

              <div style={picture}><img src="dist/img/7/And.jpg" /></div>
              <p > <b> ** ทุกเงื่อนไขที่เชื่อมกันด้วย And จำเป็นต้องได้ค่าเป็น TRUE ทั้งหมด Where Clause statement นั้นถึงจะเป็น
                TRUE ได้ </b> </p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={10} defaultValue={"        /* SQL syntax  \n        SELECT column1, column2, columnN \n        FROM table_name\n        WHERE [condition1] AND [condition2]...AND [conditionN]; */\n\n        SELECT ProductName ,UnitInstock , UnitPrice\n        From Product \n        WHERE  UnitInstock > 0 and UnitPrice <= 500 ; \n"} />
              </div>

              <h4 style={mystyle}> OR Operator </h4>
              <p > เราสามารถ เชื่อมหลายๆเงื่อนไขต่อกัน ด้วยการใช้ keyword “OR” นำหน้าแต่ละเงื่อนไขที่เพิ่มเข้ามา </p>
              <div style={picture}><img src="dist/img/7/Or.jpg" /></div>

              <p> <b> ** ทุกเงื่อนไขที่เชื่อมกันด้วย Or มีอย่างน้อย 1 เงื่อนไขที่ได้ค่าเป็น TRUE ทั้งหมด Where Clause statement
                นั้นก็จะเป็น TRUE ได้ทันที</b> </p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={10} defaultValue={"/* SQL syntax \nSELECT column1, column2, columnN \nFROM table_name\nWHERE [condition1] OR [condition2]...OR [conditionN]; */\n\nSELECT ProductName ,UnitInstock , UnitPrice\nFrom Product \nWHERE  UnitInstock > 100 Or UnitPrice <= 500 ; \n"} />
              </div>


            </div>
            {/* /.card-body */}
          </div>


          {/* หัวข้อที่ 8 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">8.การใช้ฟังก์ชันในภาษา SQL</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">
              <h4 style={mystyle} > ฟังก์ชันในภาษา SQL  </h4>
              {/* <p style={{ textIndent: 60 }}> การใช้ฟังก์ชั่นในภาษา SQL สามารถแบ่งเป็นกลุ่มได้ ดังนี้ </p>
              <div style={mystyle} >
                <p>1.ฟังก์ชันการรวมกลุ่มหรือการคำนวณทางสถิติ </p>
                <p>2.ฟังก์ชันเกี่ยวกับการจัดการข้อความหรือสตริง </p>
                <p> 3.ฟังก์ชันวันที่และเวลา </p>
                <p> 4.ฟังก์ชันอื่นๆในภาษา SQL </p>
              </div> */}

              <h5 style={mystyle} > ฟังก์ชันการรวมกลุ่ม </h5>
              <p>สามารถใช้ในการหาค่าเฉลี่ย ค่าสูงสุด ค่าต่ำสุด การหาผลรวม การนับจำนวน ซึ่งนำไปใช้ในลักษณะสถิติ มีฟังก์ชันดังนี้

                <div style={picture}><img src="dist/img/8/image8.1.2.jpg" /></div>

                <b>ตัวอย่าง</b>จากข้อมูลในตาราง Product ต้องการนับจำนวนแถวที่อยู่ในตารางของคอลัมน์ ProductID และ UnitInStock
                และแถวทั้งหมดในตาราง โดยที่คอลัมน์ UnitInStock ต้องไม่เท่ากับ 0 </p>
              <div style={picture}><img src="dist/img/8/image8.1.3.1.jpg" /></div><br />
              <div style={picture}><img src="dist/img/8/image8.1.3.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={6} defaultValue={"        Select Count (ProductID) As \"Count(ProductID)\",\n        Count (UnitInStock) As \"Count(UnitInStock)\",\n\t    Count (*) As \"Count_other\"\n        From Product\n        Where UnitInstock <> 0;"} />
              </div>

              <h4 style={mystyle}> นับแถวในคอลัมน์และกำหนดเงื่อนไขเพิ่มเติม </h4>
              <p ><b>ตัวอย่าง</b> จากข้อมูลในตาราง Product ต้องการนับแถวในคอลัมน์และสร้างชื่อคอลัมน์ใหม่ของ ProductID<br />
                และ UnitInStock โดยมีเงื่อนไข UnitInStock not null</p>

              <div style={picture}><img src="dist/img/8/image8.2.11.jpg" /></div><br />
              <div style={picture}><img src="dist/img/8/image8.2.12.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"    Select Count (ProductID) As \"Count(ProductID)\",\n    Count (UnitInStock) As \"Count(UnitInStock)\"\n    From Product\n    Where UnitInstock Is not null;"} />
              </div>

              <h4 style={mystyle}> หาค่า MIN/MAX/AVG/SUM </h4>

              <p style={{ textIndent: 60 }}> Min เป็นคำสั่งในการหาค่าต่ำสุดของข้อมูลของคอลัมน์ใดคอลัมน์หนึ่ง </p>
              <p style={{ textIndent: 60 }}> Max เป็นคำสั่งในการหาค่าสูงสุดของข้อมูลของคอลัมน์ใดคอลัมน์หนึ่ง </p>
              <p style={{ textIndent: 60 }}> AVG เป็นคำสั่งการหาค่าเฉลี่ยของข้อมูลในคอลัมน์ใดคอลัมน์หนึ่ง โดยในคอลัมน์ใดที่ไม่มีค่าบรรจุอยู่ (NULL VALUE)
                จะไม่นำมาคำนวณ </p>
              <p style={{ textIndent: 60 }}> Sum เป็นคำสั่งการหาผมรวมของคอลัมน์ใดคอลัมน์หนึ่ง</p>
              <b> **โดยที่ข้อมูลที่นำมาต้องเป็นตัวเลขเท่านั้น** </b>


              <p > <b>ตัวอย่าง </b> จากตาราง Product ต้องการหาค่า min /max/avg/sum และสร้างชื่อใหม่ของคอลัมน์ UnitPrice และ
                UnitInStock
                <div style={picture}><img src="dist/img/8/image8.2.11.jpg" /></div>
                ผลลัพธ์ที่ได้ จะแสดงค่าต่ำสุด ค่าสูงสุด ค่าเฉลี่ยและผลรวม ของจำนวนข้อมูลในตาราง </p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example1</label>
                <textarea name="text" id="exampleText" className="form-control" rows={8} defaultValue={"     Select min\t(UnitPrice) as \"min_UnitPrice\",\n\t   min\t(UnitInStock) as \"min_UnitInStock\",\n\t   max\t(UnitPrice) as \"max_UnitPrice\",\n\t   max\t(UnitInStock) as \"max_UnitInStock\",\n\t   avg\t(UnitPrice) as \"avg_UnitPrice\",\n\t   sum\t(UnitInStock) as \"Total_UnitInStock\"\n     From Product  ;"} />
              </div>

              <h4 style={mystyle}> การใช้ฟังก์ชันรวมกลุ่มในเงื่อนไข Group by </h4>
              <p >การใช้คำสั่ง Group by เข้ามาช่วยในการจัดกลุ่มของข้อมูล มากกว่า 1 คอลัมน์ <br />
                SQL GROUP BY มักจะใช้งานตามหลัง Select อาจจะใช้ Where Clause ร่วมด้วย และจะใช้นำหน้า ORDER BY
                <div style={picture}><img src="dist/img/8/1.jpg" /></div>

                <b> ตัวอย่าง</b> ต้องการจัดเรียงข้อมูลในตารางProduct โดยเลือกจัดเรียงจากคอลัมน์ ProductName และ CategoryID
                มาคำนวณผลรวมของ UnitPrice และ avg UnitInStock</p>
              <div style={picture}><img src="dist/img/8/image8.3.2.jpg" /></div>

              <p>ผลลัพธ์ที่ได้จะแสดงผลของการจัดเรียงข้อมูลของ ProductName </p>
              <div style={picture}><img src="dist/img/8/image8.4.1.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label>
                <textarea name="text" id="exampleText" className="form-control" rows={20} defaultValue={"      /* SQL syntax \n       SELECT column1, column2\n      FROM table_name\n      WHERE [ conditions ]\n      GROUP BY column1, column2\n      ORDER BY column1, column2;  */ \n\n      SELECT ProductName,UnitPrice \n      FROM Product \n      WHERE UnitPrice  > 0 \n      --Group by UnitPrice , ProductName   \n      --Order by ProductName ;\n\n      SELECT CategoryID,ProductName,\n      Count (ProductName) as \"CountProductName\",\n\t    sum (UnitPrice) as \"SumUnitPrice\",\n\t    avg (UnitInStock) as \"AvgUnitInStock\"\n      FROM product group by ProductName,CategoryID  ;\n"} />
              </div>

              <h4 style={mystyle}> การกำหนดเงื่อนไขด้วย Having </h4>
              <p style={{ textIndent: 60 }}>จาการใช้งาน Select  เราสามารถกำหนดเงื่อนไขในการเลือกข้อมูลด้วย Where Clause
                นอกจากนี้ยังสามารถจัดกลุ่มข้อมูลด้วย GROUP BY ได้ ซึ่งหลังจากจัดกลุ่มแล้วเราไม่สามารถทำเงื่อนไขเพื่อเลือกข้อมูลจาก Where Clause ได้อีกรอบแล้ว
                เราต้องใช้คำสั่ง SQL HAVING Clause แทนในการเลือกข้อมูลด้วยเงื่อนไขที่ต้องการ หลังจากมีการจัดกลุ่ม หรือ ทำ SQL GROUP BY</p>

              <div style={picture}><img src="dist/img/8/2.jpg" /></div>
              <p><b>ตัวอย่าง</b> จากตาราง Product ต้องการนับแถวทุกแถวและจัดเรียงข้อมูล ของ CategoryID <br />
                โดยเงื่อนไขจากการนับแถวนั้นต้องมากกว่าหรือเท่ากับ 5 </p>

              <div style={picture}><img src="dist/img/8/image8.5.1.jpg" /></div>
              <p>ผลลัพธ์ที่ได้แสดงกลุ่มที่คอลัมน์ CategoryID และค่าที่นับได้ &gt;=5 </p>
              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example1</label>
                <textarea name="text" id="exampleText" className="form-control" rows={20} defaultValue={"    /* SQL syntax\n    SELECT column1, column2\n    FROM table1, table2\n    WHERE [ conditions ]\n    GROUP BY column1, column2\n    HAVING [ conditions ]\n    ORDER BY column1, column2 */\n\n    SELECT ProductName \n    FROM Product \n    WHERE UnitInstock > 20 \n    --GROUP BY ProductName  \n    --HAVING count (UnitPrice) >=2 ;\n\n    SELECT CategoryID, Count(*) as num\n    FROM Product\n    GROUP BY CategoryID\n    HAVING Count(*) >=2  ;"} />
              </div>


              {/* ใส่เนื้อหาตรงนี้  */}

            </div>
            {/* /.card-body */}
          </div>


          {/* หัวข้อที่ 9 */}
          <div className="card collapsed-card card-orange">
            <div className="card-header">
              <h3 className="card-title">9.การรวมข้อมูลและตารางด้วย Join</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button> */}
              </div>
            </div>
            <div className="card-body">
              <div>
                <h3 style={mystyle}> รวมข้อมูลและตารางด้วย Join </h3>
                <p> การรวมข้อมูลของตารางตั้งแต่ 2 ตารางขึ้นไปด้วยคำสั่ง Join โดยทำงานร่วมกันและให้แสดงผลพร้อมกัน </p>
              </div>
              <div>
                <h4 style={mystyle}> เชื่อมตารางด้วย Where </h4>
                <p style={{ textIndent: 60 }}> เป็นการดึงข้อมูลบางส่วนจากสองตารางมาแสดงผลร่วมกัน โดยทั้งสองตารางที่นำมาใช้จะต้องมีชื่อคอลัมน์ที่เหมือนกัน <br />
                  <b>ตัวอย่าง</b>  จากตาราง Orders และ product เลือกดูข้อมูลของ คอลัมน์ Quatity,UnitInStock
                  โดยเงื่อนไขที่คอลัมน์ Product ของตารางOrders ต้องเท่ากับ ProductID ของตาราง Product</p>
              </div>

              <p> ข้อมูลจากตาราง Product และ Orders </p>

              <div style={picture}><img src="dist/img/9/image9.1.11.jpg" /></div> <br />
              <div style={picture}><img src="dist/img/9/image9.1.12.jpg" /></div> <br />
              <div style={picture}><img src="dist/img/9/image9.1.13.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label><textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"    select Quanlity, UnitInStock\n    From Orders,Product\n    Where Orders.ProductID = Product.ProductID  ;"} />
              </div>

              <h4 style={mystyle} > เชื่อมตารางด้วย Inner Join  </h4>

              <p style={{ textIndent: 60 }}>INNER JOIN คือ แสดงผลข้อมูลที่มีค่าทั้ง 2 table เหมือนกันใน column ที่ระบุ <br />
                หลักการของ INNER JOIN คือ สร้างข้อมูล table ใหม่จากข้อมูลของ 2 table (table 1 และ table 2) โดยจะทำการเปรียบเทียบข้อมูลแต่ละบรรทัดของ table 1 และ table 2 เพื่อหาข้อมูล column ที่กำหนดทั้ง 2 table ที่ตรงกัน

                <div style={picture}><img src="dist/img/9/join1.jpg" /></div> <br />
                <div style={picture}><img src="dist/img/9/join2.jpg" /></div>
                <b> ตัวอย่าง </b> จากข้อมูลในตาราง Customer และ CustomerDetail  </p>

              <div style={picture}><img src="dist/img/9/image9.2.12.jpg" /></div> <br />
              <div style={picture}><img src="dist/img/9/image9.2.13.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label><textarea name="text" id="exampleText" className="form-control" rows={8} defaultValue={"       /*SELECT table1.column1, table2.column2...\n        FROM table1 INNER JOIN table2\n        ON table1.common_field = table2.common_field; */\n\n        SELECT Customer.CustomerName,CustomerDetail.Career,CustomerDetail.WorkAt\n        FROM Customer inner join CustomerDetail\n        ON  Customer.CustomerID = CustomerDetail.CustomerID\n        order by Customer .CustomerID asc ;\n       "} />
              </div>

              <h4 style={mystyle}>เชื่อมตารางด้วย Outer Join </h4>
              <p style={{ textIndent: 60 }}> คำสั่ง OUTER JOIN มีอยู่ 2 รูปแบบคือ LEFT OUTER JOIN (หรือ LEFT JOIN) และ RIGHT OUTER JOIN (หรือ RIGHT JOIN) โดยที่คำสั่งในกลุ่มนี้จะเป็นการ Query โดยการจับคู่ข้อมูลจาก 2 ตาราง โดยรักษาข้อมูลในตารางหลักไว้ และคืนค่า NULL ในฟิลด์ที่ไม่สามารถจับคู่ได้หรือหากไม่พบข้อมูลในตารางรอง </p>
              <div style={picture}><img src="dist/img/9/join3.jpg" /></div>


              <p> LEFT JOIN คือ แสดงผลข้อมูลของ table ทางซ้ายทั้งหมด (table 1) และ ข้อมูลของ table ทางขวาที่ตรงเงื่อนไข (table 2) </p>
              <p> RIGHT JOIN คือ แสดงผลข้อมูลของ table ทางซ้ายที่ตรงเงื่อนไข (table 1) และ ข้อมูลของ table ทางขวาทั้งหมด (table 2) </p>

              <p> <b>ตัวอย่าง</b> </p>
              <div style={picture}><img src="dist/img/9/image9.3.11.jpg" /></div>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example1</label>
                <textarea name="text" id="exampleText" className="form-control" rows={14} defaultValue={"  /* SQL syntax\n  SELECT table1.column1, table2.column2...\n  FROM table1\n  LEFT JOIN table2\n  ON table1.common_field = table2.common_field; */\n\n    Select Customer.CustomerName, CustomerDetail.Career, CustomerDetail.WorkAt\n    From Customer left join CustomerDetail\n    on Customer.customerID = CustomerDetail.CustomerID\n    \n    Select Customer.CustomerID ,Customer.CustomerName, CustomerDetail.Career, CustomerDetail.WorkAt\n    From Customer right join CustomerDetail\n    on Customer.customerID = CustomerDetail.CustomerID ;\n    "} />
              </div>

              <h4>รวมตารางด้วย Cross join</h4>

              <p style={{ textIndent: 60 }}>Cross join จะนำเอาข้อมูลทั้ง 2 table ข้อมูลทุกบรรทัดใน table ซ้าย จะเชื่อมต่อกับ ข้อมูลทุกบรรทัดของ table ขวา</p>
              <div style={picture}><img src="dist/img/9/join4.jpg" /></div> <br />
              <div style={picture}><img src="dist/img/9/image9.4.11.jpg" /></div>

              <b>ตัวอย่าง</b>
              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example1</label>
                <textarea name="text" id="exampleText" className="form-control" rows={8} defaultValue={"      /* SELECT table1.column1, table2.column2...\n      FROM table1 CROSS JOIN table2 ; */\n\n     Select Customer.CustomerID,\n\t   CustomerName,\n\t   CustomerDetail.Interest\n    From Customer Cross join CustomerDetail   ;"} />
              </div>

              {/* ใส่เนื้อหาตรงนี้ */}

            </div>
            {/* /.card-body */}
          </div>



        </section>
        {/* /.content */}
      </div>


    );
  }
}

export default MES;
