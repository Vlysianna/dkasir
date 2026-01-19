import { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="dkasir" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#hero" className="text-gray-800 hover:text-[#7CFF00] transition-colors duration-300 font-medium text-base">
              Home
            </a>
            <a href="#features" className="text-gray-800 hover:text-[#7CFF00] transition-colors duration-300 font-medium text-base">
              Features
            </a>
            <div className="relative">
              <button
                onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                className="text-gray-800 hover:text-[#7CFF00] transition-colors duration-300 font-medium flex items-center gap-2 text-base"
              >
                Business
                <ChevronDown size={16} className={`transition-transform duration-300 ${businessDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {businessDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-40 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <a href="#business_types" className="block px-4 py-2.5 text-gray-700 hover:bg-[#7CFF00] hover:text-[#254D00] transition-colors duration-300 text-sm">
                    F&B
                  </a>
                  <a href="#business_types" className="block px-4 py-2.5 text-gray-700 hover:bg-[#7CFF00] hover:text-[#254D00] transition-colors duration-300 text-sm">
                    Retail
                  </a>
                  <a href="#business_types" className="block px-4 py-2.5 text-gray-700 hover:bg-[#7CFF00] hover:text-[#254D00] transition-colors duration-300 text-sm">
                    Jasa
                  </a>
                </div>
              )}
            </div>
            <a href="#blog" className="text-gray-800 hover:text-[#7CFF00] transition-colors duration-300 font-medium text-base">
              Blog
            </a>
            <button className="bg-[#7CFF00] text-[#254D00] px-6 py-2.5 rounded-full font-semibold hover:bg-[#6EE000] transition-colors duration-300 flex items-center gap-2 text-sm">
              Langganan Sekarang
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#7CFF00] transition-colors duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a href="#hero" className="block text-gray-700 hover:text-[#7CFF00] transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#features" className="block text-gray-700 hover:text-[#7CFF00] transition-colors duration-300 font-medium">
              Features
            </a>
            <div>
              <button
                onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                className="w-full text-left text-gray-700 hover:text-[#7CFF00] transition-colors duration-300 font-medium flex items-center justify-between"
              >
                Business
                <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${businessDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {businessDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <a href="#business_types" className="block text-gray-600 hover:text-[#7CFF00] transition-colors duration-300">
                    F&B
                  </a>
                  <a href="#business_types" className="block text-gray-600 hover:text-[#7CFF00] transition-colors duration-300">
                    Retail
                  </a>
                  <a href="#business_types" className="block text-gray-600 hover:text-[#7CFF00] transition-colors duration-300">
                    Jasa
                  </a>
                </div>
              )}
            </div>
            <a href="#blog" className="block text-gray-700 hover:text-[#7CFF00] transition-colors duration-300 font-medium">
              Blog
            </a>
            <button className="w-full bg-[#7CFF00] text-[#254D00] px-6 py-2 rounded-full font-semibold hover:bg-[#6EE000] transition-colors duration-300">
              Langganan Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
