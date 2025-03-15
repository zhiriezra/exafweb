import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AutoScrollingPartners from "@/components/partner";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import TestimonialsSection from "./testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <AutoScrollingPartners />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
