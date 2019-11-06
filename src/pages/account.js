import React from "react"
import { Router } from "@reach/router"
import { useAuth } from "react-use-auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Section from '../components/section'

const SectionInner = styled.div`
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

const Home = ({ user }) => {
  return (
    <div>
      <p>Hello and welcome {user.nickname || "friend"}</p>
      <p>
        There is nothing to see here at the moment.
      </p>
    </div>
  )
}

const PageAccount = ({ id, className }) => {
  const { isAuthenticated, user, login } = useAuth()

  // if (!isAuthenticated()) return login()

  return (
    <Layout>
      <SEO title="Account" />
      <Section id={id || 'Account'} className={className || ''}>
        <SectionInner>
          <Content>
            <Router>
              <Home path="/account" user={user} />
            </Router>
          </Content>
        </SectionInner>
      </Section>
    </Layout>
  )
}

export default PageAccount
