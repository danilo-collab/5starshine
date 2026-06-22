import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileDetailing from "@/components/MobileDetailing";
import CeramicCoating from "@/components/CeramicCoating";
import Formula1051 from "@/components/Formula1051";
import BeforeAfterSection from "@/components/BeforeAfterSlider";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-white">
      <Header />
      <Hero />
      <MobileDetailing />
      <CeramicCoating />
      <Formula1051 />
      <BeforeAfterSection />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  );
}
