import React, { useState, useEffect } from 'react'
import { Container, Paginator } from './styles'
import Table from '../../components/ui/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const CustomerTable = ({ data, filterCustomers, queryParams, setQueryParams }) => {
	const [customers, setCustomers] = useState([])
	const router = useRouter()
	let { page, interests, brands, products, page_size } = queryParams

	useEffect(() => {
		if (data.results) {
			const results = data.results.map(obj => {
				let customer = {}
	
				customer._id = obj._id 
				customer.created_at = obj.created_at 
	
				for (let key in obj.attributes) {
					customer[key] = obj.attributes[key]
				}
	
				return customer
			})
	
			setCustomers(results)
		}
	}, [data])

	const fields = [
		{attr: 'name', label: 'Nome'},
		{attr: 'email', label: 'E-mail'},
		{attr: 'phone_number', label: 'Telefone'},
		{attr: 'created_at', label: 'Inclusão'},
	]

	if (!page) page = 1

	let query = ''
	if (interests) {
		query += `&interests=${interests}`
	}
	if (brands) {
		query += `&brands=${brands}`
	}
	if (products) {
		query += `&products=${products}`
	}

	function prevPage() {
		setQueryParams({...queryParams, page: page-1})
		filterCustomers()
	}

	return (
		<Container className="mb-10">
			<div className="p-2">
				<small className="text-info">{data.count} results found.</small>
			</div>
			<Table
				items={customers}
				fields={fields}
			/>
			<Paginator>
					<span className="step-links">
						<button disabled={page <= 1} onClick={e => filterCustomers({page: page-1})}>
							<FontAwesomeIcon icon={faChevronLeft} />
						</button>
						<span className="current">{page ? page : 1}</span>
						{/* <a href="#" onClick={e => router.push(`/dashboard?page=2`)}>2</a> */}

						<button disabled={Math.floor(data.count / page_size) < page} onClick={e => filterCustomers({page: page+1})}>
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
					</span>
			</Paginator>
		</Container>
	)
}

export default CustomerTable
