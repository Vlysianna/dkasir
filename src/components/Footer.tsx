const Footer = () => {
  return (
    <footer id="footer" className="bg-[#254D00] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/logo.png" alt="dkasir" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 mb-4">
              Platform POS terlengkap untuk semua jenis usaha. Kelola bisnis Anda dengan mudah dan efisien.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Alamat</h4>
            <p className="text-gray-300 flex items-start">
              <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#7CFF00]"></i>
              <span>Jalan Mandar 3 Blok DC-10 No. 66, Bintaro Sektor 3A, Tangerang Selatan</span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#7CFF00]"></i>
                <a href="tel:08119623333" className="hover:text-[#7CFF00] transition-colors duration-300">
                  08119623333
                </a>
              </p>
              <p className="text-gray-300 flex items-center">
                <i className="fas fa-envelope mr-3 text-[#7CFF00]"></i>
                <a href="mailto:dkasir@gmail.com" className="hover:text-[#7CFF00] transition-colors duration-300">
                  dkasir@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center">
                <i className="fab fa-instagram mr-3 text-[#7CFF00] text-xl"></i>
                <a href="https://instagram.com/dkasir.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#7CFF00] transition-colors duration-300">
                  @dkasir.id
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-300">
            © 2025 dkasir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
