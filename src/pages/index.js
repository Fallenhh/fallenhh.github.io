import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

export default function Home({ data }) {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="post-item">
            <div>
              <span className="post-date">
                {node.frontmatter.date}
              </span>
              <Link to={node.fields.slug} className="post-link">
                {node.frontmatter.title}{" "}
              </Link>
            </div>
            <div dangerouslySetInnerHTML= {{__html: node.excerpt}}></div>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date
          title
        }
        fields {
          slug
        }
        excerpt(format: HTML)
      }
    }
  }
}

`