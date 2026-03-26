import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Solutions from "@/components/Solutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Enquiry from "@/components/Enquiry";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Services />
      <WhyChooseUs />
      <Solutions />
      <Enquiry />
      <Contact />
      <Footer />
      <a
 href="https://wa.me/919632773141"
 target="_blank"
 className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
>
 WhatsApp
</a>
    </>
  );
}