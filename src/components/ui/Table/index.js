import React from 'react'
import { TableContainer, Caret } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Table = ({ items, fields }) => {
	return (
		<TableContainer className="">
			<thead>
				<tr>
					{fields.map(name => {
						return (
							<th key={name}>
								{name}
								<Caret>
									<FontAwesomeIcon icon={faCaretUp} />
									<FontAwesomeIcon icon={faCaretDown} />
								</Caret>
							</th>
						)
					})}
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
