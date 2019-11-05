import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  background-color: transparent;
`

export default ({ id, className, children }) => (
  <H1
    id={id || ''}
    className={`section ${className || ''}`}
  >
    {children}
  </H1>
)
