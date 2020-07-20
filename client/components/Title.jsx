import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

import RegisterModal from './RegisterModal'
import SignInModalHolder from './SignInModalHolder'

import Logout from './Logout'

function Title () {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Navbar id="title" bg="light" variant="light">
        <Navbar.Brand>Balance</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Button variant="secondary" size="lg mr-2" onClick={() => setModalShow(true)}>Register</Button>
        <SignInModalHolder />
        <Logout />
      </Navbar>
      <RegisterModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default Title
