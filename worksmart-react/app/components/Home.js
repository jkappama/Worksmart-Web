import React, { useEffect } from "react"
import Page from "./Page"

//Source and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Function that loads what WorkSmart is all about when the user logs in.
function Home() {
  return (
    <Page title="Home">
      <h2 className="text-center text-white">Welcome to WorkSmart!</h2>
      <p className="lead text-center text-white">Your guide to a stress free work life!</p>
      <div className="text-white">
        <b>
          <u>The secret ingredient?</u>
        </b>
        <p>The secret to working smart is not in the tools you choose, but it lies within you as an individual.</p>
        <br></br>
        <b>
          <u>Brief description of WorkSmart:</u>
        </b>
        <p>Worksmart provides you tools for you to journal, log and generate automated responses in order to work smarter.</p>
        <p>However, it ultimately all depends on you to work smart. It's a change in thinking and a mindset that will allow you to work more productively.</p>
      </div>
      <img src="riseup.jpg" />
      <div className="text-white">
        <br></br>
        <h2 className="text-white">What tools does WorkSmart have?</h2>
        <br></br>
        <b>
          <u>Journal</u>
        </b>
        <p>The Journal tool allows you to focuse on self reflection. It enables you to reflect on how you can improve, become stronger and more wise from your experiences.</p>
        <br></br>
        <b>
          <u>Logger</u>
        </b>
        <p>The Logger tool is all about time. Logging your time on tasks will help you work more efficiently.</p>
        <p>Combining the Logger with the Journal will greatly help you to reflect why you may be taking more time on some tasks and will help you soar as you learn more about how you work.</p>
        <b>
          <u>Automated Responses</u>
        </b>
        <p>The Automated Responses tool will help you prepare for tough meetings and discussions when you don't have time to prepare.</p>
        <p>Take advantage of these templates and modify them to expand on your needs.</p>
        <b>
          <u>Contact Us Ticketing</u>
        </b>
        <p>We care about you! Contact us by submitting a ticket and we will get back to you within 1-2 business days.</p>
      </div>
    </Page>
  )
}

export default Home
