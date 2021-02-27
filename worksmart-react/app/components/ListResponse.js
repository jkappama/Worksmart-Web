import React, { Component } from "react"
import AutomatedResponseService from "../services/AutomatedResponseService"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html
//Component that is used to list all Responses within the application
class ListResponse extends Component {
  //Standard React construct to initialize the properties and responses object
  constructor(props) {
    super(props)

    this.state = {
      responses: [],
    }
    //Add appropriate bindings to add, edit and delete methods
    this.addResponse = this.addResponse.bind(this)
    this.editResponse = this.editResponse.bind(this)
    this.deleteResponse = this.deleteResponse.bind(this)
  }

  //Delete a response based on id
  deleteResponse(id) {
    AutomatedResponseService.deleteResponse(id).then((res) => {
      this.setState({ responses: this.state.responses.filter((response) => response.id !== id) })
    })
  }

  //View a response based on id and route using properties
  viewResponse(id) {
    this.props.history.push(`/view-response/${id}`)
  }

  //Ignore. Not used. Kept for future reference.
  editResponse(id) {
    this.props.history.push(`/add-response/${id}`)
  }

  //Is the component in the Virtual DOM> If so, set the state of responses appropriately
  componentDidMount() {
    AutomatedResponseService.getResponses().then((res) => {
      this.setState({ responses: res.data })
    })
  }

  //Ignore. Not used. Kept for future reference.
  addResponse() {
    this.props.history.push("/add-response/_add")
  }

  //UI of the Responses component
  render() {
    return (
      <Page title="All Responses">
        <div>
          <h2 className="text-center text-white">
            <b>All Responses</b>
          </h2>
          <br></br>
          <div className="row">
            <table className="table table-striped form-group table-bordered">
              <thead>
                <tr>
                  <th className="text-center text-white">Response Date</th>
                  <th className="text-center text-white">Type</th>
                  <th className="text-center text-white">Occasion</th>
                  <th className="text-center text-white">View or Delete Response</th>
                </tr>
              </thead>
              <tbody>
                {this.state.responses.map((response) => (
                  <tr key={response.id}>
                    <td className="text-center text-white"> {response.date} </td>
                    <td className="text-white"> {response.type}</td>
                    <td className="text-white">{response.occasion}</td>
                    <td>
                      <button style={{ marginLeft: "80px" }} onClick={() => this.viewResponse(response.id)} className="btn btn-primary">
                        View Response{" "}
                      </button>
                      <button style={{ marginLeft: "125px" }} onClick={() => this.deleteResponse(response.id)} className="btn btn-danger">
                        Delete Response{" "}
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

export default ListResponse
