import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import '../../Assets/Styles/note.css';
import NewNote from '../../Components/NewNote/index';

function Note() {
    return(
        <>
            <Container fluid>
                <Container>
                    <Row>
                        <Stack gap={2}>
                            <h3>Note 1</h3>
                            <input placeholder='Note title'></input>
                            <textarea></textarea>
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

export default Note;