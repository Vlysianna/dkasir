

import HeroSmall from "../components/featurepage/Hero";
import FeatureList from "../components/featurepage/FeatureList";
import WebApp from "../components/featurepage/WebApp";
import CMSFeatureList from "../components/featurepage/CMSFeatureList";

const FeaturesPage = () => {
  return (
    <main className="min-h-screen w-full">
      <HeroSmall />
      <FeatureList />
      <WebApp />
      <CMSFeatureList />
    </main>
  );
};

export default FeaturesPage;