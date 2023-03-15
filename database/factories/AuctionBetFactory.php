<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AuctionBet>
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
            'value' => fake()->randomDigit(),
            'auction_id' => fake()->numberBetween(1, 2789),
            'user_id' => fake()->numberBetween(1, 500)
        ];
    }
}
