import React from "react";
import Titulo from "./Titulo";
import Alumno from "./Alumno";

const Lista= ({colorT, nombres, apellidos, matriculas}) => {

    return (
        <>
            <Titulo color={colorT}/>
            <ul>
                {nombres.map((nombre, i) => {
                    return <li key={i}>
                        <Alumno nombre = {nombre} apellido={apellidos[i]} matricula={matriculas[i]}/>
                    </li>
                })}
            </ul>
        </>
    );
};

/*
    <ul>
        {alumnos.map((nombre, i) => {
            return <li key={i}>{nombre}</li>
        })}
    </ul>
*/

export default Lista;