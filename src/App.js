import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Nav />
      <Sidebar />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;
