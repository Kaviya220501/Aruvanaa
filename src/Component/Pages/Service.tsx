import Navbar from '../Layouts/Navbar';
import { Footer } from '../Layouts/Footer';
import { useState } from 'react';
import about from "../../assets/about-img.avif"

const steps = [
  {
    step: "Step 01",
    title: "Procurement & Strategic Sourcing",
    description: "We establish direct partnerships with trusted farmers, producers, and manufacturers across India, enabling us to source premium-quality products at competitive prices. Our sourcing network ensures consistency, traceability, and reliability for every shipment.",
    icon: "fa-handshake", 
  },
  {
    step: "Step 02",
    title: "Quality Inspection & Assurance",
    description: "Quality is at the core of our operations. We conduct rigorous inspections, lab testing, sorting, and grading to meet international food safety and export standards. Every product is verified to comply with UAE and global regulatory requirements.",
    icon: "fa-check-double",
  },
  {
    step: "Step 03",
    title: "Export Packaging Solutions",
    description: "We provide customized, climate-resistant packaging solutions designed to preserve freshness, durability, and product integrity during transit. All packaging complies with international export standards and UAE import regulations.",
    icon: "fa-box",
  },
{
  step: "Step 04",
  title: "Documentation & Compliance Management",
 description: "Our team ensures accurate and hassle-free documentation, including:",
list: [
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "FSSAI Certification",
  "Commercial Invoice",
  "Packing List"
],
extraText:
  "We eliminate delays by ensuring all paperwork meets regulatory compliance for both India and UAE.",
      icon: "fa-file-lines",

},
  {
    step: "Step 05",
    title: " Freight Forwarding & Logistics Coordination",
    description: "We specialize in efficient sea and air freight management, selecting optimal routes and carriers to balance cost and delivery timelines. Our strong relationships with major global carrier lines allow us to offer competitive freight rates and reliable transit schedules.",
    icon: "fa-plane-departure",
  },
  {
    step: "Step 06",
    title: "Customs Clearance Expertise",
    description: "Our experienced team handles export customs clearance in India and import clearance in the UAE, ensuring smooth border transitions without delays, penalties, or compliance issues.",
    icon: "fa-passport",
  },
  {
    step: "Step 07",
    title: "Last-Mile Delivery in UAE",
    description: "We provide end-to-end delivery solutions, including warehouse handling and distribution across the UAE. Your goods are delivered on time, safely, and exactly where they are needed.",
    icon: "fa-truck",
  }
];
const sections = [
  {
    title: "Advanced Logistics Capabilities",
    content: `Our logistics department is powered by a highly experienced and proactive team that ensures:
    
• Proper packaging and handling of goods  
• Timely movement from origin to destination  
• Expertise in both sea and air shipments  
• Continuous coordination with leading shipping and airline carriers  
• Cost optimization through best freight rate negotiations  

We focus on delivering speed, safety, and cost efficiency in every shipment.`,
  },
  {
    title: "Private Labeling & Branding Solutions",
    content: `We support businesses in building their own brand through our private labeling services, including:
    
• Custom brand creation with minimal investment  
• Packaging design and material sourcing  
• In-house processing and packing  
• Container loading directly from our facilities  

This allows our clients to launch and scale their own branded products in international markets effortlessly.`,
  },
  {
    title: "Product & Packaging Specifications",
    content: `We maintain complete transparency and standardization in every shipment, including:
    
• Product Name & Grade  
• Item Code  
• Gross & Net Weight  
• Number of Packages  
• Product Color & Quality  
• Quantity (Size / Count / Weight / CBM)  
• Packing Date  
• Shipper Information  

This ensures clarity, traceability, and consistency across all orders.`,
  },
  {
    title: "Flexible Payment Terms",
    content: `We offer multiple secure and convenient payment options tailored to global trade:
    
• Irrevocable Letter of Credit (LC at Sight)  
• Documents Against Payment (DP)  
• Telegraphic Transfer (TT – Advance)  
• Western Union  
• MoneyGram  
• PayPal`,
  },
];
const features = [
  {
    title: "End-to-End Supply Chain",
    desc: "Complete management from sourcing to delivery",
    icon: "fa-truck",
  },
  {
    title: "Strong Sourcing Network",
    desc: "Reliable suppliers and producers across India",
    icon: "fa-network-wired",
  },
  {
    title: "Quality & Compliance",
    desc: "Meets international standards and regulations",
    icon: "fa-ranking-star",
  },
  {
    title: "Competitive Pricing",
    desc: "Optimized freight and cost-effective solutions",
    icon: "fa-dollar-sign",
  },
  {
    title: "Reliable UAE Delivery",
    desc: "On-time delivery across UAE markets",
    icon: "fa-location-dot",
  },
  {
    title: "Private Labeling Support",
    desc: "Build and scale your own brand globally",
    icon: "fa-tags",
  },
  {
    title: "Expert Team",
    desc: "Experienced logistics and export professionals",
    icon: "fa-user-tie",
  },
];

export default function Service() {
   const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
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
            We are a complete end-to-end export and logistics partner, delivering seamless solutions from Indian origin to UAE destination markets. Our approach goes beyond trading — we manage the entire supply chain with precision, compliance, and efficiency, ensuring your products reach global shelves with uncompromised quality.
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
                  <div className=" rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-none hover:shadow-xl transition-shadow duration-300">
                   <div className="group p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-none  transition-shadow duration-300">
                    <span className="text-[#c5a059] font-bold text-sm tracking-widest uppercase block mb-2">
                      {item.step}
                    </span>
                    <h3 className="text-[#1a3c1a] text-2xl font-bold mb-4">
                      {item.title}
                    </h3>
                   <p className="text-gray-500 leading-relaxed text-base 
  md:line-clamp-2 md:hover:line-clamp-none">
  {item.description}
</p>

{item.list && (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-gray-500 text-sm md:hidden md:group-hover:grid hidden">
    {item.list.map((doc, i) => (
      <li key={i} className="flex items-start">
        <span className="mr-2 text-[#c5a059]">•</span>
        {doc}
      </li>
    ))}
  </ul>
)}

{item.extraText && (
  <p className="text-gray-500 leading-relaxed text-base mt-4 md:hidden md:group-hover:block hidden">
    {item.extraText}
  </p>
)}

</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

  <div className="w-full">
    <img
      src={about} 
      alt="logistics"
      className="w-full h-auto rounded-2xl shadow-lg object-cover"
    />
  </div>

  <div className="space-y-4">
    {sections.map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-xl overflow-hidden shadow-sm"
      >
        <button
          onClick={() => toggle(index)}
          className="w-full text-left px-6 py-4 text-lg font-semibold text-[#1a3c1a] flex justify-between items-center"
        >
          {item.title}

          <span className="text-xl">
            {activeIndex === index ? " " : " "}
          </span>
        </button>

        <div
          className={`px-6 transition-all duration-300 overflow-hidden ${
            activeIndex === index ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <p className="text-gray-600 whitespace-pre-line">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </div>

</div>
<div className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-[#1a3c1a] mb-12">
      Why Choose Us
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-2xl p-8 flex items-start gap-6 hover:shadow-lg transition duration-300"
        >
          
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1a3c1a] text-white text-2xl shrink-0">
            <i className={`fa-solid ${item.icon}`}></i>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-black">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.desc}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>
</div>
    <Footer/>
    </div>
  );
}