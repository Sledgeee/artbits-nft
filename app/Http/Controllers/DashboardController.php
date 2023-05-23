<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\NftItem;
use App\Models\Transaction;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $userId = auth()->user()->id;

        $categories = Category::all();

        $userItems = NftItem::with('user')->where('user_id', $userId)->get();

        $transactions = Transaction::selectRaw('DATE(created_at) as date, SUM(value) as total_value, SUM(CASE WHEN to_user_id = ? THEN value ELSE 0 END) as total_value_to', [$userId])
            ->where(function ($query) use ($userId) {
                $query->where('from_user_id', $userId)
                    ->orWhere('to_user_id', $userId);
            })
            ->groupBy('date')
            ->orderBy('date', 'asc')
            ->limit(9)
            ->get();

        return Inertia::render('Profile/Dashboard', [
            'categories' => $categories,
            'userItems' => $userItems,
            'transactions' => $transactions
        ]);
    }
}
