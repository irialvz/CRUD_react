<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
// Crear los roles primero si no existen
        Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'teacher']);
        Role::firstOrCreate(['name' => 'student']);
        Role::firstOrCreate(['name' => 'guest']);

        // Luego creas el admin
        $user = User::factory()->create([
            'name' => 'admin',
            'email' => 'a@a.com',
            'password' => bcrypt('password'), // Pon una pass que recuerdes
        ]);
        $user->assignRole('admin');
    }
}
