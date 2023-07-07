import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";

import Logo from "../../assets/img/logo.svg";
import Carrito from "../../assets/img/carro-compra.png";
import Cargar from "../../assets/img/cargar-datos.png";

export function NavBar({ onCategorySelect }) {
  const handleCategorySelect = (category) => {
    onCategorySelect(category);
    console.log(category);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky sticky-top"
    >
      <Container>
        <Navbar.Brand>
          <img className="logo" src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto Links2">
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("")}
            >
              Todos
            </Nav.Link>
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("Perfumes")}
            >
              Perfumes
            </Nav.Link>
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("Comestibles")}
            >
              Comestibles
            </Nav.Link>
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("Cosmeticos")}
            >
              Cosmeticos
            </Nav.Link>
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("Herramientas")}
            >
              Herramientas
            </Nav.Link>
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("Relojeria")}
            >
              Relojeria
            </Nav.Link>
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("Desodorantes")}
            >
              Desodorantes
            </Nav.Link>
            <Nav.Link
              className="Links"
              onClick={() => handleCategorySelect("Bolsos")}
            >
              Bolsos
            </Nav.Link>
          </Nav>
          <Nav className="link-data">
            <Link to="/CargarBD">
              <img className="icono" src={Cargar} alt="carro compra" />
            </Link>
            <Link to="/Carrito">
              <img className="icono" src={Carrito} alt="carro compra" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};
