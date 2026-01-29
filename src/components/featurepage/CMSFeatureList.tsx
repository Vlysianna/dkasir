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

const CMSFeatureList = () => (
  <section id="cms" className="w-full py-20 bg-white scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-12">
        <div className="flex flex-col items-start gap-4">
          <div className="text-3xl md:text-5xl font-bold text-dark">Fitur CMS</div>
          <span 
            className="inline-flex items-center justify-center text-base font-bold text-black bg-[#7CFF00] rounded-[10px]"
            style={{
              width: '200px',
              height: '65px',
              boxShadow: '0px 38.5px 25.5px rgba(68,68,68,0.06), 0px 20px 13px rgba(68,68,68,0.05), 0px 8.15px 6.52px rgba(68,68,68,0.039), 0px 1.85px 3.15px rgba(68,68,68,0.024)',
              clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
            }}
          >
            Web Dashboard
          </span>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{cmsFeatures[0].title}</h2>
          <p className="text-lg text-gray-700 mb-2">{cmsFeatures[0].description}</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={cmsFeatures[0].image} alt="Dashboard" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
        </div>
      </div>

      {/* Laporan Section */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16 mb-20">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{cmsFeatures[1].title}</h2>
          <p className="text-lg text-gray-700 mb-2">{cmsFeatures[1].description}</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={cmsFeatures[1].image} alt="Laporan" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
        </div>
      </div>

      {/* Produk Section */}
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

      {/* Inventori Section */}
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
);

export default CMSFeatureList;
