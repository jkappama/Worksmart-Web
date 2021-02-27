import React, { Component } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"
import JournalService from "../services/JournalService"
import { withRouter } from "react-router-dom"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//Journal component to represent the Journal feature
class Journal extends Component {
  //Use the constructor to inherit all the properties and initialize the Journal object values to empty strings
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      date: "",
      title: "",
      type: "",
      entry: "",
    }

    //Add handlers to bind each of the object's members
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeTitleHandler = this.changeTitleHandler.bind(this)
    this.changeTypeHandler = this.changeTypeHandler.bind(this)
    this.changeEntryHandler = this.changeEntryHandler.bind(this)
    this.saveOrUpdateJournal = this.saveOrUpdateJournal.bind(this)
  }

  //Check if the component is in the Virtual DOM (needed for AXIOS) and if so, initialize the values
  componentDidMount() {
    if (this.state.id === "_add") {
      return
    } else {
      JournalService.getJournal(this.state.id).then((res) => {
        let journal = res.data
        this.setState({
          date: journal.date,
          title: journal.title,
          type: journal.type,
          entry: journal.entry,
        })
      })
    }
  }

  //Main part of the component, save the Journal values and sent it over to the API using a POST request
  saveOrUpdateJournal = (e) => {
    e.preventDefault()
    let journal = { date: this.state.date, title: this.state.title, type: this.state.type, entry: this.state.entry }
    console.log("journal => " + JSON.stringify(journal))

    if (this.state.id === "_add") {
      JournalService.createJournal(journal).then((res) => {
        this.props.history.push("/journals")
      })
    } else {
      JournalService.createJournal(journal, this.state.id).then((res) => {
        this.props.history.push("/journals")
      })
    }
  }

  //Add handlers for each of the fields in the component to store the data
  changeDateHandler = (event) => {
    this.setState({ date: event.target.value })
  }

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value })
  }

  changeTypeHandler = (event) => {
    this.setState({ type: event.target.value })
  }

  changeEntryHandler = (event) => {
    this.setState({ entry: event.target.value })
  }

  cancel() {
    this.props.history.push("/journals")
  }

  //Display UI of Journal feature
  render() {
    return (
      <Page title="Journal">
        <form>
          <div className="form-group text-white">
            <label for="post-title" className="mb-1">
              <small>Title</small>
            </label>
            <input autofocus name="title" id="post-title" value={this.state.title} onChange={this.changeTitleHandler} className="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
          </div>
          <div className="form-group text-white">
            <label for="post-type" className="mb-1">
              <small>Type</small>
            </label>
            <div>
              <select id="entrytype" name="entrytype" value={this.state.type} onChange={this.changeTypeHandler}>
                <option value="General">General</option>
                <option value="Accomplishment">Accomplishment</option>
                <option value="Work Vacation">Work Vacation</option>
                <option value="Project Disasters">Project Disasters</option>
                <option value="Coworker Issue">Coworker Issue</option>
                <option value="Management Issue">Management Issue</option>
              </select>
            </div>
          </div>

          <div className="form-group text-white">
            <label for="post-body" className="mb-1 d-block">
              <small>Journal Entry</small>
            </label>
            <textarea name="body" id="post-body" className="body-content tall-textarea form-control" type="text" value={this.state.entry} onChange={this.changeEntryHandler}></textarea>
          </div>
          <Link className="btn btn-primary" to="/journals" onClick={this.saveOrUpdateJournal}>
            Save Journal
          </Link>
          <Link className="btn btn-primary" style={{ marginLeft: "10px" }} to="/journals">
            View Journals
          </Link>
        </form>
        <br></br>
      </Page>
    )
  }
}
export default withRouter(Journal)
