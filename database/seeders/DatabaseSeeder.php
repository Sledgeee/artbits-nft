<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Art',
                'image' => '/images/categories/Art.png'
            ],
            [
                'name' => 'Collectibles',
                'image' => '/images/categories/Collectibles.png'
            ],
            [
                'name' => 'Music',
                'image' => '/images/categories/Music.png'
            ],
            [
                'name' => 'Photography',
                'image' => '/images/categories/Photography.png'
            ],
            [
                'name' => 'Video',
                'image' => '/images/categories/Video.png'
            ],
            [
                'name' => 'Utility',
                'image' => '/images/categories/Utility.png'
            ],
            [
                'name' => 'Sport',
                'image' => '/images/categories/Sport.png'
            ],
            [
                'name' => 'Virtual Worlds',
                'image' => '/images/categories/Virtual Worlds.png'
            ]
        ];
        \App\Models\User::factory(500)->create();
        \App\Models\Category::insert($categories);
        \App\Models\NftItem::factory(10000)->create();
        \App\Models\NFtItemTag::factory(30000)->create();
        \App\Models\Collection::factory(100)->create();
        \App\Models\CollectionNftItems::factory(3000)->create();
        \App\Models\Auction::factory(2789)->create();
        \App\Models\AuctionBet::factory(13024)->create();
        \App\Models\Transaction::factory(36546)->create();
        \App\Models\Follower::factory(200)->create();
    }
}
