import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Audience from "@/components/Audience";
import HowItWorks from "@/components/HowItWorks";
import Skills from "@/components/Skills";
import AgentSkills from "@/components/AgentSkills";
import Install from "@/components/Install";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="photo-bg min-h-screen">
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <UseCases />
        <Audience />
        <HowItWorks />
        <Skills />
        <AgentSkills />
        <Install />
      </main>
      <Footer />
    </div>
  );
}
