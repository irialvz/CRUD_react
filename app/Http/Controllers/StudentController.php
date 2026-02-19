<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    //
    public function index(){
        $students = User::with('role')->get();;
        $columns = User::fieldLabels();
        $roles = Role::all();

        // Los enviamos a la vista JSX
        return Inertia::render('Student/Index', [
            'estudiantes' => $students,
            'columnas' => $columns,
            'roles' => $roles,

        ]);

    }

}
