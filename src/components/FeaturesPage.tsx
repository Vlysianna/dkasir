import React from "react";

const theme = {
  primary: "primary",
  dark: "dark",
  light: "light",
};


const heroTabs = [
  { label: "Mobile Apps", anchor: "#mobile-app" },
  { label: "Website", anchor: "#website" },
  { label: "List Order Management (Kitchen)", anchor: "#kitchen" },
  { label: "CMS (Content Management System)", anchor: "#cms" },
];

const HeroSmall = () => (
  <section className="w-full">
    {/* Hero image + tabs */}
    <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
      <img
        src="/feature.png"
        alt="Dashboard"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-white/0 to-white" />

      <div className="absolute inset-x-0 bottom-6 z-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {heroTabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.anchor}
              className="px-6 py-2 bg-white rounded-xl shadow-md border border-green-200 text-dark font-semibold text-sm md:text-base transition hover:border-green-400 hover:shadow-lg"
              style={{ borderBottom: "4px solid #A8FF78" }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Feature highlight */}
    <div id="mobile-app" className="w-full bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-lg md:text-xl font-bold text-dark mb-6">Fitur Utama</div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4 w-full md:w-1/2">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shadow">
              <svg width="28" height="28" fill="#69B600" viewBox="0 0 24 24"><path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.293-2.707l1.414 1.414c.195.195.451.293.707.293h12c.256 0 .512-.098.707-.293l3.293-3.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.879 2.879h-10.586l-2.879-2.879c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3.293 3.293zm13.293-7.293v-2c0-1.104-.896-2-2-2h-8c-1.104 0-2 .896-2 2v2h-2v2h2v8h12v-8h2v-2h-2zm-10 0v-2h8v2h-8z"/></svg>
            </div>
            <div>
              <span className="inline-block mb-2 text-sm font-bold text-green-700 bg-green-200/60 px-3 py-1 rounded-full">Mobile App</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-green-600">Kasir</h2>
              <p className="text-gray-600 mt-1">Halaman awal aplikasi.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/tablet-dashboard.png"
              alt="Kasir"
              className="w-80 md:w-[360px] rounded-2xl shadow-xl border border-green-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: "cart",
    title: "Kasir",
    description: "Transaksi cepat dan mudah dengan sistem POS modern",
    image: "/images/fitur-kasir.png",
  },
  {
    icon: "payment",
    title: "Pembayaran",
    description: "Mendukung berbagai metode pembayaran online & offline",
    image: "/images/fitur-pembayaran.png",
  },
  {
    icon: "chart",
    title: "Laporan Penjualan",
    description: "Pantau performa bisnis secara real-time",
    image: "/images/fitur-laporan.png",
  },
  {
    icon: "users",
    title: "Karyawan",
    description: "Kelola akses dan role karyawan",
    image: "/images/fitur-karyawan.png",
  },
  {
    icon: "store",
    title: "Outlet",
    description: "Manajemen banyak cabang dalam satu akun",
    image: "/images/fitur-outlet.png",
  },
  {
    icon: "box",
    title: "Produk",
    description: "Kelola produk, kategori, dan harga dengan mudah",
    image: "/images/fitur-produk.png",
  },
];

const iconMap: Record<string, JSX.Element> = {
  cart: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.293-2.707l1.414 1.414c.195.195.451.293.707.293h12c.256 0 .512-.098.707-.293l3.293-3.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.879 2.879h-10.586l-2.879-2.879c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3.293 3.293zm13.293-7.293v-2c0-1.104-.896-2-2-2h-8c-1.104 0-2 .896-2 2v2h-2v2h2v8h12v-8h2v-2h-2zm-10 0v-2h8v2h-8z"/></svg></span>,
  payment: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M20 4h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 14h-16v-8h16v8zm0-10h-16v-2h16v2z"/></svg></span>,
  chart: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M3 17h2v-7h-2v7zm4 0h2v-12h-2v12zm4 0h2v-4h-2v4zm4 0h2v-9h-2v9zm4 0h2v-2h-2v2z"/></svg></span>,
  users: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M16 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm-8 0c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45v2.5h6v-2.5c0-2.33-4.67-3.5-7-3.5zm-8-2c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/></svg></span>,
  store: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M20 6h-16l-2 6v2c0 1.104.896 2 2 2h1v4c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-4h1c1.104 0 2-.896 2-2v-2l-2-6zm-2 14h-12v-4h12v4zm3-8c0 .552-.447 1-1 1h-18c-.553 0-1-.448-1-1v-1h20v1zm-1.618-3l1.382 4h-18.528l1.382-4h15.764z"/></svg></span>,
  box: <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center"><svg width="24" height="24" fill="#254D00" viewBox="0 0 24 24"><path d="M21 16v-8c0-1.104-.896-2-2-2h-14c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2zm-2 0h-14v-8h14v8zm-7-10c.552 0 1-.447 1-1s-.448-1-1-1-1 .447-1 1 .448 1 1 1z"/></svg></span>,
};

