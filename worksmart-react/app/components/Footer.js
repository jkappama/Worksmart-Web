import React from "react"
import { Link } from "react-router-dom"

//Source and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Function loads the Footer component at the bottom of the page.
function Footer() {
  return (
    <footer className="border-top text-center small py-3">
      <p className="text-white">
        <Link to="/" className="mx-1 text-white">
          Home
        </Link>{" "}
        |{" "}
        <Link className="mx-1 text-white" to="/about-us">
          About Us
        </Link>
      </p>
      <p className="m-0 text-white">
        Copyright &copy; 2020 <a href="/">WorkSmart</a>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
