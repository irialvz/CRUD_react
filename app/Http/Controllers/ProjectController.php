<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        // Traemos todos los proyectos de phpMyAdmin
        $proyectos = Project::all();
        $columnas = Project::fieldLabels();

        // Los enviamos a la vista JSX
        return Inertia::render('Projects/Index', [
            'proyectos' => $proyectos,
            'columnas' => $columnas
        ]);
   }
   public function create(){
        return Inertia::render('Create');
   }
   public function store(Request $request){
// 1. Validar los datos (Si falla, Laravel devuelve los errores a React automáticamente)
       $validated = $request->validate([
           'nombre' => 'required|string|max:255',
           'cliente' => 'required|string|max:255',
           'estado' => 'required|string', // Opcional si tienes un default en BD
           'fecha' => 'required|date',
       ]);

       // 2. Crear el registro en la BD
       Project::create($validated);

       // 3. Redirigir (Inertia actualizará la lista de proyectos sola)
       return redirect()->route('projects.index'); // O redirect()->back();
   }
    public function update(Request $request, $id){
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'cliente' => 'required|string|max:255',
            'estado' => 'required|string',
            'fecha' => 'required|date',
        ]);
        $project = Project::findOrFail($id);
        $project->update($validated);
        return redirect()->route('projects.index');
    }
    public function destroy($id){
        $project = Project::findOrFail($id);
        $project->delete();
        return redirect()->route('projects.index');
    }
}
