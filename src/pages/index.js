import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionWelcome from "../components/section--welcome"
import SectionGrowth from "../components/section--growth"
import SectionStrategy from "../components/section--strategy"
import SectionDevelopment from "../components/section--development"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <SectionWelcome id="Welcome" />
      <SectionStrategy id="Strategy" />
      <SectionDevelopment id="Development" />
      <SectionGrowth id="Growth" />
    </Layout>
  )
}

export default IndexPage
