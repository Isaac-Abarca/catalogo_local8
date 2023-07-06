import Logo from "../../assets/img/logo.svg";
import "./style.css";

export const InicioSesion = () => {
  return (
    <div className="container">
      <div className="inicio-sesion">
        <div className="div-izquierda"></div>
        <div className="div-derecha">
          <div className="form-sesion">
            <div className="overlap">
              <img className="logo" alt="Logo local 8" src={Logo} />
              <h1 className="text-bienbenido">Bienvenido</h1>
            </div>
            <div className="inputs">
              <div className="div-correo">
                <p className="text-correo">Correo electrónico</p>
                <input
                  type="text"
                  className="text-wrapper-2"
                  placeholder=" Ingresa tu correo electrónico"
                />
              </div>
              <div className="div-contrasena">
                <p className="text-password">Contraseña</p>
                <input
                  type="text"
                  className="text-wrapper-2"
                  placeholder=" Ingresa tu correo contraseña"
                />
                <a className="olvido-contasena">¿Olvidastes tu contraseña?</a>
              </div>
              <div className="cont-btn">
                <input
                  className="btn-Ingresar"
                  type="button"
                  value="Iniciar sesión"
                />
              </div>
              <div className="div-crear-cuenta">
                <p className="todav-a-no-tienes">
                  <span className="span">¿Todavía no tienes una cuenta? </span>
                  <span className="text-wrapper-4">Cree una ahora</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
