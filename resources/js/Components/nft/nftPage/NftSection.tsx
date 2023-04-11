import { Nft } from '@/types/nft.type'
import {
	Card,
	Grid,
	Spacer,
	Text,
	User
} from '@nextui-org/react'
import { FC } from 'react'
import { Auction } from '@/types/auction.type'
import { Link } from '@inertiajs/react'
import AuctionCard from '@/Components/nft/nftPage/AuctionCard'

interface NftPageCardProps {
	nft: Nft
	auction: Auction
}

const NftSection: FC<NftPageCardProps> = ({
	nft,
	auction
}) => {
	return (
		<div className='container mx-auto'>
			<Grid.Container gap={2} justify='center'>
				<Grid xs={12} sm={7}>
					<div>
						<Text h1>{nft?.name}</Text>
						<Text h5 color='#787f85'>
							Minted on{' '}
							{new Date(nft.created_at).toDateString()}
						</Text>
						<Spacer y={0.5} />
						<Link
							href={`/creator/${nft.user.username}/created`}
						>
							<Text
								h5
								color='#787f85'
								className='flex items-center'
							>
								Minted by
								<User
									src={nft.user.avatar_image}
									name={nft.user.username}
								/>
							</Text>
						</Link>
						<Spacer y={0.5} />
						<>
							<Text span color='#787f85'>
								Description
							</Text>
							<Text size='$md' css={{ maxW: '400px' }}>
								{nft.description}
							</Text>
						</>
						<Spacer y={0.5} />
						<Text span color='#787f85'>
							Details
						</Text>
						<Text size='$md'>
							<a
								target='_blank'
								href={
									'https://etherscan.io/address/' +
									nft.user.metamask_address
								}
							>
								View on Etherscan
							</a>
						</Text>
						<Spacer y={0.7} />
						{nft.nft_item_tags && (
							<>
								<Text span color='#787f85'>
									Tags
								</Text>
								<Grid.Container gap={1}>
									{nft.nft_item_tags?.map(value => (
										<Grid key={value.name} xs={6} lg={3}>
											<Card
												isPressable
												css={{ borderWidth: '0px' }}
											>
												<Card.Header>
													<Text b>{value.name}</Text>
												</Card.Header>
											</Card>
										</Grid>
									))}
								</Grid.Container>
							</>
						)}
					</div>
				</Grid>
				<Grid sm={5}>
					<AuctionCard auction={auction} />
				</Grid>
			</Grid.Container>
		</div>
	)
}

export default NftSection
