<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
//Route::get('/', function () {
//    return Inertia::render('Welcome');
//});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get("cronometro", function () {
    return Inertia::render("Cronometro");

});
Route::get('/crud', [ProjectController::class, 'index'])->name('projects.index');
Route::post('/project', [ProjectController::class, 'store'])->name('projects.store');
Route::put('/project/{id}', [ProjectController::class, 'update'])->name('projects.update');
Route::delete('/project/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
Route::get('/alumnos', [StudentController::class, 'index'])->name('students.index');
Route::get('/profesores', [TeacherController::class, 'index'])->name('teachers.index');
require __DIR__.'/auth.php';
