import React from 'react'
import { Container, CHeader, CContent } from './styles'

export const Card = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export const CardHeader = ({title}) => {
  return (
    <CHeader>
      <h4>{title}</h4>
    </CHeader>
  )
}

export const CardContent = ({children}) => {
  return (
    <CContent>
      {children}
    </CContent>
  )
}