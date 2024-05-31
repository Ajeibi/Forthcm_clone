import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import { Box } from '@chakra-ui/react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/termsOfUse/TermsOfUse';


function App()
{
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
