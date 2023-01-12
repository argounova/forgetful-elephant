import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function EditNote() {
    return(
        <>
            <Container fluid>
                <Container>
                    <Row>
                        <Stack gap={2}>
                            <h3>Edit note</h3>
                            <input placeholder='Note 1'></input>
                            <textarea placeholder='Note content'></textarea>
                            <Stack direction='horizontal' gap={2}>
                                <Button variant='primary'>Save</Button>
                                <div className='vr'/>
                                <Button variant='dark'>Cancel</Button>
                            </Stack>
                        </Stack>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default EditNote;