import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
      <Navbar bg="success" variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <h3>Tienda de <span>Productos</span></h3>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#interiores">Interiores</Nav.Link>
            <Nav.Link href="#exteriores">Exteriores</Nav.Link>
            <Nav.Link href="#contactos">Contacto</Nav.Link>
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar;

