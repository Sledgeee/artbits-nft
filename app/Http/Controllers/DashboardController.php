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

        $userItems = NftItem::where('user_id', $userId)->get();

        $transactions = Transaction::selectRaw('DATE(created_at) as date, SUM(value) as total_value')
            ->where('from_user_id', $userId)
            ->groupBy('date')
            ->orderBy('date', 'asc')
            ->limit(7)
            ->get();

        return Inertia::render('Profile/Dashboard', [
            'categories' => $categories,
            'userItems' => $userItems,
            'transactions' => $transactions
        ]);
    }
}
