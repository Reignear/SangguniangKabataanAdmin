<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\TermYear;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Abyip>
 */
class AbyipFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected static int $yearCounter = 2023;

    public function definition(): array
    {
        return [
            'abyip_year' =>(string)static::$yearCounter++,
            'abyip_total_budget'=>fake()->numberBetween(500000, 900000),
            'abyip_personal_expenses' => fake()->numberBetween(10000, 50000),
            'abyip_mooe' => fake()->numberBetween(10000, 50000),
            'abyip_financial_expenses' => fake()->numberBetween(10000, 50000),
            'abyip_capital_outlay' => fake()->numberBetween(10000, 50000),
           
            'term_service_id' => TermYear::inRandomOrder()->first()->term_service_id,
        ];
    }
}
