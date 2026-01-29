import './App.css';
import Navbar from './components/landingpage/Navbar';
import Hero from './components/landingpage/Hero';
import About from './components/landingpage/About';
import BusinessTypes from './components/landingpage/BusinessTypes';
import Features from './components/landingpage/Features';
import FeaturesPage from './pages/FeaturesPage';
import Pricing from './components/landingpage/Pricing';
import Blog from './components/landingpage/Blog';
import Footer from './components/landingpage/Footer';
import BusinessPage from './pages/BusinessPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <BusinessTypes />
              <Features />
              <Pricing />
              <Blog />
            </>
          } />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/fitur" element={<FeaturesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
