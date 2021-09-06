import styled from 'styled-components'
import {colors} from '../styles/theme'


export const Navbar = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;
	margin: 0;

	> li {
		height: inherit;
	}
`

export const NavbarItem = styled.li`
	margin-right: 1rem;
`

export const DropdownMenu = styled.div`
	opacity: 1;
	min-width: 800px;
	padding: 25px 25px 20px;
	position: absolute;
	background: white;
	top: 50px;
	box-shadow: 0 1px 4px rgba(0,0,0,0.1);
	z-index: 1030;
	height: 82vh;
	opacity: 0;
	visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

	&.show {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	> p {
		font-size: 12px;
	}
`

export const FilterBox = styled.div``

export const DropdownBtn = styled.button`
	display: flex;
	color: var(--subtitle);
	font-size: 12px;
	align-items: center;
	height: inherit;
	padding: 0 15px;

	&:hover {
		background-color: #e9e9e9;
	}

	> div, p {
		margin-right: 5px;
	}
`

export const Icon = styled.div``
export const Text = styled.p``

export const AriaLabel = styled.div`
	font-size: 10px;
`


export const ClearAllBtn = styled.button`
	font-size: 13px;
	color: var(--title);
	
	> svg {
		margin-right: 5px;
		color: var(--danger);
	}
`

export const FilterAction = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	padding: 1rem;
	background-color: white;
	border-radius: 4px;
	border: 1px solid ${colors.borderLight};
`