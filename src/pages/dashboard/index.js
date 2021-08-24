  import React from 'react'
  import {ContainerGraphics, Container} from './styles'
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

          <GraphicCard title={"Usuários na base"}>
            {/* <Graphic /> */}
          </GraphicCard>
          <GraphicCard title={"Usuários sem Opt In"}>
            {/* <Graphic /> */}
          </GraphicCard>
          <GraphicCard title={"Segmentos Mapeados"}>
            {/* <Graphic /> */}
          </GraphicCard>
          <GraphicCard title={"Compras Registradas"}>
            {/* <Graphic /> */}
          </GraphicCard>
          </ContainerGraphics>
        </Container>
        <div style={{alignItems: 'center', justifyContent: 'center'}}>
        <TableMain />
        </div>
        
      </Layout>
    )
  }

  export default Dashboard
