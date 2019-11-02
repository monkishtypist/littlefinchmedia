import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background-color: #000;
  color: #fff;
`

const PageFooter = ({ siteTitle, siteDescription }) => (
  <Footer className={`footer`}>
    <p>{siteTitle} © {new Date().getFullYear()}</p>
    <p>{siteDescription}</p>
  </Footer>
)

export default PageFooter
