import React, { useEffect } from "react"
import { useAuth } from "react-use-auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Section from '../components/section'
import Title from '../components/title'

const SectionInner = styled.div`
  box-shadow: 0 0 18px rgba(0,0,0,.2);
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  position: relative;
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`

const Callback = () => {
  const { handleAuthentication } = useAuth()

  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/account" })
  })

  return (
    <Layout>
      <SEO title="Callback" />
      <Section id="Callback" className="section">
        <SectionInner>
          <Content>
            <Title>Redirecting...</Title>
          </Content>
        </SectionInner>
      </Section>
    </Layout>
  )
}

export default Callback
