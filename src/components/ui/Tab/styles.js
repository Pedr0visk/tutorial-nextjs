import styled, { css } from 'styled-components'

export const TabItem = styled.li`
  display: inline-block;
  font-size: 13px;
  margin-right: 2rem;
  padding-bottom: 3px;
  color: var(--title);
  border-bottom: 1px solid transparent;
	cursor: pointer;

  ${props => props.active && css`
    border-bottom-color: var(--title);
  `}
`