import React from 'react';
import './App.css';
// import Navigation from './Components/Navigation/index';
import Home from './Pages/Home/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // function renderPage() {
  //   if (currentPage === 'Note') {
  //     return <Note/>
  //   }
  // return <Home/>
  // }

  // function handlePageChange(page) {
  //   setCurrentPage(page);
  // }

  return (
    <>
      <Home/>
    </>
  );
}

export default App;