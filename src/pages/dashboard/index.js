import React from 'react'
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


const Dashboard = ({ customers }) => {
  return (
    <Layout>
      <Breadcrumb>
        <Navbar>
					{/* Segments */}
          <NavbarItem>
            <DropdownBtn>
              <Icon><FontAwesomeIcon icon={faFilter} /></Icon>
              <Text>Segmentos</Text>
              <AriaLabel><FontAwesomeIcon icon={faChevronDown} /></AriaLabel>
            </DropdownBtn>
            <DropdownMenu>
              meu menu
            </DropdownMenu>
          </NavbarItem>

					{/* Segments Explorer */}
          <NavbarItem>
            <DropdownBtn>
              <Icon><FontAwesomeIcon icon={faFileArchive} /></Icon>
              <Text>Explorar Segmentos</Text>
              <AriaLabel><FontAwesomeIcon icon={faChevronDown} /></AriaLabel>
            </DropdownBtn>
            <DropdownMenu>
              meu menu
            </DropdownMenu>
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

	const customers = data.results.map(customer => ({
		email: customer.attributes?.email || '',
		name: customer.attributes?.name || '',
		phone_number: customer.attributes?.phone_number || '--',
		created_at: customer.created_at,
	}))
	console.log(customers)

  return {
    props: {
			customers
		}, // will be passed to the page component as props
  }
}

export default Dashboard
