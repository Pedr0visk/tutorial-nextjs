import styled, { css } from 'styled-components'
import { colors } from '../../../styles/theme'


export const Select = styled.div`
	border-radius: 2px;
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	position: relative;
	z-index: 1030;

	.option-wrapper {
		visibility: hidden;
		transform: translateY(-20px);
		transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
		opacity: 0;

		&.show {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}
	}

	.option-wrapper {
		background: white;
		border: 1px solid rgba(140,140,140,0.25);
		border-radius: 2px;
		/* width: auto;
		max-width: 600px;
		max-height: 30vh; */

		position: absolute;
		top: 27px;
		left: 0;

		::-webkit-scrollbar {
			width: 2px;
		}

		::-webkit-scrollbar {
			width: 4px;
		}
		::-webkit-scrollbar-thumb {
			background: var(--text);
			border-radius: 4px;
		}
		::-webkit-scrollbar-track {
			background-color: ${colors.borderLight};
		}

		.parent-name {
			max-width: 100px;
			display: block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow-x: hidden;
		}

		.parent-separator {
			font-size: 8px;
			padding: 0 5px;
		}
	}
`

export const SelectorName = styled.button`
	font-size: 13px;
	border: 1px solid rgba(140,140,140,0.25);
	color: #565e75;
	transition: .25s;
	border-radius: 2px;
	padding: 2px 10px;
`
