<?php

namespace Database\Factories;
use App\Models\Abyip;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'activity_title' => fake()->name(),
            'activity_description' => fake()->paragraph(),
            'activity_participation' => fake()->randomElement(['Health', 'Education', 'Infrastructure']),
            'activity_participants'=> fake()->numberBetween(5, 50),
            'activity_budget' => fake()->numberBetween(1000, 10000),
            'activity_from_time'=>fake()->time(),
            'activity_to_time'=>fake()->time(),
            'activity_date' => fake()->date(),
            'activity_location' => fake()->address(),
            'activity_status' => fake()->randomElement(['Upcoming', 'Completed', 'Cancelled']),

            'abyip_id'=>Abyip::inRandomOrder()->first()->abyip_id,

        ];
    }
}
