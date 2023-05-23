import { motion, Variants } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { FC } from 'react'

interface Props {
	children: JSX.Element
}

const SectionWrapper: FC<Props> = ({ children }) => {
	const containerVariants: Variants = staggerContainer(0)

	return (
		<motion.section
			variants={containerVariants}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.25 }}
			className='max-w-7xl mx-auto relative z-0'
		>
			{children}
		</motion.section>
	)
}

export default SectionWrapper
