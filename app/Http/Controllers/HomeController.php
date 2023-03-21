<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Collection;
use App\Models\NftItem;
use App\Models\User;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $heroNft = NftItem::with('user')->first();
        $users = User::withSum('transactionsFrom', 'value')
            ->orderBy('transactions_from_sum_value', 'DESC')
            ->limit(9)
            ->get();
        $collections = Collection::with('user')
            ->limit(3)
            ->get();
        foreach ($collections as $collection) {
            $collection->nftItemsLimited;
        }
        $nfts = NftItem::with('user')
            ->take(4)
            ->get();
        return Inertia::render('Home', [
            'heroNft' => $heroNft,
            'categories' => Category::all(),
            'creators' => $users,
            'collections' => $collections,
            'trendingNftList' => $nfts
        ]);
    }
}
