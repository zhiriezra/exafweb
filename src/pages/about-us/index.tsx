import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import OurImpact from "./our-impact";
import Teams from "./teams";

export default function About() {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <OurImpact />
      <Teams />
      <ContactSection />
      <Footer />
    </div>
  );
}
