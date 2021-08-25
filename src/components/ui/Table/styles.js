import styled from 'styled-components'
import { spacing, colors } from '../../../styles/theme'

export const TableContainer = styled.table`
	width: 100%;
	border: 1px solid ${colors.borderLight};

	thead, td {
		border-bottom: 1px solid #E2E2E2;
	}

	th, td {
		padding: 0.725rem 1.25rem;
		text-align: left;

	}

	th {
		background-color: #F8F8F8;
		font-weight: 600;
		color: #6C7791;
		font-size: 11px;
		text-transform: uppercase;
		border-top: 1px solid ${colors.borderLight};
		
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