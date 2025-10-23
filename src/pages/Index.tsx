import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[72px]">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WhyChooseUs />
        <ResultsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
