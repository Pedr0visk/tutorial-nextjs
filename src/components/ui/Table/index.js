import React from 'react'
import { TableContainer, Caret } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Table = ({ items, fields }) => {
	return (
		<TableContainer className="">
			<thead>
				<tr>
					{fields.map(field => {
						return (
							<th key={field.attr}>
								{field.label}
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
							{fields.map(field => {
								if (item[field.attr]) {
									return (
										<td key={item._id}><Link className="link" href={`/profile/${item._id}`}>{item[field.attr]}</Link></td>
									)
								} else {
									return (
										<td key={item._id}><Link className="link" href={`/profile/${item._id}`}>--</Link></td>
									)
								}
								
							})}
						</tr>
					)
				})}
			</tbody>
		</TableContainer>
	)
}

export default Table
