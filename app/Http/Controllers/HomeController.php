<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Collection;
use App\Models\Creator;
use App\Models\NftItem;
use App\Models\User;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $creators = User::withSum('transactionsFrom', 'value')
            ->with('creator')
            ->orderBy('transactions_from_sum_value', 'DESC')
            ->limit(9)
            ->get();
        $collections = Collection::with('creator')->limit(3)->get();
        foreach ($collections as $collection) {
            $collection->nftItemsLimited;
        }
        $nfts = NftItem::with('creator', 'creator.user')->take(4)->get();
        return Inertia::render('Home', [
            'categories' => Category::all(),
            'creators' => $creators,
            'collections' => $collections,
            'trendingNftList' => $nfts
        ]);
    }
}
