
import './App.css';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Riskfactor from './components/risk-factors/Riskfactor';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
// import Barchart from './components/barchart/Barchart';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
           <Route path='/' element={<Riskfactor/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    
  );
}

export default App;
