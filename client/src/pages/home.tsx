import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Technology from "@/components/technology";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Technology />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
