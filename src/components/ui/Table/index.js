import React from 'react'
import { TableContainer } from './styles'

const Table = ({ items, fields }) => {
	return (
		<TableContainer className="">
			<thead>
				<tr>
					{fields.map(name => (<th key={name}>{name}</th>))}
				</tr>
			</thead>
			<tbody>
				{items.map((item, index) => {
					return (
						<tr key={index}>
							{Object.keys(item).map(attr => (<td key={attr}>{item[attr]}</td>))}
						</tr>
					)
				})}
			</tbody>
		</TableContainer>
	)
}

export default Table
