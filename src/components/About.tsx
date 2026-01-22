const About = () => {
  const features = [
    "Akses data penjualan secara real-time",
    "Laporan keuangan otomatis dan akurat",
    "Manajemen stok dan inventori terintegrasi",
    "Kelola data pelanggan dan loyalitas"
  ];

  return (
    <section id="about" className="relative -mt-8 lg:-mt-12 pt-0">
      <div className=" pt-0 pb-24">
        <div className="bg-white rounded-tr-[3rem] md:rounded-tr-[4rem] lg:rounded-tr-[5rem] pt-16 pb-20 border-2 border-gray-200 border-b-0 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div
            aria-hidden="true"
            className={
              "hidden md:block absolute pointer-events-none select-none z-0 bg-[#7CFF00] " +
              "right-[-1000px] bottom-[-10%] w-[350px] h-[350px] lg:w-[480px] lg:h-[480px] " +
              "rounded-full"
            }
          />
          
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center lg:justify-start items-end order-2 lg:order-1 lg:pb-6 lg:-ml-8">
                <img
                  src="/kasir.png"
                  alt="Kasir"
                  className="w-full h-auto max-w-xl lg:max-w-2xl object-contain"
                />
              </div>
              <div className="order-1 lg:order-2 relative">
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute right-0 top-2 w-14 h-14 lg:w-16 lg:h-16 bg-[#7CFF00] rounded-full"
                />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 pr-16">
                  Mengelola Bisnis Kini Semakin Mudah dengan <span className="text-[#7CFF00]">dkasir</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Platform POS terlengkap yang membantu Anda mengelola seluruh aspek bisnis dengan lebih efisien dan terintegrasi
                </p>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border border-[#7CFF00] rounded-full px-4 py-2 bg-white/80"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#7CFF00] flex-shrink-0" />
                      <p className="text-gray-800 text-sm sm:text-base font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
