import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import '../../Assets/Styles/home.css';
import Navigation from '../../Components/Navigation';

function Home() {
    return(
        <>
            <header>
                <Navigation/>
            </header>
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <Stack gap={2}>
                                <h3>Start a new note</h3>
                                <input placeholder='Note title'></input>
                                <textarea></textarea>
                                <Button variant='primary'>Save Note</Button>
                            </Stack>
                        </Col>
                        <Col xs={12} md={4}>
                            <Stack gap={1}>
                                <h3>Saved Notes</h3>
                                <Button variant='primary'>Note 1</Button>
                                <Button variant='primary'>Note 2</Button>
                                <Button variant='primary'>Note 3</Button>
                                <Button variant='primary'>Note 4</Button>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;