import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReactWeb extends Component {
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
                <h3>สร้าง Web site ด้วย Node.js และ React</h3>

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
                  <td> Basic node.js and React
                  </td>
                </tr>
                  <tr>

                    <td> Time (ระยะเวลา) </td>
                    <td> 3 วัน (**อบรมต่อเนื่อง**) <br />
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
                      • ผู้เข้าอบรมต้องผ่านหลักสูตร Basic Knowledge of Database management for MES <br />
                      หรือ ผ่านหลักสูตร Basic Knowledge computer language (JavaScript) หรือต้องเข้าใจ JavaScript
                    </td>
                  </tr>
                  <tr>
                    <td> Notebook and Software </td>
                    <td> ** ผู้เข้าอบรมต้องนำ Computer Notebook มาด้วย รายละเอียดดังนี้ <br />
                      • Windows 10 (คอมพิวเตอร์ต้องไม่ใช่ Stand alone)  <br />
                      1. Microsoft SQL Server 2019  <br />
                      2. Microsoft SQL Server management studio 18   <br />
                      3. Visual studio code <br />
                      4. Node.js  <br />
                      5. Google Chrome <br />
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>

        <h3 style={mystyle} > Node.js คืออะไร ? </h3>
        <p style={{ textIndent: 50 }} >คือ Cross Platform Runtime Environment  สำหรับฝั่ง Web Server และเป็น Open Source ซึ่งเขียนด้วยภาษา JavaScript สรุปรวมๆ Node.JS ก็คือ Platform
          ตัวหนึ่งที่เขียนด้วย JavaScript สำหรับเป็น Web Server นั่นเอง </p>

        <section className="content">

          {/* Scroll to top */}
          <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
            <i className="fas fa-chevron-up" />
          </a>


          <div className="card collapsed-card card-blue">
            <div className="card-header">
              <h3 className="card-title"> วิธีเช็ค Node.js version</h3>
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
              <p> 1. เปิด cmd โดยการพิมพ์ว่า cmd ใน window </p>
              <p> 2. พิมพ์ว่า node –v และ npm –v เพื่อทำการเช็คผล </p>
              <p> 3. ถ้าขึ้นเลข Version แสดงว่าลงสำเร็จ </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/React/js2.png" /></div>

            </div>
          </div>

          <div className="card collapsed-card card-blue">
            <div className="card-header">
              <h3 className="card-title"> Vs code คืออะไร </h3>
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
              <p style={{ textIndent: 50 }} > VS Code  หรือ  Visual Studio Code  เป็นโปรแกรม  Code Editor  ที่ใช้ในการแก้ไขและปรับแต่งโค้ด โดยมาจากค่ายไมโครซอฟท์ ที่มีการพัฒนาออกมาในรูปแบบของ OpenSource จึงสามารถนำมาใช้งานได้แบบฟรี ๆ ซึ่งเหมาะสำหรับนักพัฒนาโปรแกรมที่ต้องการใช้งานกับแพลตฟอร์ม </p>
              <p> มีการรองรับการใช้งานทั้งบน  Windows ,  macOS และ  Linux </p>
              <h5> VS Code extension ที่เกี่ยวข้อง </h5>
              <p> ต้องติดตั้ง Extension โดย กด Ctrl+Shift+X หรือ icon ตามรูป </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/React/1.jpg" /></div>

              <div className="form-group">
                <textarea id="inputDescription" className="form-control" rows={15} style={{ marginTop: 0, marginBottom: 0, height: 250 }} defaultValue=
                  {"  1. Auto Close Tag \n  2. Bootstrap3Snippets \n  3. Bootstrap v4 Snippets \n  4. Bracket Pair Colorizer \n  5. Color Highlight \n  6. VS Code ES7 React/Redux/React-Native/JS snippets \n  7. HTML Snippets \n  8. html-to-jsx \n  9. VS Code JavaScript(ES6)snippets \n  10. Output Colorizer \n  11. Path Intellisense \n  12. Prettier \n  13. VS Color Picker \n  14. vscode-icons"} />
              </div>
            </div>
          </div>

          <div className="card collapsed-card card-blue">
            <div className="card-header">
              <h3 className="card-title"> การ Start Node.js </h3>
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
              <h4 style={mystyle} > Start Node.js</h4>
              <p> 1. คลิ๊กขวา ไปที่ New file หลังจากนั้นกำหนด ชื่อ server.js </p>
              <p> 2. พิมพ์ console.log('Hello world') </p>
              <p> 3. คลิ๊ก Terminal ไปที่ New Terminal พิมพ์คำสั่ง  node server.js</p>
              <p> ถ้า node.js ทำงาน จะแสดงข้อความ Hello world ที่ช่อง Terminal </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/React/js3.png" /></div>

              <div className="position-relative form-group">
                <textarea name="text" id="exampleText" className="form-control" rows={3} defaultValue={"  node server.js\n  npm i –g nodemon\n           "} />
              </div>

              <h4 style={mystyle}> ติดตั้ง Node package </h4>
              <p> Terminal -- copy code ด้านล่าง วางใน Terminal </p>

              <div className="position-relative form-group">
                <textarea name="text" id="exampleText" className="form-control" rows={3} defaultValue={"  npm init -y\n  npm i express body-parser fs-extra formidable\n           "} />
              </div>
            </div>
          </div>

          <div className="card collapsed-card card-blue">
            <div className="card-header">
              <h3 className="card-title"> React คืออะไร ? </h3>
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
              <p style={{ textIndent: 50 }}> React เป็น Javascript Library หรือจะเรียกว่าเป็น Javascript Framework ก็ได้ พร้อมด้วย Action ต่างๆที่ทำให้เว็บของเราดูน่าสนใจ </p>
              <p> จุดเด่นของ React ที่ทำให้มันน่านำมาใช้งานนั้นก็คือ มันมีระบบแคชในตัวทำให้หน้าเว็บของเรามีการตอบสนองที่เร็ว เหมาะแก่การนำไปทำ SPA เป็นอย่างยิ่ง </p>

              <h4 style={mystyle} > ติดตั้ง React จาก node.js  </h4>
              <div>
                <p style={{ textIndent: 50 }}> Terminal  --&gt; copy code ด้านล่าง วางใน Terminal</p>
                <div className="position-relative form-group">
                  <textarea name="text" id="exampleText" className="form-control" rows={5} defaultValue={"  npm install -g create-react-app\n\n  - เช็คผลว่าลงสำเร็จ ?\n  create-react-app --version\n           "} />
                </div>
              </div>

              <p style={{ textIndent: 50 }}> ถ้าติดตั้ง react ได้จะแสดงเวอร์ชั่นตามภาพด้านล่าง </p>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/React/js4.png" /></div>

              <h4 style={mystyle} > สร้าง react project </h4>
              <p> สร้างโฟลเดอร์ไว้เก็บโปรแกรม โดย Terminal --&gt; copy code ด้านล่าง วางใน Terminal </p>

              <div className="position-relative form-group">
                <textarea name="text" id="exampleText" className="form-control" rows={4} defaultValue={"          npx create-react-app  [ชื่อโปรเจค]\n         ตัวอย่าง :  npx create-react-app training-react \n          \n           "} />
              </div>

              <h4 style={mystyle} > Start React web application </h4>
              <p > ถ้าต้องการให้ Front End ทำงาน สามารถวางโค๊ดด้านล่างที่ Terminal </p>
              <div className="position-relative form-group">
                <textarea name="text" id="exampleText" className="form-control" rows={2} defaultValue={"         npm start\n           "} />
              </div>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/React/js5.png" /></div>


            </div>
          </div>


        </section>
      </div>

    );
  }
}

export default ReactWeb;
