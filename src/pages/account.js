import React from "react"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { useStaticQuery, graphql } from "gatsby"
import PageTemplate from "../templates/pages"
import styled from "styled-components"
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
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100vw - 4rem);
  overflow: hidden;
  z-index: 1;
  pre {
    white-space: pre-wrap;
    word-break: break-all;
  }
`

const AccountPage = ({ id, className }) => {
  const data = useStaticQuery(graphql`
    query {
      sectionBackground: file(relativePath: { eq: "finches-on-branch.jpg" }) {
        ...fluidImage
      }
      site {
        ...siteMeta
      }
    }
  `)

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <PageTemplate>
      <BackgroundImageWrapper fluid={data.sectionBackground.childImageSharp.fluid}>
        <Content>
          <p>Hello and welcome {user.nickname || "friend"}</p>
          <p>
            There is nothing to see here at the moment.
          </p>
        </Content>
      </BackgroundImageWrapper>
    </PageTemplate>
  )
}

export default AccountPage
