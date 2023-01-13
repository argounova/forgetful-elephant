import React, {useState, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Navigation from '../../Components/Navigation';
import NewNote from '../../Components/NewNote/index';
import MyNotes from '../../Components/MyNotes';
import EditNote from '../../Components/EditNote';
import '../../Assets/Styles/home.css';

function Home() {
    const setAll = (isFalse) => {
        setShowHomeContent(isFalse);
        setShowNewNote(isFalse);
        setShowMyNotes(isFalse);
        setShowEditNote(isFalse);
    }

    const [showHomeContent, setShowHomeContent] = useState(true);
    const [showNewNote, setShowNewNote] = useState(false);
    const [showMyNotes, setShowMyNotes] = useState(false);
    const [showEditNote, setShowEditNote] = useState(false);

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

    const handleEditNote = () => {
        setAll(false);
        setShowEditNote(true);
    }

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

    return (
        <>
            <Navigation 
                newNoteClick={handleNewNote}
                homeClick={handleHome}
                myNotesClick={handleMyNotes}
            />
            {showHomeContent ? <HomeContent/> : null}
            {showNewNote ? <NewNote/> : null}
            {showMyNotes ? <MyNotes editNoteClick={handleEditNote} /> : null}
            {showEditNote ? <EditNote/> : null}
        </>
    )
}

export default Home;