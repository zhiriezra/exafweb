import CustomAOS from "@/components/aos";
import Header from "@/components/header";
import { routes } from "@/routes";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="sm:flex relative">
      <div className="sm:hidden">
        <Header />
      </div>
      <div className="absolute top-2 left-0 right-0 w-full px-5 z-50 max-sm:hidden">
        <header className="w-full py-4 max-md:px-4">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between">
            <CustomAOS variant="fadeInDown" duration={0.6}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Extension Africa"
                  width={200}
                  height={70}
                  className="h-[60px] w-auto"
                />
              </Link>
            </CustomAOS>

            <CustomAOS variant="fadeInDown" duration={0.6} delay={0.2}>
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-white font-bold hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href={routes.aboutUs}
                  className="text-white font-bold hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>

                <Link
                  href={routes.products}
                  className="text-white font-bold hover:text-yellow-400 transition-colors"
                >
                  Products
                </Link>
              </nav>
            </CustomAOS>
            <Link href={routes.findAgents}>
              <button className="bg-[#1F6306] flex gap-4 hover:bg-[#1F6306]/90 cursor-pointer text-white rounded-full px-6 py-3">
                Find an Agent{" "}
                <span className="ml-2 bg-yellow-400 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </Link>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <FirstCarousel />
      </div>
    </div>
  );
}

const FirstCarousel = () => {
  //   const scroll = useScroll();

  return (
    <div className="relative h-[40dvh]">
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
        className="absolute h-[40dvh] w-full inset-0 object-cover bg-center"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center sm:justify-center max-sm:pt-5 text-white px-4">
        <div className="max-w-[500px] xl:ml-32 mt-25 sm:mr-auto">
          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Our Products
            </h1>
          </CustomAOS>

          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.2}>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              {`A range of digital extension products to help you reach your goals.`}
            </p>
          </CustomAOS>
        </div>
      </div>
    </div>
  );
};
