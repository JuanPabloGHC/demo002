import React from 'react'
import ReactDOM from 'react-dom/client'
import Alumno from './components/Alumno';
import Lista from './components/Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sesion = true;

//Fragments
const jsx = (
  <>
    {sesion === true ? (
      <>
        <Lista colorT='blue' colorA='red'/>
      </>
    ) : (
      <h2>No has iniciado sesion</h2>
    )}
  </>
);

root.render(jsx);