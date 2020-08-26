import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/blogpost.sass"
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div className="post-title">{post.frontmatter.title}</div>
        <div className="post-date">{post.frontmatter.date}</div>
        <div className="typo" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`