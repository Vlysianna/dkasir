import './App.css';
import Navbar from './components/landingpage/Navbar';
import Hero from './components/landingpage/Hero';
import About from './components/landingpage/About';
import BusinessTypes from './components/landingpage/BusinessTypes';
import Features from './components/landingpage/Features';
import FeaturesPage from './components/FeaturesPage';
import Pricing from './components/landingpage/Pricing';
import Blog from './components/landingpage/Blog';
import Footer from './components/landingpage/Footer';

function App() {
  // Sementara: tampilkan FeaturesPage jika ada ?fitur di URL
  const isFiturPage = typeof window !== 'undefined' && window.location.search.includes('fitur');
  return (
    <div className="App">
      <Navbar />
      {isFiturPage ? (
        <FeaturesPage />
      ) : (
        <>
          <Hero />
          <About />
          <BusinessTypes />
          <Features />
          <Pricing />
          <Blog />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
