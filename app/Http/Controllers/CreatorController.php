<?php

namespace App\Http\Controllers;

use App\Models\Creator;
use App\Models\NftItem;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CreatorController extends Controller
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

    public function creator(string $username)
    {
        $user = User::where('username', $username)
            ->with('wallet', 'wallet.walletProvider')
            ->first();

        if (!$user)
            return Response('Not found', 404);

        $creator = $user->creator;
        $creatorItems = NftItem::with('creator', 'creator.user')
            ->where('creator_id', $creator->id)
            ->get();

        return Inertia::render('Creators/Index', [
            'creator' => $creator,
            'user' => $user,
            'creatorItems' => $creatorItems
        ]);
    }

}
