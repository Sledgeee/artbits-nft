<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth')->group(function () {
	Route::get('/follow/{user_id}', [UserController::class, 'follow'])->name('user.follow');
	Route::get('/unfollow/{user_id}', [UserController::class, 'unfollow'])->name('user.unfollow');
});
