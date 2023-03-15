<?php

use App\Http\Controllers\AuctionController;
use App\Http\Controllers\CreatorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NftItemController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index');
});

Route::controller(AuctionController::class)->group(function () {
    Route::get('/auction', 'index');
    Route::get('/auction/{id}', 'show');
});

Route::controller(CreatorController::class)->group(function () {
    Route::get('/rankings', 'index');
    Route::get('/creator/{username}', 'creator');
});

Route::controller(NftItemController::class)->group(function () {
    Route::get('/nft', 'nfts');
    Route::get('/collection/{collection_id}', 'nftsByCollection');
    Route::get('/nft/{username}/{name}', 'currentNft');
    Route::get('/category/{category_id}', 'nftsByCategory');
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
