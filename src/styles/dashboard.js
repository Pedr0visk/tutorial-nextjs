import styled from 'styled-components'


export const Navbar = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
`

export const NavbarItem = styled.li`
	margin-right: 1rem;
	height: 100%;
	
`

export const DropdownMenu = styled.div`
	display: none;
`

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