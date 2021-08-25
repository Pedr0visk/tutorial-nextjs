import React from 'react'
import { Container, GraphicTitle, GraphicValue, Graphic } from './styles'

const GraphicCard = ({title, value, children}) => {
  return (
    <Container>
      <GraphicTitle>
        {title}
      </GraphicTitle>
      <GraphicValue>
        {value}
      </GraphicValue>
      <Graphic>
        {children}
      </Graphic>
    </Container>
  )
}

export default GraphicCard
