import styled from 'styled-components'
import { colors } from '../../../styles/theme'


export const Select = styled.div`
	border-radius: 2px;
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	position: relative;
	z-index: 1030;
`

export const SelectorName = styled.button`
	font-size: 13px;
	border: 1px solid rgba(140,140,140,0.25);
	color: #565e75;
	transition: .25s;
	border-radius: 2px;
	padding: 2px 10px;
`

export const Options = styled.ul`
	background: white;
	border: 1px solid rgba(140,140,140,0.25);
	border-radius: 2px;
	width: auto;
	max-width: 600px;
	max-height: 30vh;
	overflow-y: scroll;

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
		overflow: hidden;
	}

	.parent-separator {
		font-size: 8px;
		padding: 0 5px;
	}
`

export const OptionItem = styled.li`
	font-size: 12px;
	display: flex;
	padding: 10px;
	border-bottom: 1px solid ${colors.borderLight};
	width: 100%;

	display: flex;
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
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
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
	display: inline-block;
	background-color: white;
`

export const SOptionRemove = styled.button`
	color: var(--title);
	padding: 0 10px;
`

export const FilterAction = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	padding: 1rem;
	background-color: white;
	border-radius: 4px;
	border: 1px solid ${colors.borderLight};
`

export const ClearAllBtn = styled.button`
	font-size: 13px;
	color: var(--title);
	
	> svg {
		margin-right: 5px;
		color: var(--danger);
	}
`

export const SSWrapper = styled.div`
	background-color: #f2f2f2;
	padding: 0.5rem;
	border-radius: 2px;
	margin-bottom: .5rem;
	margin-right: 5px;
	display: inline-block;
	position: relative;
	max-width: 300px;

	> h4 {
		font-size: 12px;
		text-transform: capitalize;
		color: var(--title);
		margin-bottom: 5px;
		font-weight: bold;
	}
`