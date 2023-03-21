<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
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
            'to_user_id' => fake()->numberBetween(1, 249),
            'from_user_id' => fake()->numberBetween(250, 500),
            'nft_item_id' => fake()->numberBetween(1, 10000)
        ];
    }
}
