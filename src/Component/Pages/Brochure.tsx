import { useRef } from "react";
import { Mail, Phone, MapPin, Globe, Download, ArrowLeft } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";
import fruits from "../../assets/fruits.png";
import dates from "../../assets/dates.jpeg";

const BrandLogo = ({ size }: { size: string }) => (
  <div
    className={`${size} rounded-full border border-gray-100 overflow-hidden shadow-sm transition-all duration-300 transform hover:scale-105 cursor-pointer`}
  >
    <img src={logo} alt="Logo" className="w-full h-full object-cover" />
  </div>
);

const Brochure = () => {
  const page1Ref = useRef<HTMLDivElement | null>(null);
const page2Ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

const downloadPDF = () => { 
    window.print();
  };

  return (
    <div className=" bg-gray-100 min-h-screen pb-10">
      <div className="bg-white border-b p-4 flex justify-between items-center sticky   no-print top-0 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-black"
        >
          <ArrowLeft size={18} /> Back to Website
        </button>
        <button
          onClick={downloadPDF}
          className="bg-[#1a4d2e] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-all"
        >
          <Download size={18} /> Download PDF
        </button>
      </div>

      <div
        
        className=" print-container max-w-[800px] mx-auto bg-white shadow-2xl mt-8 flex flex-col gap-10"
      >
        <div className=" min-h-[1123px] relative flex flex-col">
          <div
            ref={page1Ref}
            className="page w-[794px] h-[1223px] bg-white shadow-xl flex flex-col justify-between"
          >
            <div className="bg-green-800 text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BrandLogo size="w-12 h-12" />
                <div>
                  <h1 className="text-xl font-bold">ARUVANAA</h1>
                  <p className="text-xs text-yellow-400 italic">
                    Trade Beyond Borders
                  </p>
                </div>
              </div>

              <div className="rounded bg-[#C8A84B]   px-5 py-2 text-xs">
                EST. 2026
              </div>
            </div>

            <div className="mt-12 p-12 grid grid-cols-3 gap-8 flex-grow">
              <div className="col-span-2">
                <h2 className="text-4xl font-serif text-[#1a4d2e] leading-tight mb-6">
                  Connecting India's Agricultural Excellence to the{" "}
                  <span className="text-yellow-600">World</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Aruvanaa Private Limited is an India-UAE commodity trading
                  company, licensed to trade across 10 major food and
                  agricultural categories. We provide end-to-end supply chain
                  solutions — from direct farm sourcing in India to last-mile
                  delivery in Dubai, UAE.
                </p>

                <div className="flex gap-2 mb-10">
                  <span className="bg-green-50 text-[#1a4d2e] text-[10px] px-3 py-1 rounded-full border border-green-200">
                    10 Licensed Categories
                  </span>
                  <span className="bg-green-50 text-[#1a4d2e] text-[10px] px-3 py-1 rounded-full border border-green-200">
                    End-to-End Logistics
                  </span>
                  <span className="bg-green-50 text-[#1a4d2e] text-[10px] px-3 py-1 rounded-full border border-green-200">
                    IN India — AE UAE
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <img
                  src={fruits}
                  alt="Fruits"
                  className="rounded-lg h-64 object-cover"
                />
                <img
                  src={dates}
                  alt="Fruits"
                  className="rounded-lg h-64 object-cover"
                />
              </div>
            </div>

            <div className="bg-[#1a4d2e] rounded-xl m-8 p-8 text-white grid grid-cols-2 gap-8 mt-auto relative">
              <div className="absolute top-6 bottom-6 left-1/2 w-[1px] bg-white/20"></div>

              <div className="pr-6">
                <p className="text-yellow-500 text-xs mb-1">INDIA OFFICE</p>
                <p className="font-semibold text-sm mb-2">
                  ARUVANAA PRIVATE LIMITED
                </p>

                <div className="flex gap-3 mb-2">
                  <MapPin
                    className="text-yellow-500 shrink-0 mt-0.5"
                    size={13}
                  />
                  <p className="text-xs leading-relaxed">
                    46/1A, Gandhiji Street, Kollampalayam, Erode - 638002
                  </p>
                </div>

                <div className="flex gap-3 items-center mb-2">
                  <Phone className="text-yellow-500 shrink-0" size={13} />
                  <p className="text-xs">+91 88616 50007</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail className="text-yellow-500 shrink-0" size={13} />
                  <p className="text-xs">info@aruvanaa.com</p>
                </div>
              </div>

              <div className="pl-6">
                <p className="text-yellow-500 text-xs mb-1">UAE OFFICE</p>
                <p className="font-semibold text-sm mb-2 leading-snug">
                  ARUVANAA GLOBAL MERCATO FRUITS & VEGETABLES TRADING L.L.C
                </p>

                <div className="flex gap-3 mb-2">
                  <MapPin
                    className="text-yellow-500 shrink-0 mt-0.5"
                    size={13}
                  />
                  <p className="text-xs leading-relaxed">
                    AL KHABEESI BLDG, Office No.6, Al Khabeesi, Dubai - UAE
                  </p>
                </div>

                <div className="flex gap-3 items-center mb-2">
                  <Phone className="text-yellow-500 shrink-0" size={13} />
                  <p className="text-xs">+971 588267177</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail className="text-yellow-500 shrink-0" size={13} />
                  <p className="text-xs">info@aruvanaa.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 no-print rounded-lg p-2 mx-10 flex items-start gap-2 border-l-4 border-yellow-500 mb-6">
              <Globe className="text-green-800 shrink-0 mt-1" size={22} />
              <p className="text-xs text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Our Mission:
                </span>{" "}
                To bridge the gap between India's rich agricultural heritage and
                the world's demand for quality commodities — bringing prosperity
                to farmers, transparency to trade, and unshakeable trust to
                every transaction.
              </p>
            </div>

            <div className="text-[11px] no-print text-gray-500 text-center border-t border-gray-300 p-2">
              www.aruvanaa.com &nbsp; • &nbsp; info@aruvanaa.com &nbsp; • &nbsp;
              +91 88616 50007 (IN) &nbsp; | &nbsp; +971 588267177 (UAE)
            </div>
          </div>

          {/*page 2 */}
          <div ref={page2Ref} className="page min-h-[1123px] border-t-2 border-gray-200 bg-white relative ">
            <div className="bg-green-800 text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold">ARUVANAA</h1>
                <p className="text-xs text-yellow-400 italic">
                  Trade Beyond Borders
                </p>
              </div>

              <div>
                <BrandLogo size="w-12 h-12" />
              </div>
            </div>

            <div className="px-10 pt-4 grid grid-cols-3 gap-4 mb-16">
              {[
                "Snack Foods",
                "Dairy Products",
                "Soft Drinks",
                "Vegetables & Fruits",
                "Grains & Legumes",
                "Premium Dates",
              ].map((cat) => (
                <div
                  key={cat}
                  className="bg-green-50 p-4 border border-green-100 rounded-lg"
                >
                  <h5 className="text-[#1a4d2e] font-bold text-sm mb-1">
                    {cat}
                  </h5>
                  <p className="text-[10px] text-gray-500">
                    Chips, Crackers, Granola Bars, Nuts, Wafers...
                  </p>
                </div>
              ))}
            </div>

             <div className="px-10 pb-4">
              <h2 className="text-[#1a4d2e] font-bold text-lg tracking-wider mb-2">
                INTEGRATED END-TO-END SERVICES
              </h2>
              <div className="w-full h-0.5 bg-yellow-600 mb-8"></div>

              <div className="grid grid-cols-3 gap-y-1 gap-x-6 relative">
                {[
                  {
                    num: "01",
                    title: "Procurement & Sourcing",
                    desc: "Direct from Indian farms & producers",
                  },
                  {
                    num: "02",
                    title: "Quality Inspection",
                    desc: "Lab testing, grading & certification",
                  },
                  {
                    num: "03",
                    title: "Export Packaging",
                    desc: "UAE & international compliant packaging",
                  },
                  {
                    num: "04",
                    title: "Documentation",
                    desc: "COO, Phytosanitary, FSSAI, Invoicing",
                  },
                  {
                    num: "05",
                    title: "Freight Forwarding",
                    desc: "Sea & air freight coordination",
                  },
                  {
                    num: "06",
                    title: "Customs Clearance",
                    desc: "India & UAE customs expertise",
                  },
                ].map((step, index) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-3 relative"
                  >
                    <div className="bg-[#1a4d2e] text-white rounded-full min-w-[32px] h-8 flex items-center justify-center text-xs font-bold">
                      {step.num}
                    </div>

                    <div className="flex-1">
                      <h4 className="text-[#1a4d2e] font-bold text-sm leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 leading-normal mt-1">
                        {step.desc}
                      </p>
                    </div>

                    {![2, 5].includes(index) && (
                      <div className="absolute -right-4 top-3 text-yellow-600 opacity-60">
                        <svg
                          width="20"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a4d2e] p-8 mx-10 rounded-2xl text-white">
              <h3 className="text-xl font-serif mb-4">
                Ready to Trade Beyond Borders?
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-yellow-500" /> +91 88616
                  50007
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-yellow-500" />{" "}
                  info@aruvanaa.com
                </div>
              </div>
            </div>

            <div className="no-print absolute bottom-10 left-0 right-0 text-center text-[10px] text-gray-400">
              © 2026 Aruvanaa Private Limited. All rights reserved. •
              Confidential Company Profile
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
