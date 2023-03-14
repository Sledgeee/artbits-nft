<?php

namespace App\Http\Controllers;

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

    public function currentNft(string $username, int $itemId)
    {
        $data = NftItem::with('creator', 'creator.user', 'nftItemTags')
            ->where('id', $itemId)
            ->whereHas('creator.user', function ($query) use ($username) {
                $query->where('username', $username);
            })
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
