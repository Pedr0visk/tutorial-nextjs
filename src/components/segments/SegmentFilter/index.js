import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
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
	SSWrapper,
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
				{/* <RemoveButton onClick={removeItem}>
					<FontAwesomeIcon icon={faMinus} />
				</RemoveButton> */}
			</OptionAction>
		</OptionItem>
	)
}

const Selector = ({ id, name, options, segmentsChoosen, chooseSegment }) => {
	const [items, setItems] = useState([])
	const [show, toggleOptions] = useState(false)

	function addOrRemoveItem(action, item) {
		if (action) {
			setItems([...items, item])
			let cache = segmentsChoosen[id]
			let oldSegments = [...cache, item]
			chooseSegment({...segmentsChoosen, [id]: oldSegments})
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
					{options.map((option, index) => {
						return (
							<Option 
								value={option.id} 
								text={option.name} 
								parent={option.parent} 
								key={index} 
								onClickHandler={addOrRemoveItem}
							/>
						)
					}
				)}
			</Options>)}
		</Select>
	)
}

const fetcher = url => fetch(url).then(r => r.json())

const SegmentFilter = ({segmentsChoosen, chooseSegment, submit}) => {

	const [loading, setLoading] = useState(false)
	const { data, error } = useSWR(`${process.env.apiUrl}/api/taxonomies/`, fetcher)

	if (error) return <div>failed to load</div>
  if (!data) return <div>loading selectors...</div>

	let selectors = []

	let products = {name: 'Produtos', options: [], id: 'products'}
	let brands = {name: 'Marcas', options: [], id: 'brands'}
	let interests = {name: 'Conteúdo', options: [], id: 'interests'}
	
	data.map(taxonomy => {
		const opt = {
			parent: taxonomy.parent,
			id: taxonomy.cid,
			name: taxonomy.translations.pt,
		}

		switch(taxonomy.category) {
			case 'product':
				products.options.push(opt)
				break;
			case 'brand':
				brands.options.push(opt)
				break;
			case 'interest':
				interests.options.push(opt)
				break;
			default:
				break;
		}
	})

	selectors.push(products)
	selectors.push(brands)
	selectors.push(interests)

	function removeSelected(segment, item) {
		let lastItems = segmentsChoosen[segment].filter(s => s.value !== item.value)
		chooseSegment({ ...segmentsChoosen, [segment]: lastItems })
	}

	return (
		<div className="mt-4">
			{selectors.map((select, index) => (
				<Selector 
					id={select.id}
					segmentsChoosen={segmentsChoosen}
					chooseSegment={chooseSegment}
					key={index} 
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
					{Object.keys(segmentsChoosen).map((key, index) => {
						if (segmentsChoosen[key].length < 1) {
							return undefined
						} else {
							return (
								<SSWrapper key={index}>
									<h4>{key}</h4>
									{segmentsChoosen[key].map((item, index) => (
										<SOption key={index}>
											{item.text} 
											<SOptionRemove onClick={e => removeSelected(key, item)}>
												<FontAwesomeIcon icon={faTimes} />
											</SOptionRemove>
										</SOption>
									))}
								</SSWrapper>
							)
						}
					})}
					
				</SContent>
				<FilterAction>
					<ClearAllBtn onClick={e => chooseSegment({
							products: [],
							segments: [],
							interests: []
						})}>
						<FontAwesomeIcon icon={faTrashAlt} />
						remove all
					</ClearAllBtn>
					<UIButton title="Apply" onClickHandler={submit} />
				</FilterAction>
			</div>
		</div>
	)
}

export default SegmentFilter
