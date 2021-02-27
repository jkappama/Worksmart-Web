import React, { Component } from "react"
import JournalService from "../services/JournalService"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html
//Component that is used to list all Journal entries within the application
class ListJournal extends Component {
  //Get all the properties within the application and initialize the journals object to an empty array of values
  constructor(props) {
    super(props)

    this.state = {
      journals: [],
    }
    //Add bindings for add, edit and delete if these options are needed (only delete is used here)
    this.addJournal = this.addJournal.bind(this)
    this.editJournal = this.editJournal.bind(this)
    this.deleteJournal = this.deleteJournal.bind(this)
  }

  //Method to delete the journal based on the id
  deleteJournal(id) {
    JournalService.deleteJournal(id).then((res) => {
      this.setState({ journals: this.state.journals.filter((journal) => journal.id !== id) })
    })
  }

  //Method to route the user to view the journal using a unique ID stored in Mongo DB
  viewJournal(id) {
    this.props.history.push(`/view-journal/${id}`)
  }

  //Not used (placeholder method for future if needed)
  editJournal(id) {
    this.props.history.push(`/add-journal/${id}`)
  }

  //Check if the journal is in the Virtual DOM
  componentDidMount() {
    JournalService.getJournals().then((res) => {
      this.setState({ journals: res.data })
    })
  }

  //Not used (placeholder method for future if needed)
  addJournal() {
    this.props.history.push("/add-journal/_add")
  }

  //Display the listing of all Journal entries
  render() {
    return (
      <Page title="All Journals">
        <div>
          <h2 className="text-center text-white">
            <b>All Journal Entries</b>
          </h2>
          <br></br>
          <div className="row">
            <table className="table table-striped form-group table-bordered">
              <thead>
                <tr>
                  <th className="text-center text-white">Journal Date</th>
                  <th className="text-center text-white">Title</th>
                  <th className="text-center text-white">Type</th>
                  <th className="text-center text-white">View or Delete Journal</th>
                </tr>
              </thead>
              <tbody>
                {this.state.journals.map((journal) => (
                  <tr key={journal.id}>
                    <td className="text-center text-white"> {journal.date} </td>
                    <td className="text-white"> {journal.title}</td>
                    <td className="text-white">{journal.type}</td>
                    <td>
                      <button style={{ marginLeft: "80px" }} onClick={() => this.viewJournal(journal.id)} className="btn btn-primary">
                        View Journal{" "}
                      </button>
                      <button style={{ marginLeft: "125px" }} onClick={() => this.deleteJournal(journal.id)} className="btn btn-danger">
                        Delete Journal{" "}
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

export default ListJournal
