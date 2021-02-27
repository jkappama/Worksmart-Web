import React, { Component } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"
import MessageService from "../services/MessageService"
import { withRouter } from "react-router-dom"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//Chat component
class Chat extends Component {
  //Initialize to get all properties within the application and with empty JSON values for the state
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      date: "",
      agent: "",
      messageContent: "",
    }

    //Add bindings for data handlers
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeAgentHandler = this.changeAgentHandler.bind(this)
    this.changeMessageContentHandler = this.changeMessageContentHandler.bind(this)
    this.saveOrUpdateMessage = this.saveOrUpdateMessage.bind(this)
  }

  //Check if the component is in the Virtual DOM and set the state of the message object accordingly
  componentDidMount() {
    if (this.state.id === "_add") {
      return
    } else {
      MessageService.getMessage(this.state.id).then((res) => {
        let message = res.data
        this.setState({
          date: message.date,
          agent: message.agent,
          messageContent: message.messageContent,
        })
      })
    }
  }

  //Main part of the component.
  //Sends the JSON message object over to the API for processing as an object.
  saveOrUpdateMessage = (e) => {
    e.preventDefault()
    let message = { date: this.state.date, agent: this.state.agent, messageContent: this.state.messageContent }
    console.log("message => " + JSON.stringify(message))

    if (this.state.id === "_add") {
      MessageService.createMessage(message).then((res) => {
        this.props.history.push("/messages")
      })
    } else {
      MessageService.createMessage(message, this.state.id).then((res) => {
        this.props.history.push("/messages")
      })
    }
  }

  //Handlers for each of the JSON keys based on events
  changeDateHandler = (event) => {
    this.setState({ date: event.target.value })
  }

  changeAgentHandler = (event) => {
    this.setState({ agent: event.target.value })
  }

  changeMessageContentHandler = (event) => {
    this.setState({ messageContent: event.target.value })
  }

  cancel() {
    this.props.history.push("/messages")
  }

  //UI for the Contact US/Message component
  render() {
    return (
      <Page title="Contact Us">
        <form>
          <div className="form-group text-white">
            <label for="post-title" className="mb-1">
              <small>Chat Agent</small>
            </label>
            <div>
              <select id="chatperson" name="chatperson" value={this.state.agent} onChange={this.changeAgentHandler}>
                <option value="ai">AI</option>
                <option value="Agent 1">Agent 1</option>
                <option value="Agent 2">Agent 2</option>
                <option value="Agent 3">Agent 3</option>
                <option value="Agent 4">Agent 4</option>
                <option value="Agent 5">Agent 5</option>
              </select>
            </div>
          </div>
          <div className="form-group text-white">
            <label for="post-body" className="mb-1 d-block">
              <small>Message</small>
            </label>
            <textarea name="body" id="post-body" value={this.state.messageContent} onChange={this.changeMessageContentHandler} className="body-content tall-textarea form-control" type="text"></textarea>
          </div>
          <Link className="btn btn-primary" onClick={this.saveOrUpdateMessage} to="/messages">
            Submit Ticket
          </Link>
          <Link className="btn btn-primary" style={{ marginLeft: "10px" }} to="/messages">
            View Tickets
          </Link>
        </form>
        <br></br>
      </Page>
    )
  }
}
export default withRouter(Chat)
