import React from 'react';
import logo from '../media/logo.jpg'
import 
{ Navbar,
  Nav,
  NavDropdown,
  Col,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {
  return(
    <>

    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" style={{marginLeft: "80px"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{textAlign: "right"}}>
      <NavDropdown style={{fontSize: "20px"}} title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.2">Boys</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Girls</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Seasonal</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">All Products</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home" style={{marginRight: "0px", fontSize: "20px" }}>
        <FontAwesomeIcon icon={faShoppingCart}/> Cart (0)
      </Nav.Link>
    </Nav>
    <Form inline>
      <Col>
        <FormControl/>
        <Button variant="outline-success">Search</Button>
      </Col>
    </Form>
    </Navbar.Collapse>
    </Navbar>
    

    <div style={{height: "10px", backgroundColor: "#5FCFC8"}}></div>
    </>
  )
}