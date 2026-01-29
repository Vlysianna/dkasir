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

// const iconMap: Record<string, JSX.Element> = {
// 	cart: (
// 		<span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center">
// 			<svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24">
// 				<path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.293-2.707l1.414 1.414c.195.195.451.293.707.293h12c.256 0 .512-.098.707-.293l3.293-3.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.879 2.879h-10.586l-2.879-2.879c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3.293 3.293zm13.293-7.293v-2c0-1.104-.896-2-2-2h-8c-1.104 0-2 .896-2 2v2h-2v2h2v8h12v-8h2v-2h-2zm-10 0v-2h8v2h-8z" />
// 			</svg>
// 		</span>
// 	),
// 	payment: (
// 		<span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center">
// 			<svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24">
// 				<path d="M20 4h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 14h-16v-8h16v8zm0-10h-16v-2h16v2z" />
// 			</svg>
// 		</span>
// 	),
// 	chart: (
// 		<span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center">
// 			<svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24">
// 				<path d="M3 17h2v-7h-2v7zm4 0h2v-12h-2v12zm4 0h2v-4h-2v4zm4 0h2v-9h-2v9zm4 0h2v-2h-2v2z" />
// 			</svg>
// 		</span>
// 	),
// 	users: (
// 		<span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center">
// 			<svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24">
// 				<path d="M16 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm-8 0c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45v2.5h6v-2.5c0-2.33-4.67-3.5-7-3.5zm-8-2c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" />
// 			</svg>
// 		</span>
// 	),
// 	store: (
// 		<span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center">
// 			<svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24">
// 				<path d="M20 6h-16l-2 6v2c0 1.104.896 2 2 2h1v4c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-4h1c1.104 0 2-.896 2-2v-2l-2-6zm-2 14h-12v-4h12v4zm3-8c0 .552-.447 1-1 1h-18c-.553 0-1-.448-1-1v-1h20v1zm-1.618-3l1.382 4h-18.528l1.382-4h15.764z" />
// 			</svg>
// 		</span>
// 	),
// 	box: (
// 		<span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center">
// 			<svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24">
// 				<path d="M21 16v-8c0-1.104-.896-2-2-2h-14c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2zm-2 0h-14v-8h14v8zm-7-10c.552 0 1-.447 1-1s-.448-1-1-1-1 .447-1 1 .448 1 1 1z" />
// 			</svg>
// 		</span>
// 	),
// };



const FnB = () => {
	return (
		<>
			<section className="">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
					<div className="flex flex-row flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:gap-2">
						<div className="w-[130px] h-[130px] sm:w-[180px] sm:h-[120px] lg:w-[300px] lg:h-[190px] lg:-mr-4 rounded-3xl overflow-hidden shadow-xl">
							<img
								src="/F&bKiri.png"
								alt="Kasir cafe"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-[150px] h-[150px] sm:w-[220px] sm:h-[150px] lg:w-[420px] lg:h-[280px] rounded-[32px] overflow-hidden shadow-2xl">
							<img
								src="/F&bTengah.png"
								alt="Barista menggunakan kasir digital"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-[130px] h-[130px] sm:w-[180px] sm:h-[120px] lg:w-[300px] lg:h-[190px] lg:-ml-4 rounded-3xl overflow-hidden shadow-xl">
							<img
								src="/F&bKanan.png"
								alt="Kasir restoran"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="text-center mt-12">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Business F&amp;B
						</h1>
						<p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
							Kasir Digital yang Tepat untuk Restoran, Kafe, dan UMKM Kuliner mu
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
			<section id="kitchen" className="w-full py-20 bg-white scroll-mt-24">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-20">
						<div className="w-full md:w-1/2 flex flex-col items-start justify-center">
							<div className="flex items-start gap-6 w-full">
								<img src="/ic_buka tutup kasir.png" alt="Kasir" className="w-16 h-16 flex-shrink-0" />
								<div className="flex flex-col">
									<h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">
										{features[0].title}
									</h2>
									<p className="text-lg text-gray-700 mb-2">Halaman awal aplikasi.</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 flex justify-center md:justify-end">
							<img
								src="/ipadkasir.png"
								alt="Kasir"
								className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100"
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16 mb-20">
						<div className="w-full md:w-1/2 flex flex-col items-start justify-center">
							<div className="flex items-start gap-6 w-full">
								<img src="/ic_dashboard.png" alt="Pembayaran" className="w-16 h-16 flex-shrink-0" />
								<div className="flex flex-col">
									<h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">
										{features[1].title}
									</h2>
									<p className="text-lg text-gray-700 mb-2">Halaman pembayaran.</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 flex justify-center md:justify-start">
							<img
								src="/ipadpembayaran.png"
								alt="Pembayaran"
								className="w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100"
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 mb-16">
						<div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
							<div className="flex items-start gap-6 w-full">
								<img src="/ic_laporan.png" alt="Laporan" className="w-16 h-16 flex-shrink-0" />
								<div className="flex flex-col">
									<h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">
										{features[2].title}
									</h2>
									<p className="text-lg text-gray-700 mb-2">
										{features[2].description}
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 flex justify-center items-center bg-white">
							<div className="p-2 md:p-4 flex justify-center items-center w-full">
								<img
									src={features[2].image}
									alt={features[2].title}
									className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-8 md:gap-16 mb-16">
						<div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
							<div className="flex items-start gap-6 w-full">
								<img src="/ic_absensi.png" alt="Absensi" className="w-16 h-16 flex-shrink-0" />
								<div className="flex flex-col">
									<h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">
										{features[3].title}
									</h2>
									<p className="text-lg text-gray-700 mb-2">
										{features[3].description}
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 flex justify-center items-center bg-white">
							<div className="p-2 md:p-4 flex justify-center items-center w-full">
								<img
									src={features[3].image}
									alt={features[3].title}
									className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 mb-16">
						<div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
							<div className="flex items-start gap-6 w-full">
								<img src="/ic_manage outlet.png" alt="Outlet" className="w-16 h-16 flex-shrink-0" />
								<div className="flex flex-col">
									<h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">
										{features[4].title}
									</h2>
									<p className="text-lg text-gray-700 mb-2">
										{features[4].description}
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 flex justify-center items-center bg-white">
							<div className="p-2 md:p-4 flex justify-center items-center w-full">
								<img
									src={features[4].image}
									alt={features[4].title}
									className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-8 md:gap-16 mb-16">
						<div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
							<div className="flex items-start gap-6 w-full">
								<img src="/ic_manage product.png" alt="Produk" className="w-16 h-16 flex-shrink-0" />
								<div className="flex flex-col">
									<h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">
										{features[5].title}
									</h2>
									<p className="text-lg text-gray-700 mb-2">
										{features[5].description}
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 flex justify-center items-center bg-white">
							<div className="p-2 md:p-4 flex justify-center items-center w-full">
								<img
									src={features[5].image}
									alt={features[5].title}
									className="w-[360px] md:w-[400px] max-w-full rounded-2xl shadow-xl border border-green-100"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FnB;
