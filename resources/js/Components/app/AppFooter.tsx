import {Button, Input, Row, Spacer, Text} from '@nextui-org/react'
import {FC} from 'react'
import {BsDiscord, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {Link} from "@inertiajs/react";
import {SiCoinmarketcap} from "react-icons/si";

const AppFooter: FC = () => {
    return (
        <footer>
            <div className='min-h-[20px] container mx-auto border-t-[0.5px] mt-3'>
                <div className='my-4 flex justify-between ml-4 mx-4 sm:mr-20'>
                    <div>
                        <Row>
                            <SiCoinmarketcap className='mr-2 text-2xl sm:text-md'/>
                            <Text b>ArtBits - NFT Marketplace</Text>
                        </Row>
                        <Text color='#787f85'>NFT marketplace.</Text>
                        <Spacer y={1}/>
                        <Text small>Join our community</Text>
                        <Row className='gap-x-2 text-gray-500'>
                            <BsDiscord/>
                            <BsYoutube/>
                            <BsInstagram/>
                            <BsTwitter/>
                        </Row>
                    </div>
                    <div>
                        <Text h4 b>
                            Explore
                        </Text>
                        <div className='flex flex-col gap-y-4'>
                            <Link href='/nft' className='text-[#787f85]'>
                                Marketplace
                            </Link>
                            <Link href='/rankings' className='text-[#787f85]'>
                                Rankings
                            </Link>
                            <Link href='/collections' className='text-[#787f85]'>
                                Collections
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <Text h4 b>
                            Join our weekly digest
                        </Text>
                        <Text h6 color='#787f85'>
                            Get exclusive promotions & updates straight to
                            your inbox.
                        </Text>
                        <Row>
                            <Input
                                type='email'
                                placeholder='Enter your email'
                                css={{width: '100%'}}
                            />
                            <Button
                                className='ml-2'
                                shadow
                                color='secondary'
                                auto
                            >
                                <MdEmail className='mr-1'/>
                                <Text span>Subscribe</Text>
                            </Button>
						</Row>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default AppFooter
