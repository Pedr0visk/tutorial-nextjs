import styled from 'styled-components'


export const Navbar = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;
`

export const NavbarItem = styled.li`
	margin-right: 1rem;
	height: 100%;
	
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