import React from 'react'
import PropTypes from 'prop-types'
import { Container, Key, Value } from './styles'


const Attribute = ({ property, value }) => {
  return (
    <Container>
      <Key>{property}</Key>
      <Value>{value}</Value>
    </Container>
  )
}

Attribute.protoType = {
  property: PropTypes.string,
  value: PropTypes.string,
}

export default Attribute
