<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CollectionNftItems extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nft_item_id',
        'collection_id',
    ];

    /**
     * Get the NFT item by the collection item
     */
    public function nftItem(): BelongsTo
    {
        return $this->belongsTo(NftItem::class);
    }

    /**
     * Get the collection by the collection item
     */
    public function collection(): BelongsTo
    {
        return $this->belongsTo(Collection::class)->with();
    }
}
