import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return(
      <Navbar bg="success" variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand as = {Link} to='/'>
              <h3>e-<span>Nvernadero</span></h3>
          </Navbar.Brand>
          <Nav className="me-auto">
           {/* <Nav.Link as = {Link} to='/'> HOME </Nav.Link>*/}
            <Nav.Link as = {Link} to='/category/interior'>Interiores</Nav.Link>
            <Nav.Link as = {Link} to='/category/exterior'>Exteriores</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar;

