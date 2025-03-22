import React, { Component } from "react";
import { Link } from "react-router-dom";

class AI extends Component {
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

    return (
      <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-8">
              <h3> Object Detection (Computer vision-Deeplearning) (AI) </h3>
              
            </div>
            <div className="col-sm-4">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="./../content">Training course</Link></li>
                <li className="breadcrumb-item active">Content</li>
                </ol>
            </div>
    
        <table className="table table-striped table-bordered table-hover table-md">
  <thead className="thead-dark" style={{textAlign: 'center', overflow: 'auto'}}>
    <tr>
      <th>Topic</th>
      <th>Detail</th>
    </tr>
  </thead>
  <tbody><tr>
      <td> Name of Course (หลักสูตร)</td>
      <td> Object Detection (Computer vision-Deeplearning)
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
      <td> 1. เรียนรู้เทคโนโลยี AI ที่ประยุกต์ใช้ในโรงงานอุตสาหกรรม โดยเฉพาะการใช้งาน Deep Learning กับงานด้าน Computer vision  <br /> 
      2. เรียนรู้หลักการทำงานของโครงข่ายประสาทเทียม CNN และ Object Detection architecture <br />
      3. เรียนรู้การใช้งาน you only look once(Yolo) model ด้วย darknet framework <br/>
      4. เรียนรู้วิธีการทำ data labeling, training model และ evaluate model 
       </td>
    </tr>
    
    <tr>
      <td> Qualification  (คุณสมบัติผู้เข้ารับการอบรม) </td>
      <td> Staff level up (M12 level up)  <br />
       ** Basic Knowledge computer language (C/C++, C# ,Python etc. )     
      </td>
    </tr> 
    <tr>
      <td> Notebook and Software </td>
      <td> ** ผู้เข้าอบรมต้องนำ Computer Notebook มาด้วย รายละเอียดดังนี้ <br />
        PC version : Lenovo X240 / HP Elitebook 820G4  <br />
        (คอมพิวเตอร์ต้องไม่ใช่ Stand alone)  <br />
        1. python version above 3.9.2  <br/>
        2. putty above 0.74 <br/>
        3. Google Chrome <br/>
        4. Visual studio code 
       
      </td>
    </tr>
  </tbody></table>
     </div>
   </div>
  </div>

  {/* <h3 style={mystyle} > Object Detection </h3> 
  <p> ความรู้พื้นฐานเกี่ยวกับ Object Detection  </p>
    */}
   <section className="content">
      <div className="card collapsed-card card-danger">
      <div className="card-header">
        <h3 className="card-title"> Data science & Machine learning </h3>
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

      <h3> Virtual Environments </h3>
      
      </div>
      {/* /.card-body */}
     
      


    
  </div>
</section>
</div>

    );
  }
}

export default AI;
