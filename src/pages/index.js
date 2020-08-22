import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet title="foo" defer="false"/>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          id
          excerpt
        }
      }
      totalCount
    }
  }
`