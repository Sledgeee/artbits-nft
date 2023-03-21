import React, {FC, useEffect} from 'react'
import {
    Button,
    Card,
    Checkbox,
    Input,
    Row,
    Spacer,
    Text
} from '@nextui-org/react'
import {
    BsAt,
    BsBrushFill,
    BsCompass,
    BsFillGridFill,
    BsFillLayersFill,
    BsLock
} from 'react-icons/bs'
import {Link, useForm} from '@inertiajs/react'
import Box from '@/Components/Box'
import ScaleIn from '@/Components/ScaleIn'

export const descData = [
    {
        name: 'Drops',
        desc: 'Purchase NFTs that are directly sold by top Creators',
        icon: BsFillGridFill
    },
    {
        name: 'Marketplace',
        desc: 'Bid on and auction off rare digital collectibles',
        icon: BsCompass
    },
    {
        name: 'Create',
        desc: 'Mint your own creations into NFTs',
        icon: BsBrushFill
    },
    {
        name: 'My NFTs',
        desc: 'A digital gallery to showcase your collection',
        icon: BsFillLayersFill
    }
]

const LoginForm: FC = () => {
    const {data, setData, post, processing, errors, reset} =
        useForm({
            email: '',
            password: '',
            remember: ''
        })

    useEffect(() => {
        return () => reset('password')
    }, [])

    const submit = () => post(route('login'))

    return (
        <div>
            <div className='min-h-screen flex max-w-[1920px] mx-auto'>
                <div
                    className='hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-gradient-to-bl from-purple-900 to-blue-900'>
                    <div className=' w-full mx-auto px-20 flex-col items-center space-y-6'>
                        <Text
                            h1
                            className='text-white font-bold text-4xl font-sans'
                        >
                            Login
                        </Text>
                        <Box className='text-white mt-1'>
                            <Text h4>
                                A highly-curated platform for creating,
                                collecting and trading unique NFTs
                            </Text>
                            <Box className='mt-6'>
                                {descData.map(value => (
                                    <div className='mt-2'>
                                        <Text h4 className='flex items-center'>
                                            <value.icon className='mr-2'/>
                                            <Text span>{value.name}</Text>
                                        </Text>
                                        <Text span color='gray'>
                                            {value.desc}
                                        </Text>
                                    </div>
                                ))}
                            </Box>
                        </Box>
                    </div>
                </div>
                <div className='flex w-full lg:w-1/2 justify-center items-center bg-gray-900 space-y-8'>
                    <Card
                        css={{
                            borderWidth: '0px',
                            maxWidth: '400px',
                            mt: '120px'
                        }}
                        isHoverable
                    >
                        <Card.Body>
                            <Text h3 className='text-center'>
                                Login
                            </Text>
                            <Spacer y={2}/>
                            <Input
                                type='email'
                                placeholder='Email'
                                value={data.email}
                                onChange={e =>
                                    setData('email', e.target.value)
                                }
                                helperText={errors.email}
                                helperColor='error'
                                clearable
                                bordered
                                fullWidth
                                color='primary'
                                size='lg'
                                contentLeft={<BsAt/>}
                            />
                            <Spacer y={1.5}/>
                            <Input.Password
                                type='password'
                                placeholder='Password'
                                value={data.password}
                                onChange={e =>
                                    setData('password', e.target.value)
                                }
                                helperText={errors.password}
                                helperColor='error'
                                clearable
                                bordered
                                fullWidth
                                color='primary'
                                size='lg'
                                contentLeft={<BsLock/>}
                            />
                            <Spacer y={1}/>
                            <Row justify='space-between'>
                                <Checkbox
                                    value={data.remember}
                                    onChange={isSelected =>
                                        setData('remember', isSelected + '')
                                    }
                                >
                                    <Text size={14}>Remember me</Text>
                                </Checkbox>
                            </Row>
                            <Spacer y={1}/>
                            <Row>
                                <Button
                                    onPress={submit}
                                    disabled={processing}
                                    css={{width: '100%'}}
                                >
                                    Sign in
                                </Button>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row
                                justify='space-between'
                                css={{mx: '10px'}}
                            >
                                <Link href={route('password.request')}>
                                    <Text size={14}>Forgot password?</Text>
                                </Link>

                                <Link href={route('register')}>
                                    <Text size={14}>
                                        Not registered yet?
                                    </Text>
                                </Link>
                            </Row>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
