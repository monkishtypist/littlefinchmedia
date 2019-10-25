import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = ({ siteTitle, siteDescription }) => (
  <footer className={`footer ${footerStyles.footer}`}>
    <p>{siteTitle} © {new Date().getFullYear()}</p>
    <p>{siteDescription}</p>
  </footer>
)

export default Footer
