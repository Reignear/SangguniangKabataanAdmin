<?php

namespace Database\Factories;
use App\Models\Abyip;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'project_name' => fake()->word(),
            'project_description' => fake()->sentence(),
            'project_participation' => fake()->randomElement(['Health', 'Education', 'Infrastructure']),
            'project_budget' => fake()->numberBetween(5000, 100000),
            'project_finish_date' => fake()->date(),
            'project_status' => fake()->randomElement(['Planned', 'In Progress', 'Completed']),
            'project_completion_rate' => fake()->numberBetween(0, 100),
        

            // Assuming there is a foreign key relationship with another model
            // 'related_model_id' => RelatedModel::inRandomOrder()->first()->id,
            'abyip_id'=>Abyip::inRandomOrder()->first()->abyip_id,
        ];
    }
}
