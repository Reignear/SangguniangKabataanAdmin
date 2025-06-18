<?php

namespace Database\Seeders;
use App\Models\KKMember;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KKMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        KKMember::factory()->count(20)->create();
    }
}
