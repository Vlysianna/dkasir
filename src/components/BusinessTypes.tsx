const BusinessTypes = () => {
  const businessTypes = [
    { name: "Restoran", icon: "fa-utensils" },
    { name: "Retail", icon: "fa-store" },
    { name: "Cafe", icon: "fa-mug-hot" },
    { name: "Barbershop", icon: "fa-scissors" },
    { name: "Petshop", icon: "fa-paw" }
  ];

  return (
    <section
      id="business_types"
      className="relative py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      style={{
        backgroundImage: "url(/bacgkroundtype.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#254D00] mb-10">
          Satu Platform Untuk Semua
          <br />
          Jenis Usaha
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              aria-label={business.name}
            >
              <i className={`fas ${business.icon} text-2xl sm:text-3xl text-[#7CFF00]`}></i>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="bg-[#254D00] text-white rounded-full px-6 sm:px-10 py-3 text-sm sm:text-base font-medium shadow-lg">
            Dapat di gunakan untuk jenis usaha : Salon, Petshop, Cafe, Retail & Restaurant
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
