import React, { Component } from "react";
import { key, server } from "../../constants/constants";
import { httpClient } from "../../utils/HttpClient";
import * as moment from "moment";
import Swal from "sweetalert2";
import { SketchPicker } from 'react-color'


class EditPlan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timestamp: "",
      time: "",
      update_by: "",
      condition: "",
      operation: "",
      remark: "",
      daily_cause: "",
      selected_year: moment().format("YYYY"),
      selected_category: "Database",
      selected_date: "",
      rev: 1,
      next_rev: 1,
      last_rev: 1,
      list_rev: [],
      class_btn_iot: "btn btn-block btn-warning",
      class_btn_pyt_task: "btn btn-block btn-primary",
      class_btn_adv_iot: "btn btn-block btn-success",
      class_btn_kafka: "btn btn-block btn-info",
      class_btn_ros: "btn btn-block btn-danger",
      class_btn_database: "btn btn-block btn-outline-danger",
      class_btn_js: "btn btn-block btn-dark",
      class_btn_react: "btn btn-block btn-secondary",
      class_btn_docker: "btn btn-block btn-outline-primary",
      
      

      list_plan_jan: [],
      list_plan_feb: [],
      list_plan_mar: [],
      list_plan_apr: [],
      list_plan_may: [],
      list_plan_jun: [],
      list_plan_jul: [],
      list_plan_aug: [],
      list_plan_sep: [],
      list_plan_oct: [],
      list_plan_nov: [],
      list_plan_dec: [],

      list_actual_jan: [],
      list_actual_feb: [],
      list_actual_mar: [],
      list_actual_apr: [],
      list_actual_may: [],
      list_actual_jun: [],
      list_actual_jul: [],
      list_actual_aug: [],
      list_actual_sep: [],
      list_actual_oct: [],
      list_actual_nov: [],
      list_actual_dec: [],
    };
  }
  check_plan = async () => {
    const yourDate = new Date();
    let get_check_plan = await httpClient.post(server.TRAINING_CHECK_PLAN, {
      selected_date: this.state.selected_date,
      rev: this.state.rev,
    });
    if (get_check_plan.data.result == null) {
      await httpClient.post(server.TRAINING_PLAN_ADD, {
        mfgdate: this.state.selected_date,
        cause_name: this.state.selected_category,
        rev: this.state.rev,
      });
      await httpClient.post(server.TRAINING_DELETE_LOG, {
        mfgdate: this.state.selected_date,
        rev: this.state.rev,
        condition: this.state.condition,
        cause_name: this.state.selected_category,
        operation: "Add",
        timestamp: moment(yourDate).format("YYYY-MM-DD HH:mm:ss.000"),
        time: moment(yourDate).format("HH:mm:ss"),
        update_by: localStorage.getItem(key.USER_EMP),
      });
    } else {
      const { value: text_remark } = await Swal.fire({
        title: "Please input reason for delete.",
        input: "text",
        inputPlaceholder: "......",
        showCancelButton: true,
      });
      if (text_remark) {
        await this.setState({ remark: text_remark });
        await httpClient.post(server.TRAINING_PLAN_DELETE, {
          mfgdate: this.state.selected_date,
          rev: this.state.rev,
        });
        httpClient.post(server.TRAINING_DELETE_LOG, {
          mfgdate: this.state.selected_date,
          rev: this.state.rev,
          condition: this.state.condition,
          remark: this.state.remark,
          cause_name: this.state.daily_cause,
          operation: "Remove",
          timestamp: moment(yourDate).format("YYYY-MM-DD HH:mm:ss.000"),
          time: moment(yourDate).format("HH:mm:ss"),
          update_by: localStorage.getItem(key.USER_EMP),
        });
      }
    }
    this.componentDidMount();
  };
  check_actual = async () => {
    const yourDate = new Date();
    let get_check_actual = await httpClient.post(server.TRAINING_CHECK_ACTUAL, {
      selected_date: this.state.selected_date,
      rev: this.state.rev,
    });
    if (get_check_actual.data.result == null) {
      await httpClient.post(server.TRAINING_ACTUAL_ADD, {
        mfgdate: this.state.selected_date,
        cause_name: this.state.selected_category,
        rev: this.state.rev,
      });
      await httpClient.post(server.TRAINING_DELETE_LOG, {
        mfgdate: this.state.selected_date,
        rev: this.state.rev,
        condition: this.state.condition,
        cause_name: this.state.selected_category,
        operation: "Add",
        timestamp: moment(yourDate).format("YYYY-MM-DD HH:mm:ss.000"),
        time: moment(yourDate).format("HH:mm:ss"),
        update_by: localStorage.getItem(key.USER_EMP),
      });
    } else {
      const { value: text_remark } = await Swal.fire({
        title: "Please input reason for delete.",
        input: "text",
        inputPlaceholder: "......",
        showCancelButton: true,
      });
      if (text_remark) {
        await this.setState({ remark: text_remark });
        await httpClient.post(server.TRAINING_ACTUAL_DELETE, {
          mfgdate: this.state.selected_date,
          rev: this.state.rev,
        });
        httpClient.post(server.TRAINING_DELETE_LOG, {
          mfgdate: this.state.selected_date,
          rev: this.state.rev,
          condition: this.state.condition,
          remark: this.state.remark,
          cause_name: this.state.daily_cause,
          operation: "Remove",
          timestamp: moment(yourDate).format("YYYY-MM-DD HH:mm:ss.000"),
          time: moment(yourDate).format("HH:mm:ss"),
          update_by: localStorage.getItem(key.USER_EMP),
        });
      }
    }
    this.componentDidMount();
  };
  componentDidMount = async () => {
    let find_rev = await httpClient.post(server.TRAINING_LIST_REV, {
      year_no: this.state.selected_year,
    });
    await this.setState({ list_rev: find_rev.data.result });

    if (this.state.list_rev.length == 0) {
      await this.setState({
        rev: 0,
        next_rev: this.state.list_rev.length,
        last_rev: 0,
      });
    } else {
      await this.setState({
        last_rev: this.state.list_rev.length - 1,
        rev: this.state.list_rev.length - 1,
        next_rev: this.state.list_rev.length,
      });
    }
    this.show_calendar();

  };

  show_calendar = async () => {
    this.get_january();
    this.get_february();
    this.get_march();
    this.get_april();
    this.get_may();
    this.get_june();
    this.get_july();
    this.get_august();
    this.get_september();
    this.get_october();
    this.get_november();
    this.get_december();
  };
  render_Revision = () => {
    try {
      if (this.state.list_rev !== null) {
        // console.log(this.state.event_list);
        return this.state.list_rev.map((item) => (
          <option value={item.rev}>{item.rev}</option>
        ));
      }
    } catch (error) { }
  };
  click_new_rev = () => {
    Swal.fire({
      title: "Create Revision : " + this.state.next_rev + " ?",
      text: "ระบบจะคัดลอกข้อมูลจาก Rev " + this.state.last_rev + " (ล่าสุด)",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes !!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.create_new_rev();
      }
    });
  };
  create_new_rev = async () => {
    const yourDate = new Date();
    await httpClient.post(server.TRAINING_DELETE_LOG, {
      mfgdate: moment(yourDate).format("YYYY-MM-DD"),
      rev: this.state.next_rev,
      condition: 'New revision',
      cause_name: '',
      operation: "Create",
      timestamp: moment(yourDate).format("YYYY-MM-DD HH:mm:ss.000"),
      time: moment(yourDate).format("HH:mm:ss"),
      update_by: localStorage.getItem(key.USER_EMP),
    });
    await httpClient.post(server.TRAINING_PLAN_COPY, {
      selected_year: this.state.selected_year,
      next_rev: this.state.next_rev,
      last_rev: this.state.last_rev,
    });
    await httpClient.post(server.TRAINING_ACTUAL_COPY, {
      selected_year: this.state.selected_year,
      next_rev: this.state.next_rev,
      last_rev: this.state.last_rev,
    });
    Swal.fire({
      icon: "success",
      title: "New Revision Created..",
      showConfirmButton: false,
      timer: 800,
    });
    window.location.reload(false);
  };
  get_january = async () => {
    let get_plan_jan = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "01",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual_jan = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "01",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_jan: get_plan_jan.data.result });
    this.setState({ list_actual_jan: get_actual_jan.data.result });
  };
  get_february = async () => {
    let get_plan_feb = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "02",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual_feb = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "02",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_feb: get_plan_feb.data.result });
    this.setState({ list_actual_feb: get_actual_feb.data.result });
  };
  get_march = async () => {
    let get_plan_mar = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "03",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual_mar = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "03",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_mar: get_plan_mar.data.result });
    this.setState({ list_actual_mar: get_actual_mar.data.result });
  };
  get_april = async () => {
    let get_plan_apr = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "04",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual_apr = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "04",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_apr: get_plan_apr.data.result });
    this.setState({ list_actual_apr: get_actual_apr.data.result });
  };
  get_may = async () => {
    let get_plan_may = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "05",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual_may = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "05",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_may: get_plan_may.data.result });
    this.setState({ list_actual_may: get_actual_may.data.result });
  };
  get_june = async () => {
    let get_plan_jun = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "06",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual_jun = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "06",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_jun: get_plan_jun.data.result });
    this.setState({ list_actual_jun: get_actual_jun.data.result });
  };
  get_july = async () => {
    let get_plan = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "07",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "07",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_jul: get_plan.data.result });
    this.setState({ list_actual_jul: get_actual.data.result });
  };
  get_august = async () => {
    let get_plan = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "08",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "08",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_aug: get_plan.data.result });
    this.setState({ list_actual_aug: get_actual.data.result });
  };
  get_september = async () => {
    let get_plan = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "09",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "09",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_sep: get_plan.data.result });
    this.setState({ list_actual_sep: get_actual.data.result });
  };
  get_october = async () => {
    let get_plan = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "10",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "10",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_oct: get_plan.data.result });
    this.setState({ list_actual_oct: get_actual.data.result });
  };
  get_november = async () => {
    let get_plan = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "11",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "11",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_nov: get_plan.data.result });
    this.setState({ list_actual_nov: get_actual.data.result });
  };
  get_december = async () => {
    let get_plan = await httpClient.post(server.TRAINING_MONTHLY_PLAN, {
      month_no: "12",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    let get_actual = await httpClient.post(server.TRAINING_MONTHLY_ACTUAL, {
      month_no: "12",
      year_no: this.state.selected_year,
      rev: this.state.rev,
    });
    this.setState({ list_plan_dec: get_plan.data.result });
    this.setState({ list_actual_dec: get_actual.data.result });
  };

  render_jan_plan = () => {
    if (this.state.list_plan_jan !== null) {
      return this.state.list_plan_jan.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                await this.check_plan();
                //  console.log(this.state.daily_cause);
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_feb_plan = () => {
    if (this.state.list_plan_feb !== null) {
      return this.state.list_plan_feb.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_mar_plan = () => {
    if (this.state.list_plan_mar !== null) {
      return this.state.list_plan_mar.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_apr_plan = () => {
    if (this.state.list_plan_apr !== null) {
      return this.state.list_plan_apr.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_may_plan = () => {
    if (this.state.list_plan_may !== null) {
      return this.state.list_plan_may.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_jun_plan = () => {
    if (this.state.list_plan_jun !== null) {
      return this.state.list_plan_jun.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_jul_plan = () => {
    if (this.state.list_plan_jul !== null) {
      return this.state.list_plan_jul.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_aug_plan = () => {
    if (this.state.list_plan_aug !== null) {
      return this.state.list_plan_aug.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_sep_plan = () => {
    if (this.state.list_plan_sep !== null) {
      return this.state.list_plan_sep.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_oct_plan = () => {
    if (this.state.list_plan_oct !== null) {
      return this.state.list_plan_oct.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_nov_plan = () => {
    if (this.state.list_plan_nov !== null) {
      return this.state.list_plan_nov.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_dec_plan = () => {
    if (this.state.list_plan_dec !== null) {
      return this.state.list_plan_dec.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Plan",
                  daily_cause: item.cause_name,
                });
                this.check_plan();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };

  render_jan_actual = () => {
    if (this.state.list_actual_jan !== null) {
      return this.state.list_actual_jan.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  daily_cause: item.cause_name,
                  selected_date: item.date_long,
                  condition: "Actual",
                });
                await this.check_actual();
                //  await this.get_january();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_feb_actual = () => {
    if (this.state.list_actual_feb !== null) {
      return this.state.list_actual_feb.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_mar_actual = () => {
    if (this.state.list_actual_mar !== null) {
      return this.state.list_actual_mar.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_apr_actual = () => {
    if (this.state.list_actual_apr !== null) {
      return this.state.list_actual_apr.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_may_actual = () => {
    if (this.state.list_actual_may !== null) {
      return this.state.list_actual_may.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_jun_actual = () => {
    if (this.state.list_actual_jun !== null) {
      return this.state.list_actual_jun.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_jul_actual = () => {
    if (this.state.list_actual_jul !== null) {
      return this.state.list_actual_jul.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_aug_actual = () => {
    if (this.state.list_actual_aug !== null) {
      return this.state.list_actual_aug.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_sep_actual = () => {
    if (this.state.list_actual_sep !== null) {
      return this.state.list_actual_sep.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_oct_actual = () => {
    if (this.state.list_actual_oct !== null) {
      return this.state.list_actual_oct.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_nov_actual = () => {
    if (this.state.list_actual_nov !== null) {
      return this.state.list_actual_nov.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };
  render_dec_actual = () => {
    if (this.state.list_actual_dec !== null) {
      return this.state.list_actual_dec.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div style={{ marginLeft: 2, marginRight: 2 }}>
            <button
              style={{ fontSize: 10 }}
              type="button"
              className={item.class_button}
              onClick={async (e) => {
                await this.setState({
                  selected_date: item.date_long,
                  condition: "Actual",
                  daily_cause: item.cause_name,
                });
                await this.check_actual();
              }}
            >
              {item.date_short}
            </button>
          </div>
        </div>
      ));
    }
  };

  render_jan_week = () => {
    if (this.state.list_plan_jan !== null) {
      return this.state.list_plan_jan.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_feb_week = () => {
    if (this.state.list_plan_feb !== null) {
      return this.state.list_plan_feb.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_mar_week = () => {
    if (this.state.list_plan_mar !== null) {
      return this.state.list_plan_mar.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_apr_week = () => {
    if (this.state.list_plan_apr !== null) {
      return this.state.list_plan_apr.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_may_week = () => {
    if (this.state.list_plan_may !== null) {
      return this.state.list_plan_may.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_jun_week = () => {
    if (this.state.list_plan_jun !== null) {
      return this.state.list_plan_jun.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_jul_week = () => {
    if (this.state.list_plan_jul !== null) {
      return this.state.list_plan_jul.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_aug_week = () => {
    if (this.state.list_plan_aug !== null) {
      return this.state.list_plan_aug.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_sep_week = () => {
    if (this.state.list_plan_sep !== null) {
      return this.state.list_plan_sep.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_oct_week = () => {
    if (this.state.list_plan_oct !== null) {
      return this.state.list_plan_oct.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_nov_week = () => {
    if (this.state.list_plan_nov !== null) {
      return this.state.list_plan_nov.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render_dec_week = () => {
    if (this.state.list_plan_dec !== null) {
      return this.state.list_plan_dec.map((item) => (
        <div style={{ width: "3%", marginBottom: 8, margin: "auto" }}>
          <div
            style={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: "center",
              fontSize: 12,
              color: item.date_color,
            }}
          >
            {item.date_week}
          </div>
        </div>
      ));
    }
  };
  render() {

    return (
      <div className="content-wrapper" style={{ backgroundColor: "white" }}>
        <br />
        <h1 style={{ textAlign: "center" }}>MIC Training Calendar</h1>
        <div className="col-md-12" style={{ margin: "auto" }}>
          <div
            className="card card-secondary "
            style={{ display: this.state.display_input, background: "lightgray" }}
          >
            {/* <div className="card-header">
              <h3 className="card-title"></h3>
            </div> */}
            <div className="card-body ">
              <div className="row">
                <div style={{ width: "75%", }}>
                  <label>Category</label>
                  <div className="row">
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_iot}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning btn-lg",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "IoT",
                          });
                        }}
                      >
                        Basic IoT
                      </button>
                    </div>
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_pyt_task}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary btn-lg",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "Python_task",
                          });
                        }}
                      >
                        Python Task
                      </button>
                    </div>
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_adv_iot}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success btn-lg",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "Advance_IoT",
                          });
                        }}
                      >
                        Advance IoT
                      </button>
                    </div>
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_kafka}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info btn-lg",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "Kafka",
                          });
                        }}
                      >
                        Kafka
                      </button>
                    </div>
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_ros}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger btn-lg",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "ROS",
                          });
                        }}
                      >
                        ROS
                      </button>
                    </div>
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_database}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger btn-lg",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "Database",
                          });
                        }}
                      >
                        Database
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_js}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark btn-lg",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "JavaScript",
                          });
                        }}
                      >
                        JavaScript
                      </button>
                    </div>
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_react}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary btn-lg",
                            class_btn_docker: "btn btn-block btn-outline-primary",
                            selected_category: "React",
                          });
                        }}
                      >
                        React
                      </button>
                    </div>
                    <div style={{ width: "14%", marginLeft: 10 }}>
                      <button
                        type="button"
                        class={this.state.class_btn_docker}
                        onClick={(e) => {
                          this.setState({
                            class_btn_iot: "btn btn-block btn-warning",
                            class_btn_pyt_task: "btn btn-block btn-primary",
                            class_btn_adv_iot: "btn btn-block btn-success",
                            class_btn_kafka: "btn btn-block btn-info",
                            class_btn_ros: "btn btn-block btn-danger",
                            class_btn_database: "btn btn-block btn-outline-danger",
                            class_btn_js: "btn btn-block btn-dark",
                            class_btn_react: "btn btn-block btn-secondary",
                            class_btn_docker: "btn btn-block btn-outline-primary btn-lg",
                            selected_category: "Docker",
                          });
                        }}
                      >
                        Docker
                      </button>
                    </div>
                  </div>

                </div>
                <div style={{ width: "10%" }}>
                  <label>Revision</label>
                  <select
                    value={this.state.rev}
                    className="form-control"
                    onChange={async (e) => {
                      e.preventDefault();
                      if (isNaN(e.target.value) == true) {
                        // await this.setState({ rev: this.state.next_rev });
                        console.log("new rev");
                        this.click_new_rev();
                      } else {
                        console.log("selected rev");
                        await this.setState({
                          rev: parseInt(e.target.value, 10),
                        });
                      }
                      await console.log(this.state.rev);
                      this.show_calendar();

                    }}
                  >
                    {this.render_Revision()}
                    <option value="new"> New Rev.</option>
                  </select>
                </div>
                <div style={{ width: "2%" }}></div>
                <div style={{ width: "10%" }}>
                  <label>Year</label>
                  <select
                    value={this.state.selected_year}
                    className="form-control"
                    onChange={async (e) => {
                      e.preventDefault();
                      await this.setState({
                        selected_year: moment(e.target.value).format("YYYY"),
                      });
                      this.componentDidMount();
                      // this.show_calendar()
                    }}
                  >
                    <option value={moment().add(-1, "y").format("YYYY")}>
                      {moment().add(-1, "y").format("YYYY")}
                    </option>
                    <option value={moment().format("YYYY")} selected>
                      {moment().format("YYYY")}
                    </option>
                    <option
                      value={moment()
                        .add(+1, "y")
                        .format("YYYY")}
                    >
                      {moment()
                        .add(+1, "y")
                        .format("YYYY")}
                    </option>
                    <option
                      value={moment()
                        .add(+2, "y")
                        .format("YYYY")}
                    >
                      {moment()
                        .add(+2, "y")
                        .format("YYYY")}
                    </option>
                    <option
                      value={moment()
                        .add(+3, "y")
                        .format("YYYY")}
                    >
                      {moment()
                        .add(+3, "y")
                        .format("YYYY")}
                    </option>
                  </select>
                </div>
              </div>

            </div>
            <div
              className="card-body "
              style={{ overflowY: "scroll", maxHeight: "auto" }}
            >
              <label>January</label>
              <div className="row">&nbsp;&nbsp;{this.render_jan_week()}</div>
              <div className="row">P&nbsp;{this.render_jan_plan()}</div>
              <div className="row">A&nbsp;{this.render_jan_actual()}</div>
              <br />
              <label>Febuary</label>
              <div className="row">&nbsp;&nbsp;{this.render_feb_week()}</div>
              <div className="row">P&nbsp;{this.render_feb_plan()}</div>
              <div className="row">A&nbsp;{this.render_feb_actual()}</div>
              <br />
              <label>March</label>
              <div className="row">&nbsp;&nbsp;{this.render_mar_week()}</div>
              <div className="row">P&nbsp;{this.render_mar_plan()}</div>
              <div className="row">A&nbsp;{this.render_mar_actual()}</div>
              <br />
              <label>April</label>
              <div className="row">&nbsp;&nbsp;{this.render_apr_week()}</div>
              <div className="row">P&nbsp;{this.render_apr_plan()}</div>
              <div className="row">A&nbsp;{this.render_apr_actual()}</div>
              <br />
              <label>May</label>
              <div className="row">&nbsp;&nbsp;{this.render_may_week()}</div>
              <div className="row">P&nbsp;{this.render_may_plan()}</div>
              <div className="row">A&nbsp;{this.render_may_actual()}</div>
              <br />
              <label>June</label>
              <div className="row">&nbsp;&nbsp;{this.render_jun_week()}</div>
              <div className="row">P&nbsp;{this.render_jun_plan()}</div>
              <div className="row">A&nbsp;{this.render_jun_actual()}</div>
              <br />
              <label>July</label>
              <div className="row">&nbsp;&nbsp;{this.render_jul_week()}</div>
              <div className="row">P&nbsp;{this.render_jul_plan()}</div>
              <div className="row">A&nbsp;{this.render_jul_actual()}</div>
              <br />
              <label>August</label>
              <div className="row">&nbsp;&nbsp;{this.render_aug_week()}</div>
              <div className="row">P&nbsp;{this.render_aug_plan()}</div>
              <div className="row">A&nbsp;{this.render_aug_actual()}</div>
              <br />
              <label>September</label>
              <div className="row">&nbsp;&nbsp;{this.render_sep_week()}</div>
              <div className="row">P&nbsp;{this.render_sep_plan()}</div>
              <div className="row">A&nbsp;{this.render_sep_actual()}</div>
              <br />
              <label>October</label>
              <div className="row">&nbsp;&nbsp;{this.render_oct_week()}</div>
              <div className="row">P&nbsp;{this.render_oct_plan()}</div>
              <div className="row">A&nbsp;{this.render_oct_actual()}</div>
              <br />
              <label>November</label>
              <div className="row">&nbsp;&nbsp;{this.render_nov_week()}</div>
              <div className="row">P&nbsp;{this.render_nov_plan()}</div>
              <div className="row">A&nbsp;{this.render_nov_actual()}</div>
              <br />
              <label>December</label>
              <div className="row">&nbsp;&nbsp;{this.render_dec_week()}</div>
              <div className="row">P&nbsp;{this.render_dec_plan()}</div>
              <div className="row">A&nbsp;{this.render_dec_actual()}</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPlan;
