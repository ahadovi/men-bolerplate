import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/" className={'navbar-brand'}>Blog App</Link>
                <Nav className="ms-auto">
                    <NavLink to={'/create'} className={'nav-link'}>Create Post</NavLink>
                    <NavLink to={'/dashboard'} className={'nav-link'}>Dashboard</NavLink>
                    <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
                    <NavLink to={'/signup'} className={'nav-link'}>Signup</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;