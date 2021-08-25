import React from 'react'
import { Container, Paginator } from './styles'
import Table from '../../components/ui/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const CustomerTable = ({ data }) => {
	const fields = ['Nome','E-mail', 'Telefone', 'Inclusão']

	return (
		<Container className="mb-10">
			<Table
				items={data}
				fields={fields}
			/>
			<Paginator>
					<span className="step-links">
						<span className="current">1</span>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#">4</a>
						<a href="#">...</a>
						<a href="#">
							<FontAwesomeIcon icon={faChevronRight} />
						</a>
					</span>
			</Paginator>
		</Container>
	)
}

export default CustomerTable
