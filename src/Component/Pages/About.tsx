import aboutImg from "../../assets/about-img.avif";
import { Target, Eye } from "lucide-react";
import Navbar from "../Layouts/Navbar";
import { Footer } from "../Layouts/Footer";


export default function About () {
  return (
    <div>
      <Navbar/>
      <div className="bg-green-900 text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-3">
          Our Story
        </h1>
        <p className="text-[#CCDBD0] text-sm md:text-base">
          Making international trade personal, ethical, and transformative.
        </p>
      </div>

      <div className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <img
              src={aboutImg} 
              alt="about"
               className="w-full md:w-[380px] h-[450px] object-cover rounded-2xl shadow-lg mx-auto"
/>
          </div>

          <div>
            <p className="text-yellow-600 text-xs tracking-widest mb-2">
              ♡ A 2026 STARTUP
            </p>

            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
              Rooted in India, <br /> Built for the World.
            </h2>

            <p className="text-gray-600 text-sm leading-6 mb-4">
              Aruvanaa was founded with a dream — that Indian commodities
              deserve a global platform. In a world where international trade
              often feels impersonal and purely transactional, we chose to make
              it deeply human.
            </p>

            <p className="text-gray-600 text-sm leading-6 mb-4">
              India is home to an extraordinary wealth of agricultural produce —
              grown with care, tradition, and generational knowledge. We
              witnessed firsthand the gap between this exceptional local quality
              and the international markets that hunger for it.
            </p>

            <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 mb-4">
              “We don’t just move boxes; we connect lives, cultures, and
              communities through the universal language of food.”
            </div>

            <p className="text-gray-600 text-sm leading-6">
              Today, operating seamlessly between India and the UAE, we are proud
              to be the bridge that brings prosperity to farmers, transparency to
              trade, and absolute trust to every transaction.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-900 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        
        <div className="bg-green-800/60 border border-green-700 rounded-2xl p-8 shadow-md">
          
          <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-xl mb-6">
            <Target className="text-green-900" size={20} />
          </div>

          <h2 className="text-white text-2xl font-serif mb-4">
            Our Mission
          </h2>

          <p className="text-green-200 text-sm leading-6">
            To bridge the gap between India’s rich agricultural heritage and
            the world’s demand for quality commodities — bringing prosperity to
            farmers, transparency to trade, and unshakeable trust to every
            transaction we touch.
          </p>
        </div>

        <div className="bg-green-800/60 border border-green-700 rounded-2xl p-8 shadow-md">
          
          <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-xl mb-6">
            <Eye className="text-green-900" size={20} />
          </div>

          <h2 className="text-white text-2xl font-serif mb-4">
            Our Vision
          </h2>

          <p className="text-green-200 text-sm leading-6">
            To become South Asia’s most trusted and culturally connected
            commodity trading bridge by 2030, empowering local communities
            through ethical, sustainable, and transparent global trade.
          </p>
        </div>

      </div>
    </div>
    <Footer/>
    </div>
  );
};


