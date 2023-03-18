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
		'user_id',
		'category_id'
	];

	/**
	 * Get the user of the NFT item
	 */
	public function user(): BelongsTo
	{
		return $this->belongsTo(User::class);
	}

	/**
	 * Get the category of the NFT item
	 */
	public function category(): HasOne
	{
		return $this->hasOne(Category::class);
	}

	/**
	 * Get the collection
	 */
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

	/**
	 * Get the collection nft items
	 */
	public function collectionNftItems(): HasMany
	{
		return $this->hasMany(CollectionNftItems::class);
	}
}
