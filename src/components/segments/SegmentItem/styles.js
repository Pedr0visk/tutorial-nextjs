import styled, {css} from "styled-components"
import { colors } from "../../../styles/theme"

export const SOption = styled.div`
	border: 1px solid ${colors.borderLight};
	border-radius: 2px;
	padding-top: 2px;
	padding-bottom: 2px;
	padding-left: 10px;
	margin-right: 5px;
	margin-bottom: 5px;
	font-size: 13px;
	background-color: white;
	display: inline-block;

	&:last-child {
		margin-bottom: 0;
	}

`

export const SOptionRemove = styled.button`
	color: var(--title);
	padding: 0 10px;
`

export const SSWrapper = styled.div`
	background-color: #f2f2f2;
	padding: 0.5rem;
	border-radius: 2px;
	position: relative;

	.sswrapper-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	${props => props.showRule && css`
		.sswrapper-content {
			margin-left: 36px;
			padding-left: 10px;
			border-left: 2px solid var(--success);
			border-radius: 30px;
		}
  `}

	&:after {
		content: '';
		top: 50%;
		left: -10px;
		width: 10px;
		height: 2px;
		background-color: var(--success);
		position: absolute;
	}

	&:first-child, &:last-child {
		&:after {
			background-color: transparent;
		}
	}

	&:not(:first-child) {
		margin-top: .5rem;
	}

	> .rule {
		position: absolute;
		left: 8px;
		top: 52%;
		font-size: 13px;
		text-transform: uppercase;
		color: var(--success);
		border: 1px solid var(--success);
		border-radius: 3px;
		width: 30px;
		text-align: center;
		display: none;

		&:after {
			content: '';
			position: absolute;
			right: -8px;
			top: 50%;
			width: 8px;
			height: 2px;
		}

		${props => props.showRule && css`
			display: inline-block;

			&:after {
				background-color: var(--success);
			}
		`}
`
