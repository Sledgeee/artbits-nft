<?php

namespace Database\Factories;

use App\Models\Auction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Auction>
 */
class AuctionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $events = fake()->dateTimeBetween('-30 days', '+30 days');

        return [
            'end_at' => $events->format('Y-m-d'),
            'nft_item_id' => fake()->unique()->numberBetween(1, 10000)
        ];
    }
}
