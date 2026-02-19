import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, BookOpen } from 'lucide-react'; // Usamos lucide-react que ya lo tienes instalado

export default function Welcome() {
    return (
        <>
            {/* Cambia el título de la pestaña del navegador */}
            <Head title="Bienvenido al Gestor Escolar" />

            {/* Contenedor principal con un fondo de gradiente muy sutil */}
            <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">

                {/* Elementos decorativos de fondo (círculos borrosos) */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                {/* Navbar minimalista (Opcional, pero queda muy bien) */}
                <nav className="absolute top-0 w-full p-6 flex justify-between items-center max-w-7xl mx-auto z-10">
                    <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
                        <BookOpen size={28} />
                    </div>
                    <div className="space-x-4">
                        <Link
                            href="/login"
                            className="text-gray-600 hover:text-indigo-600 font-medium transition"
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </nav>

                {/* Contenido Central del Hero */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">

                    {/* Etiqueta superior */}
                    <div className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6 shadow-sm border border-indigo-200">
                        🚀 La nueva forma de gestionar tu centro
                    </div>

                    {/* Titular Principal */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Gestiona proyectos y alumnos <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                            sin complicaciones
                        </span>
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Una plataforma centralizada para profesores y alumnos. Organiza tareas, evalúa progresos y mantén todo bajo control desde un solo lugar.
                    </p>

                    {/* Botones de Acción (CTA) */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/login"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
                        >
                            Entrar al panel
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            href="/register" // O la ruta que uses para que se registren
                            className="flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 shadow-sm transition-all"
                        >
                            Crear una cuenta
                        </Link>
                    </div>
                </div>



            </div>
        </>
    );
}
