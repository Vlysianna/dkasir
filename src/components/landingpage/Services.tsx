const Services = () => {
  const mobileFeatures = [
    "Menu Produk",
    "Transaksi",
    "Stok",
    "Laporan",
    "Karyawan"
  ];

  const webFeatures = [
    "Menu Produk",
    "Transaksi",
    "Laporan"
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Akses dari Mana Saja
          </h2>
          <p className="text-lg text-gray-600">
            Kelola bisnis Anda melalui aplikasi mobile atau web
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#7CFF00] to-[#6EE000] rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-mobile-alt text-3xl text-[#254D00]"></i>
            </div>
            <h3 className="text-3xl font-bold text-[#254D00] mb-4">
              Mobile Application
            </h3>
            <p className="text-[#254D00] mb-6 text-lg">
              Kelola bisnis Anda kapan saja, di mana saja dengan aplikasi mobile
            </p>
            <ul className="space-y-3">
              {mobileFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-[#254D00] text-xl"></i>
                  <span className="text-[#254D00] text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#254D00] to-[#1a3600] rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-desktop text-3xl text-[#254D00]"></i>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Web Application
            </h3>
            <p className="text-gray-200 mb-6 text-lg">
              Akses penuh melalui browser untuk pengelolaan yang lebih detail
            </p>
            <ul className="space-y-3">
              {webFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-[#7CFF00] text-xl"></i>
                  <span className="text-white text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
