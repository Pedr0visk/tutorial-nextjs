import React from 'react'
import { Container, Brand, Nav, NavItem, NavLink, NavIcon } from './styles'
import navigation from '../_nav'


const Sidebar = () => {
  return (
    <Container id="sidebar">
      <Brand />
      <Nav>
        <NavItem>
          <NavIcon />
          <NavLink>Home</NavLink>
        </NavItem>
      </Nav>
    </Container>
  )
}

export default Sidebar
