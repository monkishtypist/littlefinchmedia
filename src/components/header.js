import React from "react"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import PropTypes from "prop-types"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={`${headerStyles.header}`}
  >
    <Helmet>
      <html className=""/>
    </Helmet>
    <nav className={`navbar ${headerStyles.nav}`} role="navigation" aria-label="main navigation">
      <Link
        to="/"
        className={`navbar__link ${headerStyles.navbar__link}`}
      >
        {siteTitle}
      </Link>
      <Link
        to="/page-2"
        className={`navbar__link ${headerStyles.navbar__link}`}
      >
        Page 2
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
