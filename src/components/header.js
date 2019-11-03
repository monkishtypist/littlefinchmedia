import React from "react"
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Link as Anchor } from 'react-scroll'
import styled from "styled-components"

const Header = styled.header`
  background: transparent;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`

const Nav = styled.nav`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  .navbar__brand {
    color: black;
    cursor: pointer;
    font-weight: bold;
    margin-right: auto;
    padding: 1rem;
  }
  .navbar__link {
    color: gray;
    cursor: pointer;
    padding: 1rem;
    &:first-child {
      margin-left: auto;
    }
    &.active {
      color: black;
    }
  }
`

const PageHeader = ({ siteTitle }) => (
  <Header className={`header`}
  >
    <Nav className={`navbar`} role="navigation" aria-label="main navigation">
      <Anchor
        className={`navbar__brand`}
        activeClass="active"
        to="Welcome"
        spy={true}
        smooth={true}
        duration={350}
      >
        {siteTitle}
      </Anchor>
      <Anchor
        className={`navbar__link`}
        activeClass="active"
        to="Strategy"
        spy={true}
        smooth={true}
        duration={350}
      >
        Strategy
      </Anchor>
      <Anchor
        className={`navbar__link`}
        activeClass="active"
        to="Development"
        spy={true}
        smooth={true}
        duration={350}
      >
        Development
      </Anchor>
      <Anchor
        className={`navbar__link`}
        activeClass="active"
        to="Growth"
        spy={true}
        smooth={true}
        duration={350}
      >
        Growth
      </Anchor>
      <Anchor
        className={`navbar__link`}
        activeClass="active"
        to="site-footer"
        spy={true}
        smooth={true}
        duration={350}
      >
        Connect
      </Anchor>
    </Nav>
  </Header>
)

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: ``,
}

export default PageHeader
