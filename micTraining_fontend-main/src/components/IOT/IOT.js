import React, { Component } from "react";
import { Link } from "react-router-dom";

class IOT extends Component {
  render() {

    const mystyle = {
      color: "#4d4dbd",
      padding: "20px",
      fontFamily: "Arial"
    };

    const mystyle1 = {
      textindent: "50px",
    };

    return (

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h4>Basic Knowledge for IoT Development on Arduino Platform</h4>
                <h5></h5>
              </div>
              <div className="col-sm-6">
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
                  <td> Basic Knowledge for IoT Development on Arduino Platform 
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
                    <td> To be able to create application on Arduino platform by using Temperature&amp;Humidity sensor Vs Raspberry Pi
                    </td>
                  </tr>
                  <tr>
                    <td> Day1</td>
                    <td>
                      • Hardware + Software overview <br />
                      • Node MCU Wiring / Connection <br />
                      • Arduino code <br />
                      • Sensors ==&gt; DHT sensor <br />
                      • Workshop <br />
                    </td>
                  </tr>
                  <tr>
                    <td> Day2</td>
                    <td>
                      • Overview NodeRed <br />
                      • NodeRed Dashboard <br />
                      • Blynk application <br />
                      • MQTT <br />
                      • MQTT + SQL server <br />
                    </td>
                  </tr>
                  <tr>
                    <td>Day3</td>
                    <td>
                      • Introduction Raspberry Pi <br />
                      • Arduino Vs Raspberry Pi<br />
                      • Input Data to SQL server <br />
                      • Raspberry Pi ==&gt; Sensor <br />
                    </td>
                  </tr><tr><td>&nbsp;Qualification&nbsp;&nbsp;(คุณสมบัติผู้เข้ารับการอบรม)&nbsp;</td><td>&nbsp;ผู้เข้าอบรมจะต้องผ่าน คอร์ส Basic Knowledge of Database management for MES  (10 persons: group)<br />
                    </td></tr>
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
                      3. Arduino IDE <br />
                      4. Node-Red  <br />
                      5. Google Chrome
                    </td>
                  </tr></tbody></table>
            </div>

            <h3 style={mystyle} > ไมโครคอนโทรลเลอร์ (Microcontroller) </h3>
            <p > คือ อุปกรณ์ควบคุมขนาดเล็ก ซึ่งบรรจุความสามารถที่คล้ายคลึงกับระบบคอมพิวเตอร์ โดยในไมโครคอนโทรลเลอร์ได้รวมเอาซีพียู, หน่วยความจำ และพอร์ต ซึ่งเป็นส่วนประกอบหลักสำคัญของระบบ
              <br />คอมพิวเตอร์เข้าไว้ด้วยกัน ที่สามารถนำมาประยุกต์ใช้งานได้หลากหลาย โดยผ่านการออกแบบ วงจรให้เหมาะกับงานต่างๆ และยังสามารถโปรแกรมคำสั่งเพื่อควบคุมขา Input / Output เพื่อสั่งงานให้ไป ควบคุมอุปกรณ์ต่างๆ ได้อีกด้วย ซึ่งก็นับว่าเป็นระบบที่สามารถนำมาประยุคใช้งานได้หลากหลาย ทั้งทางด้าน Digital และ Analog</p>

            <hr />
            <h4 style={mystyle} > Arduino คืออะไร ? </h4>
            <p> คือ ไมโครคอนโทรลเลอร์บอร์ดชนิดหนึ่งแบบสำเร็จรูปในยุคปัจจุบัน
              ซึ่งถูกสร้างมาจาก Controller ตระกูล ARM ของ ATMEL ข้อดีของไมโครคอนโทรลเลอร์บอร์ดคือเรื่องของ Open-Source ที่สามารถนำไปพัฒนาต่อเป็นอุปกรณ์ต่างๆได้
              จึงทำให้การ Upload Code เข้าตัวบอร์ดสามารถทำได้ง่ายขึ้น และยังมีการพัฒนา Software ที่ใช้ในการควบคุมตัวบอร์ด ของ Arduino มีลักษณะเป็นภาษา C++ ที่โปรแกรมเมอร์มีความคุ้นเคยในการใช้งาน
              โดยมีจุดมุ่งหมายให้ Arduino Platform เป็น Platform ที่ง่ายต่อการใช้งาน  </p>
            <div style={
              {
                display: "flex",
                justifyContent: "center",
                alignItem: "center"
              }}>
              <img src="dist/img/IOT/Arduino.jpg" /></div>
            <hr />

            <h4 style={mystyle} > NodeMCU คืออะไร ? </h4>
            <p> คือ บอร์ดคอนโทรลเลอร์ทีมีลักษณะการทำงานตามคำสั่งภาษา C คล้าย
              Arduino แต่มีลักษณะพิเศษกว่าตรงที่ สามารถเชื่อมต่อกับ WiFi ได้ การควบคุมการทำงานสามารถใช้
              โปรแกรม Arduino IDE ได้เช่นเดียวกันกับบอร์ด Arduino และบอร์ดก็มีราคาถูกมากๆ เหมาะแก่ผู้ที่คิดจะเริ่มต้นศึกษา </p>
            <div style={
              {
                display: "flex",
                justifyContent: "center",
                alignItem: "center"
              }}>
              <img src="dist/img/IOT/nodeMCU.jpg" /></div>
            <p> ภายในบอร์ดของ NodeMCU ประกอบไปด้วย </p>
            <p style={mystyle1} >
              <p>1.ESP8266 (ไมโครคอนโทรลเลอร์ที่สามารถเชื่อมต่อ WiFi ได้)</p>
              <p>2.อุปกรณ์อำนวยความสะดวกต่างๆ เช่น พอร์ต micro USB สำหรับจ่ายไฟ/อัปโหลดโปรแกรม</p>
              <p>3.ชิพสำหรับอัปโหลดโปรแกรมผ่านสาย USB</p>
              <p>4.ชิพแปลงแรงดันไฟฟ้า </p>
              <p>5.ขาสำหรับเชื่อมต่ออุปกรณ์ภายนอก </p>
            </p>
            <div style={
              {
                display: "flex",
                justifyContent: "center",
                alignItem: "center"
              }}>
              <img src="dist/img/IOT/nodeMCUDiagram.jpg" /></div>
            <hr />
            <h4 style={mystyle} > โปรแกรม Arduino IDE คืออะไร ? </h4>
            <p> เป็นซอฟต์แวร์ที่ใช้ในการพัฒนางานสำหรับบอร์ด
              สำหรับบอร์ด Arduino ใช้เขียนโปรแกรม, คอมไพล์ และอัปโหลดโปรแกรมลงบอร์ด Arduino หรือบอร์ดตัวอื่นๆ ที่คล้ายกัน </p>

            {/* ใส่เนื้อหาตรงนี่ต่อ */}

          </div>{/* /.container-fluid */}
        </div>
        {/* Main content */}
        <section className="content">

          {/* Scroll to top */}
          <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
            <i className="fas fa-chevron-up" />
          </a>

          {/* Default box */}
          <div class="card collapsed-card card-pink">
            <div className="card-header ">
              <h3 className="card-title"> การติดตั้งซอฟต์แวร์Arduino IDE</h3>
              <div className="card-tools ">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/ArduinoIDELogo1.jpg" /></div>

              <h5> Download โปรแกรม Arduino IDE ฟรีที่ https://www.arduino.cc/en/main/software </h5>
              <p>หลังจากดาวโหลดโปรแกรมแสร็จแล้วนั้น ทำการตั้งค่าโปรแกรม</p>
              <p> &#9755; คลิ๊ก file  เลือก Preference  ตั้งค่าเริ่มต้นตามในรูป </p>
              <p> &#9755; Additional Boards Manager URLs : <b>http://arduino.esp8266.com/stable/package_esp8266com_index.json</b></p>
              <p> &#9755; คลิ๊ก Tools  Board  Boards Manager… </p>
              <p> &#9755; ค้นหา ESP8266 และ Install </p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/1.jpg" /></div>
              <br />
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/2.jpg" /></div>
              <br />
              <hr />
              <h4 style={mystyle} > Upload parameter </h4>
              <p> &#9755; คลิ๊ก Tool  Upload Speed: “___”  </p>
              <p> &#9755; เลือก 115200 </p>
              <p> &#9755; Tools Port: “___” </p>
              <p> &#9755; เลือก COM ที่ขึ้น </p>

              <br />
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/3.jpg" /></div>
              <hr />

              <h4 style={mystyle} > เครื่องมือการใช้งานเบื้องต้น </h4>
              <p> เครื่องมือการใช้งานเบื้องต้น ที่ต้องรู้จักกัน มีดังนี้ </p>

              <p> &#9755; 1.Verify Code for check the correctly. ตรวจสอบความถูกต้องของโค้ดที่เขียนในโปรแกรม </p>
              <p> &#9755; 2.Upload code to NodeMCU. อัพโหลดโค้ดที่เขียนลง NodeMCU</p>
              <p> &#9755; 3.New Empty Project เปิดหน้าโปรเจคใหม่</p>
              <p> &#9755; 4.Open Other Project เปิดโปรเจคอื่นๆ</p>
              <p> &#9755; 5.Save  บันทึกโปรเจค</p>
              <p> &#9755; 6.Serial Monitor ช่องติดตามผล</p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/4.1.jpg" /></div>
              <hr />
              <h4 style={mystyle}> หลักการทำงานของโปรแกรม </h4>
              <p> หลักการทำงานของ Ariduno IDEนั้น จะทำงานแบบวนลูป โดยลูปจะแบ่งได้ 2 loop </p>


              <p>  &#9755; 1. Void setup : โปรแกรมจะทำงานที่ void loop แค่ 1 ครั้ง เมื่อNodeMCU เริ่มการทำงานเท่านั้น  </p>
              <p>  &#9755; 2. Void Loop : โปรแกรมจะทำงานวนซ้ำที่ void loop จนจบกระบวนการ</p>
              <p> ดังอธิบายตาม flow chart ด้านล่าง</p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/5.jpg" /></div>
            </div>
            {/* /.card-body */}
          </div>

          {/* ขึ้นโปรเจคใหม่ */}
          <div className="card collapsed-card card-pink">
            <div className="card-header">
              <h3 className="card-title">Project : ใช้ NodeMCU (ESP8266)ควบคุมการเปิด-ปิด LED</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <h5> ในโปรเจคนี้ต้องการให้เข้าใจพื้นฐานการควบคุมการเปิด-ปิด LED </h5>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/6.jpg" /></div>

              <p> ประกอบ NodeMCU เข้ากับ Extension board เรียบร้อยแล้ว ต่อวงจร LED ดังรูปด้านบน   </p>
              <p> &#9755; ต่อ LED input at PIN D5  </p>
              <p> &#9755; LED Output at GND </p>
              <p> &#9755; วาง Sourse Code ด้านล่างลงในโปรแกรม </p>
              <p> &#9755; หลังจากนั้น Verify & Upload to Node MCU</p>

              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label><textarea name="text" id="exampleText" className="form-control" rows={18} defaultValue={"  #define LED1 D5               //ตัวแปร LED1 = ขา D5 ของ MCU\n\n  void setup() {\n  Serial.begin(115200);       //กำหนด baud rate ของการรับส่งข้อมูล\n  pinMode(LED1, OUTPUT);      //LED1 = OUTPUT\n  digitalWrite(LED1, HIGH);   //ให้ D5 เป็น 1 \n}\n\nvoid loop() {\n  digitalWrite(LED1, HIGH);   //ให้ D5 เป็น 1 \n Serial.println(\"On\");       //ส่งค่ากลับใน Serial ว่า On\n  delay(1000);                //หน่วงเวลา 1000 ms\n  \n  digitalWrite(LED1, LOW);    //ให้ D5 เป็น 0\n  Serial.println(\"Off\");      //ส่งค่ากลับใน Serial ว่า Off\n  delay(500);                 //หน่วงเวลา 500 ms\n}\n"} />
              </div>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/7.jpg" /></div>

            </div>
            {/* /.card-body */}
          </div>

          {/* ขึ้นโปรเจคใหม่ */}
          <div className="card collapsed-card card-pink">
            <div className="card-header">
              <h3 className="card-title">Project : วัดอุณหภูมิและความชื้นจาก DHT sensor โดยสั่งการจาก nodeMCU</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>

            <div className="card-body">
              <h5> ในโปรเจคนี้ ให้เข้าใจถึงการต่อวงจร sensor เข้ากับ NodeMCU และการทำงานของวงจร </h5>
              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/8.jpg" /></div>

              <h5 style={mystyle} > ติดตั้ง Libraryของอุปกรณ์ที่ใช้ คือ Sensor DHT22 </h5>

              <p> &#9755; เลือก Sketch ที่เมนูบาร์  Include Library  Manage Libraries</p>
              <p> &#9755; ค้นหา " Adafruit Unified Sensor "  กด install  OK </p>
              <p> &#9755; ค้นหา " DHT22"  กด Install   OK </p>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/S11.jpg" /></div>

              <div style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}>
                <img src="dist/img/IOT/S12.jpg" /></div>

              <p> &#9755; หลังจากนั้นวาง Source code ด้านล่างลงในโปรแกรม และ Verify & Upload to Node MCU </p>

              {/* box Code */}
              <div className="position-relative form-group">
                <label htmlFor="exampleText" className>Coding Example</label><textarea name="text" id="exampleText" className="form-control" rows={18} defaultValue={"  // ไลบรารี่สำหรับ DHT Sensor\n#include \"DHT.h\"\n\n// ประกาศตัวแปร DHTPIN ค่าคือ D3\nconst int DHTPIN = 0;\n\n// ประกาศตัวแปร DHTTYPE ค่าคือ DHT22 \n#define DHTTYPE DHT22\n\n// คำสั่งตั้งค่า DHTTYPE Sensor\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  Serial.begin(115200);\n  \n// คำสั่งให้เริ่มอ่านค่าจาก DHT\n  dht.begin();\n}\n\nvoid loop() {\n  delay(2000);\n  \n  // การอ่านค่าจาก DHT ใช้เวลาประมาณ 250 ms\n  // ประกาศตัวแปร h ให้เก็บค่าความชื้น\n  float h = dht.readHumidity();\n  \n  // ประกาศตัวแปร t ให้เก็บค่าอุณหภูมิเป็น Celcius\n  float t = dht.readTemperature();\n\n  // ประกาศตัวแปร f ให้เก็บค่าอุณหภูมิเป็น Fahrenheit (isFahrenheit = true)\n  float f = dht.readTemperature(true);\n\n  // ตรวจสอบว่าอ่านค่าจาก Sensor ได้หรือไม่.\n  if (isnan(h) || isnan(t) || isnan(f)) {\n    Serial.println(\"Failed to read from DHT sensor!\");\n    return;\n  }\n\n  // ประกาศตัวแปร hif ให้เก็บค่าดัชนีความร้อนเป็น Fahrenheit\n  float hif = dht.computeHeatIndex(f, h);\n  \n  //ประกาศตัวแปร hic ให้เก็บค่าดัชนีความร้อนเป็น Celsius (isFahreheit = false)\n  float hic = dht.computeHeatIndex(t, h, false);\nSerial.print(\"Humidity: \");\n  Serial.print(h);\n  Serial.println(\"%\");\n  Serial.print(\"Temperature: \");\n  Serial.print(t);\n  Serial.println(\"°C\");\n  Serial.print(\"Temperature: \");\n  Serial.print(f);\n  Serial.println(\"°F\");\n  Serial.print(\"Heat index: \");\n  Serial.print(hic);\n  Serial.println(\"°C\");\n  Serial.print(\"Heat index: \");\n  Serial.print(hif);\n  Serial.println(\"°F\");\n}\n"} />
              </div>

              <p> &#9755; Serial Monitor จะแสดงผล ค่าที่วัดได้จาก Sensor </p>
            </div>
            {/* /.card-body */}

            <h4 style={mystyle} > Raspberry Pi (ราสเบอร์รี่ พาย) คืออะไร </h4>
            <p style={{ textIndent: 30 }}> คือ เครื่องคอมพิวเตอร์ขนาดเล็ก ที่มีขนาดเพียงเท่ากับบัตรเครดิต
              มีระบบปฎิบัติการเฉพาะของตัวเอง มีขา GPIO (General Purpose Input/Output) สำหรับติดต่อสื่อสารกับวงจรอิเล็กทรอนิกส์ภายนอกได้ เเละถูกออกแบบมาให้มี CPU GPU และ RAM อยู่ภายในชิปเดียวกัน
            </p>
            <h4> ตัวอย่างการใช้งานบอร์ด Raspberry Pi </h4>

            <div style={
              {
                display: "flex",
                justifyContent: "center",
                alignItem: "center"
              }}>
              <img src="dist/img/IOT/Pi1.jpg" /></div>

            <div style={
              {
                display: "flex",
                justifyContent: "center",
                alignItem: "center"
              }}>
              <img src="dist/img/IOT/Pi2.jpg" /></div>

            <div style={
              {
                display: "flex",
                justifyContent: "center",
                alignItem: "center"
              }}>
              <img src="dist/img/IOT/Pi3.jpg" /></div>

            <h4 style={mystyle} > Node-RED </h4>
            <p style={{ textIndent: 30 }}> เป็นเครื่องมือในการพัฒนา IOT ลักษณะของ Node-RED จะเป็น Virtual Tool ซึ่งเชื่อมโยงฮาร์ดแวร์
              Service และ API ต่างๆเข้าด้วยกันในลักษณะ Flow-Base ซึ่งจะถูกแสดงผลในรูปแบบ Node
              และ Node แต่ละ Node จะทำงานได้ด้วยตนเอง ทำให้ผู้พัฒนา Application ไม่ต้องเขียน Code ให้ยุ่งยาก </p>
            <div style={
              {
                display: "flex",
                justifyContent: "center",
                alignItem: "center"
              }}>
              <img src="dist/img/IOT/N1.jpg" /></div>

            <br />
            <div className="card collapsed-card card-pink">
              <div className="card-header">
                <h3 className="card-title">1.ขั้นตอนการสร้างและใช้งาน Node-RED Dashboard เบื้องต้น</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h4> การใช้งาน Node-Red Dashboard </h4>
                <div>
                  <h5> Start Run Node-Red Server </h5>

                  <p style={{ textIndent: 60 }}> เข้าโปรแกรม  Node.js Command Prompt &gt;&gt; node-red </p>
                </div>
                <div style={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center"
                  }}>
                  <img src="dist/img/IOT/N2.jpg" /></div>

