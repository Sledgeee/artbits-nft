import { FaqCardData } from '@/types/faq.type'
import { Card, Row, Text } from '@nextui-org/react'
import { FC } from 'react'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'

interface IFaqCardProps {
	data: FaqCardData
	index: number
}

const FaqCard: FC<IFaqCardProps> = ({ data, index }) => {
	return (
		<motion.div
			variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
		>
			<Card
				isPressable
				variant='shadow'
				css={{
					borderWidth: '0px',
					width: '100%'
				}}
			>
				<Card.Body css={{ p: 0 }}>
					<Card.Image
						width='70%'
						height='70%'
						src={data.img}
						alt={data.title}
					/>
				</Card.Body>
				<Card.Footer>
					<Row
						wrap='wrap'
						justify='space-around'
						align='center'
					>
						<Text h5>{data.title}</Text>
						<Text
							className='mx-3 text-center'
							color='#787f85'
						>
							{data.desc}
						</Text>
					</Row>
				</Card.Footer>
			</Card>
		</motion.div>
	)
}

export default FaqCard
