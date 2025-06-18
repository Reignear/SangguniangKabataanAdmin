<?php

namespace Database\Seeders;
use App\Models\TermYear;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TermYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TermYear::factory()->count(3)->create();
    }
}
