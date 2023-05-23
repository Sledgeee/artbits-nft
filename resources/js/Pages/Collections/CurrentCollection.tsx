import Layout from '@/Components/Layout'
import NftListWithPagination from '@/Components/nft/NftListWithPagination'
import { PaginationResponse } from '@/interfaces/nft.interface'
import { BaseProps } from '@/interfaces/base.interface'
import { Collection } from '@/interfaces/collection.interface'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { Nft } from '@/interfaces/nft.interface'

interface CurrentCollectionProps extends BaseProps {
    collection: Collection
    collectionItems: PaginationResponse<Nft>
}

const CurrentCollection: FC<CurrentCollectionProps> = ({
                                                           collectionItems,
                                                           collection,
                                                           auth
                                                       }) => {
    return (
        <>
            <Head title={`${collection.name} collection`} />
            <Layout auth={auth}>
                <NftListWithPagination
                    title={`${collection.name} collection`}
                    paginationItems={collectionItems}
                    buttonName='Go to artist page'
                    buttonHref={`/creator/${collection.user?.username}/created`}
                />
            </Layout>
        </>
    )
}

export default CurrentCollection
