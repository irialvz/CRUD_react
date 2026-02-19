<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['id']; // O el nombre que tenga tu columna

    // Un rol tiene muchos usuarios
    public function users()
    {
        return $this->hasMany(User::class, 'rol_id');
    }

}
