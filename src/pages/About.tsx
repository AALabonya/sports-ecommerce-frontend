import { NavLink } from "react-router-dom";
import Map from "../components/aboutPage/Map";
import Story from "../components/aboutPage/Story";
import OurTeam from "../components/aboutPage/OurTeam";
import Mission_Vission from "../components/aboutPage/Mission_Vission";

export default function About() {
  return (
    <>
      <div className="">
        <div className="bg-cover bg-about-us bg-center">
          <div className=" md:max-w-screen-2xl mx-auto p-24 justify-center">
            <h2 className="lg:text-6xl font-bold text-white/90 font-serif text-center">
              About
            </h2>
            <div className="mt-2 text-center">
              <NavLink
                to="/"
                className=" relative font-medium text-base text-white/90 mx-3"
              >
                Home /
              </NavLink>
              <NavLink
                to="/"
                className="relative font-medium text-base text-white/90"
              >
                About Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Story />
      <Mission_Vission />
      <OurTeam />
      <Map />
    </>
  );
}
