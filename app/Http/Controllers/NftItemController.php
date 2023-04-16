<?php

namespace App\Http\Controllers;

use App\Http\Requests\NftUpdateRequest;
use App\Models\Auction;
use App\Models\Category;
use App\Models\NftItem;
use App\Models\User;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class NftItemController extends Controller
{

    /**
     * Create new nft with auction.
     */

    public function createNft(NftUpdateRequest $request)
    {
        $user = auth()->user();
        if (!$user)
            return Response(0, 400);

        $request->validated();

        $image = $request->image;

        $imageName = time() . rand() . '.' . $image->extension();

        $image->move(public_path('images/nfts/'), $imageName);

        copy(
            public_path('images/nfts/') . $imageName,
            public_path('images/nfts/') . 'header_' . $imageName
        );


        $nft = NftItem::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image' => '/images/nfts/' . $imageName,
            'header_image' => '/images/nfts/header_' . $imageName,
            'category_id' => $request->category_id,
            'user_id' => $user->id,
        ]);

        Auction::create([
            'end_at' => $request->auction_date,
            'nft_item_id' => $nft->id
        ]);


    }

    /**
     * Display current nft.
     */

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

        $user = User::where('username', $username)->first();

        $nfts = NftItem::with('user')
            ->where('user_id', $user->id)
            ->limit(8)
            ->get();

        $auction = Auction::where('nft_item_id', $data->id)
            ->with('auctionBets', 'auctionBets.user')
            ->first();

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

    public function deleteNft(string $id)
    {
        $user = auth()->user();
        if (!$user)
            return Response(0, 400);

        $nft = NftItem::where('id', $id)->first();

        if (File::exists(public_path($nft->image)))
            unlink(public_path($nft->image));
        if (File::exists(public_path($nft->header_image)))
            unlink(public_path($nft->header_image));

        $nft->delete();
    }
}
