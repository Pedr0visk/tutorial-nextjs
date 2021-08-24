import styled from 'styled-components'
import { spacing, colors } from '../../../styles/theme'


export const Container = styled.div`
  background-color: white;
  border: 1px solid ${colors.borderLight};
  border-radius: ${spacing.borderRadius}px;
  margin-bottom: 2rem;
`

export const CHeader = styled.div`
  padding: 1rem 1.75rem;
  background-color: var(--tertiary);

  position: relative;
  &::before {
    position: absolute;
    content: '';
    top: 22px;
    bottom: 0;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--primary);
  }

  > h4 {
    font-size: 14px;
    margin-left: 20px;
  }
`

export const CardBody = styled.div`
  padding: 2rem;
`

export const CContent = styled.div`
  padding: 2rem 4rem;
`
