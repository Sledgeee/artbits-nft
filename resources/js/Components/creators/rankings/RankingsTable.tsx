import { FC } from 'react'
import { Table, Text, User } from '@nextui-org/react'
import { RankingCreators } from '@/types/creator.type'
import { Link } from '@inertiajs/react'

interface RankingsTable {
	topCreators: RankingCreators[]
}

const RankingsTable: FC<RankingsTable> = ({
	topCreators
}) => {
	const columns = [
		{
			key: 'key',
			label: 'Number'
		},
		{
			key: 'creatorName',
			label: 'Creators'
		},
		{
			key: 'nftSoled',
			label: 'NFTs Sold'
		},
		{
			key: 'volume',
			label: 'Volume'
		}
	]

	return (
		<Table
			className='z-0'
			selectionMode='single'
			hoverable
			bordered
			borderWeight='normal'
			css={{ p: '0px' }}
		>
			<Table.Header columns={columns}>
				{column => (
					<Table.Column key={column.key}>
						{column.label}
					</Table.Column>
				)}
			</Table.Header>
			<Table.Body>
				{topCreators.map((value, index) => (
					<Table.Row key={index}>
						<Table.Cell>
							<Text className='pl-2'>{index + 1}</Text>
						</Table.Cell>
						<Table.Cell>
							<Link href={`/creator/${value.username}`}>
								<User
									src={
										value.avatar_image ||
										'/images/icons/1.png'
									}
									name={value.username}
									description={value.email}
									css={{ p: 0 }}
								/>
							</Link>
						</Table.Cell>
						<Table.Cell>
							<Text>
								{value.transactions_from_count || 0}
							</Text>
						</Table.Cell>
						<Table.Cell>
							<Text>
								{(value.transactions_from_sum_value || 0) +
									' ETH'}
							</Text>
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
			<Table.Pagination
				shadow
				css={{ pb: '10px' }}
				align='center'
				rowsPerPage={25}
			/>
		</Table>
	)
}
export default RankingsTable
