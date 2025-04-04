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
                    <td> Advanc IoT  </td>
                    <td> การประยุกต์ใช้ระบบ IoT สำหรับโรงงาน </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../Advance_IoT")
                    }}> View </button> </td>
                    <td> <Link to="dist\img\Advance_IoT\Advance_IoT.zip" target="_blank" download> Download</Link> </td>
                    {/* <td> <button className="btn btn-block btn-success" > Download </button> </td> */}
                  </tr>

                  <tr>
                    <td> 6 </td>
                    <td> Kafka for IoT  </td>
                    <td> การประยุกต์ใช้งาน Kafka สำหรับงาน IoT </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../Kafka")
                    }}> View </button> </td>
                    <td> <Link to="dist\img\Kafka\Kafka_fot_IoT.zip" target="_blank" download> Download</Link> </td>
                  </tr>

                  <tr>
                    <td> 7 </td>
                    <td> Basic robot operating system (ROS)  </td>
                    <td> พื้นฐานการใช้งานระบบปฏิบัติการหุ่นยนต์ </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../ROS")
                    }}> View </button> </td>
                    <td> <Link to="dist\img\ROS\ROS.zip" target="_blank" download> Download</Link> </td>
                  </tr>

                  <tr>
                    <td> 8 </td>
                    <td> Python for Office:Automating Company Tasks </td>
                    <td>1. สร้างเครื่องมือจัดการงานเอกสารแบบอัตโนมัติ <br />
                      2. ทำรายงานอัตโนมัติ (excel,pdf,word,powerpoint)<br /> 
                      3. ส่งรายงานอัตโนมัติ ( email)  <br/>
                      4. นำโปรแกรมไปใช้งานจริง  Deployments และ บำรุงรักษาระบบ
                    </td>
                    <td> <button className="btn btn-block btn-primary" onClick={(e) => {
                      e.preventDefault();

                      window.location.replace("../python_task")
                    }}> View </button> </td>
                    <td> <Link to="dist\img\python_task\Basic_python.zip" target="_blank" download> Download</Link> </td>
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
