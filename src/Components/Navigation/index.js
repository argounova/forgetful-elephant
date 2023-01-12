import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../Assets/Styles/navbar.css';

function Navigation(props) {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand 
                    href="#home"
                    // onClick={() => handlePageChange('Home')}
                    >Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#home"
                        onClick={props.homeClick}
                        >Home</Nav.Link>
                    <Nav.Link 
                        href="#new-note"
                        onClick={props.newNoteClick}
                        >New Note</Nav.Link>
                    <Nav.Link href="#myNotes">My Notes</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;