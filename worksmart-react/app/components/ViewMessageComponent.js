import React, { Component } from "react"
import MessageService from "../services/MessageService"
import { Link } from "react-router-dom"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//View a single message based on id
class ViewMessageComponent extends Component {
  //Standard React constructor to inherit properties and initialize the state
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      message: {},
    }
  }

  //Get the data of the message
  componentDidMount() {
    MessageService.getMessage(this.state.id).then((res) => {
      this.setState({ message: res.data })
    })
  }

  //UI for single Ticket View
  render() {
    return (
      <Page title="Ticket View">
        <form>
          <div className="form-group text-white">
            <label for="post-date" className="mb-1">
              <small>Date</small>
            </label>
            <input autofocus name="date" id="post-date" value={this.state.message.date} className="form-control form-control-lg" type="text" placeholder="" autocomplete="off" />
          </div>
          <div className="form-group text-white">
            <label for="post-title" className="mb-1">
              <small>Chat Agent</small>
            </label>
            <div>
              <select id="chatperson" name="chatperson" value={this.state.message.agent}>
                <option value="ai">AI</option>
                <option value="agent1">Agent 1</option>
                <option value="agent2">Agent 2</option>
                <option value="agent3">Agent 3</option>
                <option value="agent4">Agent 4</option>
                <option value="agent5">Agent 5</option>
              </select>
            </div>
          </div>
          <div className="form-group text-white">
            <label for="post-body" className="mb-1 d-block">
              <small>Message</small>
            </label>
            <textarea name="body" id="post-body" value={this.state.message.messageContent} className="body-content tall-textarea form-control" type="text"></textarea>
          </div>
          <Link className="btn btn-primary" style={{ marginLeft: "10px" }} to="/messages">
            View Tickets
          </Link>
        </form>
        <br></br>
      </Page>
    )
  }
}

export default ViewMessageComponent
