import React from 'react'
import { Container, Link, Dropdown } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faSitemap,
} from "@fortawesome/free-solid-svg-icons"

const Filter = () => {
  return (
    <Container>
      <Dropdown>
        <Link>
          <FontAwesomeIcon icon={faSitemap} />
          Todas as Páginas
        </Link>
      </Dropdown>
    </Container>
  )
}

export default Filter
