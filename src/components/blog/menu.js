import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const BlogMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        ...siteMeta
      }
    }
  `)

  return (
    <>
      <p>This is the menu</p>
    </>
  )
}

export default BlogMenu
