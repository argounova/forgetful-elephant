import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/index';
import Home from './Pages/Home/index';
import Note from './Pages/Note/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  function renderPage() {
    if (currentPage === 'Note') {
      return <Note/>
    }
  return <Home/>
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </>
  );
}

export default App;