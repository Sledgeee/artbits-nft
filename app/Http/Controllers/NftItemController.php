<?php

namespace App\Http\Controllers;

use App\Http\Requests\NftUpdateRequest;
use App\Models\Auction;
use App\Models\Category;
use App\Models\NftItem;
use Inertia\Inertia;

class NftItemController extends Controller
{

    public function create(NftUpdateRequest $request)
    {
        if (!auth()->user())
            return Response(0, 400);

        return
            !!NftItem::create($request->validated());
    }


    public function currentNft(string $username, string $name)
    {
        $data = NftItem::with('user', 'nftItemTags')
            ->whereHas('user', function ($query) use ($username) {
                $query->where('username', $username);
            })
            ->where('name', $name)
            ->first();

        if (!$data)
            return Response('Not found', 404);

        $nfts = NftItem::with('user')
            ->where('user_id', $data->id)
            ->limit(8)
            ->get();

        $auction = Auction::where('nft_item_id', $data->id)->first();

        return Inertia::render('Nfts/CurrentNft', [
            'nft' => $data,
            'auction' => $auction,
            'nfts' => $nfts
        ]);
    }

    /**
     * Display a listing of the nft.
     */
    public function nfts()
    {
        return Inertia::render('Nfts/AllNfts', [
            'nfts' => NftItem::with('user')->paginate(24)
        ]);
    }

    /**
     * Display a listing of the nft by category.
     */
    public function nftsByCategory(string $pathname)
    {
        $category = Category::where('pathname', $pathname)->first();
        $nftItems = NftItem::where('category_id', $category->id)
            ->with('user')
            ->paginate(24);

        return Inertia::render('Nfts/ByCategory', [
            'category' => $category,
            'nfts' => $nftItems
        ]);
    }
}
