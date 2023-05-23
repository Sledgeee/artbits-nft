import FaqCard from '@/Components/faq/FaqCard'
import {Text} from '@nextui-org/react'
import {textVariant} from '@/utils/motion'
import {motion} from 'framer-motion'
import {faqData} from '@/constants'
import {FC} from 'react'

const FaqSection: FC = () => {
    return (
        <div className='container mx-auto px-3'>
            <motion.div
                variants={textVariant(0)}
                className='mx-2'
            >
                <Text h2>How it works</Text>
                <Text h4>Find out how to get started</Text>
            </motion.div>
            <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'>
                {faqData.map((value, index) => (
                    <FaqCard key={index} index={index} data={value}/>
                ))}
            </motion.div>
        </div>
    )
}

export default FaqSection
