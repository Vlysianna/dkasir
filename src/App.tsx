import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BusinessTypes from './components/BusinessTypes';
import Features from './components/Features';
import FeaturesPage from './components/FeaturesPage';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Footer from './components/Footer';

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
