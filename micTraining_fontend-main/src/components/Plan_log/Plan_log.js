import React, { Component } from "react";
import { key, server } from "../../constants/constants";
import { httpClient } from "../../utils/HttpClient";

class Plan_log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_log: [],
    };
  }

  componentDidMount = async () => {
    this.show_log();
  };
  show_log = async () => {
    let find_ = await httpClient.post(server.TRAINING_SHOW_LOG);
    //  console.log(find_.data.result);
    this.setState({ list_log: find_.data.result });
  };
  render_log = () => {
    try {
      if (this.state.list_log !== null) {
        return this.state.list_log.map((item) => (
          <tr>
            <td>{item.rev}</td>
            <td>{item.date}</td>
            <td>{item.change_part}</td>
            <td>{item.content}</td>
            <td>{item.reason}</td>
            <td>{item.update_by}</td>
          </tr>
        ));
      }
    } catch (error) {}
  };
  render() {
    return (
      <div className="content-wrapper" style={{ backgroundColor: "white" }}>
        <h1 style={{ textAlign: "center" }}>MIC Training Calendar LOG</h1>
        
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"></h3>
          </div>
          <div
            className="card-body table-responsive p-0"
            style={{ height: 500 }}
          >
            <table className="table table-head-fixed text-nowrap">
              <thead>
                <tr>
                <th>Rev</th>
                <th>Date</th>
                <th>Change Part</th>
                <th>Content</th>
                <th>Reason</th>
                <th>Update By</th>
                </tr>
              </thead>
              <tbody>{this.render_log()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan_log;
