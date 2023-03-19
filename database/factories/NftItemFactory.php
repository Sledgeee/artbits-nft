<?php

namespace Database\Factories;

use App\Models\NftItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<NftItem>
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
        $defaultImages = array(
            'https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1619180336/content-items/007/751/585/foto1-original.jpeg',
            'https://i.etsystatic.com/39145848/r/il/f32a8f/4425443123/il_fullxfull.4425443123_1hct.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kJlMhhCzITzniDSowc-BRetjNDWs61sgQg&usqp=CAU',
            'https://storage.googleapis.com/profile-superrare-prod/0x1eb0d608d931a5c804fe46a0828344c7fb52f5d5/consciousness.jpg',
            'https://s.abcnews.com/images/International/Embed2ChristiesAuction_1619087921124_hpEmbed_4x5_992.jpg'
        );
        return [
            'name' => fake()->name() . fake()->randomDigit(),
            'description' => fake()->text(),
            'image' => $defaultImages[rand(0, 4)],
            'header_image' => $defaultImages[rand(0, 4)],
            'price' => fake()->numberBetween(1, 100),
            'user_id' => fake()->numberBetween(1, 200),
            'category_id' => fake()->numberBetween(1, 8)
        ];
    }
}
