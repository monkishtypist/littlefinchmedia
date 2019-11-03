import React from "react"
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import Link from 'gatsby-plugin-transition-link/AniLink'
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
      <Link
        fade
        to="/"
        activeClass="active"
        className={`navbar__brand`}
        exit={{
        }}
        entry={{
          delay: 0.5
        }}
      >
        {siteTitle}
      </Link>
      <Link
        fade
        to="/strategy"
        activeClass="active"
        className={`navbar__link`}
        exit={{
        }}
        entry={{
          delay: 0.5
        }}
      >
        Strategy
      </Link>
      <Link
        fade
        to="/development"
        activeClass="active"
        className={`navbar__link`}
        exit={{
        }}
        entry={{
          delay: 0.5
        }}
      >
        Development
      </Link>
      <Link
        fade
        to="/growth"
        activeClass="active"
        className={`navbar__link`}
        exit={{
        }}
        entry={{
          delay: 0.5
        }}
      >
        Growth
      </Link>
      <Link
        fade
        to="/connect"
        activeClass="active"
        className={`navbar__link`}
        exit={{
        }}
        entry={{
          delay: 0.5
        }}
      >
        Connect
      </Link>
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
