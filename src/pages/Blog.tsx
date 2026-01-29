import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Cara Maksimalkan Penjualan dengan Sistem Kasir Digital",
      excerpt: "Temukan tips dan strategi untuk meningkatkan penjualan Anda menggunakan sistem kasir digital modern. Dari manajemen inventory hingga analisis penjualan real-time.",
      image: "/blog-1.png",
      author: "Budi Santoso",
      date: "15 Januari 2025",
      category: "Tips Bisnis",
    },
    {
      id: 2,
      title: "5 Alasan Mengapa UMKM Perlu Sistem Kasir Digital",
      excerpt: "Sistem kasir digital bukan lagi kemewahan tetapi kebutuhan. Pelajari mengapa UMKM harus beralih ke digital untuk tetap kompetitif di era modern.",
      image: "/blog-1.png",
      author: "Siti Nurhaliza",
      date: "10 Januari 2025",
      category: "Transformasi Digital",
    },
    {
      id: 3,
      title: "Keamanan Data Pelanggan dalam Sistem Kasir Digital",
      excerpt: "Keamanan data adalah prioritas utama. Ketahui bagaimana dKasir melindungi data pelanggan dan transaksi bisnis Anda dengan enkripsi tingkat enterprise.",
      image: "/blog-1.png",
      author: "Ahmad Pratama",
      date: "5 Januari 2025",
      category: "Keamanan",
    },
    {
      id: 4,
      title: "Laporan Keuangan Real-Time untuk Bisnis yang Lebih Efisien",
      excerpt: "Dengan fitur laporan real-time, Anda dapat memantau kesehatan finansial bisnis setiap saat. Buat keputusan bisnis yang lebih baik dengan data akurat.",
      image: "/blog-1.png",
      author: "Dewi Lestari",
      date: "28 Desember 2024",
      category: "Manajemen Keuangan",
    },
    {
      id: 5,
      title: "Integrasi dKasir dengan Sistem Inventory Anda",
      excerpt: "Otomatisasi pengelolaan stok barang dengan integrasi sempurna antara sistem kasir dan inventory. Hindari kehabisan stok dan overstock.",
      image: "/blog-1.png",
      author: "Rinto Wijaya",
      date: "20 Desember 2024",
      category: "Integrasi Sistem",
    },
    {
      id: 6,
      title: "Testimoni Pemilik Usaha: Pertumbuhan Bisnis Setelah Pakai dKasir",
      excerpt: "Dengarkan langsung dari pemilik usaha yang telah merasakan peningkatan efisiensi operasional dan pertumbuhan penjualan hingga 40% setelah menggunakan dKasir.",
      image: "/blog-1.png",
      author: "Eka Putri",
      date: "15 Desember 2024",
      category: "Testimoni",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog & Artikel
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Pelajari tips, trik, dan best practices untuk mengembangkan bisnis Anda dengan teknologi kasir digital terkini.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#7CFF00] text-[#254D00] px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#7CFF00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-[#7CFF00] font-semibold text-sm hover:text-[#6EE000] transition-colors">
                  Baca Selengkapnya
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-[#7CFF00] text-[#254D00] px-8 py-3 rounded-full font-semibold hover:bg-[#6EE000] transition-colors duration-300">
            Lihat Semua Artikel
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
