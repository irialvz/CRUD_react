import React from 'react';
import CrudForm from "@/Pages/CrudForm.jsx";
import Create from "@/Pages/Projects/Create.jsx";
import Edit from "@/Pages/Projects/Edit.jsx";
import Delete from "@/Pages/Projects/Delete.jsx";

const Index = ({proyectos,columnas}) => {

    return (
        <CrudForm
            title="proyectos"
            data={proyectos}
            columns={columnas}
            CreateComponent={Create}
            EditComponent={Edit}
            DeleteComponent={Delete}
            getBadgeColor={(estado) => estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}
        />
    );
};

export default Index;
