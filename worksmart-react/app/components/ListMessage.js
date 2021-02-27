import React, { Component } from "react"
import MessageService from "../services/MessageService"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html
//Component that is used to list all Messages within the application
class ListMessage extends Component {
  //Standard React constructor
  //Inherit properties and set the object array for messages to a null array
  //Add bindings for the methods where appropriate
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
    }
    this.addMessage = this.addMessage.bind(this)
    this.editMessage = this.editMessage.bind(this)
    this.deleteMessage = this.deleteMessage.bind(this)
  }

  //Deletes a message from the JSON array based on ID
  deleteMessage(id) {
    MessageService.deleteMessage(id).then((res) => {
      this.setState({ messages: this.state.messages.filter((message) => message.id !== id) })
    })
  }

  //Views a message from the JSON array based on ID
  viewMessage(id) {
    this.props.history.push(`/view-message/${id}`)
  }

  //Not used (for future reference)
  editMessage(id) {
    this.props.history.push(`/add-message/${id}`)
  }

  //Check if the listing of the messages is in the Virtual DOM
  componentDidMount() {
    MessageService.getMessages().then((res) => {
      this.setState({ messages: res.data })
    })
  }

  //Not used (for future reference)
  addMessage() {
    this.props.history.push("/add-message/_add")
  }

  //UI of the ListMessage component and actions to take based on change
  render() {
    return (
      <Page title="All Support Tickets">
        <div>
          <h2 className="text-center text-white">
            <b>All Support Tickets</b>
          </h2>
          <br></br>
          <div className="row">
            <table className="table table-striped form-group table-bordered">
              <thead>
                <tr>
                  <th className="text-center text-white">Ticket Date</th>
                  <th className="text-center text-white">Agent</th>
                  <th className="text-center text-white">View or Delete Message</th>
                </tr>
              </thead>
              <tbody>
                {this.state.messages.map((message) => (
                  <tr key={message.id}>
                    <td className="text-center text-white"> {message.date} </td>
                    <td className="text-white"> {message.agent}</td>
                    <td>
                      <button style={{ marginLeft: "200px" }} onClick={() => this.viewMessage(message.id)} className="btn btn-primary">
                        View Ticket{" "}
                      </button>
                      <button style={{ marginLeft: "235px" }} onClick={() => this.deleteMessage(message.id)} className="btn btn-danger">
                        Delete Ticket{" "}
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

export default ListMessage
