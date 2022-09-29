import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
const sesion = true;
const name = 'Juan Pablo'
const apellido = ''
const alumnos = ["Andrea", "Aldo", "Abraham"]
//Fragments
const jsx = (
  <>
    {sesion === true ? (
      <>
        <h1 className='titulo' style={{color:'red'}}>Hola {name}</h1>
        {apellido && <p>Tu apellido es: {apellido}</p>}

        <h3>Lista de alumnos</h3>
        <ul>
          {alumnos.map((nombre, i) => {
            return <li key={i}>{nombre}</li>
          })}
        </ul>
      </>
    ) : (
      <h2>No has iniciado sesion</h2>
    )}
  </>
);

const compruebaSesion = (sesion) => {
  if(sesion === true){
    return jsx;
  }else{
    return <h2>No has iniciado sesion</h2>
  }
}
root.render(compruebaSesion(sesion));