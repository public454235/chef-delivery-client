import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-danger fw-bold' href="#">Chef Delivery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='fw-semibold' href="#action1">Home</Nav.Link>
                            <Nav.Link className=' fw-semibold' href="#action1">Blog</Nav.Link>

                        </Nav>



                        <Button variant="danger">Login</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </Container>
        
    );
};

export default Header;