import React, { useEffect } from "react"

//Source and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Function that loads a container for consistency use
function Container(props) {
  return <div className={"container py-md-5" + (props.wide ? "" : "container--narrow")}>{props.children}</div>
}

export default Container
