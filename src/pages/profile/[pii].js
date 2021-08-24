import React from 'react'
import dynamic from 'next/dynamic'

import { 
  Profile,
  Avatar,
  User,
  UserName,
  PlaceHolder,
  TotalAmountSessions,
  PageViewsCount
} from './styles'

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


const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/ui/Chart'),
  { ssr: false }
)

const CustomerProfile = () => {
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
            <div className="grid grid-cols-4">
              {/* block 1 */}
              <Section>
                <SectionHeader title="Total de Sessões" />
                <SectionContent>
                  <TotalAmountSessions>579</TotalAmountSessions>
                  <PageViewsCount>Page views <span>2.492</span></PageViewsCount>
                  <DynamicComponentWithNoSSR />
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
