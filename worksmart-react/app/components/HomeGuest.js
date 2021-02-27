import React from "react"
import Page from "./Page"

//Source and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Function loads the register panel (displayed only, but not used for the project)
function HomeGuest() {
  return (
    <Page wide={true} title="Home">
      <div className="row align-items-center text-white">
        <div className="col-lg-7 py-3 py-md-2">
          <h1 className="display-3">Stressed at work?</h1>
          <p className="lead">Make decisions that will enable you to work faster and smarter.</p>
          <p className="lead">Worksmart will give you the tools to work stress free and more efficiently.</p>
          <img src="stress1.jpg" />
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div className="form-group">
              <label htmlFor="username-register" className="mb-1">
                <small>Username</small>
              </label>
              <input id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="mb-1">
                <small>Email</small>
              </label>
              <input id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="mb-1">
                <small>Password</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-primary btn-block">
              Sign up for WorkSmart
            </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
