<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Auction extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'duration',
        'nft_item_id'
    ];

    /**
     * Get the bets for the auction
     */
    public function auctionBets(): HasMany
    {
        return $this->hasMany(AuctionBet::class);
    }

    /**
     * Get the auction's biggest bet
     */
    public function biggestAuctionBet(): HasOne
    {
        return $this->hasOne(AuctionBet::class)->ofMany('value', 'max');
    }
}
