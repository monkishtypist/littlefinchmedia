import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

const Header = styled.header`
  background: transparent;
  display: flex;
  justify-content: center;
  left: 0;
  line-height: 1.14285714286;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`

const Navbar = styled.nav`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-between;
`

const NavbarBrand = styled(AniLink)`
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  margin-right: auto;
  padding: 1rem;
  text-decoration: none;
`

const NavbarLinks = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
`

const NavbarAniLink = styled(AniLink)`
  color: rgba(0,0,0,.5);
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  padding: 1rem;
  text-decoration: none;
  &.active,
  &:hover {
    color: rgba(0,0,0,1);
  }
`

const PageHeader = ({ siteTitle }) => (
  <Header className={`header`}
  >
    <Navbar className={`navbar`} role="navigation" aria-label="main navigation">
      <NavbarBrand
        fade
        to="/"
        exit={{
        }}
        entry={{
          delay: 0.5
        }}
      >
        {siteTitle}
      </NavbarBrand>
      <NavbarLinks>
        <NavbarAniLink
          fade
          to="/strategy"
          className={`navbar__link`}
          activeClassName="active"
          exit={{
          }}
          entry={{
            delay: 0.5
          }}
        >
          Strategy
        </NavbarAniLink>
        <NavbarAniLink
          fade
          to="/development"
          className={`navbar__link`}
          activeClassName="active"
          exit={{
          }}
          entry={{
            delay: 0.5
          }}
        >
          Development
        </NavbarAniLink>
        <NavbarAniLink
          fade
          to="/growth"
          className={`navbar__link`}
          activeClassName="active"
          exit={{
          }}
          entry={{
            delay: 0.5
          }}
        >
          Growth
        </NavbarAniLink>
        <NavbarAniLink
          fade
          to="/connect"
          className={`navbar__link`}
          activeClassName="active"
          exit={{
          }}
          entry={{
            delay: 0.5
          }}
        >
          Connect
        </NavbarAniLink>
      </NavbarLinks>
    </Navbar>
  </Header>
)

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: ``,
}

export default PageHeader
