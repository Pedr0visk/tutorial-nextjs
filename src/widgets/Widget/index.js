import React from 'react'
import Image from 'next/image'
import { Container, Label, Value } from './styles'
import PropTypes from 'prop-types'


const Widget = ({ label, value }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Value>{value}</Value>
		</Container>
	)
}

Widget.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
}

export default Widget
