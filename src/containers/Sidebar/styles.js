import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1030;

  width: 58px;

  h2, h4 {
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    z-index: 3;
  }

  &.display {
    width: 250px!important;
    .navtext, h2, h4 {
      opacity: 1!important;
      visibility: visible;
    }
  }
  background-color: var(--black);

  color: var(--text);

  transition: box-shadow .3s .15s,transform .3s,margin-left .3s,margin-right .3s,width .3s,z-index 0s ease .3s,-webkit-transform .3s;
`

export const Head = styled.div`
  background-color: #1a1c23;
  display: flex;
  align-items: center;
`

export const Account = styled.div`
  color: rgba(255,255,255,.7);
  padding: 0 10px;
`

export const AccountName = styled.h2`
  font-weight: bold;
  color: inherit;
  font-size: 13px;
  line-height: 11px;
`

export const AccountEmail = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: inherit;
`

export const Brand = styled.div`
  min-width: 58px;
  height: 58px;
  background: var(--secondary) url(../nvg.icon.svg) no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Nav = styled.ul`
  margin-top: 20px;
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;

  &:hover {
    background: black;
  }
  
  > a {
    > div {
      margin-left: 3px;
    }

    > span {
      color: #bfbfbf;
      opacity: 0;
      visibility: hidden;
      white-space: nowrap;
      transition: opacity 0.3s;
    }
    font-size: 13px;
    padding: 4px 0;
    width: 100%;
    display: flex;
    align-items: center;

    &.n-link.active {
      border-right: 4px solid var(--secondary);
      background: black;
      div {
        filter: grayscale(1) invert(1) brightness(1.4);
      }
    }
  }
`

export const NavText = styled.span``

export const NavIcon = styled.div`
  min-width: 48px;
  height: 32px;
  background-image: url(/images/ui-icons.png);
  background-repeat: no-repeat;

  &.icon--overview {
    background-position: -202px -9px;
  }
  &.icon--product {
    background-position: -202px -59px;
  }
  &.icon--interests {
    background-position: -202px -109px;
  }
  &.icon--technologies {
    background-position: -202px -159px;
  }
  &.icon--location {
    background-position: -202px -209px;
  }
  &.icon--demographic {
    background-position: -202px -259px;
  }
  &.icon--every-one {
    background-position: -202px -659px;
  }
  &.icon--every-buyer {
    background-position: -202px -709px;
  }
  &.icon--special-audiences {
    background-position: -202px -308px;
  }
  &.icon--change-action {
    background-position: -202px -359px;
  }
  &.icon--change-audience-builder {
    background-position: -201px -1359px;
  }
  &.icon--change-audience-kit {
    background-position: -202px -509px;
  }
  &.icon--change-instant-target {
    background-position: -202px -609px;
  }
  &.icon--change-action {
    background-position: -202px -359px;
  }
  &.icon--audience-builder {
    background-position: -201px -1359px;
  }
  &.icon--audience-kit {
    background-position: -202px -509px;
  }
  &.icon--instant-target {
    background-position: -202px -609px;
  }
  &.icon--media-planner {
    background-position: -202px -459px;
  }
  &.icon--media-monitor {
    background-position: -152px -1059px;
  }
  

  &.active, &:hover {
    filter: grayscale(1) invert(1) brightness(1.4);
  }
`
