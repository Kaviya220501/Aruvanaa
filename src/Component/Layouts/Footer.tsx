import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-100 px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="logo" className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-serif tracking-wide text-[#C7A84D]">
              ARUVANAA
            </h1>
          </div>

          <p className="text-sm leading-6 text-gray-200">
            Bridging the gap between India's rich agricultural heritage and the
            world's demand for quality commodities.
          </p>
        </div>

        <div>
          <h2 className="text-[#C7A84D] text-lg font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#C7A84D] cursor-pointer">Our Story</li>
            <li className="hover:text-[#C7A84D] cursor-pointer">
              Commodities
            </li>
            <li className="hover:text-[#C7A84D] cursor-pointer">
              Integrated Services
            </li>
            <li className="hover:text-[#C7A84D] cursor-pointer">
              Compliance & Trust
            </li>
            <li className="text-[#C7A84D] cursor-pointer">
              ↓ Download Brochure
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#C7A84D] text-lg font-semibold mb-4">
            India Office
          </h2>

          <div className="flex gap-2 mb-3">
            <MapPin size={18} className="mt-1 text-[#C7A84D]" />
            <p className="text-sm leading-6">
              ARUVANAA PRIVATE LIMITED <br />
              46/1A, Gandhiji Street, <br />
              Kollampalayam, Erode-638002
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} className="text-[#C7A84D]" />
            <span>+91 88616 50007</span>
          </div>
        </div>

        <div>
          <h2 className="text-[#C7A84D] text-lg font-semibold mb-4">
            UAE Office
          </h2>

          <div className="flex gap-2 mb-3">
            <MapPin size={18} className="mt-1 text-[#C7A84D]" />
            <p className="text-sm leading-6">
              ARUVANAA GLOBAL MERCATO <br />
              AL KHABEESI BLDG - Office No6, <br />
              Al Khabeesi, Dubai - UAE
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} className="text-[#C7A84D]" />
            <span>+971 588267177</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} className="text-[#C7A84D]"/>
            <span>info@aruvanaa.com</span>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p>© 2026 Aruvanaa Private Limited. All rights reserved.</p>
        <p>Designed for global trade.</p>
      </div>
    </footer>
  );
};

