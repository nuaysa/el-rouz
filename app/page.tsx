import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyUs />
      <Menu />
      <Contact />
      
      <Footer/>
    </div>
  );
}
