import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 5rem 2rem;
  position: relative;
`

export default ({ id, className, children }) => (
  <Section
    id={id || ''}
    className={`section ${className || ''}`}
  >
    {children}
  </Section>
)
