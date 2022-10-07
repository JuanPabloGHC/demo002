import React from "react";
import Titulo from "./Titulo";
import Alumno from "./Alumno";

const Lista= ({colorT, colorA}) => {

    const alumnos = ["Andrea", "Aldo", "Abraham"];

    return (
        <>
            <Titulo color={colorT}/>
            <ul style={{color: colorA}}>
                <li>
                    <Alumno nombre="Juan Pablo" apellido="Gomez" matricula="184429"/>
                </li>
                <li>
                    <Alumno nombre="Fabiola" apellido="Haro" matricula="193411"/>
                </li>
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