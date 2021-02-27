import React, { Component } from "react"
import AutomatedResponseService from "../services/AutomatedResponseService"
import { Link } from "react-router-dom"
import Page from "./Page"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//View a single response based on id
class ViewResponseComponent extends Component {
  //Standard React constructor with inherited properties and initial model
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      response: {},
    }
  }

  //Get the data of the Response by id
  componentDidMount() {
    AutomatedResponseService.getResponse(this.state.id).then((res) => {
      this.setState({ response: res.data })
    })
  }

  //UI of single Response view
  render() {
    return (
      <Page title="Response View">
        <form>
          <div className="form-group text-white">
            <label for="post-date" className="mb-1">
              <small>Date</small>
            </label>
            <input autofocus name="date" id="post-date" value={this.state.response.date} className="form-control form-control-lg" type="text" placeholder="" autocomplete="off" />
          </div>
          <div className="form-group text-white">
            <label for="post-title" className="mb-1">
              <small>Automated Responses Type</small>
            </label>
            <div>
              <select id="automatedresponsetype" name="automatedresponsetype" value={this.state.response.type}>
                <option value="email">Email</option>
                <option value="informativespeech">Informative Speech</option>
                <option value="motivationalspeech">Motivational Speech</option>
                <option value="presentation">Presentation</option>
                <option value="discussion">Discussion</option>
                <option value="meeting">Meeting</option>
              </select>
            </div>
          </div>
          <div className="form-group text-white">
            <label for="post-type" className="mb-1">
              <small>Occassion</small>
            </label>
            <div>
              <input autofocus name="title" id="post-title" value={this.state.response.occasion} className="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
            </div>
          </div>

          <div className="form-group text-white">
            <label for="post-body" className="mb-1 d-block">
              <small>Keywords</small>
            </label>
            <textarea name="body" id="post-body" value={this.state.response.keywords} className="body-content tall-textarea form-control" type="text"></textarea>
          </div>
          <div className="form-group text-white">
            <label for="post-body" className="mb-1 d-block">
              <small>Response Content</small>
            </label>
            <textarea name="body" id="post-body" className="body-content tall-textarea form-control" type="text" value={this.state.response.responseContent}></textarea>
          </div>
          <Link className="btn btn-primary" style={{ marginLeft: "10px" }} to="/responses">
            View Responses
          </Link>
        </form>
        <br></br>
      </Page>
    )
  }
}

export default ViewResponseComponent
