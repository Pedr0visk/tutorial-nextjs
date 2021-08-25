import React from 'react'
// import { Widget } from './styles'
import Widget from '../Widget'

const WidgetsCustomers = () => {
	return (
		<div className="grid grid-cols-4 gap-7 mb-12">
			<Widget label="Usuários na base" value="21.657" />
			<Widget label="Usuários sem Opt In" value="1.326" />
			<Widget label="Segmentos Mapeados" value="1.326" />
			<Widget label="Usuários Registradas" value="1.326" />
		</div>
	)
}

export default WidgetsCustomers
