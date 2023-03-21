<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\NftItem;
use Inertia\Inertia;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $collections = Collection::with('user')
            ->paginate(9);

        foreach ($collections as $collection) {
            $collection->nftItemsLimited;
        }

        return Inertia::render('Collections/AllCollections', [
            'collections' => $collections
        ]);
    }

    public function nftsByCollection(int $collection_id)
    {
        $collection = Collection::where('id', $collection_id)->with('user')->first();

        if (!$collection)
            return Response('Not found', 404);

        $collectionItems = NftItem::with('user')
            ->whereHas('collection', function ($query) use ($collection_id) {
                $query->where('collection_id', $collection_id);
            })->paginate(16);


        return Inertia::render('Collections/CurrentCollection', [
            'collection' => $collection,
            'collectionItems' => $collectionItems,
        ]);
    }

}
