import React, { useEffect } from "react"
import Container from "./Container"

//Page component to add consistency using useEffect (page title is used)
//Container component is added here to fit the content in the page
function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | WorkSmart`
    window.scrollTo(0, 0)
  }, [])

  return <Container wide={props.wide}>{props.children}</Container>
}

export default Page
