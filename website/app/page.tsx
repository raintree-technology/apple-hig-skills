import AgentSkills from "@/components/AgentSkills";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Install from "@/components/Install";
import MoreFromRaintree from "@/components/MoreFromRaintree";
import Skills from "@/components/Skills";
import UseCases from "@/components/UseCases";
import { Separator } from "@/components/ui/separator";

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Separator className="opacity-50" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="photo-bg min-h-screen">
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <SectionDivider />
        <UseCases />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Install />
        <SectionDivider />
        <AgentSkills />
        <SectionDivider />
        <MoreFromRaintree />
      </main>
      <Footer />
    </div>
  );
}
