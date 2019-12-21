import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"

const Wrapper = styled.div`
  background-color: transparent;
  box-shadow: 0 0 18px rgba(0,0,0,.2);
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  position: fixed;
  top: 2rem;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
`

const Main = styled.main`
  background-color: transparent;
  flex: 1 0 auto;
`

const PageTemplate = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer/>
    </Wrapper>
  )
}

export default PageTemplate