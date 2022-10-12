import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Lista from './components/Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Fragments
const App = () => {
  const nombres = ["Juan Pablo", "Fabiola", "Enrique"];
  const apellidos = ["Gomez", "Haro", "Cabrera"];
  const matriculas = ["184429", "198765", "172940"];

  const [sesion, cambiarSesion] = useState(true);
  const [contador, cambioContador] = useState(0);
  
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
          <h2>No has iniciado sesión</h2>
          <button onClick={() => cambiarSesion(true)}>Iniciar sesión</button>
        </>  
      )}
    </>
  );
};

root.render(
  <App/>
);