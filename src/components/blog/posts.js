import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PostWrapper = styled(Link)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <Wrapper>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <PostWrapper key={index} to={node.frontmatter.path}>
          <div>{node.frontmatter.title}</div>
          <div>{node.frontmatter.date}</div>
        </PostWrapper>
      ))}
    </Wrapper>
  )
}

export default BlogPosts
