import styled from 'styled-components'


export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1030;

  width: 58px;
  background-color: var(--black);

  color: var(--text);

  transition: box-shadow .3s .15s,transform .3s,margin-left .3s,margin-right .3s,width .3s,z-index 0s ease .3s,-webkit-transform .3s;
`

export const Brand = styled.div`
  width: 58px;
  height: 58px;

  background: var(--secondary) url(../nvg.icon.svg) no-repeat center;
`

export const Nav = styled.ul``
export const NavItem = styled.li``
export const NavIcon = styled.span``
export const NavLink = styled.a``
