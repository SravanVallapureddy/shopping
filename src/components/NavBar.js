import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function NavBar(){


    const cartProducts = useSelector(state => state.cart)

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                
                    <Nav className="me-auto">
                        <Nav.Link to='/' as={Link}>Products</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

