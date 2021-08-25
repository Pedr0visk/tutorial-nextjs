import React from 'react'
import { Container, Progress, Label } from './styles'
import PropTypes from 'prop-types'

const Bar = ({ width, label, ...attrs }) => {
  return (
    <Container {...attrs} >
      <Progress width={width} />
      <Label>{label}</Label>
    </Container>
  )
}

Bar.propTypes = {
  width: PropTypes.number,
  label: PropTypes.string
}

export default Bar
