<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index(){
        $teachers = User::where('rol_id', 2)->with('role')->get();
        $roles = Role::all();
        $columns = User::fieldLabels();

        // Los enviamos a la vista JSX
        return Inertia::render('Teachers/Index', [
            'profesores' => $teachers,
            'columnas' => $columns,
            'roles' => $roles
        ]);

    }
    public function create(){
        return Inertia::render('Users/Create');
    }
    public function store(Request $request){

    }
    public function update(Request $request, $id){

    }
    public function destroy($id){

    }



}
