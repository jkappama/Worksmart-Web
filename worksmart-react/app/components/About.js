import React, { useEffect } from "react"
import Page from "./Page"

//Source and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Function loads the About page with information related to stress and how WorkSmart can solve the problem
function About() {
  return (
    //Page component aligns the content together for consistency between pages
    //What is embedded between the Page component is JSX which is similar to HTML, but with subtle differences
    <Page title="About WorkSmart">
      <h2 className="text-white">About Us</h2>
      <p className="lead text-white">Suicide, alcholism, depression, mental illness and blood pressure are only some of the work related issues that occur in a pressured environment.</p>
      <div className="lead text-white">
        <b>
          <u>Workplace Related Statistics</u>
        </b>
        <p>
          According to the American Institute of Stress{" "}
          <a className="text-white" href="https://www.stress.org/42-worrying-workplace-stress-statistics">
            https://www.stress.org/42-worrying-workplace-stress-statistics
          </a>
        </p>
        <p>94% of workers in America reported having stress in 2019.</p>
        <p>80% of US workers had stress because of communication issues in 2019.</p>
        <p>80% of US workers had stress because of communication issues in 2019.</p>
        <p>63% of US workers are fed up and eager to give up their jobs.</p>
        <br></br>
        <img style={{ width: "500px", height: "300px" }} src="unhappy.jpeg" />
        <br></br>
        <p>
          <b>
            <u>What is the solution to solve stress and lower pressure in the workplace?</u>
          </b>
        </p>
        <p>The answer is WorkSmart. The application will help you realize the best in you because after all, the answer lies within you for a positive life!</p>
        <img style={{ width: "500px", height: "300px" }} src="happy.jpg" />
      </div>
    </Page>
  )
}

export default About
