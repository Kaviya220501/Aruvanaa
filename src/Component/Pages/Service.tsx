import Navbar from '../Layouts/Navbar';
import { Footer } from '../Layouts/Footer';

const steps = [
  {
    step: "Step 01",
    title: "Procurement & Sourcing",
    description: "Direct connections with trusted farms and manufacturers in India, ensuring competitive pricing and premium quality.",
    icon: "fa-handshake", 
  },
  {
    step: "Step 02",
    title: "Quality Inspection",
    description: "Rigorous lab testing, sorting, and grading before shipment to meet strict international food safety standards.",
    icon: "fa-check-double",
  },
  {
    step: "Step 03",
    title: "Export Packaging",
    description: "Custom, climate-resilient packaging compliant with UAE and global standards to preserve freshness and integrity.",
    icon: "fa-box",
  },
  {
    step: "Step 04",
    title: "Documentation",
    description: "Flawless preparation of Certificate of Origin, Phytosanitary, FSSAI, Commercial Invoice, and packing lists.",
    icon: "fa-file-lines",
  },
  {
    step: "Step 05",
    title: "Freight Forwarding",
    description: "Strategic coordination of sea and air freight for optimal transit times and cost efficiency.",
    icon: "fa-plane-departure",
  },
  {
    step: "Step 06",
    title: "Customs Clearance",
    description: "Expertise in both India export customs and UAE import customs, preventing delays at the borders.",
    icon: "fa-passport",
  },
  {
    step: "Step 07",
    title: "Last Mile Delivery",
    description: "Seamless warehouse-to-door delivery within the UAE, ensuring your commodities arrive exactly when needed.",
    icon: "fa-truck",
  }
];

export default function Service() {
  return (
     <div className="flex flex-col min-h-screen font-sans">
      <Navbar/>
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
       
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a3c1a] mb-6">
            Integrated Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A true end-to-end logistics partner. We don't just trade; we manage the entire 
            journey from Indian soil to UAE shelves.
          </p>
        </div>

       
        <div className="relative">
          
         
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-200 z-0 hidden md:block"></div>
          
          
          <div className="absolute left-4 transform w-[2px] h-full bg-gray-200 z-0 md:hidden"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                
                <div className="hidden md:block w-5/12"></div>

                
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-[#1a3c1a] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <i className={`fa-solid ${item.icon} text-white text-lg`}></i>
                  </div>
                </div>

                
                <div className="w-full md:w-5/12 ml-12 md:ml-0">
                  <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 hover:shadow-xl transition-shadow duration-300">
                    <span className="text-[#c5a059] font-bold text-sm tracking-widest uppercase block mb-2">
                      {item.step}
                    </span>
                    <h3 className="text-[#1a3c1a] text-2xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}