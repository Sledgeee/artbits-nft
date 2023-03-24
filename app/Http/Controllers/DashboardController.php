<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $transactions = Transaction::selectRaw('DATE(created_at) as date, SUM(value) as total_value')
            ->where('from_user_id', $user->id)
            ->groupBy('date')
            ->orderBy('date', 'desc')
            ->limit(9)
            ->get();

        return Inertia::render('Profile/Dashboard', [
            'transactions' => $transactions
        ]);
    }
}
