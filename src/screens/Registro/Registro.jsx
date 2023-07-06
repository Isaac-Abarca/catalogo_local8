import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import "./style.css";

export const Registro = () => {
  return (
    <div className="">
      <div className="inicio-sesion-r">
        <div className="div-izquierda-r"></div>
        <div className="div-derecha-r">
          <div className="form-sesion-r">
            <div className="overlap-r">
              <img className="logo-r" alt="Logo local 8" src={Logo} />
              <h1 className="text-bienbenido-r">Registrarce</h1>
            </div>
            <div className="div-user-name-r">
              <p className="text-password-r">Nombre de usuario</p>
              <input
                type="text"
                className="text-wrapper-2-r"
                placeholder=" Ingresa el nombre de usuarioa"
              />
            </div>
            <div className="inputs-r">
              <div className="div-correo-r">
                <p className="text-correo">Correo electrónico</p>
                <input
                  type="text"
                  className="text-wrapper-2-r"
                  placeholder=" Ingresa tu correo electrónico"
                />
              </div>
              <div className="div-contrasena-r">
                <p className="text-password">Contraseña</p>
                <input
                  type="text"
                  className="text-wrapper-2"
                  placeholder=" Ingresa tu correo contraseña"
                />
              </div>
              <Link to='/'>
                <div className="cont-btn-r">
                  <input
                    className="btn-Ingresar-r"
                    type="button"
                    value="Registrarme"
                  />
                </div>
              </Link>

              <div className="div-crear-cuenta-r">
                <p className="todav-a-no-tienes-r">
                  <span className="span">¿Ya tienes cuenta? </span>
                  <Link to="/">
                    {" "}
                    <span className="text-wrapper-4">Inicia sesión</span>
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
