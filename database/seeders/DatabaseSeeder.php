<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		\App\Models\User::factory(500)->create();
		\App\Models\Category::factory(8)->create();
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
