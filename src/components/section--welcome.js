import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import Section from './section'

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
    <SectionOuter id={id || ''} className={className || ''}>
      <SectionInner fluid={data.sectionBackground.childImageSharp.fluid}>
        <Content>
          <div>
            <h1>Little Finch Media</h1>
          </div>
        </Content>
      </SectionInner>
    </SectionOuter>
  )
}

export default SectionHero
