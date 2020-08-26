import React from 'react'
import 
{ Container,
  Row,
  Col,
  Button } from 'react-bootstrap'

export const Cart = () => {
  return(
    <>
    <div style={{display: "grid", placeItems: "center"}}>
      <h1 style={{margin: "auto"}}>Cart</h1>
    </div>


    <Container style={{height: "50vh"}}>
      <Row style={{height: "100%"}}>
        <Col style={{backgroundColor: "white", marginRight: "10px"}}>
          Your Cart is Empty
          <br/>
          <Button>
            Continue To Checkout
          </Button>
        </Col>
      </Row>
    </Container>

    </>
  )
}