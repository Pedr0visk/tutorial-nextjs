import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const Progress = styled.div`
  width: ${props => props.width * 100}%;
  height: 20px;
  border-radius: 10px;
  background: var(--primary);
  opacity: ${props => props.width};
`

export const Label = styled.span`
  font-size: 10px;
  color: var(--primary);
  margin-left: 10px;
  display: table;
`