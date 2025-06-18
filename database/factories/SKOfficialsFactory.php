<?php

namespace Database\Factories;
use App\Models\Address;
use App\Models\TermYear;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class SKOfficialsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    

    public function definition(): array
    {
        return [
            
            'official_firstname' => fake()->firstName(),
            'official_lastname' => fake()->lastName(),
            'official_middlename' => fake()->lastName(),
            'official_birthdate' => fake()->date(),
            'official_gender' => fake()->randomElement(['male', 'female']),
            'official_position' => fake()->word(),
            'official_committee' => fake()->word(),
            'official_vote' => fake()->numberBetween(200, 500),
            'official_precinct' => fake()->shuffleString('ACB123'),
            'official_term_elected' => fake()->date(),
            'official_term_ended' => fake()->date(),
          

            'address_id'=>Address::inRandomOrder()->first()->address_id,
            'term_service_id'=>TermYear::inRandomOrder()->first()->term_service_id,
        ];
    }
}
