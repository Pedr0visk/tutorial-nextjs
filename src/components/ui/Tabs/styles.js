import styled, { css } from 'styled-components'


export const Container = styled.div``

export const Nav = styled.ul`
  list-style: none;
  margin-bottom: 3rem;
`

export const NavItem = styled.li`
  display: inline-block;
  font-size: 12px;
  margin-right: 2rem;
  padding-bottom: 5px;

  border-bottom: 1px solid transparent;

  ${props => props.active && css`
    border-bottom-color: var(--text);
  `}
`

export const TabContent = styled.div``