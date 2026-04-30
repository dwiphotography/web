import HeroSection from "@/components/section/heroSection";
import FolioSection from "@/components/section/folioSection";
import ServiceSection from "@/components/section/serviceSection";
import InclusionSection from "@/components/section/inclusionSection";
import MarketingSection from "@/components/section/marketingSection";
import InformationSection from "@/components/section/informationSection";
import { createFileRoute } from "@tanstack/react-router";
import { makeSeo } from "@/lib/SparkUtils";

export const Route = createFileRoute('/')({ 
  component: Home,
  head: () => makeSeo({
    title: "CV.DWIPHOTOGRAPHY",
    description: "Professional photography studio specializing in weddings, portraits, and commercial photography.",
    url: "https://www.dwiphotography.com/",
  })
})

function Home() {
  return (
    <>       
      <HeroSection />
      <FolioSection />
      <ServiceSection />
      <InclusionSection />
      <MarketingSection />
      <InformationSection />
    </>
  )
}
