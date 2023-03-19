<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\Follower;
use App\Models\NftItem;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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

    public function subscribe(Request $request): RedirectResponse
    {
        $isFollowed = Follower::where('from_user_id', $request->post('from'))
            ->where('to_user_id', $request->post('to'))
            ->first();
        if ($isFollowed)
            Follower::destroy('id', $isFollowed->id);
        else
            Follower::insert(
                [
                    'from_user_id' => $request->post('from'),
                    'to_user_id' => $request->post('to'),
                    'created_at' => fake()->dateTime()
                ]
            );
        $user = User::where('id', $request->post('from'))
            ->first();

        return redirect('/creator/' . $user->username . '/created');
    }

    public function creator(string $username, string $pathname)
    {
        $user = User::where('username', $username)
            ->withSum('transactionsFrom', 'value')
            ->withCount('transactionsFrom', 'followersTo')
            ->first();

        $userId = $user->id;

        if (!$user)
            return Response('Not found', 404);

        $createdItems = NftItem::whereHas('transactions',
            function ($query) use ($userId) {
                $query->where('from_user_id', $userId);
            })->with('user')->get();

        $ownedItems = NftItem::whereHas('transactions',
            function ($query) use ($userId) {
                $query->where('to_user_id', $userId);
            })->with('user')->get();

        $collections = Collection::where('user_id', $userId)
            ->with('user')
            ->get();

        foreach ($collections as $collection) {
            $collection->nftItemsLimited;
        }

        $user->createdCount = count($createdItems);
        $user->ownedCount = count($ownedItems);
        $user->collectionCount = count($collections);

        $userItems = match ($pathname) {
            'owned' => $ownedItems,
            default => $createdItems,
        };

        return Inertia::render('Creators/Index', [
            'user' => $user,
            'creatorItems' => $userItems,
            'creatorCollections' => $collections
        ]);
    }
}
