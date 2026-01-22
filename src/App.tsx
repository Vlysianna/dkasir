import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BusinessTypes from './components/BusinessTypes';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <BusinessTypes />
      <Features />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
