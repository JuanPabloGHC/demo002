import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Lista from './components/Lista';
import FormularioLogin from './components/Formulario';
import Registrar from './components/Registrar';

const root = ReactDOM.createRoot(document.getElementById('root'));


//Fragments
const App = () => {
  const nombres = ["Juan Pablo", "Fabiola", "Enrique"];
  const apellidos = ["Gomez", "Haro", "Cabrera"];
  const matriculas = ["184429", "198765", "172940"];
  
  const [sesion, cambiarSesion] = useState(false);
  const [contador, cambioContador] = useState(0);
  const [registrado, cambiarRegistrar] = useState(false);
  
  
  return (
    <>
      {sesion === true ? (
        <>
          <Lista colorT='blue' nombres={nombres} apellidos={apellidos} matriculas={matriculas}/>

          
          <button onClick={() => cambiarSesion(false)}>
            Cerrar sesión
          </button>
          <p>
            Contador: {contador}
          </p>
          <button onClick={() => cambioContador(contador+1)}>
            Sumar 1
          </button>
          <button onClick={() => cambioContador(contador-1)}>
            Restar 1
          </button>
          <button onClick={() => cambioContador(contador*2)}>
            Multiplicar 2
          </button>
          <button onClick={() => cambioContador(contador/2)}>
            Dividir 2
          </button>
          <button onClick={() => cambioContador(contador*contador)}>
            Al cuadrado
          </button>
          <button onClick={() => cambioContador(contador/0)}>
            Entre 0
          </button>
          <button onClick={() => cambioContador(contador*0)}>
            Multiplicar 0
          </button>
        </>
      ) : (
        <>
          {registrado === false ? (
          <>
            <h1>Registro</h1>
            <Registrar cambiarRegistrar={cambiarRegistrar}/>
          </>
        ) : (
          <>
            <h1>Inicia sesión</h1>
            <FormularioLogin cambiarSesion={cambiarSesion} cambiarRegistrar={cambiarRegistrar}/>
          </>
        )}
        </>  
      )}
    </>
  );
};

root.render(
  <App/>
);