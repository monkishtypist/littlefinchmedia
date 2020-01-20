import React from 'react'
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import styled from 'styled-components'

const Footer = styled.footer`
  background: transparent;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: relative;
  right: 0;
  z-index: 1000;
  /* Hidden for now */
  display: none;
`

const Navbar = styled.nav`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: space-between;
`
const NavbarLinkA = styled.a`
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
const NavbarLink = styled(Link)`
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

export default () => {
  const user = getProfile()

  return (
    <Footer>
      <Navbar className={`navbar`} role="navigation" aria-label="footer navigation">
        { !isAuthenticated() &&
          <>
            <div />
            <NavbarLinkA
              href="#login"
              onClick={e => {
                login()
                e.preventDefault()
              }}
            >
              Login
            </NavbarLinkA>
          </>
        }
        { isAuthenticated() &&
          <>
            <NavbarLink
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
            </NavbarLink>
            <NavbarLink
              to="/blog"
            >
              Blog
            </NavbarLink>
            <NavbarLinkA
              href="#logout"
              onClick={e => {
                logout()
                e.preventDefault()
              }}
            >
              Log Out
            </NavbarLinkA>
          </>
        }
      </Navbar>
    </Footer>
  )
}
