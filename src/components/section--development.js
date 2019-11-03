import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
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
  h2 {
    font-size: 40px;
  }
`

const SectionCustom = ({ id, className }) => {
  const data = useStaticQuery(graphql`
    query {
      sectionBackground: file(relativePath: { eq: "weaver-finch-2.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return (
    <SectionOuter id={id || ''} className={className || ''}>
      <SectionInner fluid={data.sectionBackground.childImageSharp.fluid}>
        <Content>
          <div>
            <h2>Development</h2>
          </div>
        </Content>
      </SectionInner>
    </SectionOuter>
  )
}

export default SectionCustom
