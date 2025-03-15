
import HeroSection from "./hero-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ProductsSection from "./products-section";
import DemoSection from "./demo-section";
// import Image from "next/image";
import Promotional from "./promotional";

export default function Products() {
  return (
    <div>
      <HeroSection />
      <Promotional />
      {/* <Image
        src="/banner.avif"
        alt="Extension Africa Platform"
        width={800}
        height={100}
        className="object-fit w-full"
        priority
        quality={100}
      /> */}
      <ProductsSection />
      <DemoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
