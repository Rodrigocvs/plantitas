import CardWidget from "./CardWidget";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import plantita from '../img/plantita.png'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <>
            <Navbar bg="light" expand="lg">
                <Link to='/'>
                    <a className="navbar-brand" href="#"/>
                        <img src={plantita} alt="" width="30" height="24"/>
                    <Navbar.Brand href="#">Plantitas</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Plantas" id="navbarScrollingDropdown">
                            <Link to='/categoria/I'>
                                <NavDropdown.Item href="#action3">Interiores</NavDropdown.Item>
                            </Link>
                            <Link to='/categoria/E'><NavDropdown.Item href="#action4">Exteriores</NavDropdown.Item></Link>
                            <Link to='/categoria/H'><NavDropdown.Item href="#action4">Huerta</NavDropdown.Item></Link>
                        </NavDropdown>
                        <NavDropdown title="Herramientas" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Para casa</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Para huerta</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
                <CardWidget/>
            </Navbar>  
        </>
     );
}
 
export default NavBar;