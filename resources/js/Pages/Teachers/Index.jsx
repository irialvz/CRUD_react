import React from 'react';
import CrudForm from "@/Pages/CrudForm.jsx";
import Create from "@/Pages/Users/Create.jsx";
import Edit from "@/Pages/Projects/Edit.jsx";
import Delete from "@/Pages/Projects/Delete.jsx";

const Index = ({profesores,columnas,roles}) => {

    return (
        <CrudForm
            title="usuario"
            data={profesores}
            columns={columnas}
            roles={roles}
            CreateComponent={Create}
            EditComponent={Edit}
            DeleteComponent={Delete}
        />
    );
};

export default Index;
