import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  position: relative;
`

export default ({ id, className, children }) => (
  <Section
    id={id || ''}
    className={`section ${className || ''} ${SectionStyles.section}`}
  >
    {children}
  </Section>
)
