import React from "react";

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

export default CTASection;