                <h4> IP Address (Internet Protocol address) &nbsp;</h4>
                <p style={{ textIndent: 60 }}> หมายเลขประจำเครื่องคอมพิวเตอร์แต่ละเครื่อง ในระบบเครือข่าย </p>
                <p style={{ textIndent: 60 }}> ☛ วิธีเช็ค IP เครื่องเราที่อยู่ในเครือข่าย &gt;&gt; เข้า cmd &gt;&gt; พิมพ์ ipconfig </p>

                <div style={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center"
                  }}>
                  <img src="dist/img/IOT/N3.jpg" /></div>

                <div>
                  <p style={{ textIndent: 60 }}> <b> 127.0.0.1 หรือ “localhost” </b> หมายถึง “คอมพิวเตอร์เครื่องนี้” </p>
                  <p ><i> *ถ้าต้องการให้เครื่องอื่นเปิด Dashboard ที่เราสร้าง ให้ IP Address IPv4 เค้าไป
                    *ถ้าเครื่องเราเป็น Server Node-Red แล้วเราต้องการเข้ามาแก้ไข Flow เข้าจาก 127.0.0.1 หรือ IPv4 ก็ได้
                  </i></p>
                </div>

                <h4 > ตัวอย่าง Node ที่ใช่งานประจำ </h4>
                <div style={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center"
                  }}>
                  <img src="dist/img/IOT/N4.jpg" /></div>

                <h4> โครงสร้างของโปรแกรม </h4>
                <div style={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center"
                  }}>
                  <img src="dist/img/IOT/N5.jpg" /></div>

                <h4> โครงสร้างหน้า Dashboard </h4>
                <div style={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center"
                  }}>
                  <img src="dist/img/IOT/N6.jpg" /></div>
                <p style={{ textIndent: 60 }}> ประกอบด้วย </p>
                <p style={{ textIndent: 30 }}> 1. Tab</p>
                <p style={{ textIndent: 30 }}> 2. Object</p>
                <p style={{ textIndent: 30 }}> 3. Group</p>


              </div>
              {/* /.card-body */}
            </div>

            <div className="card collapsed-card card-pink">
              <div className="card-header">
                <h3 className="card-title">2. MQTT Protocol (Message Queuing Telemetry Transport)</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h4> MQTT Protocol (Message Queuing Telemetry Transport) </h4>
                <div>
                  <h5> MQTT คืออะไร ? </h5>
                  <p style={{ textIndent: 60 }}>Protocol ที่ออกแบบมาเพื่อการเชื่อมต่อแบบ M2M (machine-to-machine)
                    ออกแบบมาให้สนับสนุน IoT (Internet of Things) คือเทคโนโลยีที่อินเทอร์เน็ตเชื่อมต่อกับอุปกรณ์ต่างๆ การรับส่งข้อมูลในเครือข่ายที่มีขนาดเล็ก แบนวิธต่ำ ใช้หลักการแบบ Publisher / Subscriber และมีตัวกลางคือ Broker
                    ซึ่งจะคอยจัดการกับข้อมูลจาก Publisher และ Subscriber</p>
                  <h4 > องค์ประกอบของ MQTT Protocol</h4>
                  <p style={{ textIndent: 60 }}> 1. <b> Broker </b>ทำหน้าที่เป็นตัวกลางคอยจัดการกับข้อความโดย อ้างอิงจาก Topic </p>
                  <p style={{ textIndent: 60 }}> 2. <b> Publisher</b> ทำหน้าที่คอยส่งข้อมูลไปยัง Topic</p>
                  <p style={{ textIndent: 60 }}> 3. <b> Subscriber</b> ทำหน้าที่คอยดูการเปลี่ยนแปลงของ message ที่อ้างอิงด้วยTopic เช่นถ้าหัวข้อที่สนใจมีการเปลี่ยนแปลง ก็จะทำการดึงข้อมูลนั้นๆ มาใช้งาน</p>

                  <div style={
                    {
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center"
                    }}>
                    <img src="dist/img/IOT/M1.jpg" /></div>

                  <h4> QoS คุณภาพหรือความสำคัญของการส่งข้อมูล</h4>

                  <p style={{ textIndent: 60 }}> <b> QoS0 </b>การส่งข้อมูลเพียงครั้งเดียว ปลายทางอาจจะได้รับหรือไม่ได้รับก็ได้&nbsp; </p>
                  <p style={{ textIndent: 60 }}> <b> QoS1</b> การส่งข้อมูลเพียงครั้งเดียว  ปลายทางอาจจะได้รับหรือไม่	ได้รับก็ได้ แต่จะมีการจำข้อมูลที่ส่งล่าสุดไว้ เมื่อมีการเชื่อมต่อเข้ามาก็จะได้รับข้อมูลล่าสุดที่ส่งไป&nbsp;</p>
                  <p style={{ textIndent: 60 }}> <b> QoS2 </b> การส่งข้อมูลไปจนกว่าปลายทางจะได้รับ</p>

                  <div style={
                    {
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center"
                    }}>
                    <img src="dist/img/IOT/M2.jpg" /></div>
                </div>
              </div>
              {/* /.card-body */}
            </div>


            <div className="card collapsed-card card-pink">
              <div className="card-header">
                <h3 className="card-title">3. วัดค่าอุณหภูมิและความชื้น โดยใช้ NodeMCU,MQTT และ Node-Red </h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h4> Temperature and Humidity Dashboard </h4>
                <div>
                  <h5>การวัดอุณหภูมิและความชื้น โดยใช้ Sensor </h5>
                  <div style={
                    {
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center"
                    }}>
                    <img src="dist/img/IOT/M3.jpg" /></div>

                  <h5> Step 1 MQTT to Node-Red </h5>
                  <p style={{ textIndent: 60 }}> 1. ต่อวงจร NodeMCU และ Sensor </p>
                  <p style={{ textIndent: 60 }}> 2. วาง Source code ด้านล่าง ในโปรแกรม Arduino IDE</p>
                  <div style={
                    {
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center"
                    }}>
                    <img src="dist/img/IOT/M4.jpg" /></div>
                  <div className="position-relative form-group">
                    <label htmlFor="exampleText" className>Coding Example</label><textarea name="text" id="exampleText" className="form-control" rows={18} defaultValue={"#include <ESP8266WiFi.h>\n#include <PubSubClient.h>\n#include \"DHT.h\"\n#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321\n\n#define Buzzer D2\n//Constant\nconst char* ssid = \"NMB_GUEST2\";\nconst char* password = \"NMBbwa19\";\nconst char* mqtt_server = \"192.168.10.121\";\nconst int mqtt_port = 1884;\n\nstatic char Location[] = \"Panupong\";\nstatic char temperatureTemp[7];\nstatic char humidityTemp[7];\n\n// Initializes the espClient. You should change the espClient name if you have multiple ESPs running in your home automation system\nWiFiClient espClient;\nPubSubClient client(espClient);\n\n// DHT Sensor - GPIO D3 = D1 on ESP-12E NodeMCU board\nconst int DHTPin = D3;\n\n// Initialize DHT sensor.\nDHT dht(DHTPin, DHTTYPE);\n\n// Timers auxiliar variables\nlong now = millis();\nlong lastMeasure = 0;\n\n//---------------------------------------------------Setup()---------------------------------------------------\n// The setup function sets your ESP GPIOs to Outputs, starts the serial communication at a baud rate of 115200\n// Sets your mqtt broker\nvoid setup() {\n  dht.begin();\n  Serial.begin(115200);\n  setup_wifi();\n  client.setServer(mqtt_server, mqtt_port);\n\n  //Subscribe\n  pinMode(Buzzer, OUTPUT);\n  digitalWrite(Buzzer, LOW);\n  client.setCallback(callback);\n \n}\n\n//---------------------------------------------------Loop()---------------------------------------------------\n// For this project, you don't need to change anything in the loop function. Basically it ensures that you ESP is connected to your broker\nvoid loop() {\n\n  if (!client.connected()) {\n    reconnect();\n  }\n  if (!client.loop()) {\n    client.connect(\"ESP8266Panupong\");\n  }\n\n  now = millis();\n\n  // Publishes new temperature and humidity every 5 seconds\n  if (now - lastMeasure > 5000) {\n    lastMeasure = now;\n    GetTempAndHumidity();\n  }\n\n}\n\n//---------------------------------------------------GetTempAndHumidity()---------------------------------------------------\nfloat GetTempAndHumidity() {\n\n  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)\n  float h = dht.readHumidity();\n  // Read temperature as Celsius (the default)\n  float t = dht.readTemperature();\n  // Read temperature as Fahrenheit (isFahrenheit = true)\n  float f = dht.readTemperature(true);\n\n  // Check if any reads failed and exit early (to try again).\n  if (isnan(h) || isnan(t) || isnan(f)) {\n    Serial.println(\"Failed to read from DHT sensor!\");\n    //return;\n  }\n  else {\n    // Computes temperature values in Celsius\n    float hic = dht.computeHeatIndex(t, h, false);\n\n    dtostrf(t, 6, 2, temperatureTemp);\n    dtostrf(h, 6, 2, humidityTemp);\n\n\n    Serial.print(\"Humidity: \");\n    Serial.print(h);\n    Serial.print(\" %\\t Temperature: \");\n    Serial.print(t);\n    Serial.print(\" *C \");\n    Serial.print(f);\n    Serial.print(\" *F\\t Heat index: \");\n    Serial.print(hic);\n    Serial.print(\" *C \");\n    Serial.print(\"Location : \");\n    Serial.println(Location);\n\n    PublishDataToBroker();\n  }\n\n\n}\n\n//---------------------------------------------------PublishDataToBroker---------------------------------------------------\nvoid PublishDataToBroker() {\n\n  // Publishes Temperature and Humidity values\n  client.publish(\"room/temperature\", temperatureTemp);\n  client.publish(\"room/humidity\", humidityTemp);\n  client.publish(\"room/location\", Location);\n}\n\n//---------------------------------------------------setup_wifi()----------------------------------------------------------\n// Don't change the function below. This functions connects your ESP8266 to your router\nvoid setup_wifi() {\n  delay(10);\n  // We start by connecting to a WiFi network\n  Serial.println();\n  Serial.print(\"Connecting to \");\n  Serial.println(ssid);\n  WiFi.begin(ssid, password);\n\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.println(\"Waiting Connect to Network ....\");\n  }\n\n  Serial.print(\"WiFi connected - ESP IP address: \");\n  Serial.println(WiFi.localIP());\n}\n\n//---------------------------------------------------reconnect()---------------------------------------------------\n// This functions reconnects your ESP8266 to your MQTT broker\nvoid reconnect() {\n  // Loop until we're reconnected\n  while (!client.connected()) {\n    Serial.print(\"Attempting MQTT connection...\");\n    // Attempt to connect\n    if (client.connect(\"ESP8266Panupong\")) {\n      Serial.println(\"connected\");\n      Serial.println(\"subscribe\");\n       client.subscribe(\"textMQTT\");\n    } else {\n      Serial.print(\"failed, rc=\");\n      Serial.print(client.state());\n      Serial.println(\" try again in 5 seconds\");\n      // Wait 5 seconds before retrying\n      delay(5000);\n    }\n  }\n}\n\n\n//----------------------------------------------------------CallBack\n// This functions is executed when some device publishes a message to a topic that your ESP8266 is subscribed to\n// Change the function below to add logic to your program, so when a device publishes a message to a topic that\n// your ESP8266 is subscribed you can actually do something\nvoid callback(String topic, byte* message, unsigned int length) {\n  //delay(5000);\n  Serial.print(\"Message arrived on topic: \");\n  Serial.print(topic);\n  Serial.print(\". Message: \");\n  String messageTemp;\n\n  for (int i = 0; i < length; i++) {\n    Serial.print((char)message[i]);\n    messageTemp += (char)message[i];\n  }\n  Serial.println();\n\n  if (topic == \"textMQTT\") {\n\n    if (messageTemp == \"ON\") {\n      digitalWrite(Buzzer, HIGH);\n      Serial.println(messageTemp);\n    }\n    if (messageTemp == \"OFF\") {\n      digitalWrite(Buzzer, LOW);\n      Serial.println(messageTemp);\n    }\n\n  }\n\n\n}\n"} />
                  </div>

                  <p> 3. ส่งค่า Temp &amp; Humidity ผ่าน MQTT Protocol To Node-Red </p>
                  <p> Import Tutorial Flow : Flow_Temp_And_Humidity.json to Node-Red ขั้นตอนตามรูปข้างล่าง </p>

                  <div style={
                    {
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center"
                    }}>
                    <img src="dist/img/IOT/M5.jpg" /></div>


                </div>
              </div>
              {/* /.card-body */}
            </div>


          </div>
        </section>


      </div>
    );
  }
}

export default IOT;
