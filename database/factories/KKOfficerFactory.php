<?php

namespace Database\Factories;
use App\Models\KKMember;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KKOfficer>
 */
class KKOfficerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'officer_email'=>fake()->unique()->safeEmail(),
            'officer_phone'=>fake()->phoneNumber(),
            'officer_role'=>fake()->randomElement(['Commiitee', 'Member']),
            'officer_status'=>fake()->randomElement(['active', 'inactive']),
          
          

            'member_id' => KKMember::inRandomOrder()->first()->member_id,
        ];
    }
}
