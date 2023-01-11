import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/index';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route
    //       path='/'
    //       element={Home}
    //     />
    //   </Routes>
    // </Router>
    // <Navigation/>
    <Home />
  );
}

export default App;