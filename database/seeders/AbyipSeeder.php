<?php

namespace Database\Seeders;

use App\Models\Abyip;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AbyipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Abyip::factory()->count(5)->create();
    }
}
