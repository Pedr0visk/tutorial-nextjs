import React from 'react'
import { UIButton } from './styles'

const Button = ({ title, onClickHandler}) => {
	return (
		<UIButton>
			{title}
		</UIButton>
	)
}

export default Button
