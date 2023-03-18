<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Collection extends Model
{
	use HasFactory;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'name',
		'user_id'
	];

	public function user(): BelongsTo
	{
		return $this->belongsTo(User::class);
	}

	public function nftItems(): HasMany
	{
		return $this->hasMany(CollectionNftItems::class);
	}

	public function nftItemsLimited(): HasMany
	{
		return $this->hasMany(CollectionNftItems::class)->with('nftItem')->limit(3);
	}
}
