<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'rol_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public static function fieldLabels()
    {

        return [
            ['label' => 'ID', 'key' => 'id'],
            ['label' => 'Name', 'key' => 'name'],
            ['label' => 'Email', 'key' => 'email'],
            ['label' => 'Usuario desde', 'key' => 'created_at'],
            ['label' => 'Rol', 'key' => 'rol_id'],
        ];
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:d/m/Y',
            'password' => 'hashed',
        ];
    }

    /**
     * Cuando yo te pida el role,
     * quiero que leas el número que hay en rol_id,
     * vayas a la tabla roles, y me traigas los datos de ese rol
     */
    public function role()
    {
        return $this->belongsTo(Role::class, 'rol_id');
    }
}
