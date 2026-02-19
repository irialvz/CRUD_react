import React from 'react';
import {X} from "lucide-react";
import {useForm} from "@inertiajs/react";

const Delete = ({project,closeModal}) => {
    const { delete: destroy, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        // 2. Ejecutamos el borrado a la URL del proyecto
        destroy(`/project/${project.id}`, {
            onSuccess: () => closeModal(), // Cerramos el modal al terminar
            // onError: () => ... (opcional, por si falla)
        });
    };
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Cabecera del Modal */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">¿Seguro que quieres eliminar el proyecto?</h2>
                </div>

                {/* Botones*/}
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit" onClick={submit}
                            disabled={processing}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {processing ? 'Eliminando...' : 'Eliminar proyecto'}
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Delete;
