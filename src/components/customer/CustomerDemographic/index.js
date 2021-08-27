import React from 'react'
import { Attribute } from '../../foundation'
import { Card, CardContent, CardHeader } from '../../ui/Card'

const CustomerDemographic = ({ customer }) => {
	return (
		<Card>
			<CardHeader title="Dados Demográficos" />
			<CardContent>
				<div className="grid grid-cols-4 space-x-10">
					{/* block 1 */}
					<div>
						<Attribute property="País" value={customer.data.locale.country || '--'} />
						<Attribute property="Estado" value={customer.data.locale.state || '--'} />
						<Attribute property="Cidade" value={customer.data.locale.city || '--'} />
					</div>

					{/* block 2 */}
					<div>
						<Attribute property="Faixa Etária" value={customer.data.demographic.age.pt || '--'} />
						<Attribute property="Escolaridade" value={customer.data.demographic.education.pt || '--'} />
						<Attribute property="Estado Civil" value={customer.data.demographic.marital.pt || '--'} />
					</div>

					{/* block 3 */}
					<div>
						<Attribute property="Genêro" value={customer.data.demographic.gender.pt || '--'} />
						<Attribute property="Classe Social" value={customer.data.demographic.income.pt || '--'} />
						<Attribute property="Dispositivos" value="--" />
					</div>
					
					{/* block 4 */}
					<div>
						<Attribute property="Sistema Operacional" value="--" />
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default CustomerDemographic
