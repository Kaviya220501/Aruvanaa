import { Footer } from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

export default function Home () {
  return (
       <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
      </div>

      <Footer />
    </div>

  )
}

