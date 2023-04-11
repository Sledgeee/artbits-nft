import React, { ChangeEvent, FC, useState } from 'react'
import {
	Button,
	Card,
	Dropdown,
	Input,
	Progress,
	Spacer,
	Text,
	Textarea
} from '@nextui-org/react'
import { Nft } from '@/types/nft.type'
import { Category } from '@/types/category.type'
import { useForm } from '@inertiajs/react'
import { RxLetterCaseCapitalize } from 'react-icons/rx'
import {
	AiOutlineCloudUpload,
	AiOutlineFieldNumber
} from 'react-icons/ai'

interface CreateNftCardProps {
	userItems: Nft[]
	categories: Category[]
}

const CreateNftCard: FC<CreateNftCardProps> = ({
	userItems,
	categories
}) => {
	const {
		data,
		setData,
		errors: apiErrors,
		reset,
		post,
		progress
	} = useForm({
		name: '',
		description: '',
		image: {} as File | undefined,
		price: 1,
		category_id: 1,
		auction_date: new Date().toDateString()
	})

	const [buttColor, setButtColor] = useState<
		'error' | 'success' | 'primary'
	>('primary')
	const submit = () =>
		post(route('nft.create'), {
			preserveScroll: true,
			onSuccess: () => {
				setButtColor('success')
				reset(
					'name',
					'description',
					'price',
					'auction_date',
					'category_id'
				)
				setData('image', undefined)
				setTimeout(() => setButtColor('primary'), 4000)
			},
			onError: () => setButtColor('error')
		})

	const [errors, setErrors] = useState<{
		name: string
		date: string
	}>({ date: '', name: '' })

	const validateName = (e: any) => {
		if (
			userItems.some(value => value.name === e.target.value)
		) {
			setButtColor('error')
			setErrors({
				name: 'You need to enter a unique name!',
				date: errors.date
			})
		} else {
			setButtColor('primary')
			setData('name', e.target.value)
		}
	}

	const validateDate = (e: any) => {
		if (new Date() > new Date(e.target.value)) {
			setButtColor('error')
			setErrors({
				name: errors.name,
				date: 'You need to enter a date greater than today!'
			})
		} else {
			setErrors({ name: '', date: '' })
			setButtColor('primary')
			setData('auction_date', e.target.value)
		}
	}

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Header>
				<Text h4>Create new nft</Text>
			</Card.Header>
			<Card.Body>
				<Input
					value={data.name}
					onChange={validateName}
					helperColor='error'
					helperText={apiErrors.name || errors.name}
					clearable
					bordered
					fullWidth
					size='lg'
					placeholder='Enter nft name'
					contentLeft={<RxLetterCaseCapitalize />}
				/>
				<Spacer y={1.3} />
				<Textarea
					value={data.description}
					onChange={e =>
						setData('description', e.target.value)
					}
					helperColor='error'
					helperText={apiErrors.description}
					bordered
					fullWidth
					color='primary'
					size='lg'
					placeholder='Enter description for nft'
				/>
				<Spacer y={1.3} />
				<Input
					type='datetime-local'
					value={data.auction_date}
					onChange={validateDate}
					helperColor='error'
					helperText={errors.date || apiErrors.auction_date}
					bordered
					fullWidth
					color='primary'
					size='lg'
					placeholder='Enter auction date'
					min={new Date().toDateString()}
				/>
				<Spacer y={1.3} />
				<Input
					type='number'
					min={1}
					value={data.price}
					onChange={e =>
						setData('price', Number(e.target.value))
					}
					helperColor='error'
					helperText={apiErrors.description}
					bordered
					fullWidth
					color='primary'
					size='lg'
					placeholder='Enter minimum price'
					contentLeft={<AiOutlineFieldNumber />}
				/>
				<Spacer y={1.3} />
				<div className='w-full'>
					<label className='flex justify-center w-full h-32 px-4 transition border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-blue-300'>
						<span className='flex items-center space-x-2'>
							<AiOutlineCloudUpload className='w-6 h-6 text-gray-500' />
							<span className='font-medium text-gray-500'>
								{data.image
									? 'Image is selected'
									: 'Drop image here'}
							</span>
						</span>
						<input
							type='file'
							onChange={(e: any) =>
								setData('image', e.target.files[0])
							}
							className='hidden'
						/>
					</label>
				</div>
				<Spacer y={1.3} />
				<Dropdown>
					<Dropdown.Button flat>
						{`Current category is ${
							categories[data.category_id - 1].name
						}`}
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
				{progress && (
					<>
						<Spacer y={1} />
						<Progress
							value={progress.percentage}
							color='gradient'
							indeterminated
						/>
					</>
				)}

				<Spacer y={1} />
				<Button color={buttColor} onPress={submit}>
					Create nft
				</Button>
			</Card.Body>
		</Card>
	)
}

export default CreateNftCard
