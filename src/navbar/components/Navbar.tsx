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
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {
  return(
    <>

    <Navbar expand="lg">
      <NavLink className="navbar-brand" exact to="/">
        <img src={logo} alt="logo" style={{marginLeft: "80px"}}/>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{textAlign: "right"}}>
      <NavDropdown style={{fontSize: "20px"}} title="Products" id="basic-nav-dropdown">
        <NavLink className="dropdown-item" exact to="/products/boys">
          Boys
        </NavLink>
        <NavLink className="dropdown-item" exact to="/products/girls">
          Girls
        </NavLink>
        <NavLink className="dropdown-item" exact to="/products/accessories">
          Accessories
        </NavLink>
        <NavLink className="dropdown-item" exact to="/products/seasonals">
          Seasonal
        </NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" exact to="/products">
          All Products
        </NavLink>
      </NavDropdown>
      <NavLink className="nav-link" to="/cart" style={{ fontSize: "20px", textDecoration: "none" }}>
        <FontAwesomeIcon icon={faShoppingCart}/> Cart (0)
      </NavLink>
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