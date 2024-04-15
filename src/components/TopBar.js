import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
      <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav className="ms-auto px-1" style={{ lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          </Row>
          </Form> 
        <Nav.Link href="#LogIn">Log In</Nav.Link>
        <Button variant="success">Sign Up</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default TopBar;