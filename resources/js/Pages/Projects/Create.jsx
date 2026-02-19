import React from 'react';
import {useForm} from "@inertiajs/react";
import { X } from 'lucide-react'; // Icono para cerrar
export default function Create  ({closeModal}) {
        const { data, setData, post, processing, errors, reset } = useForm({
            nombre: '',
            cliente: '',
            fecha: '',
            estado: 'Pendiente'
        });
        const submit = (e) => {
            e.preventDefault();
            post('/project', {
                onSuccess: () => {
                    reset();
                    closeModal();
                }
            });
        };


    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Cabecera del Modal */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Nuevo Proyecto</h2>
                    <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                {/* Cuerpo del Formulario */}
                <form onSubmit={submit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            value={data.nombre}
                            onChange={e => setData('nombre', e.target.value)}
                            className={`w-full mt-1 border rounded-lg p-2 text-black ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cliente</label>
                        <input
                            type="text"
                            value={data.cliente}
                            onChange={e => setData('cliente', e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg p-2 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Fecha</label>
                        <input
                            type="date"
                            value={data.fecha}
                            onChange={e => setData('fecha', e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg p-2 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Estado</label>
                        <select
                            value={data.estado}
                            onChange={(e) => setData('estado', e.target.value)}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        >
                            {/* Opción deshabilitada que actúa como placeholder si viene vacío */}
                            <option value="" disabled>-- Selecciona una opción --</option>

                            {/* Tus opciones reales */}
                            <option value="Pendiente">Pendiente</option>
                            <option value="En desarrollo">En desarrollo</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {processing ? 'Guardando...' : 'Crear Proyecto'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
