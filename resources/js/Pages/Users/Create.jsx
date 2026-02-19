import React from 'react';
import {useForm} from "@inertiajs/react";
import { X } from 'lucide-react'; // Icono para cerrar
export default function Create  ({closeModal, roles}) {
        const { data, setData, post, processing, errors, reset } = useForm({
            name: '',
            email: '',
            rol_id: '',
            password: ''
        });
        const submit = (e) => {
            e.preventDefault();
            post('/usuario', {
                onSuccess: () => {
                    reset();
                    closeModal();
                }
            });
        };



    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            {/* Se añade flex-col y max-h-[90vh] para controlar la altura máxima */}
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">

                {/* Cabecera del Modal */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Nuevo usuario</h2>
                    <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition">
                        <X size={24} />
                    </button>
                </div>

                {/* FORMULARIO: Ahora envuelve a LOS INPUTS Y A LOS BOTONES */}
                <form onSubmit={submit} className="flex flex-col overflow-hidden">

                    {/* Contenedor de inputs con PADDING (p-4) y SCROLL (overflow-y-auto) */}
                    <div className="p-4 overflow-y-auto flex-1">
                        {Object.keys(data).map((key) => {

                            // 1. CASO ESPECIAL: El SELECT para el rol_id
                            if (key === 'rol_id') {
                                return (
                                    <div key={key} className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2 text-sm">Rol del Usuario</label>
                                        <select
                                            value={data[key]}
                                            onChange={(e) => setData(key, e.target.value)}
                                            /* Añadido bg-white y text-gray-900 para evitar el texto blanco */
                                            className="border border-gray-300 p-2 w-full rounded-lg bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                        >
                                            <option value="" disabled>Selecciona un rol...</option>
                                            {/* El '?' evita errores si 'roles' tarda en cargar */}
                                            {roles?.map(rol => (
                                                <option key={rol.id} value={rol.id}>{rol.name}</option>
                                            ))}
                                        </select>
                                        {errors[key] && <div className="text-red-500 text-xs mt-1">{errors[key]}</div>}
                                    </div>
                                );
                            }

                            // 2. CASO NORMAL: Inputs de texto
                            let inputType = 'text';
                            if (key === 'password') inputType = 'password';
                            if (key === 'email') inputType = 'email';

                            // Un pequeño truco para que 'name' se lea como 'Nombre' en la etiqueta
                            const labelText = key === 'name' ? 'Nombre' : key;

                            return (
                                <div key={key} className="mb-4">
                                    <label className="block text-gray-700 capitalize font-bold mb-2 text-sm">
                                        {labelText}
                                    </label>
                                    <input
                                        type={inputType}
                                        value={data[key]}
                                        onChange={(e) => setData(key, e.target.value)}
                                        /* Añadido bg-white y text-gray-900 para evitar el texto blanco */
                                        className="border border-gray-300 p-2 w-full rounded-lg bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                    />
                                    {errors[key] && <div className="text-red-500 text-xs mt-1">{errors[key]}</div>}
                                </div>
                            );
                        })}
                    </div>

                    {/* Botones de acción: Ahora están DENTRO del form y tienen su propio fondo gris (bg-gray-50) */}
                    <div className="flex justify-end gap-3 p-4 border-t bg-gray-50">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 shadow-sm transition"
                        >
                            {processing ? 'Guardando...' : 'Crear Usuario'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
