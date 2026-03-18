import { Footer } from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import { Link } from "react-router-dom";
import hero from '../../assets/hero.png'
import fruits from '../../assets/fruits.png'
import sun from '../../assets/sun.png'
import dates from '../../assets/dates.png'
import rice from '../../assets/rice.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow">
        <section 
          className="relative min-h-[85vh] flex items-center bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${hero})` }}
        >
          
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Connecting India to the UAE & Beyond</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif mb-6 leading-tight">
                Trade Beyond <span className="text-[#c5a059] italic">Borders.</span>
              </h1>
              
              <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl">
                Aruvanaa bridges the gap between India's rich agricultural heritage and global markets. 
                We ensure quality, transparency, and trust in every transaction.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                 onClick={() => navigate("/products")}
                 className="bg-[#c5a059] hover:bg-[#b48e48] text-[#1a3c1a] px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                  Explore Commodities <span>→</span>
                </button>
                <button
                 onClick={() => navigate("/about")}
                 className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all">
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        
        <section className="relative z-20 -mt-16 container mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 border border-gray-100">
            <StatItem icon="fa-globe" title="India & UAE" sub="GLOBAL REACH" />
            <StatItem icon="fa-shield-halved" title="10+" sub="LICENSED CATEGORIES" />
            <StatItem icon="fa-ship" title="End-to-End" sub="LOGISTICS" />
            <StatItem icon="fa-chart-line" title="2026" sub="FOUNDED" />
          </div>
        </section>

        <section className="py-24 container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-serif text-[#1a3c1a] mb-8 leading-tight">
                Rooted in Tradition,<br />
                Built for the <span className="text-[#2d5a27]">Future</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Aruvanaa was founded with a clear vision: Indian commodities deserve a premium global platform. 
                  We connect India's finest agricultural produce directly to markets in the UAE and beyond.
                </p>
                <p>
                  We manage the entire supply chain—from sourcing directly from farmers to customs clearance 
                  and last-mile delivery in Dubai—ensuring unmatched quality and reliability.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-[#2d5a27] font-bold mt-8 hover:gap-4 transition-all">
                Discover our Integrated Services <span>→</span>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img src={sun} alt="Agricultural Fields" className="rounded-[40px] shadow-2xl w-full object-cover h-[500px]" />
            </div>
          </div>
        </section>

        <section className="py-24 px-5  bg-[#1A5B2A] text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-5xl font-serif mb-6">Premium Commodities</h2>
                <p className="opacity-80 text-lg leading-relaxed">
                  We hold extensive licenses to trade in 10 major food and agricultural categories, 
                  ensuring a diverse and reliable supply for our partners.
                </p>
              </div>
              <button className="hidden lg:block border border-white/30 hover:bg-white hover:text-[#1a3c1a] px-8 py-3 rounded-full font-bold transition-all">
                View All Products
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard 
                title="Vegetables & Fruits" 
                img={fruits}  
              />
              <ProductCard 
                title="Grains & Cereals" 
                img={rice} 
              />
              <ProductCard 
                title="Premium Dates" 
                img={dates} 
                isDarkOverlay
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
function StatItem({ icon, title, sub }: { icon: string, title: string, sub: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border-r last:border-0 border-gray-100 md:odd:border-r-0 lg:odd:border-r lg:even:border-r lg:last:border-0">
      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#2d5a27]">
        <i className={`fa-solid ${icon} text-2xl`}></i>
      </div>
      <h3 className="text-3xl font-serif text-[#1a3c1a] font-bold">{title}</h3>
      <p className="text-[10px] tracking-widest text-gray-400 font-bold uppercase mt-1">{sub}</p>
    </div>
  );
}

function ProductCard({ title, img, isDarkOverlay }: { title: string, img: string, isDarkOverlay?: boolean }) {
  return (
    <div className="group relative h-[400px]  rounded-[32px] overflow-hidden cursor-pointer">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className={`absolute inset-0 ${isDarkOverlay ? 'bg-gradient-to-t from-black/80 via-black/20' : 'bg-black/20 group-hover:bg-black/40 transition-colors'}`}></div>
      <div className="absolute bottom-10 left-10">
        <h3 className="text-3xl font-serif mb-2">{title}</h3>
        <div className="w-12 h-1 bg-[#c5a059]"></div>
      </div>
    </div>
  );
}