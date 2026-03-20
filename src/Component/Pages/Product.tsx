import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cake from "../../assets/cake.jpeg";
import snacks from "../../assets/snacks.jpeg";
import coke from "../../assets/coke.png";
import fruits from "../../assets/Fruits.jpeg";
import rice from "../../assets/rice.jpeg";
import pototo from "../../assets/pototo.jpeg";
import dates from "../../assets/dates.jpeg";
import ghee from "../../assets/ghee.jpeg";
import egg from "../../assets/eggs.jpeg";
import milkpowder from "../../assets/MilkPowder.png";
import figs from "../../assets/Figs.png";
import guava from "../../assets/Guava.png";
import orange from "../../assets/Orange.png";
import apple from "../../assets/Apple.png";
import lemon from "../../assets/Lemon.png";
import pomegranate from "../../assets/Pomegranate.png";
import coconut from "../../assets/Coconut.png";
import onion from "../../assets/Onion.png";
import okra from "../../assets/Okra.png";
import cucumber from "../../assets/Cucumber.png";
import millets from "../../assets/Millets.png";
import milletflour from "../../assets/MilletFlour.png";
import Grandnutoil from "../../assets/GrandNutOil.png";
import sunfloweroil from "../../assets/SunflowerOil.png";
import moringaseed from "../../assets/MoringaSeed.png";
import Navbar from "../Layouts/Navbar";
import { Footer } from "../Layouts/Footer";

// ── types ─────────────────────────────────────────────────────────────────────
export interface ProductItem {
  name: string;
  description: string;
  img: string;
  specs?: {
    productNameGrade?: string;
    itemCode?: string;
    grossWeight?: string;
    netWeight?: string;
    numberOfPackages?: string;
    productColor?: string;
    productQuality?: string;
    quantity?: string;
    size?: string;
    count?: string;
    weight?: string;
    cbm?: string;
    packingDate?: string;
    shipperInfo?: string;
  };
}

export interface SubCategory {
  name: string;
  description: string;
  img: string;
  products: ProductItem[];
}

export interface Category {
  title: string;
  desc: string;
  img: string;
  subCategories: SubCategory[]; // empty array = coming soon
}

