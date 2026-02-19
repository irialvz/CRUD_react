<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Añadimos la columna rol_id.
            // nullable() por si tienes usuarios antiguos sin rol asignado
            // constrained('roles') crea la clave foránea vinculada a la tabla roles
            $table->foreignId('rol_id')->nullable()->constrained('roles')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Si hacemos un rollback, eliminamos la clave foránea y la columna
            $table->dropForeign(['rol_id']);
            $table->dropColumn('rol_id');
        });
    }
};
