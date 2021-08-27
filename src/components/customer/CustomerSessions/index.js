import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { PageViewsCount, TotalAmountSessions } from '../../../styles/profile'
import Bar from '../../ui/Bar'
import { Card, CardContent, CardHeader } from '../../ui/Card'
import { Section, SectionContent, SectionHeader } from '../../ui/Section'
import Tabs from '../../ui/Tabs'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../ui/Chart'),
  { ssr: false }
)

const CustomerSessions = ({ customer }) => {
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
	)
}

export default CustomerSessions
