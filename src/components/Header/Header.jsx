import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
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
                        {user &&
                            <FaUserCircle className='me-2' style={{ fontSize: '2.2.3rem' }}></FaUserCircle>
                        }
                        {user ?
                            <Button className='fs-5' variant="danger">Logout</Button>:
                            <Link to="/login">
                            <Button className='fs-5' variant="danger">Login</Button></Link>
                            }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;