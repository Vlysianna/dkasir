const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          <div className="relative">
            <img
              src="/dreamina-2025-10-28-3015-Givemealongcashierdeskandablack... 1.png"
              alt="POS System"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
