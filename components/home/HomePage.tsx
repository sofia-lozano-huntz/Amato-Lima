import IntroBrand from "../intro-brand";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SaoPauloSection from "./SaoPauloSection";
import FooterSection from "./FooterSection";

export default function HomePage() {
  return (
    <main>
      <IntroBrand />
      <HeroSection />
      <ProjectsSection />
      <SaoPauloSection />
      <FooterSection />
    </main>
  );
}
