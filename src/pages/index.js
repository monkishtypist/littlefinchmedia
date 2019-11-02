import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHero from "../components/section--hero"
import SectionSocialMedia from "../components/section--social-media"
import SectionInfrastructure from "../components/section--infrastructure"
import SectionCustom from "../components/section--custom"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <SectionHero id="Section1" />
      <SectionSocialMedia id="Section2" />
      <SectionInfrastructure id="Section3" />
      <SectionCustom id="Section4" />
    </Layout>
  )
}

export default IndexPage
