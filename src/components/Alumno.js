import React from "react";

const Alumno = ({nombre, apellido, matricula}) => {
    return (
        <>
            {nombre} {apellido} {matricula}
        </>
    );
};

export default Alumno;