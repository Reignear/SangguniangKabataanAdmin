<?php

namespace Database\Factories;

use App\Models\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KKMember>
 */
class KKMemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'member_firstname' => fake()->firstName(),
            'member_lastname' => fake()->lastName(),
            'member_middlename' => fake()->lastName(),
            'member_birthdate' => fake()->date(),
            'member_gender' => fake()->randomElement(['male', 'female']),
            'member_civil_status' => fake()->randomElement(['single', 'married', 'widowed', 'divorced']),
         

            'address_id'=>Address::inRandomOrder()->first()->address_id,
        ];
    }
}
