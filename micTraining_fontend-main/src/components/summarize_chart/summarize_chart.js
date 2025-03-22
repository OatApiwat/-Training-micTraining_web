import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants/constants";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
// import ReactApexChart from "react-apexcharts";

class Summarize_chart extends Component {

  constructor(props) {
    super(props);

    this.state = {

      ByCourse_data: [],
      chart_Label: [],
      chart_show_data: [],
      chart_color: [],

      Total_Data: [],
      chart_LabelTTL: [],
      chart_show_dataTTL: [],
      chart_colorTTL: [],

      Quarter_Data: [],
      DataByQuarter: [],

      my_data: [],
      my_causename: [],
      my_year: [],
      cause_0: "",
      cause_1: "",
      cause_2: "",
      cause_3: "",
      cause_4: "",
      cause_5: "",
      cause_6: "",
      cause_7: "",
      cause_8: "",
      cause_9: "",
      cause_10: "",
      cause_11: "",
      data_cause_0: [],
      data_cause_1: [],
      data_cause_2: [],
      data_cause_3: [],
      data_cause_4: [],
      data_cause_5: [],
      data_cause_6: [],
      data_cause_7: [],
      data_cause_8: [],
      data_cause_9: [],
      data_cause_10: [],
      data_cause_11: [],

    }
  }

  componentDidMount = async () => {

    window.scrollTo(0, 0)
    await this.getTotalData();
    await this.Create_chart_Total();
    await this.getDataBy_Course();
    await this.Create_chart_ByCourse();

    await this.getDataByQuarter();

    await this.search_all();
    await this.set_data();
    await this.set_year();

  }

  getTotalData = async () => {
    let Total = await httpClient.get(server.byTTLchart_URL)
    //await console.log(Total.data.result);
    await this.setState({ Total_Data: Total.data.result })
    await console.log(Total.data.result);
  }
  Create_chart_Total = async () => {
    // if (this.state.ByCourse_data !== null )
    // console.log(this.state.Total_Data);

    await this.setState({
      chart_LabelTTL: [],
      chart_show_dataTTL: [],
      chart_colorTTL: [],

    });
    var new_Chart_LabelTTL = [];
    var new_Chart_show_dataTTL = [];
    var new_Chart_colorTTL = [];

    for (var i = 0; i < this.state.Total_Data.length; i++) {

      new_Chart_LabelTTL.push(this.state.Total_Data[i].Person)
      new_Chart_show_dataTTL.push(this.state.Total_Data[i].Person)
      //new_chart_show_data_Target1.push(this.state.ByCourse_data[i].Target )
      new_Chart_colorTTL.push("rgb(255, 13, 139,0.6)")
      //console.log(this.state.Total_Data[i].Person);
    }
    await this.setState({
      chart_LabelTTL: new_Chart_LabelTTL,
      chart_show_dataTTL: new_Chart_show_dataTTL,
      chart_colorTTL: new_Chart_colorTTL,
    });
    // await console.log(this.state.chart_LabelTTL);
    // await console.log(this.state.chart_show_dataTTL);

  }

