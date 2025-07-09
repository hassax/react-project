import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
