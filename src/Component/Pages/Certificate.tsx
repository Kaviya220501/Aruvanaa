import React from "react";
import { ShieldCheck, BadgeCheck, FileText, CheckCircle } from "lucide-react";
import Navbar from "../Layouts/Navbar";
import { Footer } from "../Layouts/Footer";

type ComplianceItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const complianceData: ComplianceItem[] = [
  {
    id: 1,
    title: "FSSAI Certified",
    description: "Food Safety and Standards Authority of India",
    icon: <BadgeCheck className="w-6 h-6 text-green-700" />,
  },
  {
    id: 2,
    title: "Import Export Code",
    description:
      "IEC registered with the Directorate General of Foreign Trade",
    icon: <FileText className="w-6 h-6 text-green-700" />,
  },
  {
    id: 3,
    title: "UAE Municipality Reg.",
    description: "Food registration compliances met for UAE distribution",
    icon: <ShieldCheck className="w-6 h-6 text-green-700" />,
  },
  {
    id: 4,
    title: "Phytosanitary",
    description: "Plant health certificates for agricultural exports",
    icon: <CheckCircle className="w-6 h-6 text-green-700" />,
  },
];

export default function Certificate () {
  return (
    <div>
            <Navbar/>
    <section className="bg-[#f7f7f5] py-12 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-black">Trust & </span>
          <span className="text-yellow-600">Compliance</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          In international commodity trading, trust is built on compliance. We
          adhere to the strictest food safety and export regulations globally.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
       {complianceData.map((item) => (
  <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                {item.icon}
              </div>
            </div>
            <h3 className="text-center font-semibold text-lg">
              {item.title}
            </h3>
            <p className="text-center text-sm text-gray-500 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-5xl mx-auto bg-green-800 text-white rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-8 h-8 text-yellow-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold">
          Quality Guaranteed
        </h3>
        <p className="mt-4 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
          Every container that leaves our facilities is backed by rigorous
          testing and full documentation, ensuring you receive exactly what you
          ordered without customs delays.
        </p>
      </div>
    </section>
        <Footer/>
        </div>
  );
};
