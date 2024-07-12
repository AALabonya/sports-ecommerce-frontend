import Hero from "@/components/Hero";
import Categories from "../components/homePage/Categories";
import Collection from "../components/homePage/Collection";
import FeatureProduct from "../components/homePage/FeatureProduct";

import Contact from "./Contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Collection />
      <FeatureProduct />
      <Categories />
      <Contact />
    </div>
  );
}
