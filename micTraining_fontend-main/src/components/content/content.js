import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./content.css"

class content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TableEmp: [],
    }
  }
  componentDidMount() {
    this.setState({
      TableEmp: [],
    })
  }

  render() {
    return (
      <div className="content-wrapper">
        <br/>
        <h1 className="text-center"> Training Course List</h1>
        <div className="col-12">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#7083EC" }}>
              <h1 className="card-title" > <b> คอร์สที่เปิดอบรม</b></h1>

            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0" style={{ height: "auto" }}>
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Detail</th>
                    <th> File </th>
                    {/* <th>Download </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 1 </td>
                    <td> Basic Knowledge of Database management for MES </td>
                    <td> การจัดการข้อมูลในฐานข้อมูลโดยใช้ภาษา SQL  </td>
                    <td> <button className="btn btn-block btn-primary " onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../MES")
                    }} > View </button> </td>

                    <td> <Link to="dist\img\MES.zip" target="_blank" download>Download</Link> </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>
                  <tr>
                    <td> 2 </td>
                    <td> Basic Knowledge for IoT Development on Arduino Platform </td>
                    <td> การใช้งานเบื้องต้นบน Arduino Platform (Arduino IDE),MQTT </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../IOT")
                    }} > View </button> </td>
                    <td> <Link to="dist\img\IOT\IOT.zip" target="_blank" download>Download</Link> </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>

                  <tr>
                    <td> 3 </td>
                    <td> Basic Knowledge computer language (JavaScript) </td>
                    <td> ความรู้พื้นฐานสำหรับภาษาคอมพิวเตอร์ JavaScript </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../JavaScript")
                    }} > View </button> </td>

                    <td> <Link to="dist\img\JS\Basic JavaScript Rev4.zip" target="_blank" download>Download</Link> </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>

                  <tr>
                    <td> 4 </td>
                    <td> Basic node.js และ React  </td>
                    <td> สร้างเว็บไซต์ด้วย Node.js และ React </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../reactWeb")
                    }}> View </button> </td>
                    <td> <Link to="dist\img\React\NodeJsReact.Training.zip" target="_blank" download> Download</Link> </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>

                  <tr>
                    <td> 5 </td>
                    <td> Analysis data by Control Chart  </td>
                    <td> การวิเคราะห์ข้อมูลทางสถิติโดยใช้แผนภูมิควบคุม </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../ControlChart")
                    }}> View </button> </td>
                    <td>  </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>

                  <tr>
                    <td> 6 </td>
                    <td> Basic Knowledge for Python  </td>
                    <td> ความรู้พื้นฐานสำหรับภาษา Python </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../Python")
                    }}> View </button> </td>
                    <td> <Link to="dist\img\Python\basic_python_rev_A.zip" target="_blank" download> Download</Link> </td>
                  </tr>

                  <tr>
                    <td> 7 </td>
                    <td> Data analytics and dashboard visualization with Python  </td>
                    <td> การวิเคราะห์ข้อมูลและสร้าง Dashboard ด้วย ภาษา python โดยใช้เครื่องมือ pandas  </td>
                    <td> </td>
                    <td>  </td>
                    {/* <td> <Link to="dist\img\Python\basic_python_rev_A.zip" target="_blank" download> Download</Link> </td> */}
                  </tr>


                  <tr>
                    <td> 8 </td>
                    <td> The fundamentals of machine learning  </td>
                    <td> ความรู้พื้นฐานทางด้าน machine learning  </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../machineLearning")
                    }}> View </button> </td>

                    <td> <Link to="dist\img\ML\basic_machine_learning.zip" target="_blank" download> Download</Link>  </td>
                  </tr>

                  <tr>
                    <td> 9 </td>
                    <td>Object Detection (Computer vision-Deeplearning) (AI)</td>
                    <td>เรียนรู้เทคโนโลยี AI ที่ประยุกต์ใช้ในโรงงานอุตสาหกรรม <br />
                      โดยเฉพาะการใช้งาน Deep Learning กับงานด้าน Computer vision </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../AI")
                    }} > View </button> </td>

                    <td>  </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>
                  <tr>
                    <td> 10 </td>
                    <td> Python for Office:Automating Company Tasks </td>
                    <td>1. สร้างเครื่องมือจัดการงานเอกสารแบบอัตโนมัติ <br />
                      2. ทำรายงานอัตโนมัติ (excel,pdf,word,powerpoint)<br /> 
                      3. ส่งรายงานอัตโนมัติ ( email, Line Notify)  <br/>
                      4. นำโปรแกรมไปใช้งานจริง  Deployments และ บำรุงรักษาระบบ
                       </td>
                    <td> </td>
                    <td>  </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>

        <div style={
          {
            display: "flex",
            justifyContent: "center",
            alignItem: "center"
          }}>
          <img src="dist/img/trainingLogo.png" /></div>

      </div>

    )
  }
}

export default content;
