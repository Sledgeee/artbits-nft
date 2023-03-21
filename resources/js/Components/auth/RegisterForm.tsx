import React, {FC, useEffect} from 'react'
import {Link, useForm} from '@inertiajs/react'
import {
    Button,
    Card,
    Input,
    Row,
    Spacer,
    Text
} from '@nextui-org/react'
import {
    BsAt,
    BsFillPersonFill,
    BsLock,
    BsLockFill
} from 'react-icons/bs'
import Box from '@/Components/Box'
import {descData} from '@/Components/auth/LoginForm'
import ScaleIn from '@/Components/ScaleIn'

const RegisterForm: FC = () => {
    const {data, setData, post, processing, errors, reset} =
        useForm({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const submit = () => post(route('register'))

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
                            Register
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
                        isHoverable
                        css={{
                            borderWidth: '0px',
                            maxWidth: '400px',
                            mt: '120px'
                        }}
                    >
                        <Card.Body>
                            <Text h3 className='text-center'>
                                Register
                            </Text>
                            <Spacer y={2}/>
                            <Input
                                type='username'
                                placeholder='Enter your username'
                                value={data.username}
                                onChange={e =>
                                    setData('username', e.target.value)
                                }
                                helperText={errors.username}
                                helperColor='error'
                                clearable
                                bordered
                                fullWidth
                                color='primary'
                                size='lg'
                                contentLeft={<BsFillPersonFill/>}
                            />
                            <Spacer y={1.5}/>
                            <Input
                                type='email'
                                placeholder='Enter your email'
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
                                placeholder='Enter your password'
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
                            <Spacer y={1.5}/>
                            <Input.Password
                                type='password'
                                placeholder='Confirm your password'
                                value={data.password_confirmation}
                                onChange={e =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value
                                    )
                                }
                                helperText={errors.password_confirmation}
                                helperColor='error'
                                clearable
                                bordered
                                fullWidth
                                color='primary'
                                size='lg'
                                contentLeft={<BsLockFill/>}
                            />
                            <Spacer y={1}/>
                            <Button
                                onPress={submit}
                                disabled={processing}
                                css={{width: '100%'}}
                            >
                                Sign up
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <Row
                                justify='space-between'
                                css={{mx: '10px'}}
                                className='-mt-3'
                            >
                                <Link href={route('password.request')}>
                                    <Text size={14}>Forgot password?</Text>
                                </Link>

                                <Link href={route('login')}>
                                    <Text size={14}>
                                        Already have account?
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

export default RegisterForm
