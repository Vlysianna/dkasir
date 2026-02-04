import { useState } from 'react';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="hero" className="bg-white overflow-x-hidden">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm">d</div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">dkasir</span>
          </div>

          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            <a href="#home" className="text-sm text-gray-700 hover:text-gray-900">Home</a>
            <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
            <div className="relative group">
              <button className="text-sm text-gray-700 hover:text-gray-900">Business</button>
            </div>
            <a href="#blog" className="text-sm text-gray-700 hover:text-gray-900">Blog</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:block">
              <button className="bg-[#7CFF00] text-[#254D00] px-4 sm:px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#6EE000] transition-transform duration-200 shadow">
                Langganan Sekarang
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col gap-4 px-4 py-4">
              <a href="#home" className="text-sm text-gray-700 hover:text-gray-900">Home</a>
              <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
              <button className="text-sm text-gray-700 hover:text-gray-900 text-left">Business</button>
              <a href="#blog" className="text-sm text-gray-700 hover:text-gray-900">Blog</a>
              <button className="bg-[#7CFF00] text-[#254D00] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#6EE000] transition-transform duration-200 shadow w-full">
                Langganan Sekarang
              </button>
            </nav>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div>
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-[#7CFF00] text-[#254D00] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                Point of Sales
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Platform Pembayaran Terintegrasi untuk Semua Jenis Usaha
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Kelola bisnis Anda dengan mudah menggunakan sistem POS yang modern dan terintegrasi
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#7CFF00] text-[#254D00] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#6EE000] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Langganan Sekarang
              </button>
              <button className="bg-white text-[#254D00] border-2 border-[#254D00] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#254D00] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                How it works
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 sm:mt-0">
            <div
              aria-hidden="true"
              className="hidden md:block absolute z-0 pointer-events-none select-none"
              style={{
                boxSizing: 'border-box',
                width: '946px',
                height: '565px',
                left: '120%',
                top: 0,
                background: '#63C902',
                borderRadius: '50% / 50%',
                transform: 'translateX(-50%)',
              }}
            />
            <img
              src="/iPad%20Pro%202.png"
              alt="POS System"
              className="relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-lg transform -rotate-12 lg:-rotate-12 -translate-y-6 sm:-translate-y-10 lg:translate-x-20 xl:translate-x-28"
            />
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Hero;
