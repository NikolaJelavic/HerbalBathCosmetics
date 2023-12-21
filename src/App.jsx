import './App.css';
import Navbar from './components/Navbar';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          {/* <Route path="/jest" element={<Jest />} /> */}
          {/* <Route path="/typescript" element={<Typescript />} /> */}
        </Routes>

        <div className='w-60'>
          {/* Your other components */}
        </div>
      </Router>
    </>
  );
}

export default App;
