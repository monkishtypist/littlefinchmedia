import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleAuthentication } from "../utils/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Section from '../components/section'
import Title from '../components/title'
import BackgroundImage from 'gatsby-background-image'

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

const Callback = () => {
  const data = useStaticQuery(graphql`
    query {
      sectionBackground: file(relativePath: { eq: "gouldian-finches.jpg" }) {
        ...fluidImage
      }
      site {
        ...siteMeta
      }
    }
  `)

  handleAuthentication()

  return (
    <Layout>
      <SEO title="Callback" />
      <Section id="Callback" className="section">
        <SectionInner fluid={data.sectionBackground.childImageSharp.fluid}>
          <Content>
            <Title>Callback</Title>
          </Content>
        </SectionInner>
      </Section>
    </Layout>
  )
}

export default Callback
