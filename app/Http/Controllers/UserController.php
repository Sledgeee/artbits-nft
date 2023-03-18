<?php

namespace App\Http\Controllers;

use App\Models\NftItem;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		$creators = User::withSum('transactionsFrom', 'value')
			->withCount('transactionsFrom')
			->orderBy('transactions_from_sum_value', 'DESC')
			->limit(50)
			->get();

		return Inertia::render('Creators/Rankings', [
			'topCreators' => $creators
		]);
	}

	public function user(string $username)
	{
		$user = User::where('username', $username)->first();

		if (!$user)
			return Response('Not found', 404);

		$userItems = NftItem::where('user_id', $user->id)->get();

		return Inertia::render('Creators/Index', [
			'user' => $user,
			'creatorItems' => $userItems
		]);
	}
}
