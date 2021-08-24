import React from 'react'
import { useRouter } from 'next/router'
import { 
  Container, 
  Brand, 
  Nav, 
  NavItem, 
  NavText,
  Head, 
  NavIcon,
  Account,
  AccountName,
  AccountEmail
} from './styles'
import Link from 'next/link'
import navigation from '../_nav'
import Logo from '../../components/ui/Logo'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const _class = router.asPath === href ? 'n-link active' : 'n-link' 

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={_class}>
      {children}
    </a>
  )
}

const Sidebar = () => {
  return (
    <Container id="sidebar">
      <Head>
        <Brand>
          <Logo />
        </Brand>
        <Account>
          <AccountName>
            Pedro Santos
          </AccountName>
          <AccountEmail>
            pedro357bm@gmail.com
          </AccountEmail>
        </Account>
      </Head>
      <Nav>
        {navigation.map((navItem, i) => (
          <NavItem key={i}>
            <ActiveLink href={navItem.to}>
              <NavIcon className={navItem._class} />
              <NavText className="navtext">
                {navItem.name}
              </NavText>
            </ActiveLink>
          </NavItem>
        ))}
      </Nav>
    </Container>
  )
}

export default React.memo(Sidebar)
