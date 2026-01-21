const About = () => {
  const features = [
    "Akses data penjualan secara real-time",
    "Laporan keuangan otomatis dan akurat",
    "Manajemen stok dan inventori terintegrasi",
    "Kelola data pelanggan dan loyalitas"
  ];

  return (
    <section id="about" className="relative -mt-8 lg:-mt-12 pt-0">
      {/* Transisi card rounded dari Hero */}
      <div className=" pt-0 pb-24">
        <div className="bg-gray-100 rounded-tr-[3rem] md:rounded-tr-[4rem] lg:rounded-tr-[5rem] pt-16 pb-20 border-2 border-gray-300 border-b-0 relative overflow-hidden">
          {/* Shape di dekat kasir (kiri) */}
          <div
            aria-hidden="true"
            className={
              "hidden md:block absolute pointer-events-none select-none z-0 bg-[#7CFF00] " +
              "-left-32 bottom-0 w-[350px] h-[350px] lg:w-[480px] lg:h-[480px] " +
              "rounded-full"
            }
          />
          
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center order-2 lg:order-1">
                <img
                  src="/kasir.png"
                  alt="Kasir"
                  className="w-full h-auto max-w-xl lg:max-w-2xl object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Mengelola Bisnis Kini Semakin Mudah dengan dkasir
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Platform POS terlengkap yang membantu Anda mengelola seluruh aspek bisnis dengan lebih efisien dan terintegrasi
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <i className="fas fa-check-circle text-[#7CFF00] text-2xl"></i>
                      </div>
                      <p className="text-gray-700 text-lg">{feature}</p>
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
