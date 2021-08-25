import React from "react"

import Head from "next/head";
import { Container, Wrapper, Body } from './styles'
import { Header, Sidebar } from '../index'


const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <script async src="/js/main.js" />
      </Head>
      <Sidebar />
      <Wrapper id='wrapper'>
        <Header />
        <Body>
          {children}
        </Body>
      </Wrapper>
    </Container>
  )
}

export default Layout