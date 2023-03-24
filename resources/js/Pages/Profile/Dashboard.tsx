import Layout from '@/Components/Layout'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { BaseProps } from '@/types/base.type'
import { Card, Text } from '@nextui-org/react'
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis
} from 'recharts'
import { TotalTransaction } from '@/types/transaction.type'

interface Props extends BaseProps {
	transactions: TotalTransaction[]
}

const Dashboard: FC<Props> = ({ auth, transactions }) => {


    return (
        <>
            <Head title='Dashboard' />

            <Layout auth={auth}>
                <div className='max-w-7xl mx-auto py-12'>
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
                                        <XAxis
                                            dataKey='date'
                                            name='Date:'
                                        />
                                        <YAxis name='ETH' />
                                        <Line
                                            type='monotone'
                                            dataKey='total_value'
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard
