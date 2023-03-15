<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\NftItem;
use Inertia\Inertia;

class NftItemController extends Controller
{
    /**
     * Display a listing of the nft.
     */
    public function nfts()
    {
        return Inertia::render('Nfts/Index', [
            'nfts' => NftItem::with('creator', 'creator.user')
                ->paginate(8)
        ]);
    }

    public function nftsByCollection(int $collection_id)
    {
        $collection = Collection::where('id', $collection_id)
            ->with('creator', 'creator.user')
            ->first();

        if (!$collection)
            return Response('Not found', 404);

        $collectionItems = NftItem::with('creator', 'creator.user')
            ->whereHas('collection', function ($query) use ($collection_id) {
                $query->where('collection_id', $collection_id);
            })->paginate(8);

        return Inertia::render('CurrentCollection', [
            'collection' => $collection,
            'collectionItems' => $collectionItems,
        ]);
    }

    /**
     * Display a listing of the nft by category.
     */
    public function nftsByCategory(int $category_id)
    {
        return Inertia::render('Nfts/ByCategory', [
            'nfts' => NftItem::where('category_id', $category_id)
                ->with('creator', 'creator.user')
                ->paginate(8)
        ]);
    }

    public function currentNft(string $username, string $name)
    {
        $data = NftItem::with('creator', 'creator.user', 'nftItemTags')
            ->whereHas('creator.user', function ($query) use ($username) {
                $query->where('username', $username);
            })
            ->where('name', $name)
            ->first();

        if (!$data)
            return Response('Not found', 404);

        $nfts = NftItem::with('creator', 'creator.user')
            ->where('creator_id', $data->creator_id)
            ->limit(8)
            ->get();

        return Inertia::render('CurrentNft', [
            'nft' => $data,
            'nfts' => $nfts
        ]);
    }
}
