import styled from 'styled-components'

export const Container = styled.div`
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
` 
export const Paginator = styled.div`
	padding: 2rem;
	background: white;
	border: 1px solid #e2e2e2;
	border-top: 0;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	text-align: center;

	> .step-links {
		font-size: 14px;
		font-weight: 600;
		color: #2B2F3A;

		a {
			padding: 6px 10px;

			> svg {
				font-size: 10px;
			}
		}

		span.current {
			background: var(--primary);
			width: 30px;
			height: 30px;
			display: inline-block;
			color: white;
			line-height: 30px;
			margin-right: 5px;
		}
	}
`