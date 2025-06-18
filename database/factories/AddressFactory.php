<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'address_region'=> fake()->address(),
            'address_province'=> fake()->city(),
            'address_city_municipality'=> fake()->city(),
            'address_barangay'=> fake()->streetAddress(),
            'address_purok'=> fake()->streetName(),
            'address_street'=> fake()->streetName(),
            'address_zipcode'=> fake()->postcode(),
            
        ];
    }
}
