import { FC, useEffect } from 'react'
import {
	motion,
	useAnimation,
	Variants
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxVariant: Variants = {
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.8 }
	},
	hidden: {
		opacity: 0,
		scale: 0.9
	}
}

interface ScaleInProps {
	children: JSX.Element | JSX.Element[]
}

const ScaleIn: FC<ScaleInProps> = ({ children }) => {
	const control = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			control.start('visible')
		} else {
			control.start('hidden')
		}
	}, [control, inView])
	return (
		<motion.div
			ref={ref}
			variants={boxVariant}
			initial='hidden'
			animate={control}
			viewport={{ once: true, amount: 0.8 }}
		>
			{children}
		</motion.div>
	)
}

export default ScaleIn
