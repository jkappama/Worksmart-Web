import React, { Component } from "react"
import JournalService from "../services/JournalService"
import { Link } from "react-router-dom"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//View a single journal based on id
class ViewJournalComponent extends Component {
  //Inherit properties and initialize object
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      journal: {},
    }
  }

  //Get the data of the Journal using the ID
  componentDidMount() {
    JournalService.getJournal(this.state.id).then((res) => {
      this.setState({ journal: res.data })
    })
  }

  //UI of single Journal View
  render() {
    return (
      <Page title="Journal View">
        <form>
          <div className="form-group text-white">
            <label for="post-date" className="mb-1">
              <small>Date</small>
            </label>
            <input autofocus name="date" id="post-date" value={this.state.journal.date} className="form-control form-control-lg" type="text" placeholder="" autocomplete="off" />
          </div>
          <div className="form-group text-white">
            <label for="post-title" className="mb-1">
              <small>Title</small>
            </label>
            <input autofocus name="title" id="post-title" value={this.state.journal.title} className="form-control form-control-lg" type="text" placeholder="" autocomplete="off" />
          </div>
          <div className="form-group text-white">
            <label for="post-type" className="mb-1">
              <small>Type</small>
            </label>
            <div>
              <select id="entrytype" name="entrytype" value={this.state.journal.type}>
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
            <textarea name="body" id="post-body" className="body-content tall-textarea form-control" type="text" value={this.state.journal.entry}></textarea>
          </div>
          <Link className="btn btn-primary" style={{ marginLeft: "10px" }} to="/journals">
            View Journals
          </Link>
        </form>
        <br></br>
      </Page>
    )
  }
}

export default ViewJournalComponent
