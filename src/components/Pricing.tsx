const Pricing = () => {
  const features = [
    "POS System",
    "Laporan Penjualan",
    "Manajemen Produk",
    "Multi User"
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Harga Terjangkau untuk Bisnis Anda
          </h2>
          <p className="text-lg text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-[#254D00] text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold">Rp 99.000</span>
              </div>
              <p className="text-lg opacity-90">/bulan</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <i className="fas fa-check-circle text-[#7CFF00] text-xl"></i>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#7CFF00] text-[#254D00] py-4 rounded-full font-semibold text-lg hover:bg-[#6EE000] transition-colors duration-300 mb-4">
                Langganan Sekarang
              </button>
              <button className="w-full bg-white text-[#254D00] border-2 border-[#254D00] py-4 rounded-full font-semibold text-lg hover:bg-[#254D00] hover:text-white transition-colors duration-300">
                View all plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
