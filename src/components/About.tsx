const About = () => {
  const features = [
    "Akses data penjualan secara real-time",
    "Laporan keuangan otomatis dan akurat",
    "Manajemen stok dan inventori terintegrasi",
    "Kelola data pelanggan dan loyalitas"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
          <div className="relative">
            <img
              src="/about-image.png"
              alt="About dkasir"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
