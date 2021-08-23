import styled, {css} from 'styled-components'
import { spacing } from '../../styles/theme'

export const UIButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  font-weight: bold;
  padding: 1rem;
  border-radius: ${spacing.borderRadius}px;
  border: 0;
  cursor: pointer;
  font-size: 15px;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`