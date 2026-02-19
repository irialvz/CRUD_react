<?php

namespace database\factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
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
        $proyectos = config('proyectos');
        return [
            "nombre" => $proyectos["nombre"],
            "autor" => $proyectos["autor"],
            "estado" => $proyectos["estado"],
            "fecha_ingreso" => $proyectos["fecha_ingreso"],
        ];
    }

}
