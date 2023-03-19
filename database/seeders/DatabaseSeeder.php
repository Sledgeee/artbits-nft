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
//        User::factory(500)->create();
//        Category::insert($categories);
//        NftItem::factory(10000)->create();
//        NFtItemTag::factory(30000)->create();
//        Collection::factory(100)->create();
//        CollectionNftItems::factory(3000)->create();
//        Auction::factory(2789)->create();
//        AuctionBet::factory(13024)->create();
//        Transaction::factory(36546)->create();
//        Follower::factory(200)->create();
    }
}
