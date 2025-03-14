import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AutoScrollingPartners from "@/components/partner";
import Image from "next/image";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <AutoScrollingPartners />
      <Image
        src="/banner.avif"
        alt="Extension Africa Platform"
        width={800}
        height={100}
        className="object-fit w-full"
        priority
        quality={100}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
