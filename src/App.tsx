import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Product from './Component/Pages/Product';
import Service from './Component/Pages/Service';
import Certificate from './Component/Pages/Certificate';
import Contact from './Component/Pages/Contact';


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Product" element={<Product/>} />
      <Route path="/Services" element={<Service />} />
      <Route path="certificate" element={<Certificate />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

 
