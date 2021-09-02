import React from 'react'
import { UIButton } from './styles'

const Button = ({ title, onClickHandler}) => {
	return (
		<UIButton onClick={onClickHandler}>
			{title}
		</UIButton>
	)
}

export default Button
