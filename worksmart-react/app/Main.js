import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import Home from "./components/Home"
import Logger from "./components/Logger"
import AutomatedResponses from "./components/AutomatedResponses"
import Journal from "./components/Journal"
import Chat from "./components/Chat"
import ListJournal from "./components/ListJournal"
import ViewJournalComponent from "./components/ViewJournalComponent"
import ListLog from "./components/ListLog"
import ViewLogComponent from "./components/ViewLogComponent"
import ListResponse from "./components/ListResponse"
import ViewResponseComponent from "./components/ViewResponseComponent"
import ListMessage from "./components/ListMessage"
import ViewMessageComponent from "./components/ViewMessageComponent"

function Main() {
  const [loggedIn, setLoggedIn] = useState()
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path="/journal" exact>
          <Journal />
        </Route>
        <Route path="/view-journal/:id" component={ViewJournalComponent}></Route>
        <Route path="/logger" exact>
          <Logger />
        </Route>
        <Route path="/automated-responses" exact>
          <AutomatedResponses />
        </Route>
        <Route path="/chat" exact>
          <Chat />
        </Route>
        <Route path="/about-us" exact>
          <About />
        </Route>
        <Route path="/terms" exact>
          <Terms />
        </Route>
        <Route path="/" exact component={ListJournal}></Route>
        <Route path="/journals" component={ListJournal}></Route>
        <Route path="/view-journal/:id" component={ViewJournalComponent}></Route>
        <Route path="/logs" component={ListLog}></Route>
        <Route path="/view-log/:id" component={ViewLogComponent}></Route>
        <Route path="/responses" component={ListResponse}></Route>
        <Route path="/view-response/:id" component={ViewResponseComponent}></Route>
        <Route path="/messages" component={ListMessage}></Route>
        <Route path="/view-message/:id" component={ViewMessageComponent}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
