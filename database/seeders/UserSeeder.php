<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = Role::pluck('id');

        // Si por algún motivo no hay roles, cortamos para que no dé error
        if ($roles->isEmpty()) {
            return;
        }

        // ==========================================
        // OPCIÓN A: Si estás usando Factories (La forma rápida)
        // ==========================================
        // Esto crea 10 usuarios y, sobre la marcha, les asigna un rol aleatorio
        User::factory(10)->create([
            'rol_id' => fn() => $roles->random()
        ]);

//        User::factory()->count(10)->create()->each(function ($user) {
//            $user->assignRole('teacher');
//            $user->
//        });
//        User::factory()->count(10)->create()->each(function ($user) {
//            $user->assignRole('student');
//        });
//        User::factory()->count(10)->create()->each(function ($user) {
//            $user->assignRole('guest');
//        });
    }
}
