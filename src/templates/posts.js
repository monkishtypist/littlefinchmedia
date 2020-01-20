import React from "react"
import { graphql } from "gatsby"
import BlogTemplate from "../templates/blog"
import styled from "styled-components"

const PostWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`

const PostHeader = styled.div`
  padding: 1rem;
`

const PostBody = styled.div`
  padding: 1rem;
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <BlogTemplate>
      <PostWrapper>
        <PostHeader>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </PostHeader>
        <hr />
        <PostBody>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </PostBody>
      </PostWrapper>
    </BlogTemplate>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
