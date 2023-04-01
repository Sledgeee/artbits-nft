import { FC } from 'react'
import {
	Avatar,
	Card,
	Col,
	Row,
	Table,
	Text,
	Tooltip
} from '@nextui-org/react'
import { Nft } from '@/types/nft.type'
import { BsEye, BsPen, BsTrash } from 'react-icons/bs'
import { useUser } from '@/hooks/useUser'

interface UserNftsTableProps {
	userItems: Nft[]
}

const UserNftsTable: FC<UserNftsTableProps> = ({
	userItems
}) => {
	const columns = [
		{
			key: 'key',
			label: '№'
		},
		{
			key: 'img',
			label: 'Image'
		},
		{
			key: 'name',
			label: 'Name'
		},
		{
			key: 'price',
			label: 'Price'
		},
		{
			key: 'tools',
			label: 'Tools'
		}
	]

	const itemsLength = userItems.length

	const user = useUser()

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Header>
				<Text h4>
					{itemsLength > 0
						? 'Created items'
						: 'There are no products created'}
				</Text>
			</Card.Header>

			{itemsLength > 0 && (
				<Card.Body>
					<Table
						className='z-0'
						bordered
						css={{
							p: '0px',
							border: 0
						}}
					>
						<Table.Header columns={columns}>
							{column => (
								<Table.Column key={column.key}>
									{column.label}
								</Table.Column>
							)}
						</Table.Header>
						<Table.Body>
							{userItems.map((value, index) => (
								<Table.Row key={index}>
									<Table.Cell>
										<Text className='pl-1'>
											{index + 1}
										</Text>
									</Table.Cell>
									<Table.Cell>
										<Avatar
											squared
											src={value.image}
											css={{ p: 0 }}
										/>
									</Table.Cell>
									<Table.Cell>
										<Text>{value.name}</Text>
									</Table.Cell>
									<Table.Cell>
										<Text>{value.price}</Text>
									</Table.Cell>
									<Table.Cell>
										<Row justify='center' align='center'>
											<Col css={{ d: 'flex' }}>
												<Tooltip content='Details'>
													<a
														target='_blank'
														href={`/nft/${user.username}/${value.name}`}
													>
														<BsEye
															size={20}
															fill='#979797'
														/>
													</a>
												</Tooltip>
											</Col>
										</Row>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
						<Table.Pagination
							shadow
							css={{ pb: '10px' }}
							align='center'
							rowsPerPage={
								itemsLength > 10 ? 10 : itemsLength
							}
						/>
					</Table>
				</Card.Body>
			)}
		</Card>
	)
}

export default UserNftsTable
