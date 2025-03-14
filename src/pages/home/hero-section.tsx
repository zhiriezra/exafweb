import CustomAOS from "@/components/aos";
import Carousel from "@/components/custom-carousel";
import Header from "@/components/header";
import { routes } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <div className="sm:flex relative">
      {/* Sidebar */}
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
                  href="/"
                  className="text-white font-bold hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>

                <Link
                  href="/"
                  className="text-white font-bold hover:text-yellow-400 transition-colors"
                >
                  Products
                </Link>
              </nav>
            </CustomAOS>
            <Link href={routes.findAgents}>
              <button className="bg-[#1F6306] flex gap-4 hover:bg-[#1F6306]/90 cursor-pointer text-white rounded-full px-6 py-3">
                Find an Agent{" "}
                <span className="ml-2 bg-yellow-400 text-[#1F6306]/90 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </Link>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Carousel
          className={"sm:h-dvh max-sm:h-[70dvh]"}
          Sliders={[<FirstCarousel key={"1"} />, <SecondCarousel key={"2"} />]}
          Next={
            <div className="absolute z-20 hidden -right-8 sm:top-1/2 max-sm:bottom-5 duration-300 sm:-translate-y-1/2 border-[0.1px] border-white rounded-full max-sm:p-10 max-sm:hover:p-12 p-[60px] hover:p-20 text-white">
              <IoIosArrowRoundForward className="w-12 h-12" />
            </div>
          }
          Prev={
            <div className="absolute z-20 hidden -left-8 sm:top-1/2 max-sm:bottom-5 duration-300 sm:-translate-y-1/2 border-white border-[0.1px] rounded-full max-sm:p-10 max-sm:hover:p-12 p-[60px] hover:p-20 text-white">
              <IoIosArrowRoundBack className="w-12 h-12" />
            </div>
          }
        />
      </div>
    </div>
  );
}

const FirstCarousel = () => {
  //   const scroll = useScroll();

  return (
    <div className="relative h-dvh">
      <div
        style={{
          background: "linear-gradient(to right, #0E2207, transparent)",
        }}
        className="absolute top-0 right-0 h-full w-full z-10"
      />

      <Image
        src={"/hero-one.avif"}
        alt=""
        fill
        priority
        className="absolute inset-0 object-cover bg-center"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center sm:justify-center max-sm:pt-5 text-white px-4">
        <div className="max-w-[500px] xl:ml-32 sm:mr-auto">
          <CustomAOS variant="fadeInUp" duration={0.5}>
            <div className="inline-block px-4 py-1 border border-yellow-500 text-yellow-500 font-medium rounded-full text-sm mb-6">
              #1 Private extension service provider in Africa
            </div>
          </CustomAOS>

          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Your reliable
              <br />
              Gateway to
              <br />
              African Farmers
            </h1>
          </CustomAOS>

          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.2}>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              {`We're building the largest network of reliable Extension Agents
              for African farmers.`}
            </p>
          </CustomAOS>

          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={routes.findAgents}>
                <button className="bg-[#1F6306] flex gap-4 w-fit cursor-pointer hover:bg-[#1F6306]/90 text-white rounded-full px-6 py-4 text-base">
                  Find Farm Agents{" "}
                  <span className="ml-2 bg-yellow-400 text-[#1F6306]/90 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    →
                  </span>
                </button>
              </Link>

              <button
                // variant="outline"
                className="border flex gap-4 border-yellow-500 w-fit  text-yellow-500 hover:bg-yellow-500/10 rounded-full px-6 py-4  text-base"
              >
                See All Service{" "}
                <span className="ml-2 bg-yellow-400 text-[#1F6306]/90 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </div>
          </CustomAOS>
        </div>
      </div>
    </div>
  );
};
const SecondCarousel = () => {
  //   const scroll = useScroll();

  return (
    <div className="relative h-dvh">
      <div
        style={{
          background: "linear-gradient(to right, #0E2207, transparent)",
        }}
        className="absolute top-0 right-0 h-full w-full z-10"
      />

      <Image
        src={"/hero-two.avif"}
        alt=""
        fill
        priority
        className="absolute inset-0 object-cover bg-center"
      />
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center sm:justify-center max-sm:pt-5 text-white px-4">
        <div className="max-w-[500px] xl:ml-32 sm:mr-auto">
          <CustomAOS variant="fadeInUp" duration={0.5}>
            <div className="inline-block px-4 py-1 border border-yellow-500 text-yellow-500 font-medium rounded-full text-sm mb-6">
              #2 Take control of your last-mile operations
            </div>
          </CustomAOS>

          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Unlocking Rural
              <br />
              Economies
            </h1>
          </CustomAOS>

          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.2}>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              {`  We're building the largest network of reliable Extension Agents
              for African farmers.`}
            </p>
          </CustomAOS>

          <CustomAOS variant="fadeInUp" duration={0.6} delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={routes.findAgents}>
                <button className="bg-[#1F6306] w-fit flex gap-4 cursor-pointer hover:bg-[#1F6306]/90 text-white rounded-full px-6 py-4 text-base">
                  Find Farm Agents{" "}
                  <span className="ml-2 bg-yellow-400 text-[#1F6306]/90 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    →
                  </span>
                </button>
              </Link>
              <button
                // variant="outline"
                className="border flex gap-4 w-fit  border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-full px-6 py-4  text-base"
              >
                See All Service{" "}
                <span className="ml-2 bg-yellow-400 text-[#1F6306]/90 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </div>
          </CustomAOS>
        </div>
      </div>
    </div>
  );
};
