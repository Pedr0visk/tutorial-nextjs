import styled from 'styled-components'
import { spacing, shadow, colors } from '../../styles/theme'

export const Profile = styled.div`
  background-color: white;
  border: 1px solid ${colors.borderLight};
  border-radius: ${spacing.borderRadius}px;
  padding: 5rem 2rem;
  background-color: var(--tertiary);
  /* box-shadow: ${shadow.default}; */
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserName = styled.h4`
  color: var(--primary);
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`

export const PlaceHolder = styled.span`
  font-weight: bold;
  color: var(--text);
  font-size: 26px;
`

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  min-height: 100px;
  border-radius: 50%;
  border: 1px solid var(--text);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
