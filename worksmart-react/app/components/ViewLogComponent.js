import React, { Component } from "react"
import LoggerService from "../services/LoggerService"
import { Link } from "react-router-dom"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//View a single log based on id
class ViewLogComponent extends Component {
  //Standard React constructor
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      log: {},
    }
  }

  //Get the data of the single log using the id from the state
  componentDidMount() {
    LoggerService.getLog(this.state.id).then((res) => {
      this.setState({ log: res.data })
    })
  }

  //UI for single Log View
  render() {
    return (
      <Page title="Log View">
        <form>
          <div className="row align-items-center">
            <div className="col-md-auto">
              <label className="mb-1 d-block text-white">
                <small>Date</small>
              </label>
              <input type="text" name="type" className="form-control form-control-sm" value={this.state.log.date} placeholder="Log Date" />
            </div>
            <div className="col-md-auto">
              <label className="mb-1 d-block text-white">
                <small>Log Type</small>
              </label>
              <input type="text" name="type" className="form-control form-control-sm" value={this.state.log.type} placeholder="Log Type" />
            </div>
            <div className="col-md-auto">
              <label className="mb-1 d-block text-white">
                <small>Start Time</small>
              </label>
              <input type="text" name="starttime" className="form-control form-control-sm" value={this.state.log.startTime} placeholder="Start Time" />
            </div>
            <div className="col-md-auto">
              <label className="mb-1 d-block text-white">
                <small>End Time</small>
              </label>
              <input type="text" name="endtime" className="form-control form-control-sm" value={this.state.log.endTime} placeholder="End Time" />
            </div>
            <div className="col-md-auto">
              <label className="mb-1 d-block text-white">
                <small>Description</small>
              </label>
              <input type="text" name="actiondone" className="form-control form-control-sm" style={{ width: "870px" }} value={this.state.log.description} placeholder="Description" />
            </div>
          </div>
          <br></br>
          <Link className="btn btn-primary" to="/logs">
            View Logs
          </Link>
        </form>
        <br></br>
      </Page>
    )
  }
}

export default ViewLogComponent
