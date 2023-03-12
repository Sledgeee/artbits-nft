<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
    public function nftItem(): HasOne
    {
        return $this->hasOne(NftItem::class);
    }

    /**
     * Get the collection by the collection item
     */
    public function collection(): HasOne
    {
        return $this->hasOne(Collection::class);
    }
} 
