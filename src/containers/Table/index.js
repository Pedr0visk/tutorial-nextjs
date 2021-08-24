  import React from 'react'
  import { Line, Table, ColumnTitle, CellValue, Head } from './styles'
  import { 
    faBell, 
    faQuestionCircle, 
    faDownload,
    faCog,
    faSignOutAlt
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
        <Table>
        <Head>
        <Line>
          <ColumnTitle>
            NOME
          </ColumnTitle>
          <ColumnTitle>
            SOBRENOME
          </ColumnTitle>
          <ColumnTitle>
            E-MAIL
          </ColumnTitle>
          <ColumnTitle>
            INCLUSÃO
          </ColumnTitle>
          </Line>
          </Head>
          {values.map((element) => (
            <Line key={element.nome}>
              <CellValue>{element.nome}</CellValue>
              <CellValue>{element.sobrenome}</CellValue>
              <CellValue>{element.email}</CellValue>
              <CellValue>{element.inclusao}</CellValue>
          </Line>
          
          ))}
        </Table>
    )
  }

  export default TableMain
