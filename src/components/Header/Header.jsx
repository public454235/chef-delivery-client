import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogOut = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }
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
                        <Form className="d-flex align-items-center">

                            {user ?
                                <img style={{ width: '50px' }} className='rounded-circle me-3' title={user?.displayName} src={user?.photoURL} alt="" />
                                :
                                <Nav.Link href="#action2"><FaUserCircle className='me-3  mt-1' style={{ fontSize: '2rem' }}></FaUserCircle></Nav.Link>
                            }

                            {user ?
                                <Button className='fw-semibold' onClick={handleLogOut} variant="danger">logOut</Button> :
                                <Button variant="danger">
                                    <Link className='text-white text-decoration-none fw-semibold' to='/login'>Login</Link>
                                </Button>
                            }
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;