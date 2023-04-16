import RankingsContent from '@/Components/creators/rankings/RankingsContent'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/interfaces/base.interface'
import { RankingCreators } from '@/interfaces/creator.interface'
import { Head } from '@inertiajs/react'
import { FC } from 'react'

interface CreatorsProps extends BaseProps {
	topCreators: RankingCreators[]
}

const Rankings: FC<CreatorsProps> = ({ auth, topCreators }) => {
	return (
		<>
			<Head title='Rankings' />
			<Layout auth={auth}>
				<RankingsContent topCreators={topCreators} />
			</Layout>
		</>
	)
}

export default Rankings
