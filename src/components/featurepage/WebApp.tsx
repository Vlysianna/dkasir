


const WebApp = () => (
	<section id="website" className="w-full bg-white py-20 overflow-hidden">
		<div className="max-w-6xl mx-auto px-4 relative">
			{/* Section 1 - Text Left, Image Right */}
			<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
				<div className="flex flex-col gap-6 relative z-10">
					<div>
						<span 
							className="inline-flex items-center justify-center text-base font-bold text-black bg-[#7CFF00] rounded-[10px]"
							style={{
								width: '200px',
								height: '65px',
								boxShadow: '0px 38.5px 25.5px rgba(68,68,68,0.06), 0px 20px 13px rgba(68,68,68,0.05), 0px 8.15px 6.52px rgba(68,68,68,0.039), 0px 1.85px 3.15px rgba(68,68,68,0.024)',
								clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
							}}
						>
							Website
						</span>
					</div>
					<div>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">Scan</h3>
						<p className="text-gray-600 max-w-md">
							Kasir digital yang tepat untuk mempercepat proses pembayaran dan layanan pelanggan di bidang jasa.
						</p>
					</div>
				</div>
				<div className="relative flex justify-center lg:justify-end">
					<div
						aria-hidden="true"
						className="hidden md:block absolute z-0 pointer-events-none select-none"
						style={{
							boxSizing: 'border-box',
							width: '946px',
							height: '665px',
							left: '120%',
							top: 0,
							background: '#63C902',
							borderRadius: '50% / 50%',
							transform: 'translateX(-50%)',
						}}
					/>
					<img
						src="/iphone-scan.png"
						alt="Website Scan"
						className="relative z-20 lg:translate-x-28 xl:translate-x-28"
					/>
				</div>
			</div>

			<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
				<div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
					<div
						aria-hidden="true"
						className="hidden md:block absolute z-0 pointer-events-none select-none"
						style={{
							boxSizing: 'border-box',
							width: '946px',
							height: '665px',
							right: '120%',
							top: 0,
							background: '#63C902',
							borderRadius: '50% / 50%',
							transform: 'translateX(50%)',
						}}
					/>
					<img
						src="/HpMenu.png"
						alt="Website Scan"
						className="relative z-20 lg:-translate-x-28 xl:-translate-x-28"
					/>
				</div>
				<div className="flex flex-col gap-6 relative z-10 order-1 lg:order-2">
					<div>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">Menu</h3>
						<p className="text-gray-600 max-w-md">
							Kasir digital yang tepat untuk mempercepat proses pembayaran dan layanan pelanggan di bidang jasa.
						</p>
					</div>
				</div>
			</div>

			<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
				<div className="flex flex-col gap-6 relative z-10">
					<div>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">Detail Pesanan</h3>
						<p className="text-gray-600 max-w-md">
							Kasir digital yang tepat untuk mempercepat proses pembayaran dan layanan pelanggan di bidang jasa.
						</p>
					</div>
				</div>
				<div className="relative flex justify-center lg:justify-end">
					<div
						aria-hidden="true"
						className="hidden md:block absolute z-0 pointer-events-none select-none"
						style={{
							boxSizing: 'border-box',
							width: '946px',
							height: '665px',
							left: '120%',
							top: 0,
							background: '#63C902',
							borderRadius: '50% / 50%',
							transform: 'translateX(-50%)',
						}}
					/>
					<img
						src="/HpOrder.png"
						alt="Website Scan"
						className="relative z-20 lg:translate-x-28 xl:translate-x-28"
					/>
				</div>
			</div>

			<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
				<div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
					<div
						aria-hidden="true"
						className="hidden md:block absolute z-0 pointer-events-none select-none"
						style={{
							boxSizing: 'border-box',
							width: '946px',
							height: '665px',
							right: '120%',
							top: 0,
							background: '#63C902',
							borderRadius: '50% / 50%',
							transform: 'translateX(50%)',
						}}
					/>
					<img
						src="/HpDetailOrder.png"
						alt="Website Scan"
						className="relative z-20 lg:-translate-x-28 xl:-translate-x-28"
					/>
				</div>
				<div className="flex flex-col gap-6 relative z-10 order-1 lg:order-2">
					<div>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">Informasi Pembeli</h3>
						<p className="text-gray-600 max-w-md">
							Kasir digital yang tepat untuk mempercepat proses pembayaran dan layanan pelanggan di bidang jasa.
						</p>
					</div>
				</div>
			</div>

			<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
				<div className="flex flex-col gap-6 relative z-10">
					<div>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">Rincian Pesanan</h3>
						<p className="text-gray-600 max-w-md">
							Kasir digital yang tepat untuk mempercepat proses pembayaran dan layanan pelanggan di bidang jasa.
						</p>
					</div>
				</div>
				<div className="relative flex justify-center lg:justify-end">
					<div
						aria-hidden="true"
						className="hidden md:block absolute z-0 pointer-events-none select-none"
						style={{
							boxSizing: 'border-box',
							width: '946px',
							height: '665px',
							left: '120%',
							top: 0,
							background: '#63C902',
							borderRadius: '50% / 50%',
							transform: 'translateX(-50%)',
						}}
					/>
					<img
						src="/HpDetailPesanan.png"
						alt="Website Scan"
						className="relative z-20 lg:translate-x-28 xl:translate-x-28"
					/>
				</div>
			</div>
		
		</div>
	</section>
);

export default WebApp;
