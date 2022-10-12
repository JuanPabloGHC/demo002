import React from "react";

const Alumno = ({nombre, apellido, matricula}) => {
    return (
        <>
            <b>Nombre: </b> {nombre} {apellido} &nbsp;&nbsp; <b>ID: </b>{matricula}
        </>
    );
};

export default Alumno;