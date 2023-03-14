<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get user wallet
     */
    public function wallet(): HasOne
    {
        return $this->hasOne(Wallet::class);
    }
    public function creator(): HasOne
    {
        return $this->hasOne(Creator::class);
    }
    public function transactionsTo(): HasMany
    {
        return $this->hasMany(Transaction::class, 'to_user_id');
    }

    public function transactionsFrom(): HasMany
    {
        return $this->hasMany(Transaction::class, 'from_user_id');
    }
}
