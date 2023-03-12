<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use function PHPSTORM_META\map;

class AuctionBet extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'value',
        'auction_id',
        'user_id'
    ];

    /**
     * Get the bet's auction
     */
    public function auction(): BelongsTo
    {
        return $this->belongsTo(Auction::class);
    }
}
