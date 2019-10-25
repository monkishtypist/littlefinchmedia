import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import Column from "../components/column"
import Img from "gatsby-image"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "placeholder-1.jpg" }) {
        ...fluidImage
      }
    }
    fragment fluidImage on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <Column>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </Column>
        <Column>
          <Img
            fluid={data.imageOne.childImageSharp.fluid}
            objectFit="cover"
            style={{ height: `100%` }}
          />
        </Column>
      </Section>
      <Section>
        <div className="container">
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </div>
      </Section>
      <Section>
        <div className="container">
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
