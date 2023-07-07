import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

import Logo from "../../assets/img/logo.svg";
import Carrito from "../../assets/img/carro-compra.png";
import Cargar from "../../assets/img/cargar-datos.png";
import CargarImg from "../../assets/img/cargar-img.png";

export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img className="logo" src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto Links2">
            <Nav.Link className="Links">Perfumes</Nav.Link>
            <Nav.Link className="Links">Comestibles</Nav.Link>
            <Nav.Link className="Links">Cosmeticos</Nav.Link>
            <Nav.Link className="Links">Herramientas</Nav.Link>
            <Nav.Link className="Links">Relojeria</Nav.Link>
            <Nav.Link className="Links">Desodorantes</Nav.Link>
            <Nav.Link className="Links">Bolsos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={1}>
              <img className="icono" src={Cargar} alt="carro compra" />
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <img className="icono" src={Carrito} alt="carro compra" />
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <img className="icono" src={CargarImg} alt="carro compra" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
