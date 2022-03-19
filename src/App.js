import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Services from './pages/Services';

function App() {
  return (
    <>

      <Router>
        <Nav />
        <Sidebar />

        <Routes>
          <Route exact path='/' element={<Homepage />} />

          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Homepage />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;
