<?php

namespace Database\Seeders;

 

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Database\Seeders\TermYearSeeder;
use Database\Seeders\AddressSeeder;
use Database\Seeders\AbyipSeeder;
use Database\Seeders\KKMemberSeeder;
use Database\Seeders\SKOfficialSeeder;
use Database\Seeders\KKOfficerSeeder;
use Database\Seeders\ActivitySeeder;
use Database\Seeders\ProgramSeeder;
use Database\Seeders\ProjectSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         
        $this->call([
            TermYearSeeder::class,
            AddressSeeder::class,
            AbyipSeeder::class,
            KKMemberSeeder::class,
            SKOfficialSeeder::class,
            KKOfficerSeeder::class,
            ActivitySeeder::class,
            ProgramSeeder::class,
            ProjectSeeder::class,

        ]);
      
    }
}
