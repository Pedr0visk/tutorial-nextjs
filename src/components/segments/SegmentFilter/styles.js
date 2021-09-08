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

	${props => props.showRule && css`
		margin-left: 36px;
		padding-left: 10px;
		border-left: 2px solid var(--success);
		border-radius: 80px;
  `}

	${props => !props.outerLogicalOperator && css`
    border-color: var(--primary);
  `}
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

		${props => props.showRule && css`
			display: inline-block;

			&:after {
				background-color: var(--success);
			}
		`}

		${props => !props.outerLogicalOperator && css`
			border-color: var(--primary);
			color: var(--primary);

			&:after {
				background-color: var(--primary);
			}
		`}
	}
`