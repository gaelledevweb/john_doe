import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Portfolio from "../src/pages/Portfolio";
import Services from "../src/pages/Services";
import MentionsLegales from "../src/pages/MentionsLegales";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/mentionslegales' element={<MentionsLegales />}></Route>
      </Routes>
    </div>
  );
}

export default App;
