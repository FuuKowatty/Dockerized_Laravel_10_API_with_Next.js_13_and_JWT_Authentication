<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Test user 1
        User::factory()->create([
            'name' => 'John Smith',
            'email' => 'test@test.com',
            'password' => bcrypt('password')
        ]);

        // Test user 2
        User::factory()->create([
            'name' => 'Mary Johnson',
            'email' => 'example@gmail.com',
            'password' => bcrypt('password')
        ]);
    }
}
