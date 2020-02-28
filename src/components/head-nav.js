import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react'

const HeadNav = () => (
  <Navbar className="d-flex justify-content-between">
    <Navbar.Brand href='#'>Lome</Navbar.Brand>
    <Nav >
    <Nav.Link>Product</Nav.Link>
    <Nav.Link>Pricing</Nav.Link>
    <Nav.Link>Request Demo</Nav.Link>
    <Nav.Link>Login</Nav.Link>
    </Nav>
  </Navbar>
)
export default HeadNav
