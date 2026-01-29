import type { JSX } from "react";

const cmsFeatures = [
  {
    icon: "dashboard",
    title: "Dashboard",
    description: "Tampilan ringkas performa bisnis secara real-time",
    image: "/cmsDashboard.png",
  },
  {
    icon: "report",
    title: "Laporan",
    description: "Analisis mendalam dengan laporan komprehensif",
    image: "/cmslaporan.png",
  },
  {
    icon: "product",
    title: "Produk",
    description: "Kelola katalog produk dengan mudah dan efisien",
    image: "/cmsproduk.png",
  },
  {
    icon: "inventory",
    title: "Inventori",
    description: "Pantau stok dan manajemen persediaan real-time",
    image: "/cmsInventori.png",
  },
];

const HeroRetail = () => {
  return (
    <>
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
          <div className="flex flex-row flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:gap-2">
            <div className="w-[130px] h-[130px] sm:w-[180px] sm:h-[120px] lg:w-[300px] lg:h-[190px] lg:-mr-4 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/RetailKiri.png"
                alt="Kasir retail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[150px] h-[150px] sm:w-[220px] sm:h-[150px] lg:w-[420px] lg:h-[280px] rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="/RetailTengah.png"
                alt="Kasir digital retail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[130px] h-[130px] sm:w-[180px] sm:h-[120px] lg:w-[300px] lg:h-[190px] lg:-ml-4 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/RetailKanan.png"
                alt="Toko retail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Business Retail
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Kasir Digital untuk Toko Retail, Minimarket, dan Usaha Dagang
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#7CFF00] text-[#254D00] px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow hover:bg-[#6EE000] transition">
                Langganan Sekarang →
              </button>
              <button className="bg-white text-[#254D00] border border-[#254D00] px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-sm hover:bg-[#254D00] hover:text-white transition">
                Hubungi Kami →
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="cms" className="w-full py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{cmsFeatures[0].title}</h2>
              <p className="text-lg text-gray-700 mb-2">{cmsFeatures[0].description}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src={cmsFeatures[0].image} alt="Dashboard" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16 mb-20">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{cmsFeatures[1].title}</h2>
              <p className="text-lg text-gray-700 mb-2">{cmsFeatures[1].description}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img src={cmsFeatures[1].image} alt="Laporan" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 mb-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{cmsFeatures[2].title}</h2>
              <p className="text-lg text-gray-700 mb-2">{cmsFeatures[2].description}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
              <div className="p-2 md:p-4 flex justify-center items-center w-full">
                <img src={cmsFeatures[2].image} alt="Produk" className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-8 md:gap-16 mb-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{cmsFeatures[3].title}</h2>
              <p className="text-lg text-gray-700 mb-2">{cmsFeatures[3].description}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
              <div className="p-2 md:p-4 flex justify-center items-center w-full">
                <img src={cmsFeatures[3].image} alt="Inventori" className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroRetail;
