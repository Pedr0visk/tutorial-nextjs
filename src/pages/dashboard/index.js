import React, { useEffect, useState } from 'react'
import { Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDownload, faFilter, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { 
  Navbar, 
  NavbarItem,
	DropdownBtn, 
	Icon, 
	Text, 
	AriaLabel, 
	FilterAction,
	ClearAllBtn
} from '../../styles/dashboard'

import taxonomies from  '../../assets/taxonomies.json'

import { Layout } from '../../containers'

import WidgetsCustomers from '../../widgets/WidgetsCustomers'
import CustomerTable from '../../containers/CustomerTable'

import { Breadcrumb, Head } from '../../components/patterns'
import { UIButton, SearchField, LoadingGif} from '../../components/ui'
import SegmentFilter from '../../components/segments/SegmentFilter'


const content = ({ segmentsChoosen, chooseSegment, filterCustomers }) => (
  <div style={{width: 800, height: '75vh'}}>
    <p>Faça uma busca ou selecione os filtros nas categorias abaixo:</p>
		<SearchField />
		<SegmentFilter 
			taxonomies={taxonomies}
			segmentsChoosen={segmentsChoosen} 
			chooseSegment={chooseSegment} 
			submit={filterCustomers} 
		/>
		<FilterAction>
			<ClearAllBtn onClick={e => chooseSegment({
					products: [],
					segments: [],
					interests: []
				})}>
				<FontAwesomeIcon icon={faTrashAlt} />
				limpar seleção
			</ClearAllBtn>
			<UIButton title="aplicar" onClickHandler={filterCustomers} />
		</FilterAction>
  </div>
);

const Dashboard = ({ customers }) => {
	const [dataset, setDataset] = useState([])
	const [loading, setLoading] = useState(false)
	const [segmentsChoosen, chooseSegment] = useState({
		interests: [],
		products: [],
		brands: []
	})
	
	useEffect(() => {
		setDataset(customers)
	}, [])

	function _buildQueryParams(segments) {
		let queryParams = ''

		Object.keys(segments).map(key => {
			console.log(segments[key])
			if (segments[key].length > 0) {
				let list = segments[key].map(item => item.id)
				queryParams += `${key}=${list.join(',')},in&`
			}
		})

		return queryParams
	}

	async function exportCustomers() {
		const queryParams = _buildQueryParams(segmentsChoosen)
		const uri = `${process.env.apiUrl}/api/customers/xlsx/export/?${queryParams}`
		console.log(uri)
		window.open(uri)
	}

	async function filterCustomers() {
		const queryParams = _buildQueryParams(segmentsChoosen)

		try {
			setLoading(true)
			const uri = `${process.env.apiUrl}/api/customers/?${queryParams}`
			const response = await fetch(uri)
			const data = await response.json()
			setDataset(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

  return (
    <Layout>
      <Breadcrumb>
        <Navbar>
					{/* Segments */}
          <NavbarItem>
						{/* Dropdown Btn */}
            {/* <Dropdown setDataset={setDataset} setLoading={setLoading} /> */}
						<Popover placement="bottomRight" content={() => content({segmentsChoosen, chooseSegment, filterCustomers})} trigger="click">
							<DropdownBtn>
								<Icon><FontAwesomeIcon icon={faFilter} /></Icon>
								<Text>Segmentos</Text>
								<AriaLabel><FontAwesomeIcon icon={faChevronDown} /></AriaLabel>
							</DropdownBtn>
						</Popover>
          </NavbarItem>

					{/* Segments Explorer */}
          <NavbarItem>
            <DropdownBtn onClick={e => exportCustomers()}>
              <div><FontAwesomeIcon icon={faDownload} /></div>
              <p>Exportar Customers</p>
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

export async function getStaticProps({ context }) {
	const { HOST } = process.env
	
	const res = await fetch(`${HOST}/api/customers/`)
  const data = await res.json()

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
