import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "./hero-section";

export default function Gallery() {
  return (
    <div>
      <HeroSection />
      <main className="flex flex-col items-center justify-center p-4 text-center my-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground">
            We're working hard to bring you something amazing. Stay tuned for
            updates.
          </p>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
}
