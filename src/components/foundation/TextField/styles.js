import styled from 'styled-components'
import {spacing} from '../../styles/theme'

export const FormControl = styled.div`
  border-radius: ${spacing.borderRadius}px;
  border: 1px solid var(--secondary);
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  &:focus {
    border: 1px solid var(--primary);
  }

  > input {
    width: 100%;
    padding: 0 40px 0 45px;
    height: 52px;
    border: 0;
    font-size: 15px;
    color: var(--text);

    &:focus-visible, &:active {
      border: 0!important;
    }
  }
`
export const Icon = styled.div`
  position: absolute;
  left: 15px;
  color: var(--secondary);
`