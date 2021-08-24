import React from 'react'
import { Container, Link, Dropdown, Select, Option } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faCalendar,
  faFileExport,
  faFilter,
} from "@fortawesome/free-solid-svg-icons"
import SearchInput  from '../SearchInput'

const Filter = () => {
  var value = '';
  var options = ['Teste 1', 'Teste 2', 'Teste 3', 'Teste 4'];

  function handleInput(e) {
    if(e !== ""){
      value = e.target.value;
    }
  }

  return (
    <Container>
      <Dropdown>
        <Link>
        <FontAwesomeIcon icon={faFilter} />
          <Select>
            <Option>Segmentos</Option>
            {options.map((element) => (
              <Option value={element}>{element}</Option>
            ))}
          </Select>
        </Link>
      </Dropdown>
      <Dropdown>
        <Link>
          <FontAwesomeIcon icon={faFileExport} />
          <Select>
            <Option>Exportar audiência</Option>
            {options.map((element) => (
              <Option key={element} value={element}>{element}</Option>
            ))}
          </Select>
        </Link>
      </Dropdown>
      <div style={{float: 'right', display: 'flex'}}>

      <SearchInput />
      </div>
    </Container>
  )
}

export default Filter
