import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import {LinkContainer} from "react-router-bootstrap"

const MyNav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <LinkContainer to="/portfolioV2/home">
                    <Navbar.Brand bg="primary">Ben Gordon</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/portfolioV2/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/portfolioV2/about">
                            <Nav.Link>About Me</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/portfolioV2/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav
