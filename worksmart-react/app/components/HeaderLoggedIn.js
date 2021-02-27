import React, { useEffect } from "react"
import { Link } from "react-router-dom"

//Source and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Function to check if the user is specifically logged in or not.
//If the user is logged in, then the menu items will be shown, so the user can access the functions of the application
function HeaderLoggedIn(props) {
  return (
    <div className="flex-row my-3 my-md-0">
      <Link className="btn btn-primary mr-2" to="/">
        Home
      </Link>
      <Link className="btn btn-primary mr-2" to="/journal">
        Journal
      </Link>
      <Link className="btn btn-primary mr-2" to="/logger">
        Logger
      </Link>
      <Link className="btn btn-primary mr-2" to="/automated-responses">
        Automated Responses
      </Link>
      <Link className="btn btn-primary mr-2" to="/chat">
        Contact Us
      </Link>
      <button onClick={() => props.setLoggedIn(false)} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
