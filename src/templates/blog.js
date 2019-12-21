import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BlogMenu from "../components/blog/menu"
import BlogPosts from "../components/blog/posts"

const BlogWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
`

const BlogTemplate = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        ...siteMeta
      }
    }
  `)

  return (
    <BlogWrapper>
      <BlogMenu siteTitle={data.site.siteMetadata.title} />
      <BlogPosts />
      {children}
    </BlogWrapper>
  )
}

export default BlogTemplate
