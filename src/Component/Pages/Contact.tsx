import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from "../Layouts/Navbar";
import { Footer } from "../Layouts/Footer";

export default  function Contact () {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      
      <section className="bg-[#1a4d2e] py-20 px-4 text-center text-white">
        <h1 className="text-5xl font-serif mb-6">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Whether you're looking to source from India or distribute in the UAE, 
          we're here to facilitate your trade.
        </p>
      </section>

    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-10">
        
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-serif mb-8 text-[#0D2613] font-bold">Send an Inquiry</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 50 123 4567" 
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Company Name (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Global Traders LLC" 
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm">Message / Product Inquiry</label>
              <textarea 
                rows={5} 
                placeholder="Tell us what commodities you are looking for..." 
                className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-[#1a4d2e] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#143b23] transition-colors">
              Submit Inquiry <Send size={18} />
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">IN</div>
              <h3 className="text-2xl font-serif text-[#0D2613] font-bold">India Headquarters</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex gap-4">
                <MapPin className="text-[#1a4d2e] shrink-0" size={24} />
                <p><strong >ARUVANAA PRIVATE LIMITED</strong><br/>46/1A, Gandhiji Street,<br/>Kollampalayam, Erode-638002</p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-[#1a4d2e] shrink-0" size={20} />
                <p>+91 88616 50007</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#1a4d2e] shrink-0" size={20} />
                <p>info@aruvanaa.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">AE</div>
              <h3 className="text-2xl font-serif text-[#0D2613] font-bold">UAE Operations</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex gap-4">
                <MapPin className="text-[#1a4d2e] shrink-0" size={24} />
                <p><strong>ARUVANAA GLOBAL MERCATO</strong><br/>AL KHABEESI BLDG - Office No6,<br/>Al Khabeesi, Dubai - UAE</p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-[#1a4d2e] shrink-0" size={20} />
                <p>+971 588267177</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#1a4d2e] shrink-0" size={20} />
                <p>info@aruvanaa.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};