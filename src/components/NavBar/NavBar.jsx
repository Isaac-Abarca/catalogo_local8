import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { Cart } from "/src/components/CarritoCompra/Cart.jsx";
import { ModalCSV } from "/src/components/CargarCSV";

import "./style.css";
import Logo from "../../assets/img/logo.svg";

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
            <div  >
              <ModalCSV/>
            </div>
            <div >
              <Cart/>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};
