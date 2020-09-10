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
import { connect } from 'react-redux'
import { inputSlice } from "../reducers/inputSlice"


const NavBar = (props: any) => {
  console.log(props)
  let handleOnChange = (event: any) =>{
    return props.input(event.target.value)
  }
  return(
    <>
    <Navbar expand="lg">
      <NavLink className="navbar-brand" exact to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{textAlign: "right"}}>
    <Form inline>
      <Col>
        <FormControl value={props.state.input} onChange={handleOnChange}/>
        <Button variant="outline-success">Search</Button>
      </Col>
    </Form>
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
        <FontAwesomeIcon icon={faShoppingCart}/> Cart ({props.state.counter})
    </NavLink>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    

    <div style={{height: "10px", backgroundColor: "#5FCFC8"}}></div>
    </>
  )
}

export default connect(state=>({state}),inputSlice.actions)(NavBar)