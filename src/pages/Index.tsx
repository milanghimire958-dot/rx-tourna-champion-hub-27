import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VerificationSection } from "@/components/VerificationSection";
import { SocialSection } from "@/components/SocialSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VerificationSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;