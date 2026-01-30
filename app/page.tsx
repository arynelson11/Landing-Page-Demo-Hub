import { Hero } from "@/components/sections/hero";
import { Demo } from "@/components/sections/demo";
import { Benefits } from "@/components/sections/benefits";
import { Pricing } from "@/components/sections/pricing";
import { Timeline } from "@/components/sections/timeline";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Demo />
      <Benefits />
      <Pricing />
      <Timeline />
      <FAQ />
      <Footer />
    </main>
  );
}
