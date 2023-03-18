<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NftItem>
 */
class NftItemFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'name' => fake()->colorName() . fake()->randomDigit(),
			'description' => fake()->text(),
			'image' => fake()->imageUrl(),
			'header_image' => fake()->imageUrl(1920, 640),
			'price' => fake()->randomDigit(),
			'user_id' => fake()->numberBetween(1, 200),
			'category_id' => fake()->numberBetween(1, 8)
		];
	}
}
