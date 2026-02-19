import React, {useState} from 'react';
import {Plus, Pencil, Trash2, Eye, FolderOpen, Icon} from 'lucide-react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function GenericTable({
                                         title,
                                         data,
                                         columns, roles,
                                         CreateComponent,
                                         EditComponent,
                                         DeleteComponent,
                                         getBadgeColor // Función opcional para colores de estados
                                     }) {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null);

        const rolAsignado = (id_rol) => {
        // 1. Si no hay ID (viene null o indefinido), cortamos rápido
        if (!id_rol) return 'Sin rol';

        // 2. Buscamos en el array.
        // Usamos '==' en lugar de '===' por si un ID es número (1) y el otro string ("1")
        const rolEncontrado = roles.find(rol => rol.id == id_rol);

        // 3. Si lo encuentra, devuelve el nombre. Si no encuentra coincidencia, "Sin rol"
        return rolEncontrado ? rolEncontrado.name : 'Sin rol';


    }
    return (
        <AuthenticatedLayout>
            <div className="p-8 bg-gray-50 min-h-screen">
                {/* Encabezado dinámico */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            Gestión de {title}
                        </h1>
                    </div>
                    <button
                        onClick={() => setIsCreateOpen(true)}
                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        <Plus size={20}/> Nuevo Registro
                    </button>
                </div>

                {/* Modales condicionales */}
                {isCreateOpen &&
                    <CreateComponent roles={roles ? roles : null} closeModal={() => setIsCreateOpen(false)}/>}
                {itemToEdit && <EditComponent project={itemToEdit} closeModal={() => setItemToEdit(null)}/>}
                {itemToDelete && <DeleteComponent project={itemToDelete} closeModal={() => setItemToDelete(null)}/>}

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                {columns.map((col, index) => (
                                    <th key={index} className="p-4 font-semibold text-gray-600 text-sm">
                                        {col.label}
                                    </th>
                                ))}
                                <th className="p-4 font-semibold text-gray-600 text-sm text-center">Acciones</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            {data.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    {columns.map((col, index) => (
                                        <td key={index} className="p-4 text-sm text-gray-600">
                                            {/* Si la columna es un estado, aplicamos el badge */}
                                            {
                                                col.key === 'estado' ? (
                                                    // 1. Si es ESTADO, pinta esto:
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor ? getBadgeColor(item[col.key]) : ''}`}>
            {item[col.key]}
        </span>
                                                ) : col.key === 'rol_id' ? (
                                                    // 2. Si no es estado, pero es ROL_ID, pinta esto:
                                                    <span
                                                        className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
            {rolAsignado(item[col.key])}
        </span>
                                                ) : (
                                                    // 3. Si no es NINGUNA de las anteriores, pinta el texto normal:
                                                    item[col.key]
                                                )
                                            }

                                        </td>
                                    ))}
                                    <td className="p-4">
                                        <div className="flex justify-center gap-2">
                                            <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md"><Eye
                                                size={18}/></button>
                                            <button onClick={() => setItemToEdit(item)}
                                                    className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-md">
                                                <Pencil size={18}/></button>
                                            <button onClick={() => setItemToDelete(item)}
                                                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-md"><Trash2
                                                size={18}/></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
