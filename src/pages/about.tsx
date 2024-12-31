import AboutSection from "@/components/home/AboutSection";
import { AboutPageLayout } from "@/ui/layouts/about";
import artistData from "@/data/artist.json";

const AboutPage = () => {
  return (
    <AboutPageLayout title="About Me">
      <AboutSection artistInfo={artistData} />
    </AboutPageLayout>
  );
};
export default AboutPage;
