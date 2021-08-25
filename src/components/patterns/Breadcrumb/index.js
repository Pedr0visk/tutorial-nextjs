import React from 'react'
import { Container, Link, Dropdown, Select, Option } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faCalendar,
  faFileExport,
  faFilter,
} from "@fortawesome/free-solid-svg-icons"

const Breadcrumb = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Breadcrumb
