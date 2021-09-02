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
						<Attribute property="País" value={customer.location.country || '--'} />
						<Attribute property="Estado" value={customer.location.state || '--'} />
						<Attribute property="Cidade" value={customer.location.city || '--'} />
					</div>

					{/* block 2 */}
					<div>
						<Attribute property="Faixa Etária" value={customer.demographic.age?.translations.pt || '--'} />
						<Attribute property="Escolaridade" value={customer.demographic.education?.translations.pt || '--'} />
						<Attribute property="Estado Civil" value={customer.demographic.marital?.translations.pt || '--'} />
					</div>

					{/* block 3 */}
					<div>
						<Attribute property="Genêro" value={customer.demographic.gender?.translations.pt || '--'} />
						<Attribute property="Classe Social" value={customer.demographic.income?.translations.pt || '--'} />
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
