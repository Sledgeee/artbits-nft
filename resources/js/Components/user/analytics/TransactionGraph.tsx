import { FC } from 'react'
import { TotalTransaction } from '@/types/transaction.type'
import { Card, Text } from '@nextui-org/react'
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis
} from 'recharts'

interface TransactionGraphProps {
	transactions: TotalTransaction[]
}

const TransactionGraph: FC<TransactionGraphProps> = ({
	transactions
}) => {
	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Body>
				<Text h3 className='mx-6'>
					Transactions review
				</Text>
				<div className='h-96'>
					<ResponsiveContainer
						width='100%'
						height='100%'
						className='-mx-4'
					>
						<LineChart data={transactions}>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='date' name='Date:' />
							<YAxis name='ETH' />
							<Line type='monotone' dataKey='total_value' />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</Card.Body>
		</Card>
	)
}

export default TransactionGraph
