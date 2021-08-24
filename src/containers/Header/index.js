import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  Container, 
  PageTitle, 
  Actions, 
  ActionLink,
  ToggleBtn 
} from './styles'
import { 
  faBell, 
  faQuestionCircle, 
  faDownload,
  faCog,
  faSignOutAlt,
  faBars
} from "@fortawesome/free-solid-svg-icons"


const Header = () => {
  return (
    <Container>
      <ToggleBtn id="sidebarToggleBtn">
        <FontAwesomeIcon icon={faBars} />
      </ToggleBtn>
      
      <PageTitle>
        Customer Data Plataform
      </PageTitle>

      <Actions>
        <ActionLink>
          <FontAwesomeIcon icon={faBell} />
        </ActionLink>
        <ActionLink>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </ActionLink>
        <ActionLink>
          <FontAwesomeIcon icon={faDownload} />
        </ActionLink>
        <ActionLink>
          <FontAwesomeIcon icon={faCog} />
        </ActionLink>
        <ActionLink>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </ActionLink>
      </Actions>
    </Container>
  )
}

export default Header
