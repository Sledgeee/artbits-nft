<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuctionBetCreateRequest;
use App\Models\Auction;
use App\Models\AuctionBet;
use Illuminate\Http\Request;

class AuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Auction::with(['auctionBets', 'auctionBets.user'])->get();
    }

    /**
     * Show the form for creating a new resource.
     */

    public function createBet(AuctionBetCreateRequest $request)
    {
        $userId = auth()->user()->id;

        if (!$userId)
            return Response(0, 400);

        $request->validated();

        AuctionBet::create([
            'value' => $request->value,
            'auction_id' => $request->auction_id,
            'user_id' => $userId
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = Auction::where('id', $id)->with([
            'auctionBets', 'auctionBets.user', 'biggestAuctionBet', 'biggestAuctionBet.user'
        ])->first();

        if (!$data) {
            return Response('Not found', 404);
        }

        return $data;
    }
}
