import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"

export default function Page(props) {
  const {  wpPage: page } = props.data

  return (
          <div
            dangerouslySetInnerHTML={{
              __html: page.content,
            }}
          />
  )
}

export const query = graphql`
  query PageContent($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      uri
      title
      content
    }
  }
`
