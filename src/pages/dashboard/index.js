    import React from 'react'
    import {ContainerGraphics, Container, ContainerTable} from './styles'
    import GraphicCard from '../../containers/GraphicsCard'
    import Layout from '../../containers/Layout'
    import Title from '../../containers/PageTitle'
  import TableMain from '../../containers/Table'

    const Dashboard = () => {
      return (
        <Layout>
          <Container>
            <Title value={"Dashboard"} subtitle={"Este é o subtítulo da página."}/>
            <ContainerGraphics>
            <GraphicCard title={"Usuários na base"} value={"21.587"}>
              {/* Graphic */}
            </GraphicCard>
            <GraphicCard title={"Usuários sem Opt In"} value={"1.326"}>
              {/* Graphic */}
            </GraphicCard>
            <GraphicCard title={"Segmentos Mapeados"} value={"259"}>
              {/* Graphic */}
            </GraphicCard>
            <GraphicCard title={"Compras Registradas"} value={"2.538"}>
              {/* Graphic */}
            </GraphicCard>
            </ContainerGraphics>
          </Container>
          <ContainerTable>
            <TableMain />
          </ContainerTable>
        </Layout>
      )
    }

    export default Dashboard
