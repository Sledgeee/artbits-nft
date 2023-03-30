import React, { FC, useState } from 'react'
import {
	Button,
	Card,
	Dropdown,
	Input,
	Spacer,
	Text,
	Textarea
} from '@nextui-org/react'
import { Nft } from '@/types/nft.type'
import { Category } from '@/types/category.type'
import { useForm } from '@inertiajs/react'
import { BsImage, BsImageFill } from 'react-icons/bs'
import { RxLetterCaseCapitalize } from 'react-icons/rx'

interface CreateNftCardProps {
	userItems: Nft[]
	categories: Category[]
}

const CreateNftCard: FC<CreateNftCardProps> = ({
	userItems,
	categories
}) => {
	const { data, setData, post, errors } = useForm({
		name: '',
		description: '',
		image: '',
		price: 0,
		header_image: '',
		category_id: categories[0].id
	})
	const [nameErrors, setNameErrors] = useState<string>('')
	const [nameColor, setNameColor] = useState<
		'error' | 'primary'
	>('primary')
	const validateName = (e: any) => {
		if (
			userItems.some(value => value.name === e.target.value)
		) {
			setNameColor('error')
			setNameErrors('You need to enter a unique name!')
		} else {
			setNameErrors('')
			setNameColor('primary')
			setData('name', e.target.value)
		}
	}

	const createNftItem = () => post(route('nft.create'))

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Body>
				<Text h4>Create new nft</Text>
				<Input
					value={data.name}
					onChange={validateName}
					helperColor='error'
					helperText={errors.name || nameErrors}
					clearable
					bordered
					fullWidth
					color={nameColor}
					size='lg'
					placeholder='Enter nft name'
					contentLeft={<RxLetterCaseCapitalize />}
				/>
				<Spacer y={1.2} />
				<Textarea
					value={data.description}
					onChange={e =>
						setData('description', e.target.value)
					}
					helperColor='error'
					helperText={errors.description}
					bordered
					fullWidth
					color='primary'
					size='lg'
					placeholder='Enter description for nft'
				/>
				<Spacer y={1} />
				<Input
					value={data.image}
					onChange={e => setData('image', e.target.value)}
					helperColor='error'
					helperText={errors.image}
					clearable
					bordered
					fullWidth
					color='primary'
					size='lg'
					placeholder='Enter url to image'
					contentLeft={<BsImageFill />}
				/>
				<Spacer y={1} />
				<Input
					value={data.header_image}
					onChange={e =>
						setData('header_image', e.target.value)
					}
					helperColor='error'
					helperText={errors.header_image}
					clearable
					bordered
					fullWidth
					color='primary'
					size='lg'
					placeholder='Enter url to header image'
					contentLeft={<BsImage />}
				/>
				<Spacer y={1} />
				<Dropdown>
					<Dropdown.Button flat>
						Select category
					</Dropdown.Button>
					<Dropdown.Menu aria-label='All categories'>
						{categories.map(value => (
							<Dropdown.Item
								key={value.id}
								color={
									data.category_id === value.id
										? 'primary'
										: 'default'
								}
							>
								<span
									onClick={() =>
										setData('category_id', value.id)
									}
								>
									{value.name}
								</span>
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
				<Spacer y={1} />
				<Button onClick={createNftItem}>Create nft</Button>
			</Card.Body>
		</Card>
	)
}

export default CreateNftCard
