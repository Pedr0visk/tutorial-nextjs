import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input, Container, Content } from './styles'
import { 
  faSearch
} from "@fortawesome/free-solid-svg-icons"

const SearchInput = ( value, handleInput ) => {
  return (
    <Content>
    <Container>
      
      <Input
        onChange={handleInput}
        placeholder={"Busca"}
      />
    </Container>
    <FontAwesomeIcon icon={faSearch} />
  </Content>
  );
}
export default SearchInput
