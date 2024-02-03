import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import Jest from './pages/Jest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ISTQB from './pages/ISTQB';
import PenTest from './pages/PenTest';
import XSS from './pages/XSS';
import Postman from './pages/Postman';
import Interview from './pages/Interview';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/jest" element={<Jest />} />
          <Route path="/istqb" element={<ISTQB />} />
          <Route path="/pentest" element={<PenTest/>}/>
          <Route path="/xss" element={<XSS/>}/>
          <Route path="/postman" element={<Postman/>}/>
          <Route path="/xss" element={<XSS/>}/>
          <Route path="/interview" element={<Interview/>}/>



        </Routes>

        <div className='w-60'>
          {/* Your other components */}
        </div>
      </Router>
    </>
  );
}

export default App;
