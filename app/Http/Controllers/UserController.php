<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\NftItem;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $creators = User::withSum('transactionsFrom', 'value')
            ->withCount('transactionsFrom')
            ->orderBy('transactions_from_sum_value', 'DESC')
            ->limit(50)
            ->get();

        return Inertia::render('Creators/Rankings', [
            'topCreators' => $creators
        ]);
    }

    public function creator(string $username, string $pathname)
    {
        $creator = User::where('username', $username)
            ->withSum('transactionsFrom', 'value')
            ->withCount('transactionsFrom', 'followersTo')
            ->first();

        if (!$creator)
            return Response('Not found', 404);

        $creator_id = $creator->id;

        $createdItems = NftItem::whereHas(
            'transactions',
            function ($query) use ($creator_id) {
                $query->where('from_user_id', $creator_id);
            }
        )->with('user')->get();

        $ownedItems = NftItem::whereHas(
            'transactions',
            function ($query) use ($creator_id) {
                $query->where('to_user_id', $creator_id);
            }
        )->with('user')->get();

        $collections = Collection::where('user_id', $creator_id)
            ->with('user')
            ->get()
            ->each
            ->nftItemsLimited;

        $creator->createdCount = count($createdItems);
        $creator->ownedCount = count($ownedItems);
        $creator->collectionCount = count($collections);

        $userItems = match ($pathname) {
            'owned' => $ownedItems,
            default => $createdItems,
        };

        $userFollowers = [];
        if (auth()->user())
            $userFollowers = auth()
                ->user()
                ->followersFrom;

        return Inertia::render('Creators/Index', [
            'creator' => $creator,
            'followers' => $userFollowers,
            'creatorItems' => $userItems,
            'creatorCollections' => $collections,
        ]);
    }
}
