<?php

namespace Database\Factories;
use App\Models\Abyip;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Program>
 */
class ProgramFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'program_name' => fake()->word(),
            'program_description' => fake()->sentence(),
            'program_participation' => fake()->randomElement(['Health', 'Education', 'Infrastructure']),
            'program_budget' => fake()->numberBetween(1000, 50000),
            'program_start_date' => fake()->date(),
            'program_duration_value'=> fake()->numberBetween(1, 12), //duration in months or days
            'program_duration_unit' => fake()->randomElement(['months', 'days']),
            'program_status' => fake()->randomElement(['Upcoming', 'Ongoing', 'Completed']),
      

            // Assuming there is a foreign key relationship with another model
            // 'related_model_id' => RelatedModel::inRandomOrder()->first()->id,
            'abyip_id'=>Abyip::inRandomOrder()->first()->abyip_id,

        ];
    }
}
