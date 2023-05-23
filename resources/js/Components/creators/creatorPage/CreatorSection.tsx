import {Link, router} from '@inertiajs/react'
import {Avatar, Badge, Grid, Spacer, Text} from '@nextui-org/react'
import {FC, useEffect} from 'react'
import CreatorButtons, {CreatorSectionProps} from '@/Components/creators/creatorPage/CreatorButtons'

const CreatorSection: FC<CreatorSectionProps> = ({
                                                     followers,
                                                     creator
                                                 }) => {
    const checkActiveRoute = (href: string) =>
        location.pathname ==
        `/creator/${creator.username}/${href}`

    const routes = [
        {
            href: 'created',
            name: 'Created',
            count: creator.createdCount
        },
        {
            href: 'owned',
            name: 'Owned',
            count: creator.ownedCount
        },
        {
            href: 'collections',
            name: 'Collections',
            count: creator.collectionCount
        }
    ]

    useEffect(() => {
        const hasZeroCreatedCount =
            routes[0].count === 0 &&
            routes[1].count !== 0 &&
            location.pathname !==
            `/creator/${creator.username}/collections`

        if (hasZeroCreatedCount)
            router.replace(`/creator/${creator.username}/owned`)
    }, [])

    return (
        <div className='container mx-auto'>
			<Grid.Container gap={2}>
				<Grid xs={12} sm={7}>
                    <div className='mx-auto md:mx-0'>
                        <div>
                            <Spacer y={-2}/>
                            <Avatar
                                size='xl'
                                src={creator.avatar_image}
                                alt={creator.username + ' image'}
                            />
                        </div>
                        <Text h1>{creator.username}</Text>
                        <Spacer y={1}/>
                        <div className='flex justify-between mr-6'>
                            <div>
                                <Text h4 b>
                                    {creator.transactions_from_sum_value || 0}
                                </Text>
                                <Text h6>Volume</Text>
                            </div>
                            <div>
                                <Text h4 b>
                                    {creator.transactions_from_count || 0}
                                </Text>
                                <Text h6>Nfts Sold</Text>
                            </div>
                            <div>
                                <Text h4 b>
                                    {creator.followers_to_count || 0}
                                </Text>
                                <Text h6>Followers</Text>
                            </div>
                        </div>
                        <>
                            <Text span color='#787f85'>
                                Bio
                            </Text>
                            <Text size='$md' css={{maxW: '400px'}}>
                                {creator.bio}
                            </Text>
                        </>
                        <Spacer y={0.7}/>
                    </div>
				</Grid>
				<Grid xs={12} sm={5} className='flex-end'>
					<CreatorButtons
						creator={creator}
						followers={followers}
					/>
				</Grid>
			</Grid.Container>
			<div className='flex border-b-[1px] gap-x-10 border-gray-700 px-4'>
				{routes.map((value, index) => (
					<div
						key={index}
						className={`pb-1 ${
							checkActiveRoute(value.href) &&
							'border-b-2 border-blue-400'
						}`}
					>
						{value.count !== 0 ? (
							<Link
								href={`/creator/${creator.username}/${value.href}`}
							>
								<Text
									h5
									color={
										checkActiveRoute(value.href)
											? 'primary'
											: 'gray'
									}
								>
									{value.name}
									<Badge
										children={value.count}
										size='xs'
										className='ml-3'
									/>
								</Text>
							</Link>
						) : (
							<Text
								h5
								color='gray'
								className='cursor-no-drop'
							>
								{value.name}
								<Badge
									children={value.count}
									size='xs'
									className='ml-3'
								/>
							</Text>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default CreatorSection
