import Logo from "../../assets/img/logo.svg";
import "./style.css";

export const RecuperarContrasena = () => {
  return (
    <div className="container">
      <div className="inicio-sesion">
        <div className="div-izquierda"></div>
        <div className="div-derecha">
          <div className="form-sesion">
            <div className="overlap">
              <img className="logo" alt="Logo local 8" src={Logo} />
              <h1 className="text-bienbenido">Recuperar Contraseña</h1>
            </div>
            <div className="div-user-name">
                <p className="text-password">Nombre de usuario</p>
                <input
                  type="text"
                  className="text-wrapper-2"
                  placeholder=" Ingresa el nombre de usuarioa"
                />
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
              <div className="cont-btn">
                <input
                  className="btn-Ingresar"
                  type="button"
                  value="Mandar correo"
                />
              </div>
              <div className="div-crear-cuenta">
                <p className="todav-a-no-tienes">
                  <span className="span">¿Ya tienes cuenta? </span>
                  <span className="text-wrapper-4">Inicia sesión</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
