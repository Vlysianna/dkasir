import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-24 pb-16">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-600/10 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Harga terjangkau dengan kualitas profesional
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Mulai Berlangganan Sekarang untuk Kebutuhan Bisnis mu
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 border border-green-1000 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300">
              Hubungi Kami
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/IpadDanIphone.png"
              alt="iPad dan iPhone dkasir"
              className="w-full max-w-lg lg:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
