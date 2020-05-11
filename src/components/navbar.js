import React, { useEffect, useCallback } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getUser } from "../_actions/user";

import '../styles/navbar.css';

const NavBar = () => {
    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(getUser());
    }, [dispatch]);
    
    useEffect(() => {
        initFetch();
    }, [initFetch]);

    return (
        <Container fluid className="padding-bottom">
            <Navbar bg="white" fixed="bottom" className="navbar-bottom">             
                <Button as={Link} to="/" variant="outline-danger" size="lg" className="nav-small-button">Article</Button>
                <Button as={Link} to="/donate" variant="danger" size="lg" className="nav-big-button">Donate</Button>
                <Button as={Link} to="/setting" variant="outline-danger" size="lg" className="nav-small-button">Setting</Button>
            </Navbar>
        </Container>
    );
}

export default NavBar;