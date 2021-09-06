import React, { useState, useRef, useEffect } from 'react'
import { FixedSizeList as List } from 'react-window';

import { 
	Select, 
	SelectorName,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import SegmentOption from '../SegmentOption'


const Selector = ({ data, toggleSelector, selectSegment }) => {
	const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const pageClickEvent = (e) => {
			// If the active element exists and is clicked outside of
			if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
				setIsActive(false);
			}
		};
	
		if (isActive) {
			// If the item is active (ie open) then listen for clicks
			window.addEventListener('click', pageClickEvent);
		}
	
		return () => {
			window.removeEventListener('click', pageClickEvent);
		}
	
	}, [isActive]);

	const Row = ({ index, style }) => {
		// Data passed to List as "itemData" is available as props.data
		const item = data.options[index];
		return (
			<SegmentOption style={style} item={item} onClickHandler={selectSegment} />
		);
	
	};
	
	const ListOptions = () => (
		<List
			height={250}
			itemCount={data.options.length}
			itemSize={35}
			width={450}
		>
			{Row}
		</List>
	)

	return (
		<Select>
			<SelectorName onClick={e => setIsActive(!isActive)}>
				{data.name} <FontAwesomeIcon icon={faCaretDown} /> 
			</SelectorName>
			<div ref={dropdownRef} className={`option-wrapper ${isActive ? 'show' : ''}`}>
				<ListOptions />
			</div>
		</Select>
	)
}

export default Selector