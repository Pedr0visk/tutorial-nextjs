import React from 'react'
import { Container, GraphicTitle } from './styles'

const GraphicCard = ({title}) => {
  return (
    <Container>
      <GraphicTitle>
        {title}
      </GraphicTitle>
    </Container>
  )
}

export default GraphicCard
