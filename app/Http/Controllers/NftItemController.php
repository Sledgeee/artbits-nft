<?php

namespace App\Http\Controllers;

use App\Models\NftItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NftItemController extends Controller
{
    /**
     * Display a listing of the nft.
     */
    public function nfts()
    {
        return Inertia::render('Nft/Index', [
            'nfts' => NftItem::paginate(9)
        ]);
    }

    /**
     * Display a listing of the nft by category.
     */
    public function nftsByCategory(int $category_id)
    {
        return Inertia::render('Nft/ByCategory', [
            'nfts' => NftItem::where('category_id', $category_id)->paginate(9)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(NftItem $nftItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NftItem $nftItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NftItem $nftItem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NftItem $nftItem)
    {
        //
    }
}
