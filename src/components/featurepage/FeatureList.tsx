const features = [
  {
    icon: "cart",
    title: "Kasir",
    description: "Transaksi cepat dan mudah dengan sistem POS modern",
    image: "/ipadkasir.png",
  },
  {
    icon: "payment",
    title: "Pembayaran",
    description: "Mendukung berbagai metode pembayaran online & offline",
    image: "/ipadpembayaran.png",
  },
  {
    icon: "chart",
    title: "Laporan Penjualan",
    description: "Pantau performa bisnis secara real-time",
    image: "/ipadlaporan.png",
  },
  {
    icon: "users",
    title: "Karyawan",
    description: "Kelola akses dan role karyawan",
    image: "/ipadabsen.png",
  },
  {
    icon: "store",
    title: "Outlet",
    description: "Manajemen banyak cabang dalam satu akun",
    image: "/ipadoutlet.png",
  },
  {
    icon: "box",
    title: "Produk",
    description: "Kelola produk, kategori, dan harga dengan mudah",
    image: "/ipadproduk.png",
  },
];

const FeatureList = () => (
  <section id="kitchen" className="w-full py-20 bg-white scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4">

      <div className="mb-12">
        <div className="flex flex-col items-start gap-4">
          <div className="text-3xl md:text-5xl font-bold text-dark">Fitur Utama</div>
          <span 
            className="inline-flex items-center justify-center text-base font-bold text-black bg-[#7CFF00] rounded-[10px]"
            style={{
              width: '200px',
              height: '65px',
              boxShadow: '0px 38.5px 25.5px rgba(68,68,68,0.06), 0px 20px 13px rgba(68,68,68,0.05), 0px 8.15px 6.52px rgba(68,68,68,0.039), 0px 1.85px 3.15px rgba(68,68,68,0.024)',
              clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
            }}
          >
            Mobile App
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <div className="flex items-start gap-6 w-full">
            <img src="/ic_buka tutup kasir.png" alt="Kasir" className="w-16 h-16 flex-shrink-0" />
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{features[0].title}</h2>
              <p className="text-lg text-gray-700 mb-2">Halaman awal aplikasi.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src="/ipadkasir.png" alt="Kasir" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16 mb-20">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <div className="flex items-start gap-6 w-full">
            <img src="/ic_dashboard.png" alt="Pembayaran" className="w-16 h-16 flex-shrink-0" />
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">{features[1].title}</h2>
              <p className="text-lg text-gray-700 mb-2">Halaman pembayaran.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src="/ipadpembayaran.png" alt="Pembayaran" className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
        </div>
      </div>

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
                <div className="flex items-start gap-6 w-full">
                  <img src="/ic_laporan.png" alt="Laporan" className="w-16 h-16 flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[2].title}</h2>
                    <p className="text-lg text-gray-700 mb-2">{features[2].description}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[2].image} alt={features[2].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
                <div className="flex items-start gap-6 w-full">
                  <img src="/ic_absensi.png" alt="Absensi" className="w-16 h-16 flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[3].title}</h2>
                    <p className="text-lg text-gray-700 mb-2">{features[3].description}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[3].image} alt={features[3].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
                <div className="flex items-start gap-6 w-full">
                  <img src="/ic_manage outlet.png" alt="Outlet" className="w-16 h-16 flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[4].title}</h2>
                    <p className="text-lg text-gray-700 mb-2">{features[4].description}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[4].image} alt={features[4].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-8 md:gap-16 mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
                <div className="flex items-start gap-6 w-full">
                  <img src="/ic_manage product.png" alt="Produk" className="w-16 h-16 flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">{features[5].title}</h2>
                    <p className="text-lg text-gray-700 mb-2">{features[5].description}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
                <div className="p-2 md:p-4 flex justify-center items-center w-full">
                  <img src={features[5].image} alt={features[5].title} className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
              </div>
            </div>
                  <div className="mb-20">
                <div className="flex flex-col items-start gap-2 mb-6">
                  <span 
                    className="inline-flex items-center justify-center text-base font-bold text-black bg-[#7CFF00] rounded-[10px]"
                    style={{
                      width: '380px',
                      height: '65px',
                      boxShadow: '0px 38.5px 25.5px rgba(68,68,68,0.06), 0px 20px 13px rgba(68,68,68,0.05), 0px 8.15px 6.52px rgba(68,68,68,0.039), 0px 1.85px 3.15px rgba(68,68,68,0.024)',
                      clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
                    }}
                  >
                    List Order Management (Kitchen)
                  </span>
                </div>
                <div className="flex justify-center">
                  <img src="/ipaddapur.png" alt="List Order Management (Kitchen)" className="w-[600px] max-w-full rounded-2xl shadow-xl border border-green-100" />
                </div>
      </div>
    </div>
  </section>
);

export default FeatureList;
