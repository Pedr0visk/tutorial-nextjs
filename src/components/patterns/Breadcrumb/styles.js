import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 35px;
  width: 100%;
  background-color: #fbfbfc;
  border-bottom: 1px solid rgba(140,140,140,0.25);
  height: 50px;
  display: flex;
  
  align-items: center;

	> a.action-link {
		font-size: 12px;
		color: #4c5366;
		&:hover {
			color: var(--primary);
		}
		
		> svg {
			margin-right: 6px;
			font-size: 10px;
		}
	}
`

export const Dropdown = styled.div``
export const Link = styled.a`
  padding: 0 15px;
 
`
export const Select = styled.select`
border: none;
background-color: transparent; 
color: #4c5366;
box-shadow: 0 0 0 0;
border: 0 none;
outline: 0;
`
export const Option = styled.option`
border: none;
background-color: transparent; 
color: #4c5366;
`