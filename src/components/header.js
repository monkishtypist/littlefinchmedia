import React from "react"
import { Link } from 'gatsby'
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
  justify-content: space-around;
  .navbar__brand {
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin-right: auto;
    padding: 1rem;
  }
  .navbar__link {
    color: gray;
    cursor: pointer;
    padding: 1rem;
    &:last-child {
      margin-right: auto;
    }
    &.active {
      background-color: rgba(0,0,0,.20);
      color: white;
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
        to="Section1"
        spy={true}
        smooth={true}
        duration={350}
      >
        {siteTitle}
      </Anchor>
      <Anchor
        className={`navbar__link`}
        activeClass="active"
        to="Section2"
        spy={true}
        smooth={true}
        duration={350}
        offset={1}
      >
        Social Media
      </Anchor>
      <Anchor
        className={`navbar__link`}
        activeClass="active"
        to="Section3"
        spy={true}
        smooth={true}
        duration={350}
        offset={1}
      >
        Architecture
      </Anchor>
      <Anchor
        className={`navbar__link`}
        activeClass="active"
        to="Section4"
        spy={true}
        smooth={true}
        duration={350}
        offset={1}
      >
        Custom
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
