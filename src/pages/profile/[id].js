import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { 
  Profile,
  Avatar,
  User,
  UserName,
  PlaceHolder,
  TotalAmountSessions,
  PageViewsCount
} from '../../styles/profile'

import { Layout } from '../../containers'
import { Breadcrumb, Head } from '../../components/patterns'
import { Attribute } from '../../components/foundation'

import CustomerDemographic from '../../components/customer/CustomerDemographic'
import CustomerSessions from '../../components/customer/CustomerSessions'


const CustomerProfile = ({ customer }) => {

	const [lang, setLang] = useState('pt')

	function getCustomerFullName(name = '') {
		let chunks = name.split(' ')
		let fullName = ''
		for (let index in chunks) {
			let chunk = chunks[index]
			fullName += chunk[0].toUpperCase()
		}
		return fullName
	}

	function getCustomerAttr(attr) {
		return customer.attributes[attr] || '--'
	}

	function getFormattedDate(datetime) {
		let date = new Date(datetime)
		return `(${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()})`
	}

  return (
    <Layout>
			<Breadcrumb backUrl="/dashboard" />
      <div className="md:container md:mx-auto">
        <Head title="Customer Profile" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aspernatur iste laboriosam obcaecati, distinctio sapiente consequuntur et ad consectetur vel!" />

        {/* User's Profile */}
        <Profile className="mb-8">
          <div className="grid grid-cols-3 space-x-16">
            {/* Avatar */}
            <User className="flex align-center">
              <Avatar>
                <PlaceHolder>{getCustomerFullName(customer?.attributes.name)}</PlaceHolder>
              </Avatar>
              <UserName>{customer.attributes?.name || customer.attributes?.email || '--'}</UserName>
            </User>

            {/* General Info */}
            <div>
              <Attribute property="ID" value={customer._id} />
              <Attribute property="E-mail" value={getCustomerAttr('email')} />
              <Attribute property="Telefone" value={getCustomerAttr('phone_number')} />
            </div>

            <div>
              <Attribute property="Data" value={getFormattedDate(customer.created_at)} />
            </div>
          </div>
        </Profile>
     
        {/* Demographic Data */}
        {customer.data && <CustomerDemographic customer={customer} />}

        {/* Sessesion Data */}
        {customer.data && <CustomerSessions customer={customer} />}
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
	const response = await fetch(`${process.env.HOST}/api/customers/`)
	const data = await response.json()

	const paths = data.results.map(customer => {
		return { params: { id: customer._id }}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {
	const { id } = context.params
	
	const response = await fetch(`${process.env.HOST}/api/customers/${id}/`)
	const data = await response.json()

	console.log(data)

	return {
		props: {
			customer: data,
		}
	}
}

export default CustomerProfile
