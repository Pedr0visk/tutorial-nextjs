import styled from 'styled-components'

// SB - Sidebar
// MC - Content
// HE - Header

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  background-color: var(--background);
`
export const Wrapper = styled.main`
  flex: 1;
  margin-left: 58px;
  &.shrink {
    margin-left: 250px;
  }

  transition: box-shadow .3s .15s,transform .3s,margin-left .3s,margin-right .3s,width .3s,z-index 0s ease .3s,-webkit-transform .3s;
`
export const Body = styled.div``