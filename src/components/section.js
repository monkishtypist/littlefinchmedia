import React from "react"
import sectionStyles from "./section.module.scss"

export default ({ className, children }) => (
  <section className={`${className} ${sectionStyles.section}`}>{children}</section>
)
