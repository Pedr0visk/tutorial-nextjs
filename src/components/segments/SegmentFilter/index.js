import React, { useState } from 'react'
import { 
	Select, 
	SelectorName, 
	Options, 
	OptionItem, 
	AddButton, 
	RemoveButton,
	OptionAction,
	OptionText,
	STitle,
	SIcon,
	SContent,
	SOption,
	SOptionRemove,
	FilterAction,
	ClearAllBtn
} from './styles'
import selectors from  './selectors.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faChevronRight, faMinus, faPlus, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { UIButton } from '../../../components/ui'


const Option = ({ value, text, parent, onClickHandler }) => {

	function addItem() {
		onClickHandler(1, {value, text})
	}

	function removeItem() {
		onClickHandler(0, {value, text})
	}

	return (
		<OptionItem id={value}>
			{parent && (
				<>
					<small><span className="parent-name">{parent.name}</span></small>
					<div className="parent-separator">
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</>
			)}
			
			<OptionText>
				{text}
			</OptionText>
			<OptionAction>
				<AddButton onClick={addItem}>
					<FontAwesomeIcon icon={faPlus} />
				</AddButton>
				<RemoveButton onClick={removeItem}>
					<FontAwesomeIcon icon={faMinus} />
				</RemoveButton>
			</OptionAction>
		</OptionItem>
	)
}

const Selector = ({ name, options, segmentsChoosen, chooseSegment }) => {
	const [items, setItems] = useState([])
	const [cache, setCache] = useState([])
	const [show, toggleOptions] = useState(false)

	function addOrRemoveItem(action, item) {
		if (action) {
			setItems([...items, item])
			chooseSegment([...segmentsChoosen, item])
			toggleOptions(false)
		} else {
			let newItems = items.filter(option => option.value != item.value)
			let newSegmentsChoosen = segmentsChoosen.filter(segment => segment != item)
			setItems(newItems)
			chooseSegment(newSegmentsChoosen)
		}
	}

	return (
		<Select>
			<SelectorName onClick={e => toggleOptions(!show)}>
				{name} <FontAwesomeIcon icon={faCaretDown} /> 
			</SelectorName>
			{show && (
				<Options >
					{options.map(option => {
						return (
							<Option 
								value={option.id} 
								text={option.name} 
								parent={option.parent} 
								key={option.id} 
								onClickHandler={addOrRemoveItem}
							/>
						)
					}
				)}
			</Options>)}
		</Select>
	)
}

const SegmentFilter = ({}) => {
	const [segmentsChoosen, chooseSegment] = useState([])

	if (!selectors) {
		return 'loading'
	}

	function removeSegment(segment) {
		let lastSegments = segmentsChoosen.filter(s => s.value !== segment.value)
		chooseSegment(lastSegments)
	}

	return (
		<div className="mt-4">
			{selectors.map(select => (
				<Selector 
					segmentsChoosen={segmentsChoosen}
					chooseSegment={chooseSegment}
					key={select.id} 
					name={select.name} 
					options={select.options}
				/>
			))}
			<div className="py-4">
				<STitle>
					<SIcon>
						<FontAwesomeIcon icon={faPlus} />
					</SIcon>
					<h4>Aundiências inclusas</h4>
				</STitle>
				<SContent>
					{segmentsChoosen.map(segment => {
						return (
							<SOption key={segment.value}>
								{segment.text} 
								<SOptionRemove onClick={e => removeSegment(segment)}>
									<FontAwesomeIcon icon={faTimes} />
								</SOptionRemove>
							</SOption>
						)
					})}
					
				</SContent>
				<FilterAction>
					<ClearAllBtn onClick={e => chooseSegment([])}>
						<FontAwesomeIcon icon={faTrashAlt} />
						remove all
					</ClearAllBtn>
					<UIButton title="Apply" />
				</FilterAction>
			</div>
		</div>
	)
}

export default SegmentFilter
