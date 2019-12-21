import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import BlogTemplate from "../templates/blog"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        ...siteMeta
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Blog" />
      <BlogTemplate>
        <h1>The Blog Home Page</h1>
      </BlogTemplate>
    </>
  )
}

export default BlogPage
