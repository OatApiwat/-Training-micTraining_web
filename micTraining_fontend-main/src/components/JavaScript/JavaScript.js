import React, { Component } from "react";
import { Link } from "react-router-dom";

class JavaScript extends Component {

  render() {

    const mystyle = {
      color: "#512DA8",
      padding: "10px",
      fontFamily: "Arial"
    };

    const mystyleP = {
      textIndent: "50px",
      color: "#333333"
    };

    const text = {
      textIndent: "50px",
    }

    const picture = {
      display: "flex",
      justifyContent: "center",
      alignItem: "center"

    };

    return (
      <div className="content-wrapper" >
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-8">
                <h4>Basic Knowledge computer language (JavaScript)</h4>
                <h5></h5>
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
                  <td> Basic Knowledge computer language (JavaScript)
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
                      2. เพื่อเป็นพื้นฐานสำหรับผู้สนใจหรือผู้เริ่มต้นพัฒนาเว็บไซต์ <br />

                    </td>
                  </tr>
                  <tr><td>Qualification (คุณสมบัติผู้เข้ารับการอบรม)</td>
                    <td>Staff level up (M12 level up) (10 persons : group)  <br />
                    </td>
                  </tr>

                  <tr>
                    <td> Notebook and Software </td>
                    <td> ** ผู้เข้าอบรมต้องนำ Computer Notebook มาด้วย รายละเอียดดังนี้ <br />
                    • windows 10 ขึ้นไป (คอมพิวเตอร์ต้องไม่ใช่ Stand alone)  <br />
                      1. Visual studio code  <br />               
                      2. Node.js
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>


            {/* Scroll to top */}
            <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
              <i className="fas fa-chevron-up" />
            </a>

            {/* หัวข้อที่1 */}
            <div className="card collapsed-card card-primary">
              <div className="card-header ">
                <h2 className="card-title"> JavaScript คืออะไร</h2>
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
                <div style={picture}><img src="dist/img/JS/JS.jpg" /></div>
                <p style={mystyleP} >
                  <b> JavaScript  </b> คือ ภาษาคอมพิวเตอร์สำหรับการเขียนโปรแกรมบนระบบอินเทอร์เน็ต ที่กำลังได้รับความนิยมอย่างสูง <br />
                  JavaScript เป็น ภาษาสคริปต์เชิงวัตถุ (ที่เรียกกันว่า "สคริปต์" (script) ซึ่งในการสร้างและพัฒนาเว็บไซต์ (ใช่ร่วมกับ HTML) เพื่อให้เว็บไซต์ของเราดูมีการเคลื่อนไหว สามารถตอบสนองผู้ใช้งานได้มากขึ้น
                  ซึ่งมีวิธีการทำงานในลักษณะ "แปลความและดำเนินงานไปทีละคำสั่ง" (interpret) หรือเรียกว่า อ็อบเจ็กโอเรียลเต็ด (Object Oriented Programming) ที่มีเป้าหมายในการ ออกแบบและพัฒนาโปรแกรมในระบบอินเทอร์เน็ต สำหรับผู้เขียนด้วยภาษา HTML สามารถทำงานข้ามแพลตฟอร์มได้ โดยทำงานร่วมกับ ภาษา HTML และภาษา Java ได้ทั้งทางฝั่งไคลเอนต์ (Client) และ ทางฝั่งเซิร์ฟเวอร์ (Server)
                </p>
                {/* <p> &#9755;  เป็นภาษาที่แปลไป ทำงานไป เหมือนเป็นการใช้ล่าม (Interpreter) ที่พูดไปแปลไป ซึ่งตัวแปลภาษาจะแปลใหม่ทุกครั้งที่เรียกใช้งาน แตกต่างจาก Compiler ที่แปลครั้งเดียว แล้วเก็บเป็นไฟล์ต่างหาก ครั้งต่อไปก็จะเรียกไฟล์ต่างหากนี้ทำงาน โดยไม่แปลใหม่ทุกครั้งเหมือน Interpreter </p>
                <p> &#9755; สามารถใช้งานในส่วนของโปรแกรมบนคอมพิวเตอร์และเซิฟเวอร์ ยกตัวอย่างเช่น Node.js หรือในฐานข้อมูลก็สามารถใช้งานได้เช่นกัน</p>
                <p> &#9755; ภาษาสคริปต์เชิงวัตถุ หรือที่เรียกว่า OOP (Object Oriented Programming) ที่มีเป้าหมายในการออกแบบและพัฒนาโปรแกรมในระบบอินเทอร์เน็ต สำหรับผู้เขียนเอกสาร HTML สามารถทำงานข้ามแพลตฟอร์มได้ ทำงานร่วมกับภาษา HTML และภาษาจาวาได้ทั้งทางฝั่งไคลเอนต์(Client) และทางฝั่งเซิร์ฟเวอร์(Server) โดยมีลักษณะการทำงานดังนี้</p>
                <p style={text}>  &#10065; 1. Navigator JavaScript เป็น Client-Side JavaScript หมายถึง จาวาสคริปต์ที่ถูกแปลทางฝั่งไคลเอ็นต์ ซึ่งก็คือถูกแปลที่ฝั่งเครื่องคอมพิวเตอร์ของผู้ใช้งาน จึงมีความเหมาะสมต่อการใช้งานของผู้ใช้ส่วนใหญ่</p>
                <p style={text}>  &#10065; 2. LiveWire JavaScript เป็น Server-Side JavaScript หมายถึง จาวาสคริปต์ที่ถูกแปลทางฝั่ง Server ซึ่งก็คือฝั่งเครื่องคอมพิวเตอร์ผู้ให้บริการเว็บ สามารถใช้ได้กับ Livewire ของ Netscape โดยตรง </p> */}

                <h5 style={mystyle}> JavaScript ทำอะไรได้บ้าง </h5>

                <p style={text} > &#10065; 1.ทำให้สามารถใช้เขียนโปรแกรมแบบง่ายๆได้ โดยไม่ต้องพึ่งภาษาอื่น </p>
                <p style={text} > &#10065; 2.มีกลไกในการตรวจสอบ การเปรียบเทียบ การตัดสินใจ การประมวลผลและสามารถสร้างฟังก์ชั่นได้เอง</p>
                <p style={text} > &#10065; 3.สามารถเขียนหรือเปลี่ยนแปลง HTML Element ได้ นั่นคือสามารถเปลี่ยนแปลงรูปแบบการแสดงผลของเว็บไซต์ได้ หรือหน้าแสดงเนื้อหาสามารถซ่อนหรือแสดงเนื้อหาได้แบบง่ายๆนั่นเอง</p>
                <p style={text} > &#10065; 4.สามารถเปลี่ยนรูปแบบเว็บเพจของเอกสาร HTML จาก Static มาเป็นแบบ Dynamic ที่สามารถโต้ตอบกับผู้ใช้ได้</p>
                <p style={text} > &#10065; 5.ใช้งานง่าย เพราะมีลักษณะเป็น Interpreter แบบ Text File ฝังอยู่ในเอกสาร HTML จึงสามารถทำงานบนเว็บบราวเซอร์ได้ทันที โดยไม่ต้อง compile โปรแกรม</p>
                <p style={text} > &#10065; 6.ใช้รูปแบบคำสั่งเหมือนกับภาษา Java เช่น คำสั่งเพื่อดำเนินการทางคณิตศาสตร์ ตรรกศาสตร์ สตริง รวมทั้งคำสั่งควบคุมลำดับการดำเนินงาน ได้แก่ if, while ,for</p>
                <p style={text} > &#10065; 7.เรียนรู้ง่ายเหมาะกับนักพัฒนาเว็บเพจบนระบบอินเทอร์เน็ต</p>
                {/* <p style={text} > &#10065; </p> */}

                <h5 style={mystyle}> ข้อจำกัดของ JavaScript </h5>
                <p style={text} > &#10065; 1.ไม่สามารถติดต่อหรือทำงานฝั่ง Server เพื่อเก็บข้อมูลลงฐานข้อมูลได้โดยตรง หากต้องการติดต่อกับ Server ต้องอาศัยการทำงานในฝั่ง Server เช่น CGI, Java Servlet </p>
                <p style={text} > &#10065; 2.ไม่สามารถสร้างส่วนแสดงผลต่าง ๆ บนเว็บเพจได้ ดังนั้นจึงต้องใช้โปรแกรมภาษาอื่นสร้างแทน เช่น HTML โดยใช้ภาษาจาวาสคริปต์เข้ามาช่วยให้เว็บเพจที่สามารถแสดงผลลูกเล่นได้หลายอย่าง </p>
                <p style={text} > &#10065; 3.จาวาสคริปต์จะทำงานต่างกันในแต่ละเว็บบน Server เนื่องจากเว็บบราวเซอร์ต่าง ๆ จะใช้ตัวแปลภาษาจาวาสคริปต์ของตนเอง เพื่ออ่านและแปลคำสั่งจาวาสคริปต์ ดังนั้นจึงมีการทำงานต่างกันในบางคำสั่ง จึงทำให้เว็บบราวเซอร์บางประเภทแสดงผลลัพธ์ของคำสั่งของสคริปต์ได้ไม่สมบูรณ์ หรือเกิดข้อผิดพลาด (Error)การทำงานของ JavaScript กับ HTML
                </p>

                {/* ใส่เนื้อหาเพิ่มตรงนี้  */}
              </div>
              {/* /.card-body */}
            </div>

            {/* หัวข้อที่3 */}
            <div class="card collapsed-card card-primary">
              <div className="card-header ">
                <h2 className="card-title"> Node.js คืออะไร ?</h2>
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

              <div style={picture}><img src="dist/img/React/js1.jpg" /></div>

                <h5 style={mystyle}> Node.js </h5>
                <p style={text}> คือ JavaScript Runtime ที่ถูกสร้างด้วย
                  Chrome V8 JavaScript Engine ที่ทำหน้าที่อยู่ฝั่ง Backend ทำตัวเป็น Web Server จากเดิมที่เคยอยู่ฝั่ง Frontend ทำหน้าที่ร่วมกันกับ html และยังเป็น Cross Platform Enviroment แถมยังเป็น Open Source อีกด้วย </p>

                <h5 style={mystyle}> Runtime คืออะไร </h5>
                <p style={text}> ในระบบต่างๆ เช่น Windows,mac OS ฯลฯ กลไกการทำงานก็แตกต่างกัน เพราะฉะนั้น runtime คือล่าม เพื่อทำให้โปรแกรมเดียวกันสามารถทำงานได้ในต่างระบบ </p>
                <p> หมายความว่า ถ้ามี Node ติดตั้ง ในระบบ Windows,mac OS เราก็สามารถใช้ JavaScript ชุดเดียวกันบน 2 ระบบ ได้ </p>

                {/* ใส่เนื้อหาเพิ่มตรงนี้  */}
              </div>
              {/* /.card-body */}
            </div>


            {/* หัวข้อที่2 */}
            <div class="card collapsed-card card-primary">
              <div className="card-header ">
                <h2 className="card-title"> การติดตั้ง Node.js และทดสอบรันโปรแกรม </h2>
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
                <h5 style={mystyle}> การติดตั้ง Node.js </h5>
                <p style={text} > เราจะรันโปรแกรมภาษา JavaScript จะต้องติดตั้งโปรแกรม Visual Studio Code และ Node.js</p>
                <p> เพื่อตรวจสอบให้แน่ใจว่า Node.js ได้ติดตั้งลงบนคอมพิวเตอร์ของคุณและมันสามารถใช้งานได้ ให้เปิด Command line ขึ้นมาแล้วพิมพ์คำสั่งต่อไปนี้</p>

                <div className="position-relative form-group">
                  <label htmlFor="exampleText" className>Coding Example</label>
                  <textarea name="text" id="exampleText" className="form-control" rows={2} defaultValue={" node -v"} />
                </div>

                <p> จะขึ้น Node.js version แสดงว่า สามารถใช้ได้แล้ว </p>
                <div style={picture}><img src="dist/img/JS/Ver.jpg" /></div>

                <h5 style={mystyle}> ทดสอบรันโปรแกรม </h5>
                <p style={text} > หลังจากที่คุณติดตั้งโปรแกรม Visual Studio Code หรือเลือก Editor ที่ต้องการใช้ได้แล้ว ต่อไปจะเป็นการทดสอบเขียนโปรแกรมภาษา JavaScript อย่างง่ายและรันมัน ในตัวอย่างของเราจะเขียนและรันผ่าน Terminal บนโปรแกรม Visual Studio Code ซึ่งคุณอาจจะใช้โปรแกรมอื่นเพื่อเขียน และรันผ่านทาง Command Line ของระบบได้โดยตรง ซึ่งได้ผลลัพธ์เหมือนกัน</p>

                <p style={mystyle}> &#9755; สร้างไฟล์ชื่อว่า sum.js และใส่โค้ดของโปรแกรมต่อไปนี้ </p>
                {/* <div style={picture}><img src="dist/img/JS/sum1.jpg" /></div> */}
                <div style={picture}><img src="dist/img/JS/sum.jpg" /></div>

                <p style={mystyle}> &#9755; การรันผ่าน Terminal บน Visual Studio Code </p>
                <p> เราสามารถเปิดใช้งาน Command Line (Terminal) บน Visual Studio Code ได้เลย นี่จะทำให้ในขณะที่เขียนโปรแกรมใน VS Code เราไม่ต้องสลับออกมารันที่ Command Line ด้านนอกโปรแกรม</p>

                <p style={text}> 1.เปิดโฟล์เดอร์โปรเจ็ค โดยคลิกเลือกที่เมนู "File" และเลือก "Open Folder..."  </p>
                <p style={text}> 2.เปิด Command Line ขึ้นมา โดยคลิกเลือกที่เมนู "Terminal" และเลือก "New Terminal" หรือกดคำสั่งลัด "Ctrl+Shift+`" </p>
                <p style={text}> 3.รันโปรแกรมด้วยคำสั่ง node sum.js  </p>

                <div style={picture}><img src="dist/img/JS/sum2.jpg" /></div>


                {/* ใส่เนื้อหาเพิ่มตรงนี้  */}
              </div>
              {/* /.card-body */}

            </div>



            {/* หัวข้อที่3 */}
            {/* <div class="card collapsed-card card-primary">
              <div className="card-header ">
                <h2 className="card-title"> ตัวแปร ( Variable ) และชนิดของข้อมูล (Data type)</h2>
                <div className="card-tools ">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                  

                </div>
              </div>
              <div className="card-body">
                <h5 style={mystyle}> ตัวแปร (Variable)</h5>
                <p style={text}> <b> ตัวแปร </b> คือชื่อหรือสัญลักษณ์ที่ใช้อ้างอิงถึงข้อมูลที่ถูกเก็บในหน่วยความจำ หรือกล่าวอีกนัยหนึ่ง ตัวแปรใช้สำหรับเก็บข้อมูลในโปรแกรมเพื่อเข้าถึงข้อมูลในภายหลัง <br />
                  เช่น การอ่านค่าในตัวแปร หรือการเปลี่ยนแปลงค่าของตัวแปรเป็นค่าใหม่</p> */}
                {/* <p style={text}> ภาษา JavaScript นั้นเป็นภาษาแบบ Dynamic typing นั่นหมายความว่าตัวแปรหนึ่งตัวสามารถเก็บข้อมูลได้หลายประเภทในขณะที่โปรแกรมทำงาน</p> */}

                {/* <p style={text}>การตั้งชื่อ (Identifier or Name) เป็นชื่อที่ตั้งขึ้นมาเพื่อกําหนดให้เป็นชื่อของโปรแกรมหลัก, ฟังก์ชัน, ตัวแปร,
                  ค่าคงที่, คําสั่งและคําสงวน โดยมีหลักการตั้งชื่อ ดังนี้</p>
                <p style={text}> 1.ขึ้นต้นด้วยตัวอักษรในภาษาอังกฤษตามด้วยตัวอักษรหรือตัวเลข เครื่องหมาย “ _ ” และ “$” </p>
                <p style={text}> 2.ห้ามขึ้นต้นด้วยตัวเลขหรือสัญลักษณ์พิเศษ </p>
                <p style={text}> 3.ขึ้นต้นด้วย $ และ _ (underscore) ได้ </p>
                <p style={text}> 4.มีลักษณะเป็น case sensitive คือ ตัวพิมพ์เล็ก พิมพ์ใหญ่จะมีความหมายที่แตกต่างกัน </p>
                <p style={text}> 5.ไม่ซ้ำกับคำสงวน (keyword) </p>

                <h5 style={mystyle} > ชนิดของข้อมูล(Data Type)</h5> */}


                {/* ใส่เนื้อหาเพิ่มตรงนี้  */}
              {/* </div> */}
              {/* /.card-body */}
            {/* </div> */}


          </div>
        </div>


      </div>
    );
  }
}

export default JavaScript;
