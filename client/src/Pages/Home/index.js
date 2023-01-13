import React, {useState} from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Stack from 'react-bootstrap/Stack';
import Landing from '../../Components/Landing';
import Navigation from '../../Components/Navigation';
import NewNote from '../../Components/NewNote/index';
import MyNotes from '../../Components/MyNotes';
import EditNote from '../../Components/EditNote';
import '../../Assets/Styles/home.css';

function Home() {
    const setAll = (isFalse) => {
        setShowLanding(isFalse);
        setShowNewNote(isFalse);
        setShowMyNotes(isFalse);
        setShowEditNote(isFalse);
    }

    const [showLanding, setShowLanding] = useState(true);
    const [showNewNote, setShowNewNote] = useState(false);
    const [showMyNotes, setShowMyNotes] = useState(false);
    const [showEditNote, setShowEditNote] = useState(false);

    const handleNewNote = () => {
        setAll(false);
        setShowNewNote(true);
    }

    const handleHome = () => {
        setAll(false);
        setShowLanding(true);
    }

    const handleMyNotes = () => {
        setAll(false);
        setShowMyNotes(true);
    }

    const handleEditNote = () => {
        setAll(false);
        setShowEditNote(true);
    }

    return (
        <>
            <Navigation 
                newNoteClick={handleNewNote}
                homeClick={handleHome}
                myNotesClick={handleMyNotes}
            />
            {showLanding ? <Landing/> : null}
            {showNewNote ? <NewNote/> : null}
            {showMyNotes ? <MyNotes editNoteClick={handleEditNote} /> : null}
            {showEditNote ? <EditNote/> : null}
        </>
    )
}

export default Home;