import React from 'react'
import PropTypes from 'prop-types'
import { Container, Title, SubTitle } from './styles'

const Head = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Head
