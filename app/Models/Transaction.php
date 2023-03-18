<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Transaction extends Model
{
	use HasFactory;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'value',
		'from_user_id',
		'to_user_id',
		'nft_item_id'
	];

	public function fromUser(): HasOne
	{
		return $this->hasOne(User::class, 'from_user_id');
	}

	public function toUser(): HasOne
	{
		return $this->hasOne(User::class, 'to_user_id');
	}

	public function nftItem(): HasOne
	{
		return $this->hasOne(NftItem::class);
	}
}
