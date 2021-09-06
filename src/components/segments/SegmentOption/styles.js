import styled, { css } from 'styled-components'
import { colors } from '../../../styles/theme'


export const OptionItem = styled.li`
	font-size: 12px;
	display: flex;
	padding: 10px;
	border-bottom: 1px solid ${colors.borderLight};
	width: 100%;
	align-items: center;
`

export const OptionText = styled.span`
	font-weight: bold;
	white-space: nowrap;
`

export const OptionAction = styled.div`
	display: flex;
	margin: 0 10px;
	margin-left: auto;

	> button {
		width: 20px;
		height: 20px;
		border: 1px solid;
		border-radius: 50%;
		font-size: 8px;
		color: white;

		&:hover {
			filter: saturate(1%);
		}

		/* &:first-child {
			margin-right: 10px;
		} */
	}

`

export const AddButton = styled.button`
	border-color: var(--primary);
	background: var(--primary);
	margin-left: 20px;
`

export const RemoveButton = styled.button`
	border-color: var(--danger);
	background: var(--danger);
`
