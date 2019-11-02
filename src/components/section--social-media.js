import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const Section = styled(BackgroundImage)`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-height: calc(100vh + 1px);
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
  flex: 1 1 auto;
  justify-content: center;
  z-index: 1;
  h2 {
    font-size: 40px;
  }
`

const SectionSocialMedia = ({ id, className }) => {
  const data = useStaticQuery(graphql`
    query {
      sectionBackground: file(relativePath: { eq: "gouldian-finches.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return (
    <Section
      Tag="section"
      id={id || ''}
      className={className || ''}
      fluid={data.sectionBackground.childImageSharp.fluid}
    >
      <Content>
        <div>
          <h2>Social Media</h2>
          <p>Lorem ipsum dolor set.</p>
          <p>Now go build something great.</p>
        </div>
      </Content>
    </Section>
  )
}

export default SectionSocialMedia
