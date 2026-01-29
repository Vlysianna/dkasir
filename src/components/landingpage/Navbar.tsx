import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBusinessDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" aria-label="Home" className="transform hover:scale-105 transition-transform duration-300">
              <img src="/logo.png" alt="dkasir" className="h-12 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="/" className="text-gray-800 hover:text-[#7CFF00] transition-all duration-300 font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7CFF00] after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
            <a
              href="#/fitur"
              className="text-gray-800 hover:text-[#7CFF00] transition-all duration-300 font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7CFF00] after:transition-all after:duration-300 hover:after:w-full"
            >
              Features
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                className="text-gray-800 hover:text-[#7CFF00] transition-all duration-300 font-medium flex items-center gap-2 text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7CFF00] after:transition-all after:duration-300 hover:after:w-full"
              >
                Business
                <ChevronDown size={16} className={`transition-transform duration-300 ${businessDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {businessDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 animate-fadeIn">
                  <a href="#/business?tab=fnb" className="block px-4 py-3 text-gray-700 hover:bg-[#7CFF00] hover:text-[#254D00] transition-all duration-200 text-sm font-medium hover:pl-6" onClick={() => setBusinessDropdownOpen(false)}>
                    F&B
                  </a>
                  <a href="#/business?tab=retail" className="block px-4 py-3 text-gray-700 hover:bg-[#7CFF00] hover:text-[#254D00] transition-all duration-200 text-sm font-medium hover:pl-6" onClick={() => setBusinessDropdownOpen(false)}>
                     Retail
                  </a>
                  <a href="#/business?tab=jasa" className="block px-4 py-3 text-gray-700 hover:bg-[#7CFF00] hover:text-[#254D00] transition-all duration-200 text-sm font-medium hover:pl-6" onClick={() => setBusinessDropdownOpen(false)}>
                    Jasa
                  </a>
                </div>
              )}
            </div>
            <a href="/#blog" className="text-gray-800 hover:text-[#7CFF00] transition-all duration-300 font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7CFF00] after:transition-all after:duration-300 hover:after:w-full">
              Blog
            </a>
            <button
              className="bg-[#7CFF00] text-[#254D00] px-6 py-2.5 rounded-full font-semibold hover:bg-[#6EE000] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 text-sm group"
              onClick={() => window.location.href = '/#/langganan'}
            >
              Langganan Sekarang
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#7CFF00] transition-all duration-300 p-2 rounded-lg hover:bg-gray-100 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="px-4 py-6 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-[#7CFF00] hover:pl-2 transition-all duration-300 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a
              href="#/fitur"
              className="block text-gray-700 hover:text-[#7CFF00] hover:pl-2 transition-all duration-300 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <div>
              <button
                onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                className="w-full text-left text-gray-700 hover:text-[#7CFF00] hover:pl-2 transition-all duration-300 font-medium flex items-center justify-between py-2"
              >
                Business
                <ChevronDown size={16} className={`transition-transform duration-300 ${businessDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {businessDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2 animate-fadeIn">
                  <a href="#/business?tab=fnb" className="block text-gray-600 hover:text-[#7CFF00] hover:pl-2 transition-all duration-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                     F&B
                  </a>
                  <a href="#/business?tab=retail" className="block text-gray-600 hover:text-[#7CFF00] hover:pl-2 transition-all duration-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                     Retail
                  </a>
                  <a href="#/business?tab=jasa" className="block text-gray-600 hover:text-[#7CFF00] hover:pl-2 transition-all duration-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                    Jasa
                  </a>
                </div>
              )}
            </div>
            <a href="/#blog" className="block text-gray-700 hover:text-[#7CFF00] hover:pl-2 transition-all duration-300 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </a>
            <button
              className="w-full bg-[#7CFF00] text-[#254D00] px-6 py-3 rounded-full font-semibold hover:bg-[#6EE000] hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              onClick={() => { setMobileMenuOpen(false); window.location.href = '/#/langganan'; }}
            >
              Langganan Sekarang
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
