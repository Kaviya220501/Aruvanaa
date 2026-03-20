import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
    const navigate = useNavigate();

  const BrandLogo = ({ size }: { size: string }) => (
    <div
    onClick={() => navigate("/")}
      className={`${size} rounded-full border  border-gray-100 overflow-hidden  shadow-sm shadow-[#c0a049]/30 hover:shadow-lg hover:shadow-[#c0a049]/60 transition-all duration-300 transform hover:scale-105 cursor-pointer`}
    >
      <img src={logo} alt="Logo" className="w-full h-full object-cover" />
    </div>
  );

  return (
    <nav className="w-full font-sans sticky top-0 z-[999] bg-white">
      <div className="hidden lg:flex bg-[#1a3c1a] text-white text-[13px] justify-between items-center px-12 py-2.5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-phone text-[#c5a059]"></i> +91 88616 50007
            (IN)
          </span>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-phone text-[#c5a059]"></i> +971 588267177
            (UAE)
          </span>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-envelope text-[#c5a059]"></i>{" "}
            info@aruvanaa.com
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 italic opacity-90">
            <i className="fa-solid fa-globe"></i> Trade Beyond Borders
          </span>
          <button 
          onClick={() => navigate("/brochure")}
          className="bg-[#c0a049] hover:bg-[#8f752e] backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 transition-colors">
            <i className="fa-solid fa-circle-arrow-down"></i> Download Brochure
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 lg:px-12 py-4 bg-white shadow-sm relative z-[110] border-b border-gray-100">
        <div className="flex flex-col">
          <h1 className="text-[#1a3c1a] font-extrabold text-2xl leading-none tracking-tight  " style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ARUVANAA
          </h1>
          <p className="text-[12px] text-gray-500 mt-1 " style={{ fontFamily: "ui-sans-serif " }}>
            Trade Beyond Borders
          </p>
        </div>

        <ul className="hidden lg:flex items-center gap-10 text-[#1a3c1a] font-semibold text-[15px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#c5a059] pb-1"
                : "hover:text-[#c5a059]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#c5a059] pb-1"
                : "hover:text-[#c5a059]"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#c5a059] pb-1"
                : "hover:text-[#c5a059]"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#c5a059] pb-1"
                : "hover:text-[#c5a059]"
            }
          >
            Integrated Services
          </NavLink>

          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#c5a059] pb-1"
                : "hover:text-[#c5a059]"
            }
          >
            Certificates
          </NavLink>

          <button 
           onClick={() => navigate("/contact")}
          className="bg-[#c0a049] cursor-pointer hover:bg-[#F0B100] px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </ul>

        <div className="lg:hidden flex items-center gap-4">
          <BrandLogo size="w-10 h-10" />
          <button

            onClick={() => setOpen(!open)}
            className="text-[#1a3c1a] ml-2"
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>

        <div className="hidden lg:block">
          <BrandLogo size="w-16 h-16" />
        </div>
      </div>

      <div
        className={`absolute left-0 w-full bg-white transition-all duration-500 ease-in-out overflow-hidden border-b shadow-xl lg:hidden ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ top: "100%" }}
      >
        <div className="flex flex-col px-8 py-8 gap-6">
           <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/service" onClick={() => setOpen(false)}>
            Integrated Services
          </NavLink>
          <NavLink to="/certificates" onClick={() => setOpen(false)}>
            Certificates
          </NavLink>
          <button className="mt-4 bg-[#1a3c1a]  text-white py-3.5 rounded-xl font-bold text-base flex justify-center items-center gap-2">
            Contact Us <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>
        <div className="px-6 pb-6 text-sm text-gray-500 space-y-2">
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i> +91 88616 50007
          </p>
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-envelope"></i> info@aruvanaa.com
          </p>
        </div>
      </div>
    </nav>
  );
}
