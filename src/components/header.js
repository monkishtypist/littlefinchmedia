import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const Header = styled.header`
  background: transparent;
  display: flex;
  left: 0;
  line-height: 1.14285714286;
  /* padding: 2rem 2rem 1rem; */
  position: relative;
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

const NavbarBrand = styled(Link)`
  color: rgba(255,255,255,1);
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  margin-right: auto;
  padding: 1rem;
  text-decoration: none;
  &.hidden {
    display: none;
  }
`

const NavbarLinks = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
`

const NavbarLink = styled(Link)`
  background-color: transparent;
  border-radius: 50%;
  color: rgba(255,255,255,1);
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  height: 80px;
  padding: 1rem .5rem;
  text-decoration: none;
  transition: all .25s ease-in-out;
  width: 80px;
  filter: brightness(0) invert(1);
  transition: filter .35s ease-in-out;
  &:hover {
    color: rgba(0,0,0,1);
    filter: brightness(1) invert(0);
  }
`

const PageHeader = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      navImageStrategy: file(relativePath: { eq: "finch-reeds--inverted.png" }) {
        ...navFluidImage
      }
      navImageDevelopment: file(relativePath: { eq: "weaver-finch--inverted.png" }) {
        ...navFluidImage
      }
      navImageGrowth: file(relativePath: { eq: "gouldian-finches--inverted.png" }) {
        ...navFluidImage
      }
      navImageConnect: file(relativePath: { eq: "two-finches--inverted.png" }) {
        ...navFluidImage
      }
      site {
        ...siteMeta
      }
    }
  `)

  return (
    <Header className={`header`}>
      <Navbar className={`navbar`} role="navigation" aria-label="main navigation">
        <NavbarBrand
          fade
          to="/"
          exit={{
          }}
          entry={{
            delay: 0.5
          }}
          activeClassName={`hidden`}
        >
          {siteTitle}
        </NavbarBrand>
        <NavbarLinks>
          <NavbarLink
            fade
            to="/strategy"
            className={`navbar__link navbar__img`}
            activeClassName="active"
            alt="Strategy"
            exit={{
            }}
            entry={{
              delay: 0.5
            }}
          >
            <Img fluid={data.navImageStrategy.childImageSharp.fluid} />
          </NavbarLink>
          <NavbarLink
            fade
            to="/development"
            className={`navbar__link`}
            activeClassName="active"
            alt="Development"
            exit={{
            }}
            entry={{
              delay: 0.5
            }}
          >
            <Img fluid={data.navImageDevelopment.childImageSharp.fluid} />
          </NavbarLink>
          <NavbarLink
            fade
            to="/growth"
            className={`navbar__link`}
            activeClassName="active"
            alt="Growth"
            exit={{
            }}
            entry={{
              delay: 0.5
            }}
          >
            <Img fluid={data.navImageGrowth.childImageSharp.fluid} />
          </NavbarLink>
          <NavbarLink
            fade
            to="/connect"
            className={`navbar__link`}
            activeClassName="active"
            alt="Connect"
            exit={{
            }}
            entry={{
              delay: 0.5
            }}
          >
            <Img fluid={data.navImageConnect.childImageSharp.fluid} />
          </NavbarLink>
        </NavbarLinks>
      </Navbar>
    </Header>
  )
}

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: ``,
}

export default PageHeader
