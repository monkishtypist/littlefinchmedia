import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageTemplate from "../templates/pages"
import styled from "styled-components"
import Title from '../components/title'
import BackgroundImage from 'gatsby-background-image'

const BackgroundImageWrapper = styled(BackgroundImage)`
  background-attachment: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  padding-bottom: 3rem;
  padding-top: 5rem;
  position: absolute !important;
  right: 0;
  top: 0;
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

const PageGrowth = () => {
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

  return (
    <PageTemplate>
      <BackgroundImageWrapper fluid={data.sectionBackground.childImageSharp.fluid}>
        <Content>
          <Title>Growth</Title>
        </Content>
      </BackgroundImageWrapper>
    </PageTemplate>
  )
}

export default PageGrowth
