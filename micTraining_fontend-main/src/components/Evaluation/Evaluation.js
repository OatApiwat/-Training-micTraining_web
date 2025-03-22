import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants/constants";
import { key } from "../../constants/constants";
import Swal from "sweetalert2";
//import ImageZoom from 'react-medium-image-zoom'



class Evaluation extends Component {

  constructor(props) {
    super(props);

    this.state = {

      TableEmp: [],
      FYYear: [],
      Quater: [],
      EmpNo: [],
      EMP_NAME: [],
      CourseName: [],
      DIVI_NAME: [],
      fileType: "",
      FileDetail: "",
      picture_id: "",
      display_table: "flex",
      display_edit: "none",
      setFileNameDetail: "",

      File_data: [],
      showFile_table: [],

    }
  }

  componentDidMount = async () => {
    await this.getSearchEmp();
    await this.insert_Picture();
    await this.getFile();


  }
  getSearchEmp = async () => {
    // let SearchEmp_result = await httpClient.get(server.SearchEmp_URL + '/' + localStorage.getItem(key.USER_EMP))

    let SearchEmp_result = await httpClient.get(server.SearchEmp_URL)
    console.log(SearchEmp_result.data.result);

    await this.setState({
      TableEmp: SearchEmp_result.data.result
      , FYYear: SearchEmp_result.data.result.FYYear
      , Quater: SearchEmp_result.data.result.Quater
      , EmpNo: SearchEmp_result.data.result.EmpNo
      , EMP_NAME: SearchEmp_result.data.result.EMP_NAME
      , CourseName: SearchEmp_result.data.result.CourseName
      , DIVI_NAME: SearchEmp_result.data.result.DIVI_NAME

    })

    //await console.log(this.state);
  }

  renderSearchEmp() {
    if (this.state.TableEmp !== null) {
      return this.state.TableEmp.map((item) => (
        <tr key={item.empNumber}>
          <td>{item.FYYear}</td>
          <td>{item.Quater}</td>
          <td>{item.EmpNo}</td>
          <td>{item.EMP_NAME}</td>
          <td>{item.CourseName}</td>
          {/* <td>{item.DIVI_NAME}</td> */}
          <td> <button onClick={async (e) => {
            e.preventDefault();
            await this.setState({
              display_table: "none",
              display_edit: "flex",
              //  ต้องใช้ state ที่อยู่ในตาราง
              FYYear: item.FYYear,
              Quater: item.Quater,
              EmpNo: item.EmpNo,
              EMP_NAME: item.EMP_NAME,
              CourseName: item.CourseName,
              DIVI_NAME: item.DIVI_NAME,

            })
            //await console.log(this.state);

          }}
            type="button" class="btn btn-block btn-warning">
            edit </button></td>
          <td>

          </td>
        </tr>
      ))
    }
  }

  insert_Picture = async () => {
    var data = await new FormData();
    data.append('FYYear', this.state.FYYear);
    data.append('Quater', this.state.Quater);
    data.append('CourseName', this.state.CourseName);
    data.append('DIVI_NAME', this.state.DIVI_NAME);
    data.append('EMP_NAME', this.state.EMP_NAME);
    data.append('EmpNo', this.state.EmpNo);
    data.append('fileType', this.state.fileType);
    data.append('FileDetail', this.state.setFileNameDetail);

    let PictureFile = await httpClient.post(server.FileDetail_URL, data)

    if (PictureFile.data.api_result !== 'ok') {
      Swal.fire({
        title: "Success!",
        text: "Update success",
        icon: "success",
        confirmButtonText: "OK",
      });
      await this.get_ID()
      return
      // await this.getFile()
    } else {
      // console.log(PictureFile.data) ;
      Swal.fire({
        title: "Fail!",
        text: "Update Fail",
        icon: "error",
        confirmButtonText: "NOK"
      })
      return
    }

    // console.log(PictureFile.data) ;
  }

  get_ID = async () => {
    let get_id = await httpClient.get(server.show_id + "/" + this.state.CourseName)
    //let get_id = await httpClient.get(server.show_id + "/" + localStorage.getItem(key.USER_EMP) + "/" + this.state.CourseName)
    // await console.log(get_id.data.result);
    await this.setState({ picture_id: get_id.data.result[0].id })
  }
  getFile = async () => {
    let showFile_data = await httpClient.get(server.fileImage + "/" + localStorage.getItem(key.USER_EMP) + "/" + this.state.CourseName)
    await console.log(showFile_data.data.result);
    //  await this.setState({showFile_table:showFile_data.data.result

    // })
    // await console.log(this.state.showFile_table);
    return
  }


  render() {
    return (
      <div className="content-wrapper">
        <br />
        <h1 class="text-dark text-center"> ประเมินผล </h1>
        <div className="card col-md-12" style={{ display: this.state.display_table }}>
          <div style={{ backgroundColor: "#DCE775" }} className="card-header">
            <h3 className="card-title"><b> Training Info. </b> </h3>

          </div>
          {/* /.card-header */}
          <div className="card-body table-responsive p-0" style={{ height: 550 }}>
            <table className="table table-head-fixed text-nowrap">
              <thead>
                <tr>
                  <th>FYYear</th>
                  <th>Quater</th>
                  <th>EmpNo </th>
                  <th>EMP_NAME</th>
                  <th>CourseName </th>
                  {/* <th>DIVI_NAME</th> */}
                  <th> Edit </th>
                </tr>
              </thead>
              <tbody>{this.renderSearchEmp()} </tbody>
            </table>

          </div>
          {/* /.card-body */}
        </div>

        {/* /edit box */}
        <div style={{ display: this.state.display_edit }}>
          <div className="card card-default col-md-12"  >
            <div className="card-header ">
              <h3 className="card-title"> <b>Edit Data </b></h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}


            <div className='form-group'>
              <label></label>
              <div className="input-group">
                <div className="custom-file">
                  <input onChange={(e) => {
                    this.setState({ setFileNameDetail: e.target.files[0] });
                    document.getElementById("chooseFile").innerHTML = e.target.files[0].name;
                  }
                  }
                    type="file" className="custom-file-input" />
                  <label id="chooseFile" className="custom-file-label">Choose file...</label>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button onClick={async (e) => {
                await e.preventDefault();
                await this.insert_Picture();
                //await console.log(this.state);
                await this.setState({
                  display_table: "flex",
                  display_edit: "none",
                })

              }}
                className="btn btn-primary">Submit</button>


            </div>
          </div>
        </div>
        {/* <button  onClick={async(e) => {
        await e.preventDefault  () ;
        await this.getFile()
         
         }}>getFile</button> */}

        {/* table show file */}
        {/* <div className="card col-md-12" style={{ display: this.state.display_table }}>
          <div style={{ backgroundColor: " #68ccca" }} className="card-header">
            <h3 className="card-title"><b> Image </b> </h3>

          </div>
        
          <div className="card-body table-responsive p-0" >
            <img src={"http://10.121.1.123:2006/MICTraining/job_file/File/" + this.state.picture_id}></img>
            <div>

            </div>
          </div>

        </div> */}


      </div>





    );
  }
}

export default Evaluation;
