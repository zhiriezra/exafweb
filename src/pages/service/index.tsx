import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "./hero-section";
import FeaturesTabs from "./service-tabs";

export default function Service() {
  return (
    <div>
      <HeroSection />
      <FeaturesTabs />
      <ContactSection />
      <Footer />
    </div>
  );
}
