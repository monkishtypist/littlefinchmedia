import React from "react"
import columnStyles from "./column.module.scss"

export default ({ children }) => (
  <div className={columnStyles.column}>{children}</div>
)
