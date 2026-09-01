import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesBanner from "@/components/FeaturesBanner";
import StaysSection from "@/components/StaysSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesBanner />
      <StaysSection />
    </main>
  );
}
