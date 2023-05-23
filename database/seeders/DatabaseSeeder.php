<?php

namespace Database\Seeders;

use App\Models\Auction;
use App\Models\AuctionBet;
use App\Models\Category;
use App\Models\Collection;
use App\Models\CollectionNftItems;
use App\Models\Follower;
use App\Models\NftItem;
use App\Models\NFtItemTag;
use App\Models\Transaction;
use App\Models\User;
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
                'pathname' => 'art',
                'image' => '/images/categories/Art.png'
            ],
            [
                'name' => 'Collectibles',
                'pathname' => 'collectibles',
                'image' => '/images/categories/Collectibles.png'
            ],
            [
                'name' => 'Music',
                'pathname' => 'music',
                'image' => '/images/categories/Music.png'
            ],
            [
                'name' => 'Photography',
                'pathname' => 'photography',
                'image' => '/images/categories/Photography.png'
            ],
            [
                'name' => 'Video',
                'pathname' => 'video',
                'image' => '/images/categories/Video.png'
            ],
            [
                'name' => 'Utility',
                'pathname' => 'utility',
                'image' => '/images/categories/Utility.png'
            ],
            [
                'name' => 'Sport',
                'pathname' => 'sport',
                'image' => '/images/categories/Sport.png'
            ],
            [
                'name' => 'Virtual Worlds',
                'pathname' => 'virtual_worlds',
                'image' => '/images/categories/Virtual Worlds.png'
            ]
        ];
        User::factory(500)->create();
        Category::insert($categories);
        NftItem::factory(10000)->create();
        NFtItemTag::factory(30000)->create();
        Collection::factory(100)->create();
        CollectionNftItems::factory(3000)->create();
        Auction::factory(2789)->create();
        AuctionBet::factory(13024)->create();
        Transaction::factory(36546)->create();
        Follower::factory(200)->create();
    }
}
