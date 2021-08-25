import styled from 'styled-components'
import { colors, spacing } from '../../styles/theme'

export const Container = styled.div`
	background-color: var(--tertiary);
	height: 152px;
	width: 100%;
	border: 1px solid ${colors.borderLight};
	border-radius: ${spacing.borderRadius}px;
	display: flex;
	flex-direction: column;
	padding: 1.25rem;

	position: relative;

	&::after {
		position: absolute;
		content: '';
		width: 150px;
		height: 50px;
		background: url(/images/graph-icon.svg) no-repeat center;
		bottom: 0;
		left: 1.25rem;
	}
`

export const Label = styled.h4`
	font-size: 14px;
	color: var(--title);
	font-weight: bold;
`

export const Value = styled.span`
	font-size: 32px;
	color: var(--primary);
	font-weight: 600;
`