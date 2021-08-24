import React from 'react'
import {Container, SHeader} from './styles'

export const Section = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export const SectionHeader = ({title}) => (<SHeader>{title}</SHeader>)

export const SectionContent = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}