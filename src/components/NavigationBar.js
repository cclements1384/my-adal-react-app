import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components';



const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover{
            color:white;
        }
    }
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href=''>My Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link>Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link>About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </Styles>
);
