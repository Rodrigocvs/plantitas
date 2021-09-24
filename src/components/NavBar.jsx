import CardWidget from "./CardWidget";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import plantita from '../img/plantita.png'
const NavBar = () => {
    return ( 
        <>
            <Navbar bg="light" expand="lg">
                <a className="navbar-brand" href="#"/>
                    <img src={plantita} alt="" width="30" height="24"/>
                <Navbar.Brand href="#">Plantitas</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Plantas Interiores</Nav.Link>
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