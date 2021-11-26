import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const { user, logOut } = useAuth();


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Navbar className=' 
            bg-gray-700' expand="lg">

                <Container >
                    <Navbar.Brand as={HashLink} to="/">
                        <img width='200px' src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavHashLink}
                                style={{ fontWeight: 'bold', color: 'yellow' }}
                                activeStyle={{ color: 'red', fontWeight: 'bold' }}
                                to="/home">Home
                            </Nav.Link>

                            <Nav.Link as={NavHashLink}
                                style={{ fontWeight: 'bold', color: 'yellow' }}
                                activeStyle={{ color: 'red', fontWeight: 'bold' }}
                                to="/services">Services
                            </Nav.Link>

                            <Nav.Link as={NavHashLink}
                                style={{ fontWeight: 'bold', color: 'yellow' }}
                                activeStyle={{ color: 'red', fontWeight: 'bold' }}
                                to="/myOrders">My Orders
                            </Nav.Link>



                            <Nav.Link
                                style={{ fontWeight: 'bold', color: 'yellow' }}
                                id="demo-positioned-button"
                                aria-controls="demo-positioned-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}



                            >
                                Admin
                            </Nav.Link>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <NavLink
                                    style={{ fontWeight: 'bold', textDecoration: "none" }}
                                    activeStyle={{ color: 'red', fontWeight: 'bold' }}
                                    to='/AllManageOrders'><MenuItem onClick={handleClose}>Manage all Order
                                    </MenuItem>
                                </NavLink>
                                <NavLink
                                    style={{ fontWeight: 'bold', color: 'blue', textDecoration: "none" }}
                                    activeStyle={{ color: 'red', fontWeight: 'bold' }}

                                    to="/update"><MenuItem onClick={handleClose}>Update service
                                    </MenuItem>
                                </NavLink>

                                <NavLink
                                    style={{ fontWeight: 'bold', color: 'blue', textDecoration: "none" }}
                                    activeStyle={{ color: 'red', fontWeight: 'bold' }}
                                    to="/AddNewService"><MenuItem onClick={handleClose}>Add a new service</MenuItem></NavLink>
                            </Menu>


                            {
                                user.displayName || user.email ?
                                    <span>
                                        <Nav.Link
                                            style={{ fontWeight: 'bold', color: 'yellow' }}>
                                            {user.displayName}
                                        </Nav.Link>
                                    </span>
                                    :

                                    <Nav.Link as={NavHashLink}
                                        style={{ fontWeight: 'bold', color: 'yellow' }}
                                        activeStyle={{ color: 'red', fontWeight: 'bold' }}
                                        to="/login">Login
                                    </Nav.Link>



                            }

                            {
                                user.email &&
                                <Nav.Link
                                    onClick={logOut}
                                    style={{ fontWeight: 'bold', color: 'yellow' }}  >Logout
                                </Nav.Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;