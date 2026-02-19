<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = ["nombre", "cliente", "estado","fecha"];
    public static function fieldLabels(){
        return [
            ['label' => 'ID', 'key' => 'id'],
            ['label' => 'Nombre del Proyecto', 'key' => 'nombre'],
            ['label' => 'Cliente', 'key' => 'cliente'],
            ['label' => 'Estado', 'key' => 'estado'],
        ];
    }

}
