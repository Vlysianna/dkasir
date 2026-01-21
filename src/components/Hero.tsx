const Hero = () => {
  return (
    <section id="hero" className="bg-white overflow-x-hidden">
      <header className="border-b border-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">d</div>
            <span className="text-xl font-bold text-gray-900">dkasir</span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-sm text-gray-700 hover:text-gray-900">Home</a>
            <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
            <div className="relative group">
              <button className="text-sm text-gray-700 hover:text-gray-900">Business</button>
            </div>
            <a href="#blog" className="text-sm text-gray-700 hover:text-gray-900">Blog</a>
          </nav>

          <div className="hidden sm:block">
            <button className="bg-[#7CFF00] text-[#254D00] px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#6EE000] transition-transform duration-200 shadow">
              Langganan Sekarang
            </button>
          </div>
        </div>

      </header>

      <div className="max-w-7xl mx-auto pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="bg-[#7CFF00] text-[#254D00] px-4 py-2 rounded-full text-sm font-semibold">
                Point of Sales
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Platform Pembayaran Terintegrasi untuk Semua Jenis Usaha
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Kelola bisnis Anda dengan mudah menggunakan sistem POS yang modern dan terintegrasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#7CFF00] text-[#254D00] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6EE000] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Langganan Sekarang
              </button>
              <button className="bg-white text-[#254D00] border-2 border-[#254D00] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#254D00] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                How it works
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
              <div
                aria-hidden="true"
                className={
                  "hidden md:block absolute pointer-events-none select-none z-0 bg-gradient-to-br from-[#7CFF00] to-[#37b900] shadow-[0_10px_60px_rgba(17,148,0,0.25)] " +
                  "md:left-0 md:top-0 md:w-[360px] md:h-[300px] " +
                  "lg:left-[180px] lg:top-[-120px] lg:w-[622px] lg:h-[565px] " +
                  "xl:left-[240px] xl:top-[-140px] xl:w-[780px] xl:h-[680px] " +
                  "md:rounded-tl-[45%_50%] md:rounded-tr-[55%_50%] md:rounded-br-[45%_50%] md:rounded-bl-[55%_50%] " +
                  "lg:rounded-tl-[45%_50%] lg:rounded-tr-[55%_50%] lg:rounded-br-[45%_50%] lg:rounded-bl-[55%_50%]"
                }
              />

            <img
              src="/iPad%20Pro%202.png"
              alt="POS System"
              className="relative z-10 w-full max-w-md lg:max-w-lg transform -rotate-12 lg:-rotate-12 -translate-y-10 lg:translate-x-20 xl:translate-x-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
