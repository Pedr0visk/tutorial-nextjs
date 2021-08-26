import React from 'react'
import Link from 'next/link'
import { Container } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const Breadcrumb = ({ children, action }) => {
  return (
    <Container>
			{action && (
				<Link href="/dashboard">
					<a className="action-link"><FontAwesomeIcon icon={faChevronLeft}  /> Voltar</a>
				</Link>
			)}
      {children}
    </Container>
  )
}

export default Breadcrumb
