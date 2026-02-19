import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Welcome from "@/Pages/Welcome.jsx";

export default function Dashboard() {
    const stats = [
        { id: 1, title: 'Cronometro', value: 'cronometro'},
        { id: 2, title: 'CRUD' , value: 'crud' },
        { id: 3, title: 'alumnos' , value: 'alumnos' },
        { id: 4, title: 'profesores' , value: 'profesores' },

    ];
    return (
        <>

    <AuthenticatedLayout>
        <div className="p-6 bg-gray-50 min-h-screen">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Panel de Control</h1>
                <p className="text-gray-500">Bienvenido de nuevo, aquí tienes las paginas de la web.</p>
            </header>

            {/* Grid de Tarjetas */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item) => (
                    <div className="">
                        <img className="w-full h-40 object-fit-contain rounde"
                             src="https://picsum.photos/seed/picsum/200/300" alt=""/>
                        <div
                            key={item.id}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-between mb-4">

                                    <a href={item.value} className="btn">Acceder</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AuthenticatedLayout>
    </>

);
}
