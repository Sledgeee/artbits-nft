import { FC, useState } from 'react'
import {
	Avatar,
	Card,
	Col,
	Row,
	Table,
	Text,
	Tooltip
} from '@nextui-org/react'
import { Nft } from '@/interfaces/nft.interface'
import { BsEye, BsTrash } from 'react-icons/bs'
import { useUser } from '@/hooks/useUser'
import { userNftsTableColumns } from '@/constants'
import axios from 'axios'

interface UserNftsTableProps {
	userItems: Nft[]
}

const UserNftsTable: FC<UserNftsTableProps> = ({
	userItems
}) => {
	const [nfts, setNfts] = useState<Nft[]>(userItems)

	const itemsLength = nfts.length

	const user = useUser()

	const deleteNft = (id: number) =>
		axios
			.delete(route('nft.delete', id))
			.then(() => setNfts(nfts.filter(n => n.id !== id)))

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
						<Table.Header columns={userNftsTableColumns}>
							{column => (
								<Table.Column key={column.key}>
									{column.label}
								</Table.Column>
							)}
						</Table.Header>
						<Table.Body>
							{nfts.map((value, index) => (
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
											<Col>
												<Tooltip content='Show in another tab'>
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
											<Col>
												<Tooltip
													content={`Delete nft ${value.name}`}
													color='error'
													onClick={() =>
														deleteNft(value.id)
													}
												>
													{' '}
													<BsTrash
														size={20}
														fill='#FF0080'
													/>
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
