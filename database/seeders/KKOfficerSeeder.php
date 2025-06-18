<?php

namespace Database\Seeders;

use App\Models\KKOfficer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KKOfficerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         KKOfficer::factory()->count(10)->create();
    }
}
