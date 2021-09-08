import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

import { 
	STitle,
	SIcon,
	SContent,
	SBody
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import SegmentSelector from '../SegmentSelector'
import SegmentItem from '../SegmentItem'


const SegmentFilter = ({
	segmentsChoosen = [], 
	chooseSegment, 
	taxonomies, 
	setQueryParams, 
	queryParams
}) => {

	const [selectors, setSelectors] = useState([])
	const [openedSelector, setOpenedSelector] = useState('')
	const [showRule, toggleRule] = useState(false)
	const [outerLogicalOperator, setOuterLogicalOperator] = useState(false)

	useEffect(() => {
		let sum = 0
		for (let seg in segmentsChoosen) {
			if (segmentsChoosen[seg].length > 0) {
				sum += 1
			}
		}

		if (sum > 1) {
			toggleRule(true)
		} else {
			toggleRule(false)
		}
	}, [segmentsChoosen])

	useEffect(() => {
		let products = {name: 'Produtos', options: [], id: 'products'}
		let brands = {name: 'Marcas', options: [], id: 'brands'}
		let interests = {name: 'Conteúdo', options: [], id: 'interests'}
		
		taxonomies.map(taxonomy => {
			const opt = {
				parent: taxonomy.parent,
				id: taxonomy.cid,
				name: taxonomy.translations.pt,
				category: taxonomy.category + 's'
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

		setSelectors([products, brands, interests])
	}, [taxonomies])

	function selectSegment(item) {
		let cache = segmentsChoosen[item.category]
		let oldSegments = [...cache, item]
		chooseSegment({...segmentsChoosen, [item.category]: oldSegments})
	}

	function removeSelected(segment, item) {
		let lastItems = segmentsChoosen[segment].filter(s => s.value !== item.value)
		chooseSegment({ ...segmentsChoosen, [segment]: lastItems })
	}

	return (
		<div className="mt-4">
			<div className="d-flex align-items-start">
				{selectors.map((select, index) => (
					<SegmentSelector
						data={select}
						key={index} 
						toggleSelector={setOpenedSelector}
						selectSegment={selectSegment}
						opened={openedSelector === select.name}
						segmentsChoosen={segmentsChoosen}
						chooseSegment={chooseSegment}
					/>
				))}
			</div>
			<div className="py-4">
				<STitle className="mb-5">
					<SIcon>
						<FontAwesomeIcon icon={faPlus} />
					</SIcon>
					<h4>Aundiências inclusas</h4>
				</STitle>
				
				<SBody outerLogicalOperator={outerLogicalOperator} showRule={showRule}>
					{/* show AND/OR Button */}
					{
						showRule && 
						<button className="ruler" onClick={e => setOuterLogicalOperator(!outerLogicalOperator)}>
							{outerLogicalOperator ? 'E' : 'OU'}
						</button>
					}
					
					<SContent outerLogicalOperator={outerLogicalOperator} showRule={showRule}>
						{Object.keys(segmentsChoosen).map((segment, index) => {
							if (segmentsChoosen[segment].length < 1) {
								return undefined
							} else {
								return (
									<SegmentItem
										key={index}
										segmentsChoosen={segmentsChoosen}
										segment={segment}
										index={index}
										removeSelected={removeSelected}
									/>
								)
							}
						})}
					</SContent>
				</SBody>

			</div>
		</div>
	)
}

export default SegmentFilter