const FeatureList = () => (
  <section id="kitchen" className="w-full py-16 bg-white scroll-mt-24">
    <div className="text-center text-3xl font-bold mb-12 text-dark">Semua Fitur untuk Bisnis Anda</div>
    <div className="flex flex-col gap-16 max-w-4xl mx-auto">
      {features.map((f, idx) => (
        <div
          key={f.title}
          className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
            <img src={f.image} alt={f.title} className="w-64 h-48 object-contain rounded-xl shadow-lg border-2 border-light" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start">
            <div className="mb-3">{iconMap[f.icon]}</div>
            <h3 className="text-2xl font-bold mb-2 text-dark">{f.title}</h3>
            <p className="text-base text-gray-700 mb-2">{f.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const mobileScreens = [
  {
    title: "Transaksi",
    image: "/images/mobile-transaksi.png",
    decoration: "green_circle",
  },
  {
    title: "Produk",
    image: "/images/mobile-produk.png",
    decoration: "green_circle",
  },
  {
    title: "Pesanan",
    image: "/images/mobile-pesanan.png",
    decoration: "green_circle",
  },
  {
    title: "Pelanggan",
    image: "/images/mobile-pelanggan.png",
    decoration: "green_circle",
  },
];

const MobileApp = () => (
  <section id="mobile-app" className="w-full py-16 bg-light scroll-mt-24">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2 text-dark">Aplikasi Mobile</h2>
        <p className="text-lg mb-8 text-dark">Kelola bisnis langsung dari genggaman Anda</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {mobileScreens.map((screen) => (
          <div key={screen.title} className="flex flex-col items-center">
            <div className="relative mb-3">
              <span className="absolute -inset-2 rounded-full bg-primary opacity-20"></span>
              <img src={screen.image} alt={screen.title} className="relative z-10 w-24 h-44 object-contain rounded-xl shadow-lg border-2 border-white" />
            </div>
            <div className="text-base font-semibold mt-2 text-dark">{screen.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const webFeatures = [
  {
    title: "Dashboard",
    image: "/images/web-dashboard.png",
  },
  {
    title: "Laporan",
    image: "/images/web-laporan.png",
  },
  {
    title: "Produk",
    image: "/images/web-produk.png",
  },
  {
    title: "Inventori",
    image: "/images/web-inventori.png",
  },
];

const WebApp = () => (
  <section id="website" className="w-full py-16 bg-white scroll-mt-24">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2 text-dark">Dashboard Web</h2>
        <p className="text-lg mb-8 text-dark">Kontrol penuh bisnis Anda melalui web</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {webFeatures.map((f) => (
          <div key={f.title} className="flex flex-col items-center">
            <img src={f.image} alt={f.title} className="w-28 h-28 object-contain rounded-xl shadow-lg border-2 border-light mb-2" />
            <div className="text-base font-semibold mt-2 text-dark">{f.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="cms" className="w-full py-16 text-center bg-primary scroll-mt-24">
    <div className="max-w-xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-dark">Siap Mengembangkan Bisnis Anda?</h2>
      <button
        className="mt-6 px-10 py-4 rounded-full font-bold text-lg shadow-lg transition bg-dark hover:scale-105 hover:bg-black text-white"
        onClick={() => window.location.href = '/subscribe'}
      >
        Langganan Sekarang
      </button>
    </div>
  </section>
);

const FeaturesPage = () => {
  return (
    <main className="min-h-screen w-full">
      <HeroSmall />
      <FeatureList />
      <MobileApp />
      <WebApp />
      <CTASection />
    </main>
  );
};

export default FeaturesPage;