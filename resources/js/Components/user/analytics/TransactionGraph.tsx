import { FC } from 'react'
import { TotalTransaction } from '@/interfaces/transaction.interface'
import { Card, Text } from '@nextui-org/react'
import {
    Area,
    AreaChart,
    CartesianGrid, Legend,
    ResponsiveContainer,
    Tooltip,
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
				<div className='h-[28rem]'>
					<ResponsiveContainer
						width='100%'
						height='100%'
						className='-mx-4'
					>
						<AreaChart
                            data={transactions}
                        >
							<CartesianGrid strokeDasharray='3 9' />
							<XAxis
								dataKey='date'
								name='Date:'
								fontSize={10}
							/>
							<YAxis name='ETH' fontSize={10} />
							<Tooltip />
                            <Legend />
							<Area
								type='monotone'
								dataKey='total_value'
								name='From'
                                activeDot={{ r: 8 }}
							/>
							<Area
								type='monotone'
								dataKey='total_value_to'
								stroke='red'
								name='To'
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</Card.Body>
		</Card>
	)
}

export default TransactionGraph
