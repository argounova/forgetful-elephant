import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Assets/Styles/navbar.css';

function Navigation({__,handlePageChange}) {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand 
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    >Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        >Home</Nav.Link>
                    <Nav.Link 
                        href="#newNote"
                        onClick={() => handlePageChange('Note')}
                        >New Note</Nav.Link>
                    <Nav.Link href="#myNotes">My Notes</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;