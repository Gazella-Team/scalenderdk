import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/hero";
import ImageSlider from "@/components/ImageSlider";
import Results from "@/components/results";
import Testimonials from "@/components/testimonials";
import Services from "@/components/services";
import Packages from "@/components/packages";
import FAQ from "@/components/faq";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <section>
      <Hero />
      <ImageSlider />
      <Results />
      <Testimonials />
      <Services />
      <Packages />
      <FAQ />
      <Footer />
    </section>
  );
}
