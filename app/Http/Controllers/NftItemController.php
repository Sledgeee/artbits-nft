<?php

namespace App\Http\Controllers;

use App\Models\NftItem;
use Illuminate\Http\Request;

class NftItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(int $cat_id)
    {
        return NftItem::where('category_id', $cat_id)->get();
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
