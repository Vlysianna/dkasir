const Features = () => {
  const features = [
    {
      icon: "fa-credit-card",
      title: "Pembayaran Online & Offline",
      description: "Terima semua metode pembayaran dengan mudah.",
    },
    {
      icon: "fa-chart-line",
      title: "Laporan Penjualan Otomatis",
      description: "Dapatkan insight instan untuk pengambilan keputusan.",
    },
    {
      icon: "fa-users",
      title: "Multi-User & Role Access",
      description: "Atur izin akses sesuai jabatan karyawan.",
    },
    {
      icon: "fa-boxes",
      title: "Manajemen Stok & Produk",
      description: "Pantau ketersediaan barang secara akurat.",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Fitur Unggulan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            {[features[0], features[1]].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg px-6 py-5 flex items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7CFF00] text-white text-xl shrink-0">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5FBF00] font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-[260px] sm:w-[320px] lg:w-[360px] h-[420px] sm:h-[480px] lg:h-[540px] overflow-hidden">
              <img
                src="/Hp.png"
                alt="Features"
                className="w-full h-full object-cover scale-120 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-white/10" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-6 order-3">
            {[features[2], features[3]].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg px-6 py-5 flex items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7CFF00] text-white text-xl shrink-0">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5FBF00] font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
