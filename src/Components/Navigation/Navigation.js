import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className=' bg-gray-700' expand="lg">
                <Container >
                    <Navbar.Brand as={HashLink} to="/"><img className='w-2/3' src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavHashLink} style={{ fontWeight: 'bold', color: 'yellow' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavHashLink} style={{ fontWeight: 'bold', color: 'yellow' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/services">Services</Nav.Link>

                            <Nav.Link as={NavHashLink} style={{ fontWeight: 'bold', color: 'yellow' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/myOrders">My Orders</Nav.Link>


                            <NavDropdown className=' text-warning fw-bold' title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavHashLink} activeStyle={{ color: 'white', fontWeight: 'bold' }} to="/AllOrder">Manage all Order</NavDropdown.Item>


                                <NavDropdown.Item as={NavHashLink} activeStyle={{ color: 'white', fontWeight: 'bold' }} to="/update">Update service</NavDropdown.Item>

                                <NavDropdown.Item as={NavHashLink} activeStyle={{ color: 'white', fontWeight: 'bold' }} to="/AddNewService">Add a new service</NavDropdown.Item>

                            </NavDropdown>


                            {
                                user.displayName || user.email ?
                                    <span>
                                        <Nav.Link style={{ fontWeight: 'bold', color: 'yellow' }}  >{user.displayName}</Nav.Link>


                                    </span>
                                    :

                                    <Nav.Link as={NavHashLink} style={{ fontWeight: 'bold', color: 'yellow' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/login">Login</Nav.Link>



                            }

                            {
                                user.email && <Nav.Link onClick={logOut} style={{ fontWeight: 'bold', color: 'yellow' }}  >Logout</Nav.Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;