import React from 'react'
import { Container, Input } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchField = ({ word }) => {
	return (
		<Container>
			<FontAwesomeIcon icon={faSearch} />
			<Input value={word} name="searcher" placeholder="Buscar" />
		</Container>
	)
}

export default SearchField
