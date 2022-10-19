import React, {useState} from "react";
import Boton from "../estilos/Boton";
//import {Button} from "react-bootstrap";

function Registrar(props) {
    const [Cuser, setCuser] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [CCpassword, setCCpassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.name);
        if (e.target.name === "Cuser") {
            setCuser(e.target.value);
        }
        else if (e.target.name === "Cpassword") {
            setCpassword(e.target.value);
        }
        else if (e.target.name === "CCpassword") {
            setCCpassword(e.target.value);
        }
    };

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if (Cpassword === CCpassword && Cpassword !== "" && Cuser !== "") {
            alert("Registrado");
            props.cambiarRegistrar(true);
        }
        else {
            alert("Contraseñas o usuario inválidas");
        }
    };

    return (
        <form action="" onSubmit={onSubmit}>
          <div>
              <label htmlFor="Cuser">Usuario</label>
              <input
                  type="text"
                  name="Cuser"
                  id="Cuser"
                  value={Cuser}
                  onChange={onChange}>
              </input>
          </div>
          <div>
              <label htmlFor="Cpassword">Nueva Contraseña</label>
              <input
                  type="password"
                  name="Cpassword"
                  id="Cpassword"
                  value={Cpassword}
                  onChange={onChange}>
              </input>
          </div>
          <div>
              <label htmlFor="CCpassword">Confirmar Contraseña</label>
              <input
                  type="password"
                  name="CCpassword"
                  id="CCpassword"
                  value={CCpassword}
                  onChange={onChange}>
              </input>
          </div>
          <Boton color> Crear cuenta </Boton>
        </form>
    );
}


export default Registrar;