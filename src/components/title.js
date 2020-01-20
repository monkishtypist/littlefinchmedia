import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  background-color: transparent;
  bottom: -35px;
  font-size: 15vw;
  left: -2vw;
  letter-spacing: -0.025em;
  line-height: .75;
  position: absolute;
`

export default ({ id, className, children }) => (
  <H1
    id={id}
    className={className}
  >
    {children}
  </H1>
)
