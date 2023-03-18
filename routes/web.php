<?php

use App\Http\Controllers\AuctionController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NftItemController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index');
});

Route::controller(AuctionController::class)->group(function () {
    Route::get('/auction', 'index');
    Route::get('/auction/{id}', 'show');
});

Route::controller(UserController::class)->group(function () {
    Route::get('/rankings', 'index');
    Route::get('/creator/{username}', 'user');
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
