import React from "react";

const Titulo = ({color}) => {
    return(
        <h1 className="titulo" style={{color: color}}> 
            LISTA DE ALUMNOS
        </h1>
    );
};

export default Titulo;