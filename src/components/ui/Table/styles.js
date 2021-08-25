import styled, { css } from 'styled-components'
import { spacing, colors } from '../../../styles/theme'

export const TableContainer = styled.table`
	width: 100%;
	border: 1px solid ${colors.borderLight};

	thead, td {
		border-bottom: 1px solid #E2E2E2;
	}

	th, td {
		padding: 0.75rem 1.5rem;
		text-align: left;
	}

	th {
		background-color: #F8F8F8;
		font-weight: 600;
		color: #6C7791;
		font-size: 11px;
		text-transform: uppercase;
		border-top: 1px solid ${colors.borderLight};

		cursor: pointer;
		
		&:last-child {
			border-right: 1px solid ${colors.borderLight};
			border-top-right-radius: 4px;
		}
	}

	td {
		background-color: white;
		color: #2B2F3A;
		font-size: 13px;
	}
`

export const Caret = styled.span`
	padding: 0 5px;
	margin-left: 10px;
	/* display: flex;
	flex-direction: column; */
	position: relative;

	svg.fa-caret-up {
		position: absolute;
		top: 0;

		${props => props.active && css`
			fill: white;
		`}
	}

	svg.fa-caret-down {
		position: absolute;
		bottom: 0;
	}
`