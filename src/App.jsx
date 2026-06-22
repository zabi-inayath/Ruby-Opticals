import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Optometrist from "./components/Optometrist";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Brands />
      <Optometrist />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
