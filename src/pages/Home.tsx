import Hero from "@/components/Hero";
import Categories from "../components/homePage/Categories";
import Collection from "../components/homePage/Collection";
import FeatureProduct from "../components/homePage/FeatureProduct";

import Contact from "./Contact";
import AnotherSection from "@/components/homePage/AnotherSection";
import BestDeal from "@/components/homePage/CountDown";
import Faq from "@/components/homePage/Faq";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Categories />
      <Collection />
      <FeatureProduct />

      <Contact />
      <AnotherSection />
      <BestDeal />
      <Faq />
    </div>
  );
}
