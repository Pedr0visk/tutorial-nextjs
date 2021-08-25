import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { 
  Profile,
  Avatar,
  User,
  UserName,
  PlaceHolder,
  TotalAmountSessions,
  PageViewsCount
} from '../../styles/profile'

import { Layout } from '../../containers'
import { Head } from '../../components/patterns'
import { Attribute } from '../../components/foundation'

import {
  Card,
  CardHeader,
  CardContent
} from '../../components/ui/Card'

import {
  Section,
  SectionHeader,
  SectionContent
} from '../../components/ui/Section'

import Bar from '../../components/ui/Bar'
import Tabs from '../../components/ui/Tabs'


const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/ui/Chart'),
  { ssr: false }
)

const CustomerProfile = () => {
  const [areaOptions, setAreaOptions] = useState({
    colors: ['#1CA9DF'],
    chart: {
      height: 350,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Ago', 'Set', 'Out', 'Nov', 'Dec', "Jan"]
    }
  })

  const [areaSeries, setAreaSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60]
    }
  ])

  const [donutConfig, setDonutConfig] = useState({
    options: {
      plotOptions: {
        pie: {
          size: 500
        }
      },
      dataLabels: { enabled: false },
      labels: ['Vencedor', 'Explorador', 'Batalhador'],
      colors: ['#1CA9DF', 'rgba(28, 169, 223, 0.75)', 'rgba(28, 169, 223, 0.5)'],
    },
    series: [60, 25, 15],
  })

  return (
    <Layout>
      <div className="container mx-auto px-10">
        <Head title="Customer Profile" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aspernatur iste laboriosam obcaecati, distinctio sapiente consequuntur et ad consectetur vel!" />

        {/* User's Profile */}
        <Profile className="mb-8">
          <div className="grid grid-cols-3 space-x-16">
            {/* Avatar */}
            <User className="flex align-center">
              <Avatar>
                <PlaceHolder>PS</PlaceHolder>
              </Avatar>
              <UserName>Pedro Santos</UserName>
            </User>

            {/* General Info */}
            <div>
              <Attribute property="ID" value="8271723b1g2h3123123g1361267321g123g" />
              <Attribute property="E-mail" value="pedro@navegg.com" />
              <Attribute property="Telefone" value="(11) 99887.2615" />
            </div>

            <div>
              <Attribute property="Data" value="(17/06/21)" />
            </div>
          </div>
        </Profile>
     
        {/* Demographic Data */}
        <Card>
          <CardHeader title="Dados Demográficos" />
          <CardContent>
            <div className="grid grid-cols-4 space-x-10">
              {/* block 1 */}
              <div>
                <Attribute property="País" value="Brasil" />
                <Attribute property="Estado" value="São Paulo" />
                <Attribute property="Cidade" value="Osasco" />
              </div>

              {/* block 2 */}
              <div>
                <Attribute property="Faixa Etária" value="34 a 59" />
                <Attribute property="Escolaridade" value="Graduação" />
                <Attribute property="Estado Civil" value="Casado" />
              </div>

              {/* block 3 */}
              <div>
                <Attribute property="Genêro" value="Feminino" />
                <Attribute property="Classe Social" value="B/C" />
                <Attribute property="Dispositivos" value="Desktop / Mobile" />
              </div>

              {/* block 4 */}
              <div>
                <Attribute property="Sistema Operacional" value="Windows" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demographic Data */}
        <Card>
          <CardHeader title="Dados de Sessões" />
          <CardContent>
            <div className="grid grid-cols-3 gap-20">
              {/* block 1 */}
              <Section>
                <SectionHeader title="Total de Sessões" />
                <SectionContent>
                  <TotalAmountSessions>579</TotalAmountSessions>
                  <PageViewsCount>Page views <span>2.492</span></PageViewsCount>
                  <DynamicComponentWithNoSSR options={areaOptions} series={areaSeries} type="area" />
                </SectionContent>
              </Section>

              {/* block 2 */}
              <Section>
                <SectionHeader title="Segmentos Navegg" />
                <SectionContent>
                  <Tabs> 
                    <div label="Conteúdo"> 
                      <Bar className="mb-8" width={1} label="Moda e Beleza" />
                      <Bar className="mb-8" width={0.7} label="Esportes" />
                      <Bar className="mb-8" width={0.55} label="Notícias" />
                      <Bar className="mb-8" width={0.35} label="Motos" />
                    </div> 
                    <div label="Produtos"> 
                      <Bar className="mb-8" width={0.5} label="Moda e Beleza" />
                      <Bar className="mb-8" width={1} label="Esportes" />
                      <Bar className="mb-8" width={0.6} label="Notícias" />
                      <Bar className="mb-8" width={0.5} label="Motos" />
                    </div> 
                    <div label="Marcos"> 
                      <Bar className="mb-8" width={0.8} label="Moda e Beleza" />
                      <Bar className="mb-8" width={0.2} label="Esportes" />
                      <Bar className="mb-8" width={1} label="Notícias" />
                      <Bar className="mb-8" width={0.65} label="Motos" /> 
                    </div> 
                  </Tabs> 
                </SectionContent>
              </Section>

              {/* block 3 */}
              <Section>
                <SectionHeader title="Metodologias Navegg" />
                <SectionContent>
                  <Tabs> 
                    <div label="EveryOne"> 
                      <DynamicComponentWithNoSSR 
                        options={donutConfig.options} 
                        series={donutConfig.series}
                        type="donut" 
                      />
                    </div> 
                    <div label="EveryBuyer"> 
                      <DynamicComponentWithNoSSR 
                        options={donutConfig.options} 
                        series={donutConfig.series}
                        type="donut" 
                      />
                    </div> 
                  </Tabs> 
                </SectionContent>
              </Section>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

export default CustomerProfile
