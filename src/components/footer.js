import React from 'react'
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

const Footer = styled.footer`
  background: transparent;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1rem 2rem 2rem;
  position: fixed;
  right: 0;
  z-index: 1000;
`

const Navbar = styled.nav`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-between;
`
const NavbarLink = styled.a`
  color: rgba(255,255,255,1);
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  padding: 1rem;
  text-decoration: none;
  &.active,
  &:hover {
    color: rgba(255,255,255,.5);
  }
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

export default () => {
  const user = getProfile()

  return (
    <Footer>
      <Navbar className={`navbar`} role="navigation" aria-label="footer navigation">
        { !isAuthenticated() &&
          <>
            <div />
            <NavbarLink
              href="#login"
              onClick={e => {
                login()
                e.preventDefault()
              }}
            >
              Login
            </NavbarLink>
          </>
        }
        { isAuthenticated() &&
          <>
            <NavbarAniLink
              fade
              to="/account"
              activeClassName="active"
              exit={{
              }}
              entry={{
                delay: 0.5
              }}
            >
              Welcome {user.nickname || "friend"}
            </NavbarAniLink>
            <NavbarLink
              href="#logout"
              onClick={e => {
                logout()
                e.preventDefault()
              }}
            >
              Log Out
            </NavbarLink>
          </>
        }
      </Navbar>
    </Footer>
  )
}
