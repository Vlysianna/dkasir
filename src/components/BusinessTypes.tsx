const BusinessTypes = () => {
  const businessTypes = [
    { name: "Restoran", icon: "fa-utensils" },
    { name: "Salon", icon: "fa-cut" },
    { name: "Cafe", icon: "fa-mug-hot" },
    { name: "Retail", icon: "fa-store" },
    { name: "Barbershop", icon: "fa-scissors" }
  ];

  return (
    <section id="business_types" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Satu Platform Untuk Semua Jenis Usaha
          </h2>
          <p className="text-lg text-gray-600">
            Solusi POS yang fleksibel untuk berbagai jenis bisnis Anda
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#7CFF00] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${business.icon} text-3xl text-[#254D00]`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#254D00] transition-colors duration-300">
                {business.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
