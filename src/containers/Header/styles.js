import styled from 'styled-components'


export const Container = styled.div`
  min-height: 58px;
  padding: 0 15px;
  border: 1px solid #eee;
  background-color: var(--white);
  display: flex;
  justify-content: center;
`

export const PageTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  line-height: 58px;
  margin-right: auto;
`

export const AccountInfo = styled.div`
  display: flex;
  align-items: center;
`

export const AccountName = styled.h4`
  font-size: 14px;
  font-weight: 700;
  line-height: 58px;
  margin-left: 10px;
  
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`

export const ActionLink = styled.button`
  font-size: 14px;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  background: var(--white);
  border: none;
  border-right: 1px solid #eee;
  cursor: pointer;

  &:hover {
    > svg {
      color: var(--primary);
    }
  }

  &:last-child {
    padding-left: 30px;
    padding-right: 30px;
  }

  > svg {
    color: #777;
  }
`

export const ToggleBtn = styled.button`
  margin-right: 20px;
  border: 0;
  background: transparent;
  > svg {
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }

  z-index: 1030;

`