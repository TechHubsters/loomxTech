import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import RequestService from './pages/RequestService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename="/loomxTech">l̥
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request" element={<RequestService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
