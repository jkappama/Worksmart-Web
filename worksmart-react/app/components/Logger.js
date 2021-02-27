import React, { Component } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"
import LoggerService from "../services/LoggerService"
import { withRouter } from "react-router-dom"

//Logger component used to create Logs in the WorkSmart application
class Logger extends Component {
  //Standard React constructor with inherited properties and initial state of the object
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      date: "",
      type: "",
      startTime: "",
      endTime: "",
      description: "",
    }

    //Handlers added for binding each of the Logger's JSON fields
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeTypeHandler = this.changeTypeHandler.bind(this)
    this.changeStartTimeHandler = this.changeStartTimeHandler.bind(this)
    this.changeEndTimeHandler = this.changeEndTimeHandler.bind(this)
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this)
    this.saveOrUpdateLog = this.saveOrUpdateLog.bind(this)
  }

  //Check if the component is in the Virtual DOM and if so, set the state accordingly
  componentDidMount() {
    if (this.state.id === "_add") {
      return
    } else {
      LoggerService.getLog(this.state.id).then((res) => {
        let log = res.data
        this.setState({
          date: log.date,
          type: log.type,
          startTime: log.startTime,
          endTime: log.endTime,
          description: log.description,
        })
      })
    }
  }

  //Save the Log using the API service call
  saveOrUpdateLog = (e) => {
    e.preventDefault()
    let log = { date: this.state.date, type: this.state.type, startTime: this.state.startTime, endTime: this.state.endTime, description: this.state.description }
    console.log("log => " + JSON.stringify(log))

    if (this.state.id === "_add") {
      LoggerService.createLog(log).then((res) => {
        this.props.history.push("/logs")
      })
    } else {
      LoggerService.createLog(log, this.state.id).then((res) => {
        this.props.history.push("/logs")
      })
    }
  }

  //Handlers for each component fields to collect data
  changeDateHandler = (event) => {
    this.setState({ date: event.target.value })
  }

  changeTypeHandler = (event) => {
    this.setState({ type: event.target.value })
  }

  changeStartTimeHandler = (event) => {
    this.setState({ startTime: event.target.value })
  }

  changeEndTimeHandler = (event) => {
    this.setState({ endTime: event.target.value })
  }

  changeDescriptionHandler = (event) => {
    this.setState({ description: event.target.value })
  }

  //Not used. Placeholder for future cancel button.
  cancel() {
    this.props.history.push("/logs")
  }

  //UI for Logger component
  render() {
    return (
      <Page title="Logger">
        <form>
          <div className="row align-items-center">
            <div className="col-md-auto">
              <input type="text" name="type" className="form-control form-control-sm" value={this.state.type} onChange={this.changeTypeHandler} placeholder="Log Type" />
            </div>
            <div className="col-md-auto">
              <input type="text" name="starttime" className="form-control form-control-sm" value={this.state.startTime} onChange={this.changeStartTimeHandler} placeholder="Start Time" />
            </div>
            <div className="col-md-auto">
              <input type="text" name="endtime" className="form-control form-control-sm" value={this.state.endTime} onChange={this.changeEndTimeHandler} placeholder="End Time" />
            </div>
            <div className="col-md-auto">
              <input type="text" name="actiondone" className="form-control form-control-sm" value={this.state.description} onChange={this.changeDescriptionHandler} placeholder="Description" />
            </div>
            <Link className="btn btn-primary" to="/logs" onClick={this.saveOrUpdateLog}>
              Submit Log
            </Link>
            <Link className="btn btn-primary" style={{ marginLeft: "10px" }} to="/logs">
              View Logs
            </Link>
          </div>
        </form>
        <br></br>
      </Page>
    )
  }
}
export default withRouter(Logger)
