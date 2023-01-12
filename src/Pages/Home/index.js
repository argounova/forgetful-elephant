import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Navigation from '../../Components/Navigation';
import NewNote from '../../Components/NewNote/index';
import MyNotes from '../../Components/MyNotes';
import '../../Assets/Styles/home.css';

function Home() {
    const setAll = (isFalse) => {
        setShowHomeContent(isFalse);
        setShowNewNote(isFalse);
        setShowMyNotes(isFalse);
    }

    const [showHomeContent, setShowHomeContent] = useState(true);
    const [showNewNote, setShowNewNote] = useState(false);
    const [showMyNotes, setShowMyNotes] = useState(false);

    const handleNewNote = () => {
        setAll(false);
        setShowNewNote(true);
    }

    const handleHome = () => {
        setAll(false);
        setShowHomeContent(true);
    }

    const handleMyNotes = () => {
        setAll(false);
        setShowMyNotes(true);
    }

    function HomeContent() {
        return(
            <>
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
                                    <h3>Recent Notes</h3>
                                    <Button 
                                        variant='secondary'
                                        // onClick={() => handlePageChange('Note')}
                                        >Note 1</Button>
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

    return (
        <>
            <Navigation 
                newNoteClick={handleNewNote}
                homeClick={handleHome}
                myNotesClick={handleMyNotes}
            />
            {showHomeContent ? <HomeContent/> : null}
            {showNewNote ? <NewNote/> : null}
            {showMyNotes ? <MyNotes/> : null}
        </>
    )
}

export default Home;