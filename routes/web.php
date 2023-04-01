<?php

use App\Http\Controllers\AuctionController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NftItemController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index');
});

Route::controller(AuctionController::class)->group(function () {
    Route::get('/auction', 'index');
    Route::get('/auction/{id}', 'show');
});

Route::controller(UserController::class)->group(function () {
    Route::get('/rankings', 'index');
    Route::get('/creator/{username}/{pathname}', 'creator');
});

Route::controller(NftItemController::class)->group(function () {
    Route::get('/nft', 'nfts');
    Route::get('/nft/{username}/{name}', 'currentNft');
    Route::get('/category/{category_id}', 'nftsByCategory');
});

Route::controller(CollectionController::class)->group(function () {
    Route::get('/collections', 'index');
    Route::get('/collection/{collection_id}', 'nftsByCollection');
});

Route::controller(DashboardController::class)->group(function () {
    Route::get('/dashboard', 'index')->name('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/nft/create', [NftItemController::class, 'createNft'])->name('nft.create');
    Route::get('/follow/{user_id}', [FollowerController::class, 'follow'])->name('user.follow');
    Route::get('/unfollow/{user_id}', [FollowerController::class, 'unfollow'])->name('user.unfollow');
});


require __DIR__ . '/auth.php';
