const Features = () => {
  const features = [
    {
      icon: "fa-credit-card",
      title: "Pembayaran Online & Offline",
      description: "Terima pembayaran tunai, kartu debit/kredit, e-wallet, dan transfer bank dalam satu sistem"
    },
    {
      icon: "fa-chart-line",
      title: "Laporan Penjualan Otomatis",
      description: "Dapatkan laporan penjualan lengkap secara real-time dengan visualisasi yang mudah dipahami"
    },
    {
      icon: "fa-users",
      title: "Multi User Role Access",
      description: "Atur hak akses untuk setiap karyawan sesuai dengan peran dan tanggung jawab masing-masing"
    },
    {
      icon: "fa-boxes",
      title: "Manajemen Stok & Produk",
      description: "Kelola inventori dengan mudah, pantau stok real-time, dan hindari kehabisan produk"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fitur Lengkap untuk Bisnis Anda
          </h2>
          <p className="text-lg text-gray-600">
            Semua yang Anda butuhkan untuk mengelola bisnis dengan efisien
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7CFF00] rounded-full mb-4">
                  <i className={`fas ${feature.icon} text-2xl text-[#254D00]`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative">
            <img
              src="/features-image.png"
              alt="Features"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
