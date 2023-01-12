import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function MyNotes() {
    return(
        <>
            <Container fluid>
                <Container>
                    <Row>
                        <Stack gap={2}>
                            <h3>My notes</h3>
                            <Stack direction='horizontal' gap={2}>
                                <h5>Note 1</h5>
                                <Button variant='primary'>Edit</Button>
                                <div className='vr'/>
                                <Button variant='dark'>Delete</Button>
                            </Stack>
                        </Stack>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default MyNotes;