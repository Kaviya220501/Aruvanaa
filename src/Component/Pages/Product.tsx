import cake from "../../assets/cake.jpeg";
import snacks from "../../assets/snacks.jpeg";
import coke from "../../assets/coke.jpeg";
import fruits from "../../assets/Fruits.jpeg";
import rice from "../../assets/rice.jpeg";
import pototo from "../../assets/pototo.jpeg";
import dates from "../../assets/dates.jpeg";
import ghee from "../../assets/ghee.jpeg";
import egg from "../../assets/eggs.jpeg";
import Navbar from "../Layouts/Navbar";
import { Footer } from "../Layouts/Footer";

const data = [
  {
    title: "Snack Foods",
    desc: "Potato chips, corn chips, nachos, popcorn, crackers, granola bars, packed nuts.",
    img: snacks,
  },
  {
    title: "Dairy Products",
    desc: "Fresh milk, UHT milk, butter, cheese, yogurt, condensed milk.",
    img: cake,
  },
  {
    title: "Soft Drinks & Carbonated Water",
    desc: "Carbonated drinks, flavored soda, sparkling water, energy drinks.",
    img: coke,
  },
  {
    title: "Vegetables & Fruits",
    desc: "Apples, mangoes, grapes, tomatoes, onions, seasonal fresh produce.",
    img: fruits,
  },
  {
    title: "Grains, Cereals & Legumes",
    desc: "Wheat, rice, barley, oats, lentils, chickpeas, quinoa.",
    img: rice,
  },
  {
    title: "Dates Trading",
    desc: "Fresh dates, dry dates, stuffed dates, date paste, premium gift boxes.",
    img: dates,
  },
  {
    title: "Ghee & Vegetable Oils",
    desc: "Sunflower oil, olive oil, coconut oil, pure cow ghee.",
    img: ghee,
  },
  {
    title: "Egg Trading",
    desc: "Fresh chicken eggs, duck eggs, quail eggs, liquid egg products.",
    img: egg,
  },
  {
    title: "Potatoes Trading",
    desc: "Fresh potatoes, baby potatoes, frozen potatoes, potato flakes.",
    img: pototo,
  },
];

export default function Commodities() {
  return (
    <div>
      <Navbar />
      <div className="bg-green-900 text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-3">
          Our Commodities
        </h1>
        <p className="text-[#CCDBD0] text-sm md:text-base">
          Fully licensed and certified across 10 major categories, providing an
          expansive portfolio of high-quality products.
        </p>
      </div>

      <div className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <h3 className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                  {item.title}
                </h3>
              </div>

              <div className="p-3">
                <p className="text-gray-600 text-xs leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
