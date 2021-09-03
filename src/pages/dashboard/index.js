import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { 
  Navbar, 
  NavbarItem, 
  DropdownMenu, 
  DropdownBtn,
  Icon,
  Text,
  AriaLabel
} from '../../styles/dashboard'

import { Layout } from '../../containers'
import { Breadcrumb, Head } from '../../components/patterns'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faChevronDown, faFileArchive } from '@fortawesome/free-solid-svg-icons'

import WidgetsCustomers from '../../widgets/WidgetsCustomers'
import CustomerTable from '../../containers/CustomerTable'
import SearchField from '../../components/ui/SearchField'
import SegmentFilter from '../../components/segments/SegmentFilter'
import LoadingGif from '../../components/ui/LoadingGif'

import { useRouter } from 'next/router'


const Dashboard = ({ customers }) => {
	const [dataset, setDataset] = useState([])
	const [showDropdown, toggleDropdown] = useState(false)
	const [loading, setLoading] = useState(false)
	const [segmentsChoosen, chooseSegment] = useState({
		interests: [],
		products: [],
		brands: []
	})

	const router = useRouter()

	useEffect(() => {
		setDataset(customers)
	}, [customers])

	async function filterCustomers() {
		let queryParams = ''

		Object.keys(segmentsChoosen).map(key => {
			if (segmentsChoosen[key].length > 0) {
				let list = segmentsChoosen[key].map(item => item.value)
				queryParams += `${key}=${list.join(',')}&`
			}
		})

		toggleDropdown(false)

		router.push(`/dashboard?${queryParams}`)

		// try {
		// 	setLoading(true)
		// 	const uri = `http://localhost:3050/api/customers/?${queryParams}`
		// 	const response = await fetch(uri)
		// 	const data = await response.json()
		// 	setDataset(data)
		// } catch (error) {
		// 	console.log(error)
		// } finally {
		// 	setLoading(false)
		// }
	}

  return (
    <Layout>
      <Breadcrumb>
        <Navbar>
					{/* Segments */}
          <NavbarItem>
						{/* Dropdown Btn */}
            <DropdownBtn onClick={(e) => toggleDropdown(!showDropdown)}>
              <Icon><FontAwesomeIcon icon={faFilter} /></Icon>
              <Text>Segmentos</Text>
              <AriaLabel><FontAwesomeIcon icon={faChevronDown} /></AriaLabel>
            </DropdownBtn>

						{/* Dropdown Menu */}
            {showDropdown && (
							<DropdownMenu >
								<p>Faça uma busca ou selecione os filtros nas categorias abaixo:</p>
								<SearchField />
								<SegmentFilter 
									segmentsChoosen={segmentsChoosen} 
									chooseSegment={chooseSegment} 
									submit={filterCustomers} 
								/>
								{/* <Segments /> */}
							</DropdownMenu>
						)}
          </NavbarItem>

					{/* Segments Explorer */}
          <NavbarItem>
            <DropdownBtn>
              <Icon><FontAwesomeIcon icon={faFileArchive} /></Icon>
              <Text>Explorar Segmentos</Text>
              <AriaLabel><FontAwesomeIcon icon={faChevronDown} /></AriaLabel>
            </DropdownBtn>
          </NavbarItem>
        </Navbar>
      </Breadcrumb>

			<div className="md:container md:mx-auto lg:container lg:mx-auto">
				<Head title="Dashboard" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aspernatur iste laboriosam obcaecati, distinctio sapiente consequuntur et ad consectetur vel!" />

				<WidgetsCustomers />
				{!loading && <CustomerTable data={dataset} page_size={30} />}
				{loading && <LoadingGif />}
			</div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1, products, brands, interests }}) {
	const { HOST } = process.env
	const pageSize = 30

	let queryParams = `?page=${page}&page_size=${pageSize}`
	
	if (interests) {
		queryParams += `&interests=${interests}`
	}
	if (brands) {
		queryParams += `&brands=${brands}`
	}
	if (products) {
		queryParams += `&products=${products}`
	}

	const res = await fetch(`${HOST}/api/customers/${queryParams}`)
  const data = await res.json()

	console.log(data)

	if (!data) {
    return {
      notFound: true,
    }
  }
	
  return {
    props: {
			customers: data
		}, // will be passed to the page component as props
  }
}

export default Dashboard
