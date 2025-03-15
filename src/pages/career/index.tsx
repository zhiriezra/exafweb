import { Button } from "@/components/button";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { ArrowLeft, Link } from "lucide-react";
import HeroSection from "./hero-section";

export default function Career() {
  return (
    <div>
      <HeroSection />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center my-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            No Current Openings
          </h1>
          <p className="text-xl text-muted-foreground">
            Extension Africa currently does not have any openings available.
          </p>
          <p className="text-muted-foreground">
            Please check back later for future opportunities.
          </p>
          <div className="pt-4">
            <Link href="/" className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
}