  // get summary data by course 
  getDataBy_Course = async () => {
    let BycourseData = await httpClient.get(server.byCourse_URL)
    //await console.log(BycourseData.data.result);
    await this.setState({ ByCourse_data: BycourseData.data.result })
  }
  renderByCourse_data() {
    if (this.state.ByCourse_data !== null)
      console.log(this.state.ByCourse_data);
    {
      return this.state.ByCourse_data.map((item) => (
        <tr key={item.CourseName}>
          <td>{item.CourseName}</td>
          <td>{item.Person}</td>

        </tr>
      ))
    }
  }
  Create_chart_ByCourse = async () => {
    await this.setState({
      chart_Label: [],
      chart_show_data: [],
      chart_color: [],
    });
    var new_Chart_Label = [];
    var new_Chart_show_data = [];
    var new_Chart_color = [];

    for (var i = 0; i < this.state.ByCourse_data.length; i++) {
      // console.log(this.state.ByCourse_data[i].CourseName);
      // console.log(this.state.ByCourse_data[i].Person);
      new_Chart_Label.push(this.state.ByCourse_data[i].CourseName)
      new_Chart_show_data.push(this.state.ByCourse_data[i].Person)
      //new_chart_show_data_Target1.push(this.state.ByCourse_data[i].Target )
      //new_Chart_color.push("rgb(255, 13, 139,0.6)" ) 
    }

    await this.setState({
      chart_Label: new_Chart_Label,
      chart_show_data: new_Chart_show_data,
      chart_color: new_Chart_color,
    });
    await console.log(this.state.chart_Label);
    await console.log(this.state.chart_show_data);
  }
  // get summary data by Quarter
  search_all = async () => {
    // call all data
    let my_balance = await httpClient.get(server.byQuarter_URL);
    await this.setState({ my_data: [] });
    await this.setState({ my_data: my_balance.data.result });
    await console.log(this.state.my_data);
    await console.log(this.state.my_data[0]);
    await console.log(Object.values(this.state.my_data[0]));
  };

  set_data = async () => {
    // get cause name list
    await this.setState({ my_causename: [] });
    for (var i = 0; i < this.state.my_data.length; i++) {
      this.state.my_causename.push({
        CourseName: this.state.my_data[i].CourseName,
      });
    }
    //  await console.log(this.state.my_causename[0].CourseName);
  };
  set_year = async () => {
    // get cause year quoter
    await this.setState({ my_year: [] });
    let my_date = await httpClient.get(server.date_stack);
    for (var i = 0; i < my_date.data.result.length; i++) {
      this.state.my_year.push(my_date.data.result[i].quoter);
    }
    // await console.log(this.state.my_year);
    await this.setState({
      cause_0: this.state.my_causename[0].CourseName,
      cause_1: this.state.my_causename[1].CourseName,
      cause_2: this.state.my_causename[2].CourseName,
      cause_3: this.state.my_causename[3].CourseName,
      cause_4: this.state.my_causename[4].CourseName,
      cause_5: this.state.my_causename[5].CourseName,
      cause_6: this.state.my_causename[6].CourseName,
      cause_7: this.state.my_causename[7].CourseName,
      cause_8: this.state.my_causename[8].CourseName,
      cause_9: this.state.my_causename[9].CourseName,
      cause_10: this.state.my_causename[10].CourseName,
    });

    await this.setState({
      data_cause_0: Object.values(this.state.my_data[0]).slice(1),
      data_cause_1: Object.values(this.state.my_data[1]).slice(1),
      data_cause_2: Object.values(this.state.my_data[2]).slice(1),
      data_cause_3: Object.values(this.state.my_data[3]).slice(1),
      data_cause_4: Object.values(this.state.my_data[4]).slice(1),
      data_cause_5: Object.values(this.state.my_data[5]).slice(1),
      data_cause_6: Object.values(this.state.my_data[6]).slice(1),
      data_cause_7: Object.values(this.state.my_data[7]).slice(1),
      data_cause_8: Object.values(this.state.my_data[8]).slice(1),
      data_cause_9: Object.values(this.state.my_data[9]).slice(1),
      data_cause_10: Object.values(this.state.my_data[10]).slice(1),
    });

  }
  // get Table data ByQuarter
  getDataByQuarter = async () => {
    let DataTable = await httpClient.get(server.renterTable)
    //await console.log(BycourseData.data.result);
    await this.setState({ DataByQuarter: DataTable.data.result })
  }

  renderDataByQuarter() {
    if (this.state.DataByQuarter !== null)
      console.log(this.state.DataByQuarter);
    {
      return this.state.DataByQuarter.map((item) => (
        <tr key={item.Year}>
          <td>{item.Year}</td>
          <td>{item.CourseName}</td>
          <td>{item.Person}</td>

        </tr>
      ))
    }
  }


