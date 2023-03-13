<?php

use App\Http\Controllers\AuctionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NftItemController;
use Illuminate\Foundation\Application;
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

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return 'ok';
});

Route::controller(AuctionController::class)->group(function () {
    Route::get('/auction', 'index');
    Route::get('/auction/{id}', 'show');
});

Route::controller(NftItemController::class)->group(function () {
    Route::get('/nft', 'nfts');
    Route::get('/nft/{username}/{name}');
    Route::get('/nft/category/{category_id}', 'nftsByCategory');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
