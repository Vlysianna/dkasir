import { Check, ChevronRight } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: 99000,
      description: "Pembayaran Bulanan"
    },
    {
      name: "Basic + Report",
      price: 199000,
      description: "Pembayaran Bulanan"
    },
    {
      name: "Basic + Web Order + Report",
      price: 259000,
      description: "Pembayaran Bulanan"
    }
  ];

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

  const cmsFeatures = [
    "Menu Ringkasan Penjualan",
    "Menu Detail Penjualan",
    "Menu Penjualan Titipin",
    "Menu Penjualan Harian",
    "Menu Penjualan Cabang",
    "Menu Penjualan Per Kasir",
    "Menu Penjualan Produk",
    "Menu Penjualan Kategori",
    "Menu Penjualan Varian",
    "Menu Laporan Refund",
    "Menu Laporan Kas Kasir",
    "Menu Laporan Tutup Kasir",
    "Menu Laporan Reservasi",
    "Menu Absensi",
    "Menu Komisi",
    "Menu Analisa Penjualan",
    "Menu Daftar Kategori",
    "Menu Daftar Produk",
    "Menu Daftar Varian",
    "Menu Bahan Baku",
    "Menu Daftar Stok",
    "Menu Stok Masuk",
    "Menu Stok Opname",
    "Menu Stok Terbuang",
    "Menu Produksi",
    "Menu Daftar Supplier",
    "Menu Pembelian Stok (PO)",
    "Menu Daftar Kirim Stok",
    "Menu Stok Transit",
    "Menu Daftar Pelanggal",
    "Menu Grup Pelanggal",
    "Menu Grup Harga Spesial",
    "Menu Basic Promo",
    "Menu Promo Total Pemberian",
    "Menu Promo Produk",
    "Menu Tambah Voucher",
    "Menu Daftar Voucher",
    "Menu Daftar Group Komisi",
    "Menu Daftar Invoice",
    "Menu Daftar Buku Kas",
    "Menu Mutasi Buku Kas",
    "Menu Daftar Pengeluaran",
    "Menu Daftar Akun",
    "Menu Jurnal Umum (Penyesuain)",
    "Menu Daftar Outlet",
    "Menu Struk & Biaya",
    "Menu Daftar Satuan Barang",
    "Menu Metode Pembayaran",
    "Menu Daftar Karyawan",
    "Menu Daftar Hak Akses",
    "Menu Langganan & Support",
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="w-full max-w-4xl space-y-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="group relative w-full border-2 border-[#7CFF00] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row items-stretch">
                  <div className="flex-1 px-8 py-6">
                    <p className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</p>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <div className="px-8 py-6 bg-[#7CFF00] text-[#254D00] font-bold rounded-l-xl sm:rounded-l-none flex items-center justify-between sm:justify-center gap-4">
                    <div>
                      <div className="text-3xl font-extrabold">Rp {(plan.price / 1000).toLocaleString('id-ID')}K</div>
                      <div className="text-xs font-semibold opacity-75">/ Bulan</div>
                    </div>
                    <ChevronRight className="hidden sm:block opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
            Fitur Layanan
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#7CFF00] to-green-400 text-[#254D00] font-bold text-center py-4">
                <div className="mt-2">Mobile Application</div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">Fitur Tersedia</p>
                <ul className="space-y-3">
                  {mobileFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <Check size={20} className="text-[#7CFF00] font-bold" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#7CFF00] to-green-400 text-[#254D00] font-bold text-center py-4">
                <div className="mt-2">Web Application</div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">Fitur Tersedia</p>
                <ul className="space-y-3">
                  {webFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <Check size={20} className="text-[#7CFF00] font-bold" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#7CFF00] to-green-400 text-[#254D00] font-bold text-center py-4">
                <div className="mt-2">Content Management System (CMS)</div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">Fitur Tersedia</p>
                <ul className="space-y-3">
                  {cmsFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <Check size={20} className="text-[#7CFF00] font-bold" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
