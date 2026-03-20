import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import { Footer } from "../Layouts/Footer";
import type { Category, SubCategory, ProductItem } from "./Product";

interface LocationState {
  category: Category;
  subCategory: SubCategory;
  product: ProductItem;
}

export default function ProductCategory() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(state?.product ?? null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [selectedProduct]);

  if (!state?.category || !state?.subCategory) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <p className="text-gray-500 mb-4">No product selected.</p>
            <button onClick={() => navigate("/products")}
              className="bg-green-800 text-white px-6 py-2 rounded-lg text-sm hover:bg-green-700 transition">
              Back to Commodities
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { category, subCategory } = state;
  const product = selectedProduct!;

  const goAllCommodities = () => navigate("/products", { state: null });
  const goBackToCategory = () => navigate("/products", { state: { restoreCategory: category } });

  const switchProduct = (p: ProductItem) => {
    setVisible(false);
    setTimeout(() => setSelectedProduct(p), 280);
  };

  const specs = product.specs;

  const specRows = specs ? [
    { label: "Product Name & Grade", value: specs.productNameGrade },
    { label: "Item Code", value: specs.itemCode },
    { label: "Gross Weight", value: specs.grossWeight },
    { label: "Net Weight", value: specs.netWeight },
    { label: "Number of Packages", value: specs.numberOfPackages },
    { label: "Product Color", value: specs.productColor },
    { label: "Product Quality", value: specs.productQuality },
    { label: "Quantity", value: specs.quantity },
    specs.size ? { label: "Size", value: specs.size } : null,
    specs.count ? { label: "Count", value: specs.count } : null,
    specs.weight ? { label: "Weight per Unit", value: specs.weight } : null,
    specs.cbm ? { label: "CBM", value: specs.cbm } : null,
    { label: "Packing Date", value: specs.packingDate },
    { label: "Shipper Information", value: specs.shipperInfo },
  ].filter(Boolean) as { label: string; value: string | undefined }[] : [];

  return (
    <div>
      <Navbar />

      {/* ── HERO BANNER ───────────────────────────────────────────────────── */}
      <div className="bg-green-900 px-6 md:px-16 py-10">
        {/* breadcrumb */}
        <div className="max-w-5xl mx-auto flex items-center flex-wrap gap-1.5 text-[#CCDBD0] text-xs mb-4">
          <button onClick={goAllCommodities} className="hover:text-white transition-colors">All Commodities</button>
          <span className="opacity-40">›</span>
          <button onClick={goBackToCategory} className="hover:text-white transition-colors">{category.title}</button>
          <span className="opacity-40">›</span>
          <span className="text-white font-medium">{subCategory.name}</span>
          <span className="opacity-40">›</span>
          <span className="text-green-300 font-medium truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div className="bg-gray-100 py-12 px-6 md:px-16">
        <div
          className="max-w-5xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          {/* ── PRODUCT DETAIL CARD ─────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Product Image — full width on top */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gray-50">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* category badge overlaid on image */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-green-700 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {subCategory.name} · {category.title}
                </span>
              </div>
              {/* item code badge */}
              {specs?.itemCode && (
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-green-900 text-[10px] font-bold px-3 py-1 rounded-full">
                    {specs.itemCode}
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6 md:p-8">
              {/* Name */}
              <h1 className="font-serif text-green-900 text-2xl md:text-3xl font-bold mb-4 leading-snug">
                {product.name}
              </h1>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-green-800 font-semibold text-sm uppercase tracking-wider mb-2">Description</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                {/* Extended description paragraphs */}
                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  Our {product.name.split("–")[0].trim()} is sourced directly from certified farms and processing units in India, 
                  ensuring the highest standards of freshness, hygiene and quality. Every batch undergoes rigorous quality checks 
                  before packing to meet international food safety requirements.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  We offer flexible packaging options to suit retail, wholesale and food service requirements. 
                  Our export-ready packing ensures product integrity throughout the supply chain, from warehouse 
                  to final destination. Custom branding and private-label options are available upon request.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  All our products comply with FSSAI, APEDA and relevant international food safety standards. 
                  We are committed to sustainable sourcing practices and work directly with farmers to ensure 
                  fair trade and consistent quality throughout the year.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-6" />

              {/* Specifications Table */}
              {specRows.length > 0 && (
                <div>
                  <h2 className="text-green-800 font-semibold text-sm uppercase tracking-wider mb-4">
                    Product Specifications
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <tbody>
                        {specRows.map((row, i) => (
                          row?.value && (
                            <tr
                              key={i}
                              className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                            >
                              <td className="py-3 px-4 font-semibold text-green-900 text-xs w-1/2 border-r border-gray-200">
                                {row.label}
                              </td>
                              <td className="py-3 px-4 text-gray-600 text-xs">
                                {row.value}
                              </td>
                            </tr>
                          )
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-gray-100 my-6" />

              {/* Shipper info footer */}
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-green-900 text-xs font-semibold mb-1">Shipper / Exporter</p>
                <p className="text-green-700 text-xs">{specs?.shipperInfo ?? "Aruvanaa Exports, Tamil Nadu, India"}</p>
                <p className="text-gray-400 text-[10px] mt-1">Part of the <span className="text-green-700 font-medium">{subCategory.name}</span> range under <span className="text-green-700 font-medium">{category.title}</span></p>
              </div>
            </div>
          </div>

          {/* ── OTHER PRODUCTS IN SAME SUB-CATEGORY ─────────────────────── */}
          {subCategory.products.filter(p => p.name !== product.name).length > 0 && (
            <div className="mt-10">
              <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
                Other products in {subCategory.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {subCategory.products
                  .filter(p => p.name !== product.name)
                  .map((p, i) => (
                    <div
                      key={p.name}
                      onClick={() => switchProduct(p)}
                      className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer flex flex-col items-center p-3 text-center"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(16px)",
                        transition: `opacity 0.38s ease ${i * 55}ms, transform 0.38s ease ${i * 55}ms`,
                      }}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden mb-2 bg-gray-50">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400" />
                      </div>
                      <p className="text-green-900 text-[11px] font-semibold leading-snug line-clamp-2">{p.name}</p>
                      <span className="mt-1 text-green-700 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View details →
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* ── BOTTOM NAV ──────────────────────────────────────────────── */}
          <div className="mt-10 flex gap-3 flex-wrap">
            <button
              onClick={goBackToCategory}
              className="inline-flex items-center gap-2 bg-green-900 text-white text-xs px-5 py-2.5 rounded-lg hover:bg-green-800 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to {category.title}
            </button>
            <button
              onClick={goAllCommodities}
              className="inline-flex items-center gap-2 border border-green-900 text-green-900 text-xs px-5 py-2.5 rounded-lg hover:bg-green-50 transition"
            >
              All Commodities
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}