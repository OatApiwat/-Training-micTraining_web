import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { httpClient } from "../../utils/HttpClient";
import { key, server } from "../../constants/constants";
import ReactApexChart from "react-apexcharts";


class Criterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_level: [],
      selected_level: "Developer",
      data_table: [],
      Search_emp: "",
      get_data: [],
      get_data1: [],

      all_series: [],
      all_options: {},
      all_series1: [],
      all_options1: {},
      all_series_ratio: [],
      all_options_ratio: {},

    }
  }
  async componentDidMount() {
    await this.select_level();
    this.get_courseName()
    await this.Search_emp();
    await this.get_general_chart();
    await this.get_general_TB();
    //await this.get_Dev_level();
    await this.get_Dev_TB();
    await this.check_list_Dev();
    await this.Level_ratio();

  }

  select_level = async () => {
    let get_level = await httpClient.post(server.level_URL);
    // console.log(get_level.data.result);
    await this.setState({
      list_level: get_level.data.result,
      // selected_level: get_level.data.result[0].level,
    })

  };
  renderTableRow = () => {
    try {
      if (this.state.list_level !== null) {
        const myResult = this.state.list_level;
        return myResult.map((item) => <option>{item.level}</option>);
      }
    } catch (error) { }
  };

  get_courseName = async () => {
    this.setState({ data_table: [] })
    let result = await httpClient.post(server.sort_courseName_URL, {
      level: this.state.selected_level
    });
    await this.setState({
      data_table: result.data.result
    })
    // console.log(this.state.data_table);
  }

  renderTable() {
    if (this.state.data_table != null) {
      return this.state.data_table.map((item) =>
        <tr>
          <td>{item.CourseName}</td>
        </tr>
      )
    }
  }
  Search_emp = async () => {
    this.setState({
      data_Search: []
    })
    let Search_emp
    if (this.state.selected_level == 'Developer') {
      Search_emp = await httpClient.post(server.search_Dev_emp, {
        Search_emp: this.state.Search_emp,
      })
    } else {
      Search_emp = await httpClient.post(server.General_emp, {
        Search_emp: this.state.Search_emp,
      })
    }
    await this.setState({
      data_Search: Search_emp.data.result
    })
    console.log(Search_emp.data);
    console.log(this.state.Search_emp);
  }
  renderlist1() {
    if (this.state.data_Search != null) {
      return this.state.data_Search.map((item) =>
        <tr>
          <td>{item.EmpNo}</td>
          <td>{item.EMP_NAME}</td>
          <td>{item.DIVI_NAME}</td>
          <td>{item.MES}</td>
          <td>{item.JS}</td>
          <td>{item.WEB}</td>
          <th>{item.IoT}</th>
          <th>{item.Python}</th>
          <th>{item.Analytic}</th>
          <th>{item.ML}</th>

        </tr>
      )
    }
  }
  // // chart GN Staff
  get_general_chart = async () => {
    let get_data = await httpClient.post(server.General_emp_Chart);
    let get_data1 = await httpClient.post(server.Dev_emp_Chart)
    var label = []; var Qty = []; var label1 = []; var Qty1 = [];
    for (let index = 0; index < get_data.data.result.length; index++) {
      label.push(get_data.data.result[index].DIVISION)
      Qty.push(get_data.data.result[index].Staff)
    }
    await this.setState({
      all_series: [
        {
          name: "จำนวนผู้ที่ผ่านการอบรมของแต่ละฝ่าย",
          type: "column",
          data: Qty,
        },
      ],
      all_options: {
        chart: {
          height: '100%',
          type: "bar",
          stacked: false,
        },
        stroke: {
          width: [0, 5, 5],
          curve: "smooth",
        },

        plotOptions: {
          bar: {
            columnWidth: "50%",
            dataLabels: {
              position: 'center',
            },
          },
        },

        dataLabels: {
          enabled: true,

        },
        labels: label,
        markers: {
          size: 5,
        },

        xaxis: {
          title: {
            text: "Division Name",
            style: {
              fontSize: '12px',
            }
          },
          labels: {
            style: {
              fontSize: '10px'
            }
          }

        },
        yaxis: {
          title: {
            text: "จำนวนพนักงาน",
            style: {
              fontSize: '12px',
            }
          },
          label: {
            show: true,
            rotate: 90,
            rotateAlways: true,
          },
          tickAmount: 2,
          min: 0,
        },
        title: {
          text: 'จำนวนผู้ผ่านการอบรมของแต่ละฝ่าย ระดับ General Staff ',
          align: 'center',
          style: {
            fontSize: '20px',
            //fontWeight: 'bold',
          }
        },
        // fill: {
        //   colors: [ '#B32824']
        // },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " คน";
              }
              return;
            },
          },
        },
      },
    });

    for (let i = 0; i < get_data1.data.result.length; i++) {
      label1.push(get_data1.data.result[i].DIVISION)
      Qty1.push(get_data1.data.result[i].Staff)
    }
    await this.setState({
      all_series1: [
        {
          name: "จำนวนผู้ที่ผ่านการอบรมของแต่ละฝ่าย",
          type: "column",
          data: Qty1,
        },
      ],
      all_options1: {
        chart: {
          height: '100%',
          type: "bar",
          stacked: false,
        },
        stroke: {
          width: [0, 5, 5],
          curve: "smooth",
        },

        plotOptions: {
          bar: {
            columnWidth: "50%",
            dataLabels: {
              position: 'center',
            },
          },
        },

        dataLabels: {
          enabled: true,

        },
        labels: label1,
        markers: {
          size: 5,
        },

        xaxis: {
          title: {
            text: "Division Name",
            style: {
              fontSize: '12px',
            }
          },
          labels: {
            style: {
              fontSize: '10px'
            }
          }

        },
        yaxis: {
          title: {
            text: "จำนวนพนักงาน",
            style: {
              fontSize: '12px',
            }
          },
          label: {
            show: true,
            rotate: 90,
            rotateAlways: true,
          },
          tickAmount: 2,
          min: 0,
        },
        title: {
          text: 'จำนวนผู้ผ่านการอบรมของแต่ละฝ่าย ระดับ Dev ',
          align: 'center',
          style: {
            fontSize: '20px',
            //fontWeight: 'bold',
          }
        },
        // fill: {
        //   colors: [ '#B32824']
        // },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " คน";
              }
              return;
            },
          },
        },
      },
    });
  }
  get_general_TB = async () => {
    let table = await httpClient.post(server.General_emp_Tb)
    await this.setState({
      data_Tb: table.data.result
    });
    // console.log(table);
  }
  renderTB_general_staff() {
    if (this.state.data_Tb != null) {
      return this.state.data_Tb.map((item) =>
        <tr>
          <td>{item.EMP_NAME}</td>
          <td>{item.DIVI_NAME}</td>
          <td>{item.MES}</td>
          <td>{item.JS}</td>
          <td>{item.WEB}</td>
        </tr>
      )
    }
  }
  get_Dev_TB = async () => {
    let tableDev = await httpClient.post(server.Dev_emp_Tb)
    await this.setState({
      DevData_Tb: tableDev.data.result
    });
    console.log(this.state.DevData_Tb);
  }
  renderTB_DevLevel() {
    if (this.state.DevData_Tb != null) {
      return this.state.DevData_Tb.map((item) =>
        <tr>
          <td>{item.EMP_NAME}</td>
          <td>{item.DIVI_NAME}</td>
          <td>{item.MES}</td>
          <td>{item.JS}</td>
          <td>{item.WEB}</td>
          <td>{item.IoT}</td>
          <td>{item.Python}</td>
          <td>{item.ML}</td>
          <td>{item.Analytic}</td>
        </tr>
      )
    }
  }
  check_list_Dev = async () => {
    let data = await httpClient.post(server.check_Dev_list)
    await this.setState({
      data_devList: data.data.result
    });
  }
  renderCheck_list_Dev() {
    if (this.state.data_devList != null) {
      return this.state.data_devList.map((item) =>
        <tr>
          <td>{item.EmpNo}</td>
          <td>{item.EMP_NAME}</td>
          <td>{item.DIVI_NAME}</td>
          <td>{item.MES}</td>
          <td>{item.JS}</td>
          <td>{item.WEB}</td>
          <td>{item.IoT}</td>
          <td>{item.Python}</td>
          <td>{item.ML}</td>
          <td>{item.Analytic}</td>
          <td>{item.TTL}</td>
        </tr>
      )
    }
  }
  Level_ratio = async () => {
    let Level_ratio = await httpClient.post(server.Level_ratio1)
    var General_ratio = []; var label = []; var TTL_data = [];

    for (let x = 0; x < Level_ratio.data.result.length; x++) {
      // General_ratio.push(Level_ratio.data.result[x].General_ratio)
      // Developer_ratio.push(Level_ratio.data.result[x].Developer_ratio)
      // General_ratio_label.push(Level_ratio.data.result[x].General_ratio)
      label.push(Level_ratio.data.result[x].level1)
      General_ratio.push(Level_ratio.data.result[x].ratio)
      TTL_data.push(Level_ratio.data.result[x].TTL)

    }
    console.log(Level_ratio);
    await this.setState({
      all_series_ratio: [
        {
          name: "%Ratio",
          type: "column",
          data: General_ratio,
        },
        {
          name: "ผู้เข้าอบรมทั้งหมด",
          type: "line",
          data: TTL_data,
        }
      ],
      all_options_ratio: {
        chart: {
          height: '100%',
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [1, 3, 3],
          curve: "smooth",
        },

        plotOptions: {
          bar: {
            columnWidth: "50%",
            dataLabels: {
              position: 'center',
              orientation: 'vertical',
            },
          },
        },
        dataLabels: {
          enabled: true,
        },
        // labels: label, 

        markers: {
          size: 5,
        },
        xaxis: {
          title: {
            text: "Level",
            style: {
              fontSize: '14px',
            }
          },
          labels: {
            style: {
              fontSize: '12px'
            }
          },
          categories: label,

        },
        title: {
          text: 'General Staff vs Developer Ratio',
          align: 'center',
          style: {
            fontSize: '20px',
            //fontWeight: 'bold',
          }
        },
        // yaxis: {
        //   title: {
        //     text: "%",
        //     style: {
        //       fontSize: '12px',
        //     }
        //   },
        //   label: {
        //     show: true,
        //     rotate: 90,
        //     rotateAlways: true,
        //   },
        //   tickAmount: 2,
        //   min: 0,
        //   max:100,
        // },

        yaxis: [
          {
            seriesName: "Ratio",
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#008FFB",
            },
            labels: {
              style: {
                colors: "#008FFB",
              },
            },
            title: {
              text: "Ratio",
              style: {
                color: "#008FFB",
                fontSize: '15px',

              },
            },
            tooltip: {
              enabled: true,
            },
            min: 0,
            max: 100,
            tickAmount: 20,

            axisTicks: {
              show: true,
              borderType: 'dotted',
              color: '#78909C',
              width: 5,
              offsetX: 0,
              offsetY: 0
            },
          },
          {
            seriesName: "จำนวนผู้เข้าอบรมทั้งหมด",
            opposite: true,
            min: 0,
            max: 400,
            tickAmount: 20,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#00E396",
            },
            labels: {
              style: {
                colors: "#00E396",

              },
            },
            title: {
              text: "จำนวนผู้อบรมทั้งหมด",
              style: {
                color: "#00E396",
                fontSize: '15px',

              },
            },

          },

        ]
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2) + "%";
            }
            return;
          },
        },
      },
    },

    );
  }
  render() {
    return <div className="content-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
      <h1 class="m-5 text-dark text-center"> </h1>
      <div className="container-fluid">
        <br />
        <div className="col-sm-12">
          <h1>Criteria judgment </h1>
        </div>
      </div> <br />
      <div className="container-fluid">
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title"> <strong>Criteria </strong></h3>
          </div>
          <div className="card-body">
            <div className="row">
              {/* <div className="col-md-4"> </div>
              <div className="col-md-3">
                <div className="form-group">
                  <strong><i className="fas fa-book mr-1" />  Criterial Level </strong> <br />
                  <select
                    value={this.state.selected_level}
                    className="form-control"
                    onChange={(e) => {
                      this.setState({ selected_level: e.target.value });
                    }} >
                    <option>- Please select level -</option>
                    {this.renderTableRow()}
                  </select>
                </div>
              </div>
              <div className="col-md-1">
                <br />
                <button type="submit" class="btn btn-block btn-success"
                  onClick={async (e) => {
                    e.preventDefault();
                    await this.get_courseName();
                    await this.Search_emp();
                  }}

                >SEARCH </button>
              </div> */}
            </div>
            {/* แถวใหม่ */}
            <br />
            <div className="row">
              {/* <div className="col-md-4">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title"><strong> หลักสูตรที่ต้องผ่านการอบรม </strong></h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Course Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderTable()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title"> <strong>History record</strong></h3>
                    <div className="card-tools">
                      <div className="input-group input-group-sm" style={{ width: 150 }}>
                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search EmpNo"
                          onChange={(e) => {
                            this.setState({ Search_emp: e.target.value });
                          }}
                        />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default"
                            onClick={async (e) => {
                              e.preventDefault();
                              await this.Search_emp();
                            }}
                          >
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body table-responsive p-0" style={{ height: 400, fontSize: '12px' }}>
                    <table className="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>EmpNo</th>
                          <th>NAME</th>
                          <th>DIVISION</th>
                          <th>MES</th>
                          <th>JS</th>
                          <th>web</th>
                          <th>IoT</th>
                          <th>Python</th>
                          <th>Analytic</th>
                          <th>ML</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderlist1()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" >
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title"> Ratio </h3>
                  </div>
                  <div className="card-body">
                    <div className="chart"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                      <ReactApexChart options={this.state.all_options_ratio} series={this.state.all_series_ratio} type="line" height={600} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title"><b> General staff  </b></h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table" style={{ fontSize: '12px' }}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Division</th>
                          <th>MES</th>
                          <th>JS</th>
                          <th>WEB</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderTB_general_staff()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title"><strong> General Staff </strong></h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                      <ReactApexChart options={this.state.all_options} series={this.state.all_series} type="bar" height={600} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card card-info" >
                  <div className="card-header">
                    <h3 className="card-title"> ปรับระดับ Developer </h3>
                  </div>
                  <div className="card-body table-responsive p-0" style={{ height: 400, fontSize: '12px' }} >
                    <table className="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>EmpNo</th>
                          <th>Name</th>
                          <th>Division</th>
                          <th>MES</th>
                          <th>JS</th>
                          <th>WEB</th>
                          <th>IoT</th>
                          <th>Python</th>
                          <th>ML</th>
                          <th>Analytic</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderCheck_list_Dev()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title"> Developer </h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table" style={{ fontSize: '12px' }}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Division</th>
                          <th>MES</th>
                          <th>JS</th>
                          <th>WEB</th>
                          <th>IoT</th>
                          <th>Python</th>
                          <th>ML</th>
                          <th>Analytic</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderTB_DevLevel()}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title"> Developer </h3>
                  </div>
                  <div className="card-body">
                    <div className="chart"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                      <ReactApexChart options={this.state.all_options1} series={this.state.all_series1} type="bar" height={600} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>;
  }
}

export default Criterial;
