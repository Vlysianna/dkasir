

import HeroSmall from "./featurepage/HeroSmall";
import FeatureList from "./featurepage/FeatureList";
import WebApp from "./featurepage/WebApp";
import CTASection from "./featurepage/CTASection";

const FeaturesPage = () => {
  return (
    <main className="min-h-screen w-full">
      <HeroSmall />
      <FeatureList />
      <WebApp />
      <CTASection />
    </main>
  );
};

export default FeaturesPage;