import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const MainWrapper = styled.div`
  background-color: transparent;
`

const Layout = ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper className={`main-wrapper`}>
        <main className={`main`}>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
      </MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
