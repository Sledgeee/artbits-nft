<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Creator>
 */
class CreatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bio' => fake()->realText(),
            'banner_image' => fake()->imageUrl(1920, 640),
            'user_id' => fake()->unique()->numberBetween(1, 10)
        ];
    }
}
