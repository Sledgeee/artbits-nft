import { FC, useEffect, useState } from 'react'
import { Auction } from '@/types/auction.type'
import confetti from 'canvas-confetti'
import {
	Button,
	Card,
	Spacer,
	Text
} from '@nextui-org/react'

const AuctionCard: FC<{ auction: Auction }> = ({
	auction
}) => {
	const [date, setDate] = useState(new Date())
	const auctionDate = new Date(
		auction?.end_at || new Date().toDateString()
	)
	const hasEnded = new Date(auction?.end_at) <= new Date()
	if (hasEnded) return <></>
	useEffect(() => {
		const interval = setInterval(
			() => setDate(new Date(+auctionDate - +new Date())),
			1000
		)
		return () => clearInterval(interval)
	}, [])

	const handleConfetti = () =>
		confetti({
			particleCount: 200,
			startVelocity: 30,
			spread: 360,
			origin: {
				x: Math.random(),
				y: Math.random() - 0.2
			}
		})

	return (
		<div className='ml-auto w-full sm:max-w-min'>
			<Card
				css={{
					minWidth: '340px',
					borderWidth: '0px'
				}}
			>
				<Card.Body>
					<Text>
						Auction ends in: {auctionDate.toString()}
					</Text>
					<Spacer y={1} />
					<div className='flex justify-between mx-3'>
						<div>
							<Text h3 b>
								{date.getUTCDate() - 1}
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
								{date.getUTCHours()}
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
								{date.getUTCMinutes()}
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
								{date.getUTCSeconds()}
							</Text>
							<Text h6>Seconds</Text>
						</div>
					</div>
					<Spacer y={0.5} />
					<Button
						onPress={handleConfetti}
						shadow
						color='gradient'
					>
						Place Bid
					</Button>
				</Card.Body>
			</Card>
		</div>
	)
}

export default AuctionCard
