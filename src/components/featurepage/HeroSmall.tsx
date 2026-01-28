

const heroTabs = [
  { label: "Mobile Apps", anchor: "#mobile-app" },
  { label: "Website", anchor: "#website" },
  { label: "List Order Management (Kitchen)", anchor: "#kitchen" },
  { label: "CMS (Content Management System)", anchor: "#cms" },
];

const HeroSmall = () => (
  <section className="w-full">
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
  </section>
);

export default HeroSmall;
