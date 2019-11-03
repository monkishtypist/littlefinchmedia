import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Section from '../components/section'
import BackgroundImage from 'gatsby-background-image'

const SectionOuter = styled(Section)`
  box-sizing: border-box;
  height: 100vh;
  padding: 5rem 2rem 2rem;
`

const SectionInner = styled(BackgroundImage)`
  box-shadow: 0 0 18px rgba(0,0,0,.2);
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  position: relative;
  background-attachment: fixed;
  &::before,
  &::after {
    background-attachment: fixed;
  }
`

const Content = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  h2 {
    font-size: 40px;
  }
`

const PageDevelopment = ({ id, className }) => {
  const data = useStaticQuery(graphql`
    query {
      sectionBackground: file(relativePath: { eq: "weaver-finch-2.jpg" }) {
        ...fluidImage
      }
      site {
        ...siteMeta
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Development" />
      <SectionOuter id={id || 'Development'} className={className || ''}>
        <SectionInner fluid={data.sectionBackground.childImageSharp.fluid}>
          <Content>
            <h1>Development</h1>
          </Content>
        </SectionInner>
      </SectionOuter>
    </Layout>
  )
}

export default PageDevelopment