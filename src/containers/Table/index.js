  import React from 'react'
  import { Line, Table, ColumnTitle, CellValue, Head, Container, Pagination, Page } from './styles'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import { 
    faArrowRight,
    faChevronRight,
    faSort
  } from "@fortawesome/free-solid-svg-icons"

  const TableMain = () => {
    var values = [
      {
        nome: 'José',
        sobrenome: 'Silva',
        email: 'jose@silva.com',
        inclusao: '01/01/2021'
      },
      {
        nome: 'Maria',
        sobrenome: 'Souza',
        email: 'maria@souza.com',
        inclusao: '02/02/2021'
      },
      {
        nome: 'Joana',
        sobrenome: 'Gomes',
        email: 'joana@gomes.com',
        inclusao: '03/03/2021'
      },
      {
        nome: 'Flávio',
        sobrenome: 'Gonçalves',
        email: 'flavio@goncalves.com',
        inclusao: '04/04/2021'
      },
    ];
    return (
      <Container>
        <Table>
        <Head>
        <Line>
          <ColumnTitle style={{paddingLeft: 20}}>
            NOME   
            <FontAwesomeIcon style={{marginLeft: 10}}  icon={faSort} />
          </ColumnTitle>
          <ColumnTitle>
            SOBRENOME
            <FontAwesomeIcon style={{marginLeft: 10}}  icon={faSort} />
          </ColumnTitle>
          <ColumnTitle>
            E-MAIL
            <FontAwesomeIcon style={{marginLeft: 10}}  icon={faSort} />
          </ColumnTitle>
          <ColumnTitle>
            INCLUSÃO
            <FontAwesomeIcon style={{marginLeft: 10}}  icon={faSort} />
          </ColumnTitle>
          </Line>
          </Head>
          {values.map((element) => (
            <Line key={element.nome}>
              <CellValue style={{paddingLeft: 20}}>{element.nome}</CellValue>
              <CellValue>{element.sobrenome}</CellValue>
              <CellValue>{element.email}</CellValue>
              <CellValue>{element.inclusao}</CellValue>
          </Line>
          ))}
        </Table>
        <Pagination>
                <Page style={{  backgroundColor: '#1CA9DF', color: '#FFF'}}>1</Page>
                <Page>2</Page>
                <Page>3</Page>
                <Page>4</Page>
                <Page>5</Page>
                <Page>...</Page>
                <FontAwesomeIcon style={{marginLeft: 10}}  icon={faChevronRight} />
            </Pagination>
        </Container>  
    )
  }

  export default TableMain
