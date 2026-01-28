

const webAppContents = [
	{ img: "/iphone-website-1.png" },
	{ img: "/iphone-website-2.png" },
	{ img: "/iphone-website-3.png" },
	{ img: "/iphone-website-4.png" },
	{ img: "/iphone-website-5.png" },
];

const WebApp = () => (
	<section id="website" className="w-full bg-white py-20 overflow-hidden">
		<div className="max-w-6xl mx-auto px-4">
			<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
				<div className="flex flex-col gap-6">
					<div>
						<span className="inline-block bg-[#7CFF00] text-[#254D00] px-6 py-2 rounded-[10px] font-bold shadow-lg">
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
						className="hidden md:block absolute z-0"
						style={{
							boxSizing: "border-box",
							width: "920px",
							height: "520px",
							right: "-75%",
							bottom: "-10%",
							background: "#63C902",
							borderRadius: "50% / 50%",
						}}
					/>
					<img
						src="/iphone-scan.png"
						alt="Website Scan"
						className="relative z-10"
					/>
				</div>
			</div>
			{webAppContents.map((item, idx) => (
				<div key={idx} className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
					{idx % 2 === 0 ? (
						<>
							<div className="relative flex justify-center lg:justify-end">
								<div
									aria-hidden="true"
									className="hidden md:block absolute z-0"
									style={{
										boxSizing: "border-box",
										width: "520px",
										height: "320px",
										left: "-30%",
										bottom: "-10%",
										background: "#63C902",
										borderRadius: "50% / 50%",
									}}
								/>
								<img
									src={item.img}
									alt="Website Scan"
									className="relative z-10 w-[280px] sm:w-[320px] lg:w-[360px] rounded-2xl shadow-xl"
								/>
							</div>
							<div className="flex flex-col gap-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-2">Scan</h3>
								<p className="text-gray-600 max-w-md">
									Kasir digital yang tepat untuk mempercepat proses pembayaran dan layanan pelanggan di bidang jasa.
								</p>
							</div>
						</>
					) : (
						<>
							<div className="flex flex-col gap-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-2">Scan</h3>
								<p className="text-gray-600 max-w-md">
									Kasir digital yang tepat untuk mempercepat proses pembayaran dan layanan pelanggan di bidang jasa.
								</p>
							</div>
							<div className="relative flex justify-center lg:justify-end">
								<div
									aria-hidden="true"
									className="hidden md:block absolute z-0"
									style={{
										boxSizing: "border-box",
										width: "520px",
										height: "320px",
										right: "-30%",
										bottom: "-10%",
										background: "#63C902",
										borderRadius: "50% / 50%",
									}}
								/>
								<img
									src={item.img}
									alt="Website Scan"
									className="relative z-10 w-[280px] sm:w-[320px] lg:w-[360px] rounded-2xl shadow-xl"
								/>
							</div>
						</>
					)}
				</div>
			))}
		</div>
	</section>
);

export default WebApp;
