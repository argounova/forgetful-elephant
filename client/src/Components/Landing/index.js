import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Landing() {
    return(
        <>
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <form className='form' ref={form}>
                            <Stack gap={2}>
                                <h3>Start a new note</h3>
                                <input 
                                    ref={form}
                                    placeholder='Note title'
                                    name='note_title'
                                    value={title}
                                    type='text'
                                    onChange={handleChange}
                                    ></input>
                                <textarea
                                    ref={form}
                                    name='note_content'
                                    vaule={content}
                                    type='text'
                                    onChange={handleChange}
                                    ></textarea>
                                <Button 
                                    variant='primary'
                                    onClick={handleClick}
                                    >Save Note</Button>
                            </Stack>
                            </form>
                        </Col>
                        <Col xs={12} md={4}>
                            <Stack gap={1}>
                                <h3>Recent Notes</h3>
                                <Button variant='secondary'>Note 1</Button>
                                <Button variant='secondary'>Note 2</Button>
                                <Button variant='secondary'>Note 3</Button>
                                <Button variant='secondary'>Note 4</Button>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Landing;