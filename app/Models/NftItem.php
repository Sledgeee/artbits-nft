<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class NftItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'image',
        'header_image',
        'price',
        'creator_id',
        'category_id'
    ];

    /**
     * Get the creator of the NFT item
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(Creator::class);
    }

    /**
     * Get the category of the NFT item
     */
    public function category(): HasOne
    {
        return $this->hasOne(Category::class);
    }

    public function collection(): HasOne
    {
        return $this->hasOne(CollectionNftItems::class);
    }

    /**
     * Get the item tags
     */
    public function nftItemTags(): HasMany
    {
        return $this->hasMany(NftItemTag::class);
    }

    public function collectionNftItems(): HasMany
    {
        return $this->hasMany(CollectionNftItems::class);
    }
}
