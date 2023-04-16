import React, { FC, useEffect, useState } from 'react'
import {
	Auction,
	AuctionBet
} from '@/interfaces/auction.interface'
import {
	Button,
	Card,
	Input,
	Modal,
	Spacer,
	Table,
	Text,
	User
} from '@nextui-org/react'
import moment from 'moment'
import { useForm } from '@inertiajs/react'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { betsTableColumns } from '@/constants'

interface AuctionCardProps {
	auction?: Auction
	minPrice: number
}

interface AuctionsBetsModalProps {
	available: boolean
	auction?: Auction
	minPrice: number
}

const AuctionsBetsModal: FC<AuctionsBetsModalProps> = ({
	auction,
	available,
	minPrice
}) => {
	const [visible, setVisible] = useState<boolean>(false)
	const handler = () => setVisible(true)
	const closeModal = () => setVisible(false)

	const minRate = Math.max.apply(
		null,
		auction?.auction_bets
			?.map(a => a.value)
			.concat([minPrice]) || [0]
	)

	const { data, setData, errors, post } = useForm({
		value: minRate,
		auction_id: auction?.id || 0
	})

	const sendBet = () => post(route('bet.create'))

	return (
		<>
			<Button
				onPress={handler}
				shadow
				color='gradient'
				disabled={!available}
			>
				Place Bid
			</Button>

			<Modal
				closeButton
				blur
				aria-labelledby='auctions-bets-modal'
				open={visible}
				onClose={closeModal}
			>
				<Modal.Header>
					<Text h5>Place bet</Text>
				</Modal.Header>
				<Modal.Body>
					<Table
						className='z-0'
						bordered
						css={{
							p: '0px'
						}}
					>
						<Table.Header columns={betsTableColumns}>
							{column => (
								<Table.Column key={column.key}>
									{column.label}
								</Table.Column>
							)}
						</Table.Header>
						<Table.Body>
							{auction?.auction_bets ? (
								auction?.auction_bets
									?.slice(0, 5)
									.map((value, index) => (
										<Table.Row key={index}>
											<Table.Cell>{value.id}</Table.Cell>
											<Table.Cell>{value.value}</Table.Cell>
											<Table.Cell>
												<User
													size='xs'
													src={value.user.avatar_image}
													name={value.user.username}
													css={{ p: 0 }}
												/>
											</Table.Cell>
										</Table.Row>
									))
							) : (
								<Table.Row key='-1'>
									<Table.Cell>Bets not found</Table.Cell>
									<Table.Cell>Bet first!</Table.Cell>
								</Table.Row>
							)}
						</Table.Body>
					</Table>
					<div>
						<Input
							type='number'
							min={minRate}
							value={data.value}
							onChange={e =>
								setData('value', Number(e.target.value))
							}
							helperColor='error'
							helperText={errors.value}
							bordered
							fullWidth
							color='primary'
							size='lg'
							placeholder='Enter minimum price'
							contentLeft={<AiOutlineFieldNumber />}
						/>
						<Spacer y={1} />
						<Button
							css={{ width: '100%' }}
							color='gradient'
							onClick={sendBet}
						>
							Place bet
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

const AuctionCard: FC<AuctionCardProps> = ({
	auction,
	minPrice
}) => {
	const endDate = new Date(auction?.end_at || new Date())
	const [diff, setDiff] = useState(
		moment.duration(moment(endDate).diff(new Date()))
	)
	const available = diff.seconds() > 0

	useEffect(() => {
		const interval = setInterval(() => {
			if (available)
				setDiff(
					moment.duration(moment(endDate).diff(new Date()))
				)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className='ml-auto w-full sm:max-w-min'>
			<Card
				css={{
					minWidth: '340px',
					borderWidth: '0px'
				}}
			>
				<Card.Body>
					<Text>Auction ends in: {endDate.toString()}</Text>
					<Spacer y={1} />
					{available && (
						<>
							<div className='flex justify-between mx-3'>
								<div>
									<Text h3 b>
										{diff.days()}
									</Text>
									<Text h6>Days</Text>
								</div>
								<div>
									<Text h3 b>
										:
									</Text>
								</div>
								<div>
									<Text h3 b>
										{diff.hours()}
									</Text>
									<Text h6>Hours</Text>
								</div>
								<div>
									<Text h3 b>
										:
									</Text>
								</div>
								<div>
									<Text h3 b>
										{diff.minutes()}
									</Text>
									<Text h6>Minutes</Text>
								</div>
								<span>
									<Text h3 b>
										:
									</Text>
								</span>
								<div>
									<Text h3 b>
										{diff.seconds()}
									</Text>
									<Text h6>Seconds</Text>
								</div>
							</div>
							<Spacer y={0.5} />
						</>
					)}
					<AuctionsBetsModal
						available={available}
						auction={auction}
						minPrice={minPrice}
					/>
				</Card.Body>
			</Card>
		</div>
	)
}

export default AuctionCard
