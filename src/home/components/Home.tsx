import React from 'react';
import 
{ Container,
  Row,
  Col,
  Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../media/logo.jpg'
import portrait from '../media/portrait.jpg'
import boyShirt from '../media/boy-shirt.jpg'
import girlShirt from '../media/girl-shirt.jpg'
import bow from '../media/bow.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faFacebookF, faPinterest} from '@fortawesome/free-brands-svg-icons'
import {connect} from 'react-redux';
import { navCountSlice } from '../../navbar/reducers/cartCount'


const Home = (props: any) => {
  let buy= () =>{
    return props.increment()
  }
  let sell =()=>{
    if(props.state.counter > 0) props.decrement()
  }
  let reset=()=>{
    return props.reset()
  }
  return(
    <>
    
    <img src={logo} alt="logo" style={{width: "100%"}}/>

    <Button onClick={buy}>Buy</Button>
    <Button onClick={sell}>Sell</Button>
    <Button onClick={reset}>Reset</Button>

    <Container style={{ marginTop: "180px", padding: "0px"}} data-aos="fade-up">
      <Row >
        <h2 style={{margin: "auto", color: "#4c9b9e", }}>Products You'll Love</h2>
      </Row>
      <Row xl={3} lg={3} md={3}  style={{ padding: "0px", margin: "50px 0px 50px 0px"}}>
        <Col style={{padding: "0px"}}>
          <img src={boyShirt} alt="" style={{width: "90%"}}/>
        </Col>
        <Col style={{padding: "0px"}}>
          <img src={girlShirt} alt="" style={{width: "90%"}}/>
        </Col>
        <Col style={{padding: "0px"}}>
          <img src={bow} alt="" style={{width: "90%"}}/>
        </Col>
      </Row>
      <Row>
        <NavLink to="/products" style={{margin: "auto"}}>
          <Button size="lg" style={{backgroundColor: "#5FCFC8", borderColor: "#5FCFC8"}} >See Catalog</Button>
        </NavLink>
      </Row>
    </Container>

    <Container id="About" style={{ marginTop: "180px", marginBottom: "180px"}} data-aos="fade-in">
      <Row sm={1} md={1} lg={2}>
        <Col xl={5} lg={6}>
          <img  className="rounded" src={portrait} alt="portrait" style={{width: "100%"}} />
        </Col>
        <Col lg={6} style={{color: "#4c9b9e", display: "grid"}}>
            <p style={{fontSize: "28px"}}>
              Hi there!<br/><br/>
              My name is Joscelyn, I'm the sole owner and creator of Haydes Hideout. I'm a working mom who loves to craft in my spare time out of my pet-friendly house in Upstate New York. I started off by making small crafts for co-workers and friends as gifts when I untimely decided to share them with everyone else in hopes of one day being able to work at home. Everything in my shop is made from the heart and I hope that you and your loved ones enjoy my products for years to come.
            </p>
        </Col>
      </Row>
    </Container>

    <Container fluid style={{backgroundColor: "#5FCFC8"}}>
      <Row>
        <Col xl={9} lg={9} md={8} sm={6} xs={6} >
        <a style={{color: "inherit"}} href="https://www.instagram.com/haydes_hideout/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></a>
        <a style={{color: "inherit"}} href="https://www.facebook.com/haydeshideout" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="2x" style={{marginLeft: "10px"}}/></a>
        <a style={{color: "inherit"}} href="https://www.pinterest.com/joscelynq/" target="_blank"><FontAwesomeIcon icon={faPinterest} size="2x" style={{marginLeft: "10px"}}/></a>
        </Col>
        <p style={{margin: "5px 0px 0px 15px"}}>Built and Designed by Tyler Caprioli</p>
      </Row>
    </Container>
    </>
  )
}

export default connect(state=>({state}), navCountSlice.actions)(Home)