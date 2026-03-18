import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="hidden md:flex bg-green-800 text-white text-sm justify-between items-center px-10 py-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i>
            <span>+91 88616 50007 (IN)</span>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i>
            <span>+971 588267177 (UAE)</span>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-envelope"></i>
            <span>info@aruvanaa.com</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-globe"></i>
            <span>Trade Beyond Borders</span>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1 rounded-full text-sm font-medium">
            Download Brochure
          </button>
        </div>
      </div>

      {/* 🔽 Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-sm">
        {/* Logo */}
        <div>
          <h1 className="text-green-800 font-bold text-lg md:text-xl">
            ARUVANAA
          </h1>
          <p className="text-xs text-gray-500">COMMODITY TRADING</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="border-b-2 border-green-700 pb-1">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-green-700">
            <Link to="/about">About Us</Link>
          </li>

          <li className="hover:text-green-700">
            <Link to="/products">Products</Link>
          </li>

          <li className="hover:text-green-700">
            <Link to="/services">Integrated Services</Link>
          </li>

          <li className="hover:text-green-700">
            <Link to="/certificates">Certificates</Link>
          </li>
        </ul>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-full font-semibold">
            Contact Us
          </button>

          <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm">
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <i className="fa-solid fa-xmark text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-xl"></i>
            )}
          </button>
        </div>
      </div>

     
      {open && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md space-y-4">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Integrated Services</Link>
          <Link to="/certificates">Certificates</Link>

          <button className="w-full bg-yellow-500 py-2 rounded-full font-semibold">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}
