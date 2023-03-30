<?php

use App\Http\Controllers\FollowerController;
use App\Http\Controllers\NftItemController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {
    Route::post('/nft/create', [NftItemController::class, 'create'])->name('nft.create');
    Route::get('/follow/{user_id}', [FollowerController::class, 'follow'])->name('user.follow');
    Route::get('/unfollow/{user_id}', [FollowerController::class, 'unfollow'])->name('user.unfollow');
});
