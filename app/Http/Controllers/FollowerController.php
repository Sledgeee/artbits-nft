<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    public function index()
    {
        //
    }

    public function follow($user_id)
    {
        if (!$user_id
            || !User::where(['id' => $user_id])->first()
            || !auth()->user()
            || Follower::where([
                'from_user_id' => auth()->user()->id,
                'to_user_id' => $user_id
            ])->first()) {
            return Response(0, 400);
        }
        return !!Follower::create([
            'from_user_id' => auth()->user()->id,
            'to_user_id' => $user_id
        ]);
    }

    public function unfollow($user_id)
    {
        if (!$user_id) {
            return Response(0, 400);
        }

        return !!Follower::where([
            'from_user_id' => auth()->user()->id,
            'to_user_id' => $user_id
        ])->delete();
    }
}
