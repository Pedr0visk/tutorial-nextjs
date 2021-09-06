import styled, { css } from 'styled-components'
import { colors } from '../../../styles/theme'


export const STitle = styled.div`
	display: flex;
	align-items: center;

	> h4 {
		font-size: 16px;
		font-weight: bold;
		color: var(--primary);
	}
`

export const SIcon = styled.div`
	font-size: 10px;
	color: white;
	background-color: var(--primary);
	width: 20px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	margin-right: 10px;
	border-radius: 50%;
`

export const SContent = styled.div`
	display: flex;
	flex-direction: column;
	
	
	width: 300px;
	background-color: white;

	${props => props.showRuler && css`
		margin-left: 36px;
		padding-left: 10px;
		border-left: 2px solid var(--success);
		border-radius: 80px;
  `}

	${props => !props.endOr && css`
    border-color: var(--primary);
  `}
`

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
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	> div.ruler {
		display: flex;
		font-size: 12px;
		justify-content: space-between;
		width: 100%;

		> button {
			color: var(--primary);
			font-weight: bold;
		}

		> h4 {
			text-transform: capitalize;
			color: var(--title);
			margin-bottom: 10px;
			font-weight: bold;
		}
	}

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

	
`

export const SBody = styled.div`
	position: relative;
	
	> .ruler {
		position: absolute;
		left: 0;
		top: 43%;
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

		${props => props.showRuler && css`
			display: inline-block;

			&:after {
				background-color: var(--success);
			}
		`}

		${props => !props.endOr && css`
			border-color: var(--primary);
			color: var(--primary);

			&:after {
				background-color: var(--primary);
			}
		`}
	}
`