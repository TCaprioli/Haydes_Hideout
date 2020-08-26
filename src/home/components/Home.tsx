import React from 'react';
import 
{ Container,
  Row,
  Col,
  Button } from 'react-bootstrap'
import logo from '../media/logo.jpg'
import portrait from '../media/portrait.jpg'
import boyShirt from '../media/boy-shirt.jpg'
import girlShirt from '../media/girl-shirt.jpg'
import bow from '../media/bow.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faFacebookF, faPinterest} from '@fortawesome/free-brands-svg-icons'


export const Home = () => {
  return(
    <>
    
    <img src={logo} alt="logo" style={{width: "100%"}}/>

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
        <Button size="lg" style={{backgroundColor: "#5FCFC8", margin: "auto", borderColor: "#5FCFC8"}} >See Catalog</Button>
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
      <Row >
        <Col style={{padding: "20px", marginLeft: "30px"}}>
        <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        <FontAwesomeIcon icon={faFacebookF} size="2x" style={{marginLeft: "10px"}}/>
        <FontAwesomeIcon icon={faPinterest} size="2x" style={{marginLeft: "10px"}}/>
        </Col>
        <p style={{margin: "20px 20px 0px 0px"}}>Built and Designed by Tyler Caprioli</p>
      </Row>
    </Container>
    </>
  )
}