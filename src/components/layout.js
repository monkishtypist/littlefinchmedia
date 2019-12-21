import React from "react"
import styled from "styled-components"

const LayoutWrapper = styled.div`
  background-color: transparent;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  )
}

export default Layout
