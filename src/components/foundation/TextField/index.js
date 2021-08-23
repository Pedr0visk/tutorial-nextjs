import React from 'react'
import {FormControl, Icon} from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const TextField = ({ name, value, placeholder, onChangeHandler, password, icon }) => {
  return (
    <FormControl>
      <Icon>
        <FontAwesomeIcon icon={faEnvelope} />
      </Icon>
      <input 
        type={password ? 'password': 'text'} 
        name={name} 
        value={value} 
        placeholder={placeholder}
        onChange={onChangeHandler ? onChangeHandler : () => {}} />
    </FormControl>
    
  )
}

export default TextField