import { ChangeEvent, FC, useState } from 'react'
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
import { Nft } from '@/interfaces/nft.interface'
import { Category } from '@/interfaces/category.interface'
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
		errors,
		reset,
		post,
		progress,
		setError
	} = useForm({
		name: '',
		description: '',
		image: {} as File | undefined,
		price: 1,
		category_id: 1,
		auction_date: new Date().getDate() || undefined
	})

	const [buttColor, setButtColor] = useState<
		'error' | 'success' | 'primary'
	>('primary')

	const submit = () => {
		if (!errors.auction_date || !errors.name)
			post(route('nft.create'), {
				preserveScroll: true,
				onSuccess: () => {
					setButtColor('success')
					setData('name', '')
					setData('description', '')
					setData('price', 1)
					setData('auction_date', undefined)
					setData('category_id', 1)
					setData('image', undefined)
					//reset does not work
					setTimeout(() => setButtColor('primary'), 4000)
				},
				onError: () => setButtColor('error')
			})
		else setButtColor('error')
	}

	const validateName = (e: any) => {
		if (
			userItems.some(value => value.name === e.target.value)
		) {
			setButtColor('error')
			setError('name', 'You need to enter a unique name!')
		} else {
			setButtColor('primary')
			setError('name', '')
			setData('name', e.target.value)
		}
	}

	const validateDate = (e: any) => {
		if (new Date() > new Date(e.target.value)) {
			setButtColor('error')
			setError(
				'auction_date',
				'You need to enter a date greater than today!'
			)
		} else {
			setError('auction_date', '')
			setData('auction_date', e.target.value)
			setButtColor('primary')
		}
	}

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Header>
				<Text h4>Create new nft</Text>
			</Card.Header>
			<Card.Body>
				<form className='flex flex-col gap-y-4'>
					<Input
						value={data.name}
						onChange={validateName}
						helperColor='error'
						helperText={errors.name}
						clearable
						bordered
						fullWidth
						size='lg'
						color='primary'
						label='Enter nft name'
						contentLeft={<RxLetterCaseCapitalize />}
					/>
					<Textarea
						value={data.description}
						onChange={e =>
							setData('description', e.target.value)
						}
						helperColor='error'
						helperText={errors.description}
						bordered
						fullWidth
						size='lg'
						color='primary'
						label='Enter description for nft'
					/>
					<Input
						type='date'
						value={data.auction_date}
						onChange={validateDate}
						helperColor='error'
						helperText={errors.auction_date}
						bordered
						fullWidth
						size='lg'
						color='primary'
						label='Enter end auction date'
					/>
					<Input
						type='number'
						min={1}
						value={data.price}
						onChange={e =>
							setData('price', Number(e.target.value))
						}
						helperColor='error'
						helperText={errors.description}
						bordered
						fullWidth
						color='primary'
						size='lg'
						label='Enter minimum price'
						contentLeft={<AiOutlineFieldNumber />}
					/>
					<div className='w-full'>
						<label className='flex justify-center w-full h-32 px-4 transition border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-blue-300'>
							<span className='flex items-center space-x-2'>
								<AiOutlineCloudUpload className='w-6 h-6 text-gray-500' />
								<span className='font-medium text-gray-500'>
									{data.image?.name
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
						<Progress
							value={progress.percentage}
							color='gradient'
							indeterminated
						/>
					)}

					<Spacer y={1} />
					<Button color={buttColor} onPress={submit}>
						Create nft
					</Button>
				</form>
			</Card.Body>
		</Card>
	)
}

export default CreateNftCard
