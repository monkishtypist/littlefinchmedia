import { graphql } from "gatsby"

export const query = graphql `
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment siteMeta on Site {
    siteMetadata {
      title
      description
    }
  }
`
