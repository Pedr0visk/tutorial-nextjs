import React, { useState } from 'react'
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


const Dashboard = ({ customers }) => {
	const [showDropdown, toggleDropdown] = useState(false)
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
								<SegmentFilter />
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

			<div className="md:container md:mx-auto">
				<Head title="Dashboard" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aspernatur iste laboriosam obcaecati, distinctio sapiente consequuntur et ad consectetur vel!" />

				<WidgetsCustomers />
				<CustomerTable data={customers} />
			</div>
    </Layout>
  )
}

export async function getStaticProps(context) {
	const res = await fetch(`${process.env.HOST}/api/customers/`)
  const data = await res.json()

	if (!data) {
    return {
      notFound: true,
    }
  }

  const customers = data.results.map(obj => {
    let customer = {}

    customer._id = obj._id 
    customer.created_at = obj.created_at 

    for (let key in obj.attributes) {
      customer[key] = obj.attributes[key]
    }

    console.log(customer, 'loggin customer')
    return customer
  })

  return {
    props: {
			customers
		}, // will be passed to the page component as props
  }
}

export default Dashboard
