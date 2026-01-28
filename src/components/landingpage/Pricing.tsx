const Pricing = () => {
  const mobileFeatures = [
    "Menu Cashier",
    "Menu Sales",
    "Menu Sales Summary",
    "Menu Commission",
    "Menu Stock",
    "Menu Payment",
    "Menu Employee",
    "Menu Outlet",
    "Menu Promo",
  ];

  const webFeatures = [
    "Menu Produk",
    "Menu Transaksi",
    "Menu Payment Method",
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="w-full max-w-2xl border-2 border-[#7CFF00] rounded-none overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row items-stretch">
              <div className="flex-1 px-6 py-4">
                <p className="text-xl font-bold text-gray-900">Basic</p>
                <p className="text-sm text-gray-500">Pembayaran Bulanan</p>
              </div>
              <div className="px-6 py-4 bg-[#7CFF00] text-[#254D00] font-bold text-lg sm:text-xl flex items-center justify-center rounded-none">
                Rp 99.000 <span className="text-sm font-semibold ml-2">/ Bulan</span>
              </div>
            </div>
          </div>
          <button className="text-sm text-[#254D00] font-semibold hover:underline">
            View all plans →
          </button>
        </div>

        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Layanan
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-[#E8F5D0]">
            <div className="bg-[#7CFF00] text-[#254D00] font-bold text-center py-3">
              Mobile Application
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-500 mb-3">Menu</p>
              <ul className="space-y-2">
                {mobileFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center justify-between text-sm text-gray-700">
                    <span>{feature}</span>
                    <i className="fas fa-check text-[#7CFF00]"></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-[#E8F5D0]">
            <div className="bg-[#7CFF00] text-[#254D00] font-bold text-center py-3">
              Web App
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-500 mb-3">Menu</p>
              <ul className="space-y-2">
                {webFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center justify-between text-sm text-gray-700">
                    <span>{feature}</span>
                    <i className="fas fa-check text-[#7CFF00]"></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
