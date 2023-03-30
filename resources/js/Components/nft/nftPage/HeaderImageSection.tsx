import { Image } from '@nextui-org/react'
import { FC } from 'react'

interface HeaderImageProps {
	image: string
}

const HeaderImageSection: FC<HeaderImageProps> = ({
	image
}) => {
	return (
		<div>
			<Image
				showSkeleton
				width='100%'
				objectFit={'cover'}
				height={300}
				src={image}
				alt='Header Image'
			/>
		</div>
	)
}

export default HeaderImageSection
