import React from 'react'
import { Container, TitleName, SubtitleName } from './styles'

const Title = ({value, subtitle}) => {
  return (
    <Container>
      <TitleName>
        {value}
      </TitleName>
      <SubtitleName>
				{subtitle}
      </SubtitleName>
    </Container>
  )
}

export default Title
