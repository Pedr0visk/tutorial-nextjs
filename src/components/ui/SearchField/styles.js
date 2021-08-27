import styled from 'styled-components'

export const Container = styled.div`
	padding: 15px 5px 12px;
	border-bottom: 2px solid var(--text);

	> svg {
		margin-right: 20px;
		color: var(--text);
	}

	&:focus-within {
		border-bottom-color: var(--primary);
	}
`
export const Input = styled.input`
	border: 0;
	font-size: 14px;

	width: 90%;

	&:focus, &:active {
		outline: none;
	}
`