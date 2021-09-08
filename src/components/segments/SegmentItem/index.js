import React, {useState} from 'react'
import { 
	SOption,
	SOptionRemove,
	SSWrapper,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const index = ({index, segment, segmentsChoosen, removeSelected}) => {
	const [innerLogicalOperator, setInnerLogicalOperator] = useState(false)

	return (
		<SSWrapper showRule={segmentsChoosen[segment].length > 1}>
			<h4>{segment}</h4>
			{/* show AND/OR Button */}
			{
				(segmentsChoosen[segment].length > 1) && 
				<button className="rule">E</button>
			}
			<div className="sswrapper-content">
				{/* taxonomy choosen for segment */}
				{segmentsChoosen[segment].map((item, index) => (
					<SOption key={index}>
						{item.name} 
						<SOptionRemove onClick={e => removeSelected(segment, item)}>
							<FontAwesomeIcon icon={faTimes} />
						</SOptionRemove>
					</SOption>
				))}
			</div>
		</SSWrapper>
	)
}

export default index