// ── data ──────────────────────────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  {
    title: "Snack Foods",
    desc: "Potato chips, corn chips, nachos, popcorn, crackers, granola bars, packed nuts.",
    img: snacks,
    subCategories: [], 
  },
  {
    title: "Dairy Products",
    desc: "Fresh milk, UHT milk, butter, cheese, yogurt, condensed milk.",
    img: cake,
    subCategories: [
      {
        name: "Fresh Ghee",
        description: "Pure clarified cow butter ghee",
        img: ghee,
        products: [
          { name: "Standard Golden Quality Cow Ghee", img: ghee, description: "Pure clarified butter ghee made from fresh cow cream. Rich aroma, golden colour, ideal for cooking and religious use.", specs: { productNameGrade: "Cow Ghee / A Grade Export", itemCode: "DG-001", grossWeight: "1.05 kg", netWeight: "1 kg", numberOfPackages: "12 tins/carton", productColor: "Golden Yellow", productQuality: "Premium Export Grade", quantity: "1 kg / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
          // { name: "Standard Golden Quality Ghee", img: ghee, description: "High-quality blended ghee with a rich golden hue, suitable for bulk export and food manufacturing.", specs: { productNameGrade: "Blended Ghee / Standard Grade", itemCode: "DG-002", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "4 tins/carton", productColor: "Golden Yellow", productQuality: "Standard Export Grade", quantity: "5 kg / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
          // { name: "Fresh Desi Ghee Exporters", img: ghee, description: "Traditionally churned desi ghee from indigenous cow breeds. Deep flavour and granular texture.", specs: { productNameGrade: "Desi Cow Ghee / Premium Grade", itemCode: "DG-003", grossWeight: "1.05 kg", netWeight: "1 kg", numberOfPackages: "12 tins/carton", productColor: "Light Yellow", productQuality: "Premium Organic Grade", quantity: "1 kg / glass jar", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
          // { name: "Rich-Quality Flavorful Golden Cow Ghee", img: ghee, description: "Full-bodied, aromatic cow ghee with a naturally rich flavour, packed in tamper-proof containers.", specs: { productNameGrade: "Cow Ghee / Export Premium", itemCode: "DG-004", grossWeight: "2.1 kg", netWeight: "2 kg", numberOfPackages: "6 tins/carton", productColor: "Deep Gold", productQuality: "Export Premium Grade", quantity: "2 kg / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        ],
      },
      {
        name: "Fresh Milk Powder",
        description: "Spray-dried whole and skimmed milk powders",
        img: milkpowder,
        products: [
          { name: "Natural Pearlized Milky Sweetness Dairy Powder", img: milkpowder, description: "Naturally sweet whole milk powder with a creamy texture, ideal for beverages and confectionery.", specs: { productNameGrade: "Whole Milk Powder / A Grade", itemCode: "MP-001", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Creamy White", productQuality: "Premium Export Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
          // { name: "High-Quality Powder Exporters", img: milkpowder, description: "Consistent high-quality skimmed milk powder for dairy processors and food manufacturers.", specs: { productNameGrade: "Skimmed Milk Powder / A Grade", itemCode: "MP-002", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Pure White", productQuality: "Export Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
          // { name: "Skimmed Milk Powder Export India To Gulf", img: milkpowder, description: "Premium skimmed milk powder exported to Gulf countries. Low fat, high protein content.", specs: { productNameGrade: "Skimmed Milk Powder / Export Grade", itemCode: "MP-003", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Pure White", productQuality: "Gulf Export Grade", quantity: "25 kg / multi-wall bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
          // { name: "Natural Deliciously Creamy Dairy Powder", img: milkpowder, description: "Full-cream dairy powder with a smooth, creamy flavour profile, suitable for ice cream and bakery.", specs: { productNameGrade: "Full Cream Milk Powder / Premium", itemCode: "MP-004", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Creamy White", productQuality: "Premium Export Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
          // { name: "Superb Food Grade Indian Caramel Milk Powder", img: milkpowder, description: "Uniquely processed caramel-flavoured milk powder ideal for confectionery, toffee and dessert manufacturing.", specs: { productNameGrade: "Caramel Milk Powder / Food Grade", itemCode: "MP-005", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Light Brown", productQuality: "Food Grade Export", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        ],
      },
    ],
  },
  {
    title: "Soft Drinks & Carbonated Water",
    desc: "Carbonated drinks, flavored soda, sparkling water, energy drinks.",
    img: coke,
    subCategories: [], // coming soon
  },
  {
    title: "Vegetables & Fruits",
    desc: "Apples, mangoes, grapes, tomatoes, onions, seasonal fresh produce.",
    img: fruits,
    subCategories: [
      { name: "Figs", description: "Premium quality fresh and dried figs", img: figs, products: [
        { name: "Good Nutritional Powerhouse of Fresh Fig", img: figs, description: "Fresh figs packed with fibre, vitamins and minerals. Rich taste, soft texture, ideal for direct consumption and processing.", specs: { productNameGrade: "Fresh Figs / A Grade Export", itemCode: "FG-001", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Purple-Green", productQuality: "A Grade Export", quantity: "5 kg / carton", size: "40–60 mm diameter", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Superior Fig Quality of Fruity Anjeer Exporters", img: figs, description: "Export-quality Anjeer (fig) with superior taste, natural sweetness and excellent shelf life.", specs: { productNameGrade: "Anjeer / Superior Export Grade", itemCode: "FG-002", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Brown-Purple", productQuality: "Superior Export Grade", quantity: "10 kg / carton", size: "50–70 mm diameter", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Natural and Fresh Quality of Fig / Anjeer Fruits", img: figs, description: "Naturally grown figs with authentic flavour, harvested at peak ripeness for maximum nutritional value.", specs: { productNameGrade: "Fig / Natural Grade A", itemCode: "FG-003", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Purple", productQuality: "Natural Grade A", quantity: "5 kg / carton", size: "45–65 mm diameter", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Unique Aroma Sweet Fruity of Figs Exporters", img: figs, description: "Aromatic sweet figs with a unique flavour profile, ideal for gourmet food and export markets.", specs: { productNameGrade: "Aromatic Figs / Gourmet Grade", itemCode: "FG-004", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Deep Purple", productQuality: "Gourmet Export Grade", quantity: "5 kg / carton", size: "50–70 mm", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Fresh Guava", description: "Premium tropical guava exports", img: guava, products: [
        { name: "Exclusive Customized Customer Brand Guava", img: guava, description: "Custom-branded guava packing available for private label export with consistent quality and size grading.", specs: { productNameGrade: "Guava / Custom Brand Export", itemCode: "GV-001", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Light Green to Yellow", productQuality: "A Grade Export", quantity: "10 kg / carton", size: "150–300 g per fruit", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Rich Quality and Powerhouse of Nutrients Guava", img: guava, description: "Nutrient-dense guava rich in Vitamin C, fibre and antioxidants.", specs: { productNameGrade: "Guava / Premium Nutrient Grade", itemCode: "GV-002", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Green-Yellow", productQuality: "Premium Export Grade", quantity: "10 kg / carton", size: "200–350 g per fruit", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Wholesale Good Taste Green Guava", img: guava, description: "Wholesale-grade green guava with crisp texture and excellent taste, available in bulk.", specs: { productNameGrade: "Green Guava / Wholesale Grade", itemCode: "GV-003", grossWeight: "20.2 kg", netWeight: "20 kg", numberOfPackages: "1 carton", productColor: "Green", productQuality: "Wholesale Grade A", quantity: "20 kg / carton", size: "100–250 g per fruit", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Super Long Lasting Flavor of Guava Export", img: guava, description: "Long shelf-life guava with sustained natural aroma and flavour, specially processed for export.", specs: { productNameGrade: "Guava / Long Shelf Export", itemCode: "GV-004", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Yellow-Green", productQuality: "Export Long Shelf Grade", quantity: "10 kg / carton", size: "200–300 g per fruit", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Orange", description: "Premium citrus orange exports", img: orange, products: [
        { name: "100% Sortexed Naval Orange Exporters", img: orange, description: "Machine-sortexed naval oranges of consistent size and colour, ideal for premium retail and juice manufacturing.", specs: { productNameGrade: "Naval Orange / Sortex A Grade", itemCode: "OR-001", grossWeight: "15.2 kg", netWeight: "15 kg", numberOfPackages: "1 carton", productColor: "Deep Orange", productQuality: "Sortex A Grade Export", quantity: "15 kg / carton", count: "72–88 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Premium Citrus Fruity and Sweet with Tart Taste", img: orange, description: "Sweet-tart premium citrus oranges with excellent juice content and long shelf life.", specs: { productNameGrade: "Citrus Orange / Premium Grade", itemCode: "OR-002", grossWeight: "15.2 kg", netWeight: "15 kg", numberOfPackages: "1 carton", productColor: "Bright Orange", productQuality: "Premium Export Grade", quantity: "15 kg / carton", count: "64–80 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "High Quality Wholesale Fresh Citrus Fruity", img: orange, description: "Wholesale fresh citrus oranges with natural freshness, packed for bulk export.", specs: { productNameGrade: "Orange / Wholesale Fresh Grade", itemCode: "OR-003", grossWeight: "20.2 kg", netWeight: "20 kg", numberOfPackages: "1 carton", productColor: "Orange", productQuality: "Wholesale Grade A", quantity: "20 kg / carton", size: "65–80 mm diameter", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Super Long Lasting Flavor of Orange Export", img: orange, description: "Long shelf-life oranges with sustained flavour, specially packed for long-distance export.", specs: { productNameGrade: "Orange / Export Long Shelf", itemCode: "OR-004", grossWeight: "15.2 kg", netWeight: "15 kg", numberOfPackages: "1 carton", productColor: "Deep Orange", productQuality: "Long Shelf Export Grade", quantity: "15 kg / carton", size: "70–85 mm diameter", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Apple", description: "Premium fresh apple exports", img: apple, products: [
        { name: "Best Edible Fruity of Juicy Apple Exporters", img: apple, description: "Juicy, crisp apples with excellent eating quality, machine-sorted and graded for export markets.", specs: { productNameGrade: "Apple / A Grade Export", itemCode: "AP-001", grossWeight: "18.2 kg", netWeight: "18 kg", numberOfPackages: "1 carton", productColor: "Red", productQuality: "A Grade Export", quantity: "18 kg / carton", count: "72–88 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Long Shelf Life and Fresh Sour Apple Exporters", img: apple, description: "Sour variety apples with extended shelf life, ideal for processing, juice and retail export.", specs: { productNameGrade: "Sour Apple / Long Shelf Export", itemCode: "AP-002", grossWeight: "18.2 kg", netWeight: "18 kg", numberOfPackages: "1 carton", productColor: "Green", productQuality: "Export Long Shelf Grade", quantity: "18 kg / carton", count: "80–100 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "High Quality Jonagold Apple Fruity Exporters", img: apple, description: "Premium Jonagold variety apples — a superb blend of sweet and tart, with firm flesh and rich aroma.", specs: { productNameGrade: "Jonagold Apple / Premium Grade", itemCode: "AP-003", grossWeight: "18.2 kg", netWeight: "18 kg", numberOfPackages: "1 carton", productColor: "Red-Yellow", productQuality: "Premium Export Grade", quantity: "18 kg / carton", count: "64–80 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Exclusive Packing of Aroma Apple Exporters", img: apple, description: "Aromatic apples in exclusive branded packing, suitable for premium retail and gift markets.", specs: { productNameGrade: "Aroma Apple / Exclusive Grade", itemCode: "AP-004", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 gift carton", productColor: "Deep Red", productQuality: "Premium Exclusive Grade", quantity: "10 kg / gift carton", count: "36–48 count/carton", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Indian Sweet Gala Apple Exporters / Manufacturers", img: apple, description: "Indian-grown sweet Gala apples with vibrant colour and crisp texture, directly from manufacturer-exporters.", specs: { productNameGrade: "Gala Apple / Sweet Grade A", itemCode: "AP-005", grossWeight: "18.2 kg", netWeight: "18 kg", numberOfPackages: "1 carton", productColor: "Red-Orange", productQuality: "A Grade Sweet Export", quantity: "18 kg / carton", count: "72–100 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Fresh Lemon", description: "Premium citrus lemon exports", img: lemon, products: [
        { name: "Natural Lasting Citrus Freshness of Neembu", img: lemon, description: "Fresh Neembu (Indian lemon) with lasting citrus aroma and high juice content, ideal for export.", specs: { productNameGrade: "Neembu Lemon / A Grade", itemCode: "LM-001", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Bright Yellow", productQuality: "A Grade Export", quantity: "10 kg / carton", count: "130–150 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Export Quality Natural Mature Lemons Suppliers", img: lemon, description: "Naturally matured lemons with high Vitamin C content, sorted and graded for export.", specs: { productNameGrade: "Mature Lemon / Export Grade", itemCode: "LM-002", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Deep Yellow", productQuality: "Export Grade", quantity: "10 kg / carton", count: "120–140 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Beautiful Sunshine Crisp Citrus Lemon", img: lemon, description: "Sunshine-yellow crisp lemons with thin peel and abundant juice, premium export quality.", specs: { productNameGrade: "Citrus Lemon / Premium Crisp", itemCode: "LM-003", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Sunshine Yellow", productQuality: "Premium Export Grade", quantity: "10 kg / carton", size: "55–70 mm diameter", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "100% Sortexed Citrus Green/Yellow Lemon", img: lemon, description: "Machine-sortexed lemons available in both green and yellow, consistent size and quality.", specs: { productNameGrade: "Sortex Lemon / Green-Yellow Grade", itemCode: "LM-004", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Green / Yellow", productQuality: "Sortex Export Grade", quantity: "10 kg / carton", count: "130–160 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Naturally Bold Quality Citrus Lemon", img: lemon, description: "Bold, large-size lemons with intense citrus flavour, ideal for hospitality and food service.", specs: { productNameGrade: "Bold Lemon / Large Grade A", itemCode: "LM-005", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Yellow", productQuality: "Large Grade A Export", quantity: "10 kg / carton", size: "65–80 mm diameter", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Fresh Pomegranate", description: "Premium pomegranate exports", img: pomegranate, products: [
        { name: "Long Lasting Fresh Ruby-Red Fruit / Pomegranate", img: pomegranate, description: "Vibrant ruby-red pomegranates with long shelf life, packed for premium retail and export.", specs: { productNameGrade: "Pomegranate / Ruby Red A Grade", itemCode: "PM-001", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Ruby Red", productQuality: "A Grade Export", quantity: "10 kg / carton", count: "12–18 count/carton", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Natural Fresh Pomegranate With Best Quality", img: pomegranate, description: "Naturally fresh pomegranates of the best quality, rich in antioxidants and juice content.", specs: { productNameGrade: "Pomegranate / Premium Natural", itemCode: "PM-002", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Deep Red", productQuality: "Premium Natural Grade", quantity: "10 kg / carton", weight: "350–500 g per fruit", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Attractive Ornamental Fruits of Pomegranate", img: pomegranate, description: "Ornamentally attractive pomegranates, perfect for premium gifting and high-end retail.", specs: { productNameGrade: "Pomegranate / Ornamental Premium", itemCode: "PM-003", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 gift carton", productColor: "Bright Red", productQuality: "Premium Gift Grade", quantity: "5 kg / gift carton", count: "6–9 count/carton", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Wonderful Seed Quality of Pomegranate Exports", img: pomegranate, description: "Pomegranates with superior arils — large, juicy and brilliantly coloured, ideal for processing.", specs: { productNameGrade: "Pomegranate / Superior Arils Grade", itemCode: "PM-004", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Ruby Red", productQuality: "Superior Arils Export Grade", quantity: "10 kg / carton", weight: "400–550 g per fruit", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "One of Key Ingredient of Fruits Pomegranate", img: pomegranate, description: "Key ingredient pomegranates for juice, pharmaceutical and nutraceutical industries. High Brix value.", specs: { productNameGrade: "Pomegranate / Ingredient Grade A", itemCode: "PM-005", grossWeight: "15.2 kg", netWeight: "15 kg", numberOfPackages: "1 carton", productColor: "Dark Red", productQuality: "Ingredient Grade A", quantity: "15 kg / carton", size: "7–8 cm diameter", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Fresh Coconut", description: "Premium fresh coconut exports", img: coconut, products: [
        { name: "Fresh Coconut Exporters", img: coconut, description: "Fresh whole coconuts packed for export with consistent weight, moisture and husk quality.", specs: { productNameGrade: "Fresh Coconut / A Grade Export", itemCode: "CN-001", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 net bag", productColor: "Brown Husk", productQuality: "A Grade Export", quantity: "25 kg / net bag", count: "25–30 nuts/bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Excellent Moisturizer Fresh Natural Brown Coconut", img: coconut, description: "Naturally moisturising fresh brown coconuts with rich copra content, ideal for oil extraction.", specs: { productNameGrade: "Brown Coconut / Oil Grade A", itemCode: "CN-002", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 net bag", productColor: "Brown", productQuality: "Oil Grade A", quantity: "25 kg / bag", count: "20–25 nuts/bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Royal King of Coconut Exporters", img: coconut, description: "Large premium King coconuts with abundant sweet water, ideal for premium beverage market.", specs: { productNameGrade: "King Coconut / Premium Export", itemCode: "CN-003", grossWeight: "20.2 kg", netWeight: "20 kg", numberOfPackages: "1 carton", productColor: "Orange-Yellow", productQuality: "Premium Export Grade", quantity: "20 kg / carton", count: "12–15 nuts/carton", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Dazzling Dwarf King Coconut with Exclusive Packing", img: coconut, description: "Compact dwarf king coconuts in exclusive branded packing, suitable for gift and premium retail.", specs: { productNameGrade: "Dwarf King Coconut / Exclusive", itemCode: "CN-004", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 gift carton", productColor: "Bright Orange", productQuality: "Exclusive Premium Grade", quantity: "10 kg / gift carton", count: "6–8 nuts/carton", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Premium and Export Semi Husked Fresh Coconut", img: coconut, description: "Semi-husked fresh coconuts trimmed for easy transport, preferred for Gulf and international markets.", specs: { productNameGrade: "Semi Husked Coconut / Export Grade", itemCode: "CN-005", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 net bag", productColor: "White-Brown", productQuality: "Export Grade", quantity: "25 kg / net bag", count: "20–30 nuts/bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Onion", description: "Premium fresh onion exports", img: onion, products: [
        { name: "Exclusive Delicious Vegetable of Onion", img: onion, description: "Premium grade onions with pungent flavour and firm texture, ideal for export and bulk retail.", specs: { productNameGrade: "Onion / A Grade Export", itemCode: "ON-001", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 net bag", productColor: "Red / White", productQuality: "A Grade Export", quantity: "25 kg / net bag", size: "45–65 mm diameter", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Fresh Small Onion Suppliers", img: onion, description: "Small shallot onions (chinna vengayam) with intense flavour, widely used in South Indian and Gulf cuisine.", specs: { productNameGrade: "Small Onion (Shallot) / A Grade", itemCode: "ON-002", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 net bag", productColor: "Pink-Red", productQuality: "A Grade Export", quantity: "25 kg / net bag", size: "20–35 mm diameter", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Authentic Quality Rose Small Onion Supplier", img: onion, description: "Authentic rose small onion (Madurai variety) with signature aroma and superior taste for export.", specs: { productNameGrade: "Rose Onion / Madurai Special Grade", itemCode: "ON-003", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 net bag", productColor: "Rose Pink", productQuality: "Madurai Special Export", quantity: "25 kg / net bag", size: "25–40 mm diameter", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Stylish Baby Onion / Tasty Rose Small Onion", img: onion, description: "Baby-sized rose onions, stylishly packed for premium retail and gourmet food markets.", specs: { productNameGrade: "Baby Rose Onion / Premium Grade", itemCode: "ON-004", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Rose", productQuality: "Premium Retail Grade", quantity: "10 kg / carton", size: "15–30 mm diameter", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Uniquely Enjoyable Taste Red Onion", img: onion, description: "Bold red onions with uniquely mild and sweet taste, excellent for salads, grills and export.", specs: { productNameGrade: "Red Onion / Sweet Grade A", itemCode: "ON-005", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 net bag", productColor: "Deep Red", productQuality: "Sweet Grade A Export", quantity: "25 kg / net bag", size: "50–70 mm diameter", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Fresh Okra", description: "Premium fresh okra / ladies finger exports", img: okra, products: [
        { name: "Natural Long Lasting Silky Structure of Okra", img: okra, description: "Fresh okra with silky smooth skin, tender texture and long-lasting freshness, ideal for export.", specs: { productNameGrade: "Okra / A Grade Export", itemCode: "OK-001", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Bright Green", productQuality: "A Grade Export", quantity: "5 kg / carton", size: "7–10 cm length", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Fresh Indian Veg Okra Exports in India", img: okra, description: "Fresh Indian okra (bhindi) with crisp texture and authentic taste, exported directly from farm to buyer.", specs: { productNameGrade: "Indian Okra / Fresh Export", itemCode: "OK-002", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Dark Green", productQuality: "Fresh Export Grade", quantity: "5 kg / carton", size: "8–12 cm length", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Naturally Delicious Vegetable of Lady's Finger", img: okra, description: "Tender lady's finger with naturally delicious flavour, sorted by size for consistency.", specs: { productNameGrade: "Lady's Finger / Premium Grade A", itemCode: "OK-003", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Green", productQuality: "Premium Grade A", quantity: "5 kg / carton", size: "7–9 cm length", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Best Warm Seasonal Vegetable of Okra", img: okra, description: "Warm-season harvest okra with peak freshness, naturally grown without artificial ripening agents.", specs: { productNameGrade: "Seasonal Okra / Natural Grade", itemCode: "OK-004", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Bright Green", productQuality: "Natural Seasonal Grade", quantity: "5 kg / carton", size: "6–10 cm length", packingDate: "Seasonal harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Cucumber", description: "Premium fresh cucumber exports", img: cucumber, products: [
        { name: "International Quality Seedless Burpless Cucumber", img: cucumber, description: "Seedless burpless cucumbers with crisp bite and no bitterness, meeting international quality standards.", specs: { productNameGrade: "Seedless Cucumber / International Grade", itemCode: "CU-001", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Dark Green", productQuality: "International Export Grade", quantity: "5 kg / carton", size: "25–35 cm length", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Exclusive Import-Friendly Fresh English Green Cucumber", img: cucumber, description: "Import-friendly English cucumbers with thin skin, minimal seeds and sweet taste.", specs: { productNameGrade: "English Cucumber / Import Grade A", itemCode: "CU-002", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Dark Green", productQuality: "Import Grade A", quantity: "5 kg / carton", size: "30–40 cm length", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Export Quality Fresh Long Seedless English Cucumber", img: cucumber, description: "Long, seedless English cucumbers packed for export, consistent diameter and length.", specs: { productNameGrade: "Long Seedless Cucumber / Export Grade", itemCode: "CU-003", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Green", productQuality: "Export Grade A", quantity: "5 kg / carton", size: "35–45 cm length", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Premium Uniform Cylindrical Shape Green Cucumber", img: cucumber, description: "Premium cucumbers with uniform cylindrical shape, ideal for retail display and high-end food service.", specs: { productNameGrade: "Uniform Cucumber / Premium Grade", itemCode: "CU-004", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Bright Green", productQuality: "Premium Retail Grade", quantity: "5 kg / carton", size: "20–30 cm length, 3–4 cm diameter", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
        // { name: "Extra Crunchy Texture High Street Favorite Cucumber", img: cucumber, description: "High-street favourite cucumbers known for extra crunch and refreshing taste, popular in Gulf markets.", specs: { productNameGrade: "Crunchy Cucumber / Gulf Export Grade", itemCode: "CU-005", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "1 carton", productColor: "Deep Green", productQuality: "Gulf Export Grade", quantity: "5 kg / carton", size: "20–30 cm length", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
    ],
  },
  {
    title: "Grains, Cereals & Legumes",
    desc: "Wheat, rice, barley, oats, lentils, chickpeas, quinoa.",
    img: rice,
    subCategories: [
      { name: "Raw Millet", description: "Premium raw millet grains for export", img: millets, products: [
        { name: "Unique Aroma of Brown/Finger Millet", img: millets, description: "Brown finger millet (Ragi/Keppai) with a unique nutty aroma, rich in calcium, iron and fibre.", specs: { productNameGrade: "Finger Millet / A Grade Export", itemCode: "ML-001", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Reddish Brown", productQuality: "A Grade Export", quantity: "25 kg / PP bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Famous Tamil Finger Millet for Keppai", img: millets, description: "Tamil Nadu's famous Keppai (finger millet), traditionally grown and naturally dried for maximum nutrition.", specs: { productNameGrade: "Keppai Millet / Tamil Special Grade", itemCode: "ML-002", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Brown", productQuality: "Tamil Special Export", quantity: "25 kg / PP bag", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Rich Colorful of Nachani/Brown Millet", img: millets, description: "Rich-coloured Nachani (Ragi) with excellent nutritional profile, ideal for flour and health food market.", specs: { productNameGrade: "Nachani Millet / Nutrition Grade", itemCode: "ML-003", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Dark Brown-Red", productQuality: "Nutrition Export Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Exclusive Special Export Grade Millet", img: millets, description: "Specially selected and graded millet for export, cleaned and sortexed to international standards.", specs: { productNameGrade: "Millet / Special Export Grade", itemCode: "ML-004", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Brown", productQuality: "Special Export Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Millet Flour", description: "Premium millet flour products", img: milletflour, products: [
        { name: "Natural Tasty of Adai Ragi Flour / Finger Millet", img: milletflour, description: "Stone-ground finger millet flour for traditional Adai and health food preparation. Natural, unprocessed.", specs: { productNameGrade: "Ragi Flour / Natural Stone Ground", itemCode: "MF-001", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Light Brown", productQuality: "Natural Stone Ground Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Superior Grade and Andhra Special Red Millet Flour", img: milletflour, description: "Andhra Pradesh special red millet flour with superior granularity, ideal for traditional dishes.", specs: { productNameGrade: "Red Millet Flour / Andhra Special", itemCode: "MF-002", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Red-Brown", productQuality: "Andhra Special Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Natural Polished Nachni / Birds Foot Millet Flour", img: milletflour, description: "Polished Nachni flour with smooth texture, suitable for bakery, health drinks and porridge.", specs: { productNameGrade: "Nachni Flour / Polished Grade A", itemCode: "MF-003", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Light Reddish Brown", productQuality: "Polished Grade A", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "High Quality and Unique Shape Millet Flour", img: milletflour, description: "High-quality uniquely milled millet flour with consistent particle size, suitable for industrial use.", specs: { productNameGrade: "Millet Flour / Industrial Grade A", itemCode: "MF-004", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Brown", productQuality: "Industrial Grade A", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
    ],
  },
  {
    title: "Dates Trading",
    desc: "Fresh dates, dry dates, stuffed dates, date paste, premium gift boxes.",
    img: dates,
    subCategories: [], 
  },
  {
    title: "Ghee & Vegetable Oils",
    desc: "Sunflower oil, olive oil, coconut oil, pure cow ghee.",
    img: ghee,
    subCategories: [
      { name: "Fresh Ghee", description: "Pure cow and desi ghee", img: ghee, products: [
        { name: "Standard Golden Quality Cow Ghee", img: ghee, description: "Pure clarified cow ghee with standard golden colour and rich buttery aroma.", specs: { productNameGrade: "Cow Ghee / Standard Golden Grade", itemCode: "OG-001", grossWeight: "1.05 kg", netWeight: "1 kg", numberOfPackages: "12 tins/carton", productColor: "Golden Yellow", productQuality: "Standard Export Grade", quantity: "1 kg / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Standard Golden Quality Ghee", img: ghee, description: "Consistent quality blended ghee with golden colour, suitable for bulk export.", specs: { productNameGrade: "Blended Ghee / Golden Standard", itemCode: "OG-002", grossWeight: "5.1 kg", netWeight: "5 kg", numberOfPackages: "4 tins/carton", productColor: "Golden", productQuality: "Standard Export", quantity: "5 kg / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Fresh Desi Ghee Exporters", img: ghee, description: "Traditionally churned desi ghee with granular texture and deep aroma.", specs: { productNameGrade: "Desi Ghee / Organic Premium Grade", itemCode: "OG-003", grossWeight: "1.05 kg", netWeight: "1 kg", numberOfPackages: "12 jars/carton", productColor: "Light Yellow", productQuality: "Organic Premium", quantity: "1 kg / glass jar", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Rich-Quality Flavorful Golden Cow Ghee", img: ghee, description: "Rich-quality aromatic cow ghee, packed in tamper-proof containers for long-distance export.", specs: { productNameGrade: "Cow Ghee / Export Premium Aroma", itemCode: "OG-004", grossWeight: "2.1 kg", netWeight: "2 kg", numberOfPackages: "6 tins/carton", productColor: "Deep Gold", productQuality: "Export Premium Aroma", quantity: "2 kg / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Groundnut Oil / Peanut Oil", description: "Cold pressed and refined groundnut oil", img: Grandnutoil, products: [
        { name: "Natural Pearlized Cold Pressed Groundnut Oil", img: Grandnutoil, description: "Cold-pressed groundnut oil with natural nutty flavour and pearlescent clarity.", specs: { productNameGrade: "Groundnut Oil / Cold Pressed A Grade", itemCode: "GO-001", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 tins/carton", productColor: "Light Yellow", productQuality: "Cold Pressed A Grade", quantity: "5 L / tin", cbm: "0.04 CBM/carton", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "High-Quality Groundnut Oil Exporters", img: Grandnutoil, description: "High-quality refined groundnut oil with neutral flavour, suitable for all cooking applications.", specs: { productNameGrade: "Groundnut Oil / Refined Export Grade", itemCode: "GO-002", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 tins/carton", productColor: "Clear Yellow", productQuality: "Refined Export Grade", quantity: "5 L / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Groundnut Peanut Oil Export India To Gulf", img: Grandnutoil, description: "Premium groundnut oil exported to Gulf countries, tested for quality and meeting food safety standards.", specs: { productNameGrade: "Peanut Oil / Gulf Export Grade", itemCode: "GO-003", grossWeight: "15.3 L", netWeight: "15 L", numberOfPackages: "1 jerry can", productColor: "Golden Yellow", productQuality: "Gulf Export Grade", quantity: "15 L / jerry can", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Natural Deliciously Aromatic Groundnut Oil", img: Grandnutoil, description: "Aromatic groundnut oil with rich natural peanut fragrance.", specs: { productNameGrade: "Aromatic Groundnut Oil / Premium", itemCode: "GO-004", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 tins/carton", productColor: "Deep Golden", productQuality: "Premium Aromatic Grade", quantity: "5 L / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Superb Food Grade Indian Groundnut Oil", img: Grandnutoil, description: "Food-grade Indian groundnut oil, free from adulterants, tested to FSSAI and international standards.", specs: { productNameGrade: "Groundnut Oil / Food Grade FSSAI", itemCode: "GO-005", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 tins/carton", productColor: "Light Golden", productQuality: "Food Grade FSSAI Certified", quantity: "5 L / tin", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Moringa Seed Oil", description: "Premium cold pressed moringa seed oil", img: moringaseed, products: [
        { name: "Premium International Standard Moringa Seed Oil", img: moringaseed, description: "Cold-pressed moringa seed oil meeting international pharmaceutical and cosmetic standards.", specs: { productNameGrade: "Moringa Oil / International Standard", itemCode: "MS-001", grossWeight: "1.05 L", netWeight: "1 L", numberOfPackages: "12 bottles/carton", productColor: "Pale Yellow", productQuality: "International Pharma Grade", quantity: "1 L / amber bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Best Export Indian Quality and High Demand Moringa", img: moringaseed, description: "High-demand Indian moringa oil with best export quality, widely used in cosmetics, pharmaceuticals and food.", specs: { productNameGrade: "Moringa Oil / High Demand Export", itemCode: "MS-002", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 bottles/carton", productColor: "Light Yellow", productQuality: "High Demand Export Grade", quantity: "5 L / bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Ultimate Premium Quality Moringa Seed Oil", img: moringaseed, description: "Ultimate-grade pure moringa oil with highest oleic acid content, zero adulterants, cold-pressed.", specs: { productNameGrade: "Moringa Oil / Ultimate Premium", itemCode: "MS-003", grossWeight: "1.05 L", netWeight: "1 L", numberOfPackages: "12 bottles/carton", productColor: "Crystal Clear Yellow", productQuality: "Ultimate Premium Grade", quantity: "1 L / glass bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Dried Ben Seed Oil / Moringa Seed Oil", img: moringaseed, description: "Ben oil extracted from dried moringa seeds — stable, odourless oil ideal for cosmetic formulations.", specs: { productNameGrade: "Ben Seed Oil / Cosmetic Grade", itemCode: "MS-004", grossWeight: "1.05 L", netWeight: "1 L", numberOfPackages: "12 bottles/carton", productColor: "Pale Clear", productQuality: "Cosmetic Grade", quantity: "1 L / bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Good Quality and Natural Powerhouse of Nutrients", img: moringaseed, description: "Nutrient-rich moringa oil with natural antioxidants, vitamins A, C and E.", specs: { productNameGrade: "Moringa Oil / Nutrient Powerhouse Grade", itemCode: "MS-005", grossWeight: "500 ml", netWeight: "500 ml", numberOfPackages: "24 bottles/carton", productColor: "Light Golden", productQuality: "Nutrient Grade Export", quantity: "500 ml / bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Sunflower Seed Oil", description: "Refined and cold pressed sunflower oil", img: sunfloweroil, products: [
        { name: "The Best Ingredient of Natural Freshness Sunflower Oil", img: sunfloweroil, description: "Fresh, naturally processed sunflower oil that retains the original flavour profile and golden colour.", specs: { productNameGrade: "Sunflower Oil / Natural Fresh Grade", itemCode: "SO-001", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 bottles/carton", productColor: "Golden Yellow", productQuality: "Natural Fresh Export Grade", quantity: "5 L / PET bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Top Quality Yellow Pure Refined Sunflower Oil", img: sunfloweroil, description: "Premium refined sunflower oil with neutral taste and high smoke point, perfect for deep frying and cooking.", specs: { productNameGrade: "Sunflower Oil / Refined Premium Yellow", itemCode: "SO-002", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 bottles/carton", productColor: "Bright Yellow", productQuality: "Refined Premium Grade", quantity: "5 L / PET bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Unique Pure Aromatic Grade Sunflower Kernel Oil", img: sunfloweroil, description: "Cold-pressed sunflower kernel oil with a unique aromatic quality, ideal for salads and gourmet cooking.", specs: { productNameGrade: "Sunflower Kernel Oil / Aromatic Grade", itemCode: "SO-003", grossWeight: "1.05 L", netWeight: "1 L", numberOfPackages: "12 bottles/carton", productColor: "Clear Golden", productQuality: "Aromatic Cold Pressed Grade", quantity: "1 L / glass bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "High Quality Wooden Cold Pressed Sunflower Oil", img: sunfloweroil, description: "Traditionally wood-pressed sunflower oil with maximum nutrient retention and authentic taste.", specs: { productNameGrade: "Sunflower Oil / Wood Cold Pressed", itemCode: "SO-004", grossWeight: "1.05 L", netWeight: "1 L", numberOfPackages: "12 bottles/carton", productColor: "Deep Yellow", productQuality: "Wood Cold Pressed Premium", quantity: "1 L / bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Super Fine Edible Quality Unrefined Sunflower Oil", img: sunfloweroil, description: "Unrefined sunflower oil with super fine clarity and edible quality, preserving all natural vitamins.", specs: { productNameGrade: "Sunflower Oil / Unrefined Edible Grade", itemCode: "SO-005", grossWeight: "5.1 L", netWeight: "5 L", numberOfPackages: "4 bottles/carton", productColor: "Light Clear Yellow", productQuality: "Unrefined Edible Grade", quantity: "5 L / bottle", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
    ],
  },
  {
    title: "Egg Trading",
    desc: "Fresh chicken eggs, duck eggs, quail eggs, liquid egg products.",
    img: egg,
    subCategories: [
      { name: "Dry Egg Shell", description: "Processed egg shell powder products", img: egg, products: [
        { name: "Hot Selling Popular Crushed Egg Shell", img: egg, description: "Crushed egg shells for agricultural and animal feed applications, calcium-rich natural supplement.", specs: { productNameGrade: "Crushed Egg Shell / Feed Grade", itemCode: "ES-001", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Off White", productQuality: "Feed Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Superior Quality Finely Ground Egg Powder", img: egg, description: "Finely ground egg shell powder for pharmaceutical and nutraceutical use, high calcium content.", specs: { productNameGrade: "Egg Shell Powder / Pharma Grade", itemCode: "ES-002", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "White", productQuality: "Pharma Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Premium Grade of Trusted Egg Shell Powder", img: egg, description: "Premium-grade egg shell powder from trusted sources, tested for purity and calcium content.", specs: { productNameGrade: "Egg Shell Powder / Premium Grade", itemCode: "ES-003", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "Pure White", productQuality: "Premium Certified Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Purity and Potency of Our Premium Egg Shell Powder", img: egg, description: "Maximum purity and potency egg shell powder, processed under strict hygiene conditions for export.", specs: { productNameGrade: "Egg Shell Powder / Max Purity Export", itemCode: "ES-004", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 bag", productColor: "White", productQuality: "Max Purity Export Grade", quantity: "25 kg / bag", packingDate: "As per order", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "White Eggs", description: "Fresh white chicken eggs", img: egg, products: [
        { name: "Fresh White Chicken Eggs", img: egg, description: "Farm-fresh white chicken eggs with excellent shell quality and nutritional value.", specs: { productNameGrade: "White Egg / Farm Fresh Grade A", itemCode: "WE-001", grossWeight: "1.85 kg", netWeight: "1.8 kg", numberOfPackages: "1 tray (30 eggs)", productColor: "White", productQuality: "Grade A Farm Fresh", quantity: "30 eggs / tray", weight: "55–65 g per egg", packingDate: "Day of packing", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Namakkal Chicken White Eggs", img: egg, description: "Famous Namakkal white eggs, known for consistency in size, freshness and shell quality.", specs: { productNameGrade: "Namakkal White Egg / Premium Grade", itemCode: "WE-002", grossWeight: "1.85 kg", netWeight: "1.8 kg", numberOfPackages: "1 tray (30 eggs)", productColor: "White", productQuality: "Namakkal Premium Grade", quantity: "30 eggs / tray", weight: "55–70 g per egg", packingDate: "Day of packing", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Fresh Table White Eggs", img: egg, description: "Fresh table-quality white eggs, graded and packed for retail and food service.", specs: { productNameGrade: "Table Egg / White Grade A", itemCode: "WE-003", grossWeight: "1.85 kg", netWeight: "1.8 kg", numberOfPackages: "1 tray (30 eggs)", productColor: "White", productQuality: "Table Grade A", quantity: "30 eggs / tray", weight: "50–65 g per egg", packingDate: "Day of packing", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
      { name: "Brown Eggs", description: "Premium fresh brown chicken eggs", img: egg, products: [
        { name: "100% Maturity of Brown Eggs", img: egg, description: "Fully matured brown eggs with rich yolk colour and superior nutritional profile.", specs: { productNameGrade: "Brown Egg / Full Maturity Grade A", itemCode: "BE-001", grossWeight: "1.85 kg", netWeight: "1.8 kg", numberOfPackages: "1 tray (30 eggs)", productColor: "Brown", productQuality: "Full Maturity Grade A", quantity: "30 eggs / tray", weight: "55–65 g per egg", packingDate: "Day of packing", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Farm Freshly Laid Hen Brown Egg", img: egg, description: "Farm-fresh brown eggs laid by free-range hens, naturally nutritious with rich flavour.", specs: { productNameGrade: "Brown Egg / Farm Fresh Free Range", itemCode: "BE-002", grossWeight: "1.85 kg", netWeight: "1.8 kg", numberOfPackages: "1 tray (30 eggs)", productColor: "Brown", productQuality: "Free Range Farm Fresh", quantity: "30 eggs / tray", weight: "55–70 g per egg", packingDate: "Day of packing", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Premium Protein Quality Brown Eggs", img: egg, description: "High-protein premium brown eggs, ideal for health-conscious consumers and fitness markets.", specs: { productNameGrade: "Brown Egg / Premium Protein Grade", itemCode: "BE-003", grossWeight: "1.85 kg", netWeight: "1.8 kg", numberOfPackages: "1 tray (30 eggs)", productColor: "Rich Brown", productQuality: "Premium Protein Grade", quantity: "30 eggs / tray", weight: "60–70 g per egg", packingDate: "Day of packing", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
    ],
  },
  {
    title: "Potatoes Trading",
    desc: "Fresh potatoes, baby potatoes, frozen potatoes, potato flakes.",
    img: pototo,
    subCategories: [
      { name: "Sweet Potatoes", description: "Premium sweet potato exports", img: pototo, products: [
        { name: "Naturally Grown High Quality Camote Sweet Potato", img: pototo, description: "Naturally grown Camote (sweet potato) with vibrant orange flesh, high beta-carotene content and sweet taste.", specs: { productNameGrade: "Sweet Potato / Camote A Grade", itemCode: "SP-001", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 carton", productColor: "Orange-Brown Skin / Orange Flesh", productQuality: "A Grade Export", quantity: "25 kg / carton", size: "150–300 g per tuber", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Indian Sweet Potatoes Exporters and Suppliers", img: pototo, description: "Premium Indian sweet potatoes sourced from top growing regions, exported directly from certified suppliers.", specs: { productNameGrade: "Indian Sweet Potato / Export Grade", itemCode: "SP-002", grossWeight: "25.2 kg", netWeight: "25 kg", numberOfPackages: "1 carton", productColor: "Purple Skin / White Flesh", productQuality: "Export Grade A", quantity: "25 kg / carton", size: "100–250 g per tuber", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Finest Quality with Yummy Taste of Sweet Potato", img: pototo, description: "Finest quality sweet potatoes with irresistible taste, packed fresh for export with extended shelf life.", specs: { productNameGrade: "Sweet Potato / Finest Yummy Grade", itemCode: "SP-003", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Orange Skin / Orange Flesh", productQuality: "Finest Yummy Grade", quantity: "10 kg / carton", size: "200–350 g per tuber", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      //   { name: "Superior Grade Premium Quality Sweet Potato", img: pototo, description: "Superior-grade premium sweet potatoes, machine-graded and washed, ready for premium retail and export.", specs: { productNameGrade: "Sweet Potato / Superior Premium Grade", itemCode: "SP-004", grossWeight: "10.2 kg", netWeight: "10 kg", numberOfPackages: "1 carton", productColor: "Rose-Orange", productQuality: "Superior Premium Grade", quantity: "10 kg / carton", size: "250–400 g per tuber", packingDate: "As per harvest", shipperInfo: "Aruvanaa Exports, Tamil Nadu, India" } },
      ]},
    ],
  },
];

// ── component ─────────────────────────────────────────────────────────────────
export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const restored = (location.state as { restoreCategory?: Category } | null)?.restoreCategory ?? null;

  const [selected, setSelected] = useState<Category | null>(restored);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setActiveTab(0); }, [selected]);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [selected, activeTab]);

  const handleSelectCategory = (cat: Category) => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => { setSelected(cat); setAnimating(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, 350);
  };

  const handleBack = () => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => { setSelected(null); setAnimating(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, 350);
  };

  const handleProductClick = (cat: Category, sub: SubCategory, product: ProductItem) => {
    navigate("/product-category", { state: { category: cat, subCategory: sub, product } });
  };

  const gridTransition: React.CSSProperties = {
    transition: "opacity 0.35s ease, transform 0.35s ease",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
  };

  const activeSub = selected ? selected.subCategories[activeTab] : null;
  const isComingSoon = selected !== null && selected.subCategories.length === 0;

  return (
    <div>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div
        className="relative text-center overflow-hidden"
        style={{ backgroundImage: selected ? `url(${selected.img})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ background: selected ? "rgba(20,51,30,0.80)" : "rgb(20,51,30)", transition: "background 0.4s ease" }} />
        <div className="relative z-10 py-14 px-4">
          <div style={{ overflow: "hidden", maxHeight: selected ? "40px" : "0px", opacity: selected ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.3s ease", marginBottom: selected ? "12px" : "0" }}>
            <button onClick={handleBack} className="inline-flex items-center gap-2 text-[#CCDBD0] text-sm hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Commodities
            </button>
          </div>
          <h1 className="font-serif text-white mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            {selected ? selected.title : "Our Commodities"}
          </h1>
          <p className="text-[#CCDBD0] text-sm md:text-base mx-auto" style={{ maxWidth: "560px" }}>
            {selected ? selected.desc : "Fully licensed and certified across 10 major categories, providing an expansive portfolio of high-quality products."}
          </p>
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <div className="bg-gray-100 py-16 px-6 md:px-16">
        <div ref={gridRef} className="max-w-5xl mx-auto" style={gridTransition}>

          {!selected ? (
            /* All categories grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {CATEGORIES.map((item, index) => (
                <div key={index} onClick={() => handleSelectCategory(item)}
                  className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    <h3 className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">{item.title}</h3>
                    {/* coming soon badge on card */}
                    {item.subCategories.length === 0 && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <div className="p-3 flex items-start justify-between gap-2">
                    <p className="text-gray-600 text-xs leading-5">{item.desc}</p>
                    {item.subCategories.length > 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-green-700 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

          ) : isComingSoon ? (
            /* ── COMING SOON screen — no further navigation ── */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
              </div>
              <h2 className="font-serif text-green-900 text-2xl font-bold mb-2">Coming Soon</h2>
              <p className="text-gray-500 text-sm max-w-sm">
                We're currently expanding our <span className="font-medium text-green-800">{selected.title}</span> range.
                Our product catalogue for this category will be available shortly.
              </p>
              <p className="text-gray-400 text-xs mt-2">Please check back soon or contact us for availability.</p>
              <button
                onClick={handleBack}
                className="mt-8 inline-flex items-center gap-2 bg-green-900 text-white text-xs px-6 py-2.5 rounded-lg hover:bg-green-800 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Commodities
              </button>
            </div>

          ) : (
            /* Tab layout with products */
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.subCategories.map((sub, i) => (
                  <button key={i} onClick={() => setActiveTab(i)}
                    className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                    style={{
                      background: activeTab === i ? "#14532d" : "white",
                      color: activeTab === i ? "white" : "#374151",
                      boxShadow: activeTab === i ? "0 4px 12px rgba(20,83,45,0.3)" : "0 1px 4px rgba(0,0,0,0.08)",
                      transform: activeTab === i ? "scale(1.04)" : "scale(1)",
                    }}>
                    {sub.name}
                  </button>
                ))}
              </div>

              {activeSub && (
                <div key={activeTab} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" style={gridTransition}>
                  {activeSub.products.map((product, i) => (
                    <div key={i} onClick={() => handleProductClick(selected, activeSub, product)}
                      className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center p-4 text-center"
                      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.35s ease ${i * 55}ms, transform 0.35s ease ${i * 55}ms` }}>
                      <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 bg-gray-50">
                        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400" />
                      </div>
                      <p className="text-green-900 text-xs font-semibold leading-snug line-clamp-2">{product.name}</p>
                      <p className="mt-1 text-gray-400 text-[10px] leading-4 line-clamp-2">{product.description}</p>
                      <span className="mt-2 text-green-700 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View details →
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}