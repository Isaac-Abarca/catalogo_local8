import Logo from "../../assets/img/logo.svg";
import "./style.css";

export const InicioSesion = () => {
  return (
    <div className="inicio-sesion">
      <div className="div">
        <div className="frame" />
        <div className="form-sesion">
          <div className="overlap">
            <h1 className="text-wrapper">Bienvenido</h1>
            <img
              className="diseo-sin-ttulo"
              alt="Diseo sin ttulo"
              src={Logo}
            />
          </div>
          <div className="input-2">
            <div className="div-wrapper">
              <div className="text-wrapper-2">
                Ingresa tu correo electrónico
              </div>
            </div>
            <div className="text-wrapper-3">Correo electrónico</div>
          </div>
          <div className="input">
            <div className="div-wrapper">
              <div className="text-wrapper-2">
                Ingresa tu correo electrónico
              </div>
            </div>
            <div className="text-wrapper-3">Correo electrónico</div>
          </div>
          <p className="todav-a-no-tienes">
            <span className="span">¿Todavía no tienes una cuenta? </span>
            <span className="text-wrapper-4">Cree una ahora</span>
          </p>
        </div>
      </div>
    </div>
  );
};
