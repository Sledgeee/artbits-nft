<?php

namespace Database\Factories;

use App\Models\AuctionBet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<AuctionBet>
 */
class AuctionBetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'value' => fake()->numberBetween(1, 100),
            'auction_id' => fake()->numberBetween(1, 2789),
            'user_id' => fake()->numberBetween(1, 500)
        ];
    }
}
