import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const Section = styled(BackgroundImage)`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
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
  h1 {
    font-size: 40px;
  }
`

const SectionHero = ({ id, className }) => {
  const data = useStaticQuery(graphql`
    query {
      sectionBackground: file(relativePath: { eq: "finches-on-branch.jpg" }) {
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
          <h1>Little Finch Media</h1>
        </div>
      </Content>
    </Section>
  )
}

export default SectionHero