  render() {
    // Total chart 
    var mixedChart1 = {
      //labels: ["Admin", "User", "Guest1", "Guest2","Admin", "User", "Guest1", "Guest2"],
      labels: this.state.chart_LabelTTL,
      datasets: [
        {
          label: "Person",
          data: this.state.chart_show_dataTTL,
          //  data: Array_QtyUser,
          backgroundColor: [
            "rgba(239, 26, 26, 0.6)",
            "rgba(175, 190, 9, 0.6)",
            "rgba(9, 33, 190, 0.6)",
            "rgba(10, 203, 190, 0.6)",
          ],
        },
        // {
        //   label: "Target",
        //   data: [2, 4, 20, 40],
        //   type: "line",
        //   //  data: Array_QtyUser,
        //   // backgroundColor: ["rgba(255, 255, 255, 0.5)", ,],
        //   fill: false,
        //   lineTension: 0.5,
        //   borderColor: "rgba(0, 0, 0, 0.5)",
        // },
      ],
    };

    var mixedChart = {
      //labels: ["Admin", "User", "Guest1", "Guest2","Admin", "User", "Guest1", "Guest2"],
      labels: this.state.chart_Label,
      //  labels: Array_LevelUser,
      datasets: [
        {
          label: "Person",
          data: this.state.chart_show_data,
          //  data: Array_QtyUser,
          backgroundColor: [
            "rgba(180, 180, 180, 1)",
            "rgba(255, 153, 153, 1)",
            "rgba(93, 222, 116,1)",
            "rgba(102, 102, 255, 1)",
            "rgba(255,153,51,1)",
            "rgba(255, 153,255,1)",
            "rgba(247,247,87,1)",
            "rgba(0, 186, 149,1)",
            "rgba(22, 0, 186,1)",
            "rgba(194,157,11,1)",
            "rgba(196, 15,241,1)"
          ],
        },

      ],
    };


    return <div className="content-wrapper" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="col-md-12">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><Link to="./../home">Home</Link></li>
          <li className="breadcrumb-item active">Summarize</li>
        </ol>
        <div className="container-fluid"> <br />
          <h1 className="m-5 text-dark text-center"> Summary Chart</h1>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Total Trainee</h3>
                    </div>
                    <div className="card-body">
                      {/*  chart Total */}
                      <div
                        className="chart"
                        style={{ height: 400, margin: 10, marginTop: 10 }}
                      >
                        <Bar
                          data={mixedChart1}
                          options={{
                            maintainAspectRatio: false,
                            title: {
                              display: true,
                              text: "Total",
                              fontSize: 25,
                            },
                            legend: {
                              display: true,
                              position: "right",
                            },
                            scales: {
                              yAxes: [
                                {
                                  ticks: {
                                    beginAtZero: true,
                                    min: 0,
                                    max: 200,

                                  },
                                },
                              ],
                            },
                          }}
                        ></Bar>
                      </div>

                    </div>
                  </div>
                </div>
                {/* Scroll to top */}
                <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
                  <i className="fas fa-chevron-up" />
                </a>
                <div className="col-md-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title"> Classify by Course </h3>
                    </div>
                    <div className="row">
                      <div className="col-md-8" >
                        <div className="card-body">
                          {/*  chart course */}
                          <div
                            className="chart"
                            style={{ height: 600, margin: 5, marginTop: 10 }}
                          >
                            <Bar
                              data={mixedChart}
                              options={{
                                maintainAspectRatio: false,
                                title: {
                                  display: true,
                                  text: "Classify by Course",
                                  fontSize: 25,
                                },
                                legend: {
                                  display: false,
                                  position: "right",
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      ticks: {
                                        beginAtZero: true,
                                        min: 0,
                                        max: 200,

                                      },
                                    },
                                  ],
                                },
                              }}
                            ></Bar>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-4" style={{ fontSize: '12px' }} >
                        <table className='table table-hover text-center' >
                          <thead>
                            <tr>
                              <th> CourseName </th>
                              <th> Person </th>
                            </tr>
                          </thead>
                          <tbody> {this.renderByCourse_data()} </tbody>
                        </table>

                      </div>
                    </div>
                    {/* end */}
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title"> Classify by Quarter </h3>
                    </div>
                    <div className="row">
                      <div className="col-md-12" >
                        <div className="card-body">
                          {/*  chart course */}
                          <div
                            className="chart"
                            style={{ height: 600, margin: 3, marginTop: 10 }}>
                            <Bar
                              pointStyle="star"
                              data={{
                                labels: this.state.my_year,
                                responsive: true,
                                offset: true,
                                datasets: [
                                  {
                                    label: this.state.cause_0,
                                    pointStyle: "rectRounded",
                                    backgroundColor: "#90a4ae",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    data: this.state.data_cause_0,
                                  },
                                  {
                                    label: this.state.cause_1,
                                    backgroundColor: "#ff8a65",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_1,
                                  },
                                  {
                                    label: this.state.cause_2,
                                    backgroundColor: "#4caf50",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_2,
                                  },
                                  {
                                    // IOT
                                    label: this.state.cause_3,
                                    pointStyle: "rectRounded",
                                    backgroundColor: "#6666ff",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    data: this.state.data_cause_3,
                                  },
                                  {
                                    //VB
                                    label: this.state.cause_4,
                                    backgroundColor: "#FF99FF",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_4,
                                  },
                                  {
                                    //C#
                                    label: this.state.cause_5,
                                    backgroundColor: "#FF9933",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_5,
                                  },
                                  {
                                    //React
                                    label: this.state.cause_6,
                                    backgroundColor: "#F7F757",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_6,
                                  },
                                  {
                                    // python
                                    label: this.state.cause_7,
                                    backgroundColor: "#00ba95",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_7,
                                  },
                                  {
                                    //ML
                                    label: this.state.cause_8,
                                    backgroundColor: "#1600ba",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_8,
                                  },
                                  {
                                    label: this.state.cause_9,
                                    backgroundColor: "#606060",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_9,
                                  },
                                  {
                                    label: this.state.cause_10,
                                    backgroundColor: "#00bcd4",
                                    barThickness: 40,
                                    categoryPercentage: 1,
                                    pointStyle: "triangle",
                                    data: this.state.data_cause_10,
                                  },
                                  // {
                                  //   label: this.state.cause_11,
                                  //   backgroundColor: "#cddc39",
                                  //   barThickness: 40,
                                  //   categoryPercentage: 1,
                                  //   pointStyle: "triangle",
                                  //   data: this.state.data_cause_11,
                                  // },
                                ],
                              }}
                              height={500}
                              options={{
                                title: {
                                  display: true,
                                  text: "Classify by Quarter",
                                  fontSize: 25,
                                },
                                offsetGridLines: true,
                                drawTicks: true,
                                layout: {
                                  padding: {
                                    top: 10,
                                    right: 0,
                                    left: 0,
                                    bottom: 10,
                                  },
                                },
                                legend: {
                                  display: true,
                                  position: "top",
                                  align: "center",
                                  labels: {
                                    usePointStyle: true,
                                  },
                                },
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                  xAxes: [
                                    {
                                      stacked: true,
                                      ticks: {
                                        padding: 5,
                                      },
                                      gridLines: {
                                        display: false,
                                      },
                                    },
                                  ],
                                  yAxes: [
                                    {
                                      stacked: true,
                                      gridLines: {
                                        drawBorder: false,
                                      },
                                      ticks: {
                                        beginAtZero: true,
                                        maxTicksLimit: 6,
                                        padding: 10,
                                        callback(n) {
                                          if (n < 1e3) return n;
                                          if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                                        },
                                      },
                                    },
                                  ],
                                },
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header">
                            <h3 className="card-title">Classify by Quarter</h3>
                            <div className="card-tools">
                            </div>
                          </div>

                          <div className="card-body table-responsive p-0" style={{ height: 500 }}>
                            <table className="table table-bordered table-striped dataTable dtr-inline text-center">
                              <thead >
                                <tr>
                                  <th> Year </th>
                                  <th> Cours Name </th>
                                  <th> Person </th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.renderDataByQuarter()}
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>

                    </div>
                    {/* end */}
                  </div>
                </div>
              </div>

            </div>
          </section>



        </div>
      </div>
    </div>
  }
}

export default Summarize_chart;
