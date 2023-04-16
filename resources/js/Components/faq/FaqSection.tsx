import FaqCard from '@/Components/faq/FaqCard'
import { Grid, Text } from '@nextui-org/react'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import { faqData } from '@/constants'
import { FC } from 'react'

const FaqSection: FC = () => {
	return (
		<div className='container mx-auto'>
			<motion.div
				variants={textVariant(0)}
				className='mx-2'
			>
				<Text h2>How it works</Text>
				<Text h4>Find out how to get started</Text>
			</motion.div>
			<Grid.Container gap={2} justify='center'>
				{faqData.map((value, index) => (
					<FaqCard key={index} index={index} data={value} />
				))}
			</Grid.Container>
		</div>
	)
}

export default FaqSection
