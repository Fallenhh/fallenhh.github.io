import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/postlist.sass"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="post-list">
      {data.allMarkdownRemark.edges.filter(
        ({node}) => node.frontmatter.hidden !== "true"
      ).map(({ node }) => (
          <div key={node.id} className="post-item">
            <div>
              <span className="post-date">
                {node.frontmatter.date}
              </span>
              <Link to={node.fields.slug} className="post-link">
                {node.frontmatter.title}{" "}
              </Link>
            </div>
            <div dangerouslySetInnerHTML= {{__html: node.excerpt}} className="typo"></div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        excerpt(format: HTML)
        fields {
          slug
        }
        frontmatter {
          hidden
          date
          title
        }
      }
    }
  }
}

`