import { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import "./style.css";

export const InicioSesion = () => {
  const [body, setBody] = useState({ username: "", password: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  return (
    <div className="">
      <div className="inicio-sesion-inicio">
        <div className="div-izquierda-d"></div>
        <div className="div-derecha-inicio">
          <div className="form-sesion">
            <div className="overlap-inicio">
              <img className="logo" alt="Logo local 8" src={Logo} />
              <h1 className="text-bienbenido">Bienvenido</h1>
            </div>
            <div className="inputs">
              <div className="div-correo">
                <p className="text-correo">Nombre usuario</p>
                <input
                  type="text"
                  className="text-wrapper-2"
                  placeholder=" Ingresa tu nombre de usuario"
                  value={body.name}
                  onChange={inputChange}
                  name="username"
                />
              </div>
              <div className="div-contrasena">
                <p className="text-password">Contraseña</p>
                <input
                  type="text"
                  className="text-wrapper-2"
                  placeholder=" Ingresa tu contraseña"
                  value={body.password}
                  onChange={inputChange}
                  name="password"
                />
                <Link to="RecuperarContrasena">
                  <a className="olvido-contasena">¿Olvidastes tu contraseña?</a>
                </Link>
              </div>

              <Link className="link" to="/Home">
                <div className="cont-btn-inicio">
                  <input
                    className="btn-Ingresar-inicio"
                    type="button"
                    value="Ingresar"
                  />
                </div>
              </Link>

              <div className="div-crear-cuenta-i">
                <p className="todav-a-no-tienes">
                  <span className="span">¿Todavía no tienes una cuenta? </span>
                  <Link to="/Registro">
                    <span className="text-wrapper-4">Cree una ahora</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
