import React from 'react'
import { Container, PageTitle, AccountInfo, AccountName, Actions, ActionLink } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faBell, 
  faQuestionCircle, 
  faDownload,
  faCog,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons"

import Logo from '../../components/ui/Logo'

const Header = () => {
  return (
    <Container>
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
