import React from "react";
import ReactDOM from "react-dom/client";
import { InicioSesion } from "./screens/InicioSesion";
import { RecuperarContrasena } from "./screens/RecuperarContrasena";
import { Home } from "./screens/Home";
import { Registro } from "./screens/Registro";

import "./index.css";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <InicioSesion />,
  },
  {
    path: "/RecuperarContrasena",
    element: <RecuperarContrasena />,
  },
  {
    path: "/Registro",
    element: <Registro />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
