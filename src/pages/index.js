import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { node } from "prop-types"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
          <SEO title="Home" />
          <div>
              <h1>Akash's Thoughts</h1>
              <h4>{data.allMarkdownRemark.totalCount}</h4>
              {
                  data.allMarkdownRemark.edges.map(({node}) => (
                      <div key={node.id}>
                        <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
                        <p>{node.excerpt}</p>
                      </div>
                  ))
              }
          </div>
        </Layout>
    )
}

export const query = graphql`
query {
    allMarkdownRemark {
      totalCount  
      edges {
        node {
          id
          frontmatter {
            description
            date
            title
          }
          html
          excerpt
        }
      }
    }
  }`