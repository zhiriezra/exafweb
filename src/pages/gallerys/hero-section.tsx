import CustomAOS from "@/components/aos";
import { MainHeader } from "@/components/header";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="sm:flex relative">
      <MainHeader />

      {/* Main Content */}
      <div className="flex-1">
        <GalleryHero />
      </div>
    </div>
  );
}

const GalleryHero = () => {
  //   const scroll = useScroll();

  return (
    <div className="relative h-[50dvh]">
      <div
        style={{
          background: "linear-gradient(to right, #0E2207, transparent)",
        }}
        className="absolute top-0 right-0 h-full w-full z-10"
      />

      <Image
        src={"/hero-one.avif"}
        alt=""
        width={600}
        height={500}
        className="absolute h-[50dvh] w-full inset-0 object-cover bg-center"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center sm:justify-center max-sm:pt-5 text-white px-4">
        <div className="max-w-[500px] xl:ml-32 mt-25 sm:mr-auto">
          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Gallery
            </h1>
          </CustomAOS>

          {/* <CustomAOS variant="fadeInUp" duration={0.6} delay={0.2}>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              {`The services that we offer`}
            </p>
          </CustomAOS> */}
        </div>
      </div>
    </div>
  );
};
