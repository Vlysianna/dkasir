const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-gray-800">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <img src="/logo.png" alt="dkasir" className="h-12 w-auto mb-4" />
              <p className="text-gray-600 max-w-xs">
                Platform Pembayaran Terintegrasi untuk Semua Jenis Usaha
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Address</h4>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>Jalan Mandar 3 Blok DC-10</p>
                <p>No. 66 Bintaro Sektor 3A</p>
                <p>Tangerang Selatan</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
                <a
                  href="tel:08119623333"
                  className="text-gray-600 text-sm hover:text-[#254D00] transition-colors duration-300"
                >
                  08119623333
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Social</h4>
                <div className="space-y-2">
                  <a
                    href="https://instagram.com/dkasir.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#254D00] transition-colors duration-300 flex items-center gap-2"
                  >
                    <i className="fab fa-instagram text-base"></i>
                    @dkasir.id
                  </a>
                  <a
                    href="mailto:dkasir@gmail.com"
                    className="text-gray-600 text-sm hover:text-[#254D00] transition-colors duration-300 flex items-center gap-2"
                  >
                    <i className="fas fa-envelope text-base"></i>
                    dkasir@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#254D00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-white text-xs">
            Copyright © 2025 Dkasir All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
