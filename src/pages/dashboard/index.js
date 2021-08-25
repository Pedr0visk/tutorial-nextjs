import React from 'react'
import { 
  Navbar, 
  NavbarItem, 
  DropdownMenu, 
  DropdownBtn,
  Icon,
  Text,
  AriaLabel
} from './styles'

import { Layout } from '../../containers'
import { Breadcrumb, Head } from '../../components/patterns'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faChevronDown, faFileArchive } from '@fortawesome/free-solid-svg-icons'

import WidgetsCustomers from '../../widgets/WidgetsCustomers'
import CustomerTable from '../../containers/CustomerTable'

import customers from '../../containers/CustomerTable/customers.json'

const Dashboard = () => {
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

export default Dashboard
