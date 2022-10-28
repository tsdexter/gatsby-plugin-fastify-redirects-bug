import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function Homepage(props) {
  const { wpPage } = props.data

  return (
    <div>{wpPage?.content}</div>
  )
}

export const query = graphql`
query HomePageContent {
  wpPage(uri: { eq: "/" }) {
    uri
    title
    content
  }
}
`
