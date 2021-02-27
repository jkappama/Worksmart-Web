import React, { Component } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"
import AutomatedResponseService from "../services/AutomatedResponseService"
import { withRouter } from "react-router-dom"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//AutomatedResponses class which extends component in order to be a component
class AutomatedResponses extends Component {
  //Inherit all the properties in the application when the component is created in the Virtual DOM
  constructor(props) {
    super(props)

    //Initialize the state to empty values. These are the JSON variables from the Mongo DB
    this.state = {
      id: "",
      date: "",
      type: "",
      occasion: "",
      keywords: "",
      responseContent: "",
    }

    //Add handlers to bind each JSON data for the Response model
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeTypeHandler = this.changeTypeHandler.bind(this)
    this.changeOccasionHandler = this.changeOccasionHandler.bind(this)
    this.changeKeywordsHandler = this.changeKeywordsHandler.bind(this)
    this.changeResponseContentHandler = this.changeResponseContentHandler.bind(this)
    this.saveOrUpdateResponse = this.saveOrUpdateResponse.bind(this)
  }

  //Check if the component is on the Virtual DOM and if so, get the values of the response
  componentDidMount() {
    if (this.state.id === "_add") {
      return
    } else {
      AutomatedResponseService.getResponse(this.state.id).then((res) => {
        let response = res.data
        this.setState({
          date: response.date,
          type: response.type,
          ocassion: response.occasion,
          keywords: response.keywords,
          responseContent: response.responseContent,
        })
      })
    }
  }

  //This code is the main part of the component as it saves the JSON values of the response object and passes it to the API
  //for further processing
  saveOrUpdateResponse = (e) => {
    e.preventDefault()
    let response = { date: this.state.date, type: this.state.type, occasion: this.state.occasion, keywords: this.state.keywords, responseContent: this.state.responseContent }
    console.log("response => " + JSON.stringify(response))

    if (this.state.id === "_add") {
      AutomatedResponseService.generateResponse(response).then((res) => {
        this.props.history.push("/responses")
      })
    } else {
      AutomatedResponseService.generateResponse(response, this.state.id).then((res) => {
        this.props.history.push("/responses")
      })
    }
  }

  //Specify all the handlers using the JSON keys
  changeDateHandler = (event) => {
    this.setState({ date: event.target.value })
  }

  changeTypeHandler = (event) => {
    this.setState({ type: event.target.value })
  }

  changeOccasionHandler = (event) => {
    this.setState({ occasion: event.target.value })
  }

  changeKeywordsHandler = (event) => {
    this.setState({ keywords: event.target.value })
  }

  changeResponseContentHandler = (event) => {
    this.setState({ responseContent: event.target.value })
  }

  cancel() {
    this.props.history.push("/responses")
  }

  //Show the UI of the component
  render() {
    return (
      <Page title="Automated Responses">
        <form>
          <div className="form-group text-white">
            <label for="post-title" className="mb-1">
              <small>Automated Responses Type</small>
            </label>
            <div>
              <select id="automatedresponsetype" name="automatedresponsetype" value={this.state.type} onChange={this.changeTypeHandler}>
                <option value="Email">Email</option>
                <option value="Informative Speech">Informative Speech</option>
                <option value="Motivational Speech">Motivational Speech</option>
                <option value="Presentation">Presentation</option>
                <option value="Discussion">Discussion</option>
                <option value="Meeting">Meeting</option>
              </select>
            </div>
          </div>
          <div className="form-group text-white">
            <label for="post-type" className="mb-1">
              <small>Occassion</small>
            </label>
            <div>
              <input autofocus name="title" id="post-title" value={this.state.occasion} onChange={this.changeOccasionHandler} className="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
            </div>
          </div>

          <div className="form-group text-white">
            <label for="post-body" className="mb-1 d-block">
              <small>Keywords</small>
            </label>
            <textarea name="body" id="post-body" value={this.state.keywords} onChange={this.changeKeywordsHandler} className="body-content tall-textarea form-control" type="text"></textarea>
          </div>
          <Link className="btn btn-primary" to="/responses" onClick={this.saveOrUpdateResponse}>
            Generate Automated Response
          </Link>
          <Link className="btn btn-primary" style={{ marginLeft: "10px" }} to="/responses">
            View Responses
          </Link>
        </form>
        <br></br>
      </Page>
    )
  }
}
export default withRouter(AutomatedResponses)
