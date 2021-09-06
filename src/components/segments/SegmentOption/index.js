import React from 'react'

import { 
	OptionItem, 
	AddButton,
	OptionAction,
	OptionText
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons'

const Option = ({ item, onClickHandler, ...props }) => {
	return (
		<OptionItem id={item.id} {...props} >
			{item.parent && (
				<>
					<small><span className="parent-name">{item.parent.name}</span></small>
					<div className="parent-separator">
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</>
			)}
			
			<OptionText>
				{item.name}
			</OptionText>
			<OptionAction>
				<AddButton onClick={e => onClickHandler(item)}>
					<FontAwesomeIcon icon={faPlus} />
				</AddButton>
				{/* <RemoveButton onClick={removeItem}>
					<FontAwesomeIcon icon={faMinus} />
				</RemoveButton> */}
			</OptionAction>
		</OptionItem>
	)
}

export default Option