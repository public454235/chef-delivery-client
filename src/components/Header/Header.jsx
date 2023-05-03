import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-danger fw-bold fs-2' href="#">Chef Delivery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='me-4 fw-semibold text-decoration-none text-black fs-5' to="/">HOME</Link>
                            <Link className='fw-semibold text-decoration-none text-black fs-5' to="/blog">BLOG</Link>
                        </Nav>
                        <Button className='fs-5' variant="danger">Login</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;