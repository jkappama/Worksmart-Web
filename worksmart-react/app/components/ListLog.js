import React, { Component } from "react"
import LoggerService from "../services/LoggerService"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html
//Component that is used to list all Logs within the application
class ListLog extends Component {
  //Standard constructor to inherit properties and to set the state of the logs object
  constructor(props) {
    super(props)

    this.state = {
      logs: [],
    }
    this.addLog = this.addLog.bind(this)
    this.editLog = this.editLog.bind(this)
    this.deleteLog = this.deleteLog.bind(this)
  }

  //Method for delete the log object based on ID in the JSON array
  deleteLog(id) {
    LoggerService.deleteLog(id).then((res) => {
      this.setState({ logs: this.state.logs.filter((log) => log.id !== id) })
    })
  }

  //Method for viewing the log object based on ID in the JSON array
  //Unique routing is used (updated main.js)
  viewLog(id) {
    this.props.history.push(`/view-log/${id}`)
  }

  //Not used (for future reference)
  editLog(id) {
    this.props.history.push(`/add-log/${id}`)
  }

  //Check if the list of logs is in the Virtual DOM
  componentDidMount() {
    LoggerService.getLogs().then((res) => {
      this.setState({ logs: res.data })
    })
  }

  //Not used (for future reference)
  addLog() {
    this.props.history.push("/add-log/_add")
  }

  //UI of the Listing of the Logs
  render() {
    return (
      <Page title="All Logs">
        <div>
          <h2 className="text-center text-white">
            <b>All Logs</b>
          </h2>
          <br></br>
          <div className="row">
            <table className="table table-striped form-group table-bordered">
              <thead>
                <tr>
                  <th className="text-center text-white">Log Date</th>
                  <th className="text-center text-white">Type</th>
                  <th className="text-center text-white">Start Time</th>
                  <th className="text-center text-white">End Time</th>
                  <th className="text-center text-white">View or Delete Log</th>
                </tr>
              </thead>
              <tbody>
                {this.state.logs.map((log) => (
                  <tr key={log.id}>
                    <td className="text-center text-white"> {log.date} </td>
                    <td className="text-white"> {log.type}</td>
                    <td className="text-white">{log.startTime}</td>
                    <td className="text-white">{log.endTime}</td>
                    <td>
                      <button style={{ marginLeft: "80px" }} onClick={() => this.viewLog(log.id)} className="btn btn-primary">
                        View Log{" "}
                      </button>
                      <button style={{ marginLeft: "125px" }} onClick={() => this.deleteLog(log.id)} className="btn btn-danger">
                        Delete Log{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Page>
    )
  }
}

export default ListLog
