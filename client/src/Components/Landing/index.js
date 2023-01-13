import React, {useState, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Landing() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const form = useRef();

    const handleChange = (e) => {
        const {target} = e;
        const formType = target.name;
        const formValue = target.value;

        if (formType === 'note_title') {
            setTitle(formValue)
            console.log(title);

        } else {
            setContent(formValue)
            console.log(content);

        }
    }

    const handleClick = (e) => {
        e.preventDefault();
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ note_title: title, note_content: content })
            };
        fetch('http://localhost:3001/api/notes', requestOptions)
    }

    return(
        <>
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            {/* <form className='form' ref={form}> */}
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
                            {/* </form> */}
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